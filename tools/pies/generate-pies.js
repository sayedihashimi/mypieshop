const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = process.env.PIE_SHOP_URL;
const PIES_URL = `${BASE_URL}/pies`;
const PIES_JSON_URL = `${BASE_URL}/pies?format=json`;
const OUTPUT_DIR = __dirname;
const IMAGES_DIR = path.join(OUTPUT_DIR, 'images');

// Sanitize pie name for filesystem-safe filename
function sanitizeFilename(name) {
    return name
        .replace(/&/g, '-and-')
        .replace(/[<>:"/\\|?*]/g, '-')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .toLowerCase();
}

// Download source image from the website
async function downloadSourceImage(imageUrl, filename) {
    if (!imageUrl) {
        console.log(`  No image URL available for ${filename}`);
        return;
    }
    
    const filepath = path.join(IMAGES_DIR, filename);
    console.log(`  Downloading: ${imageUrl}`);
    
    try {
        await downloadImage(imageUrl, filepath);
        console.log(`  Saved: ${filename}`);
    } catch (err) {
        console.log(`  Failed to download: ${err.message}`);
    }
}

// Download an image from URL
function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const protocol = urlObj.protocol === 'https:' ? https : require('http');
        
        protocol.get(url, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
                return;
            }
            
            const fileStream = fs.createWriteStream(filepath);
            res.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                resolve();
            });
            fileStream.on('error', reject);
        }).on('error', reject);
    });
}

// Format price from variants
function formatPrice(item) {
    const variants = item.structuredContent?.variants || item.variants || [];
    if (variants.length === 0) return '';
    
    const prices = variants
        .map(v => v.priceMoney?.value)
        .filter(p => p && p !== '0.00')
        .map(p => parseFloat(p));
    
    if (prices.length === 0) return '';
    
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    
    if (minPrice === maxPrice) {
        return `$${minPrice.toFixed(2)}`;
    }
    return `from $${minPrice.toFixed(2)}`;
}

async function scrapePies() {
    console.log('Launching browser...');
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    console.log(`Fetching pie data from ${PIES_JSON_URL}...`);
    await page.goto(PIES_JSON_URL, { waitUntil: 'load', timeout: 60000 });
    
    const content = await page.evaluate(() => document.body.innerText);
    await browser.close();
    
    const data = JSON.parse(content);
    const items = data.items || [];
    console.log(`Found ${items.length} items in JSON data`);
    
    const pies = items
        .filter(item => {
            const name = item.title || '';
            // Skip non-pie items (gift cards, etc.)
            if (name.toLowerCase().includes('gift card')) return false;
            // Only include actual products (recordType 11 is store item)
            if (item.recordType !== 11) return false;
            return true;
        })
        .map(item => {
            // Get first image URL from item
            const images = item.structuredContent?.items || item.items || [];
            const firstImage = images.find(img => img.assetUrl);
            const imageUrl = firstImage?.assetUrl || item.assetUrl || '';
            
            return {
                name: item.title,
                price: formatPrice(item),
                sourceImageUrl: imageUrl
            };
        });
    
    return pies;
}

async function main() {
    // Ensure images directory exists
    if (!fs.existsSync(IMAGES_DIR)) {
        fs.mkdirSync(IMAGES_DIR, { recursive: true });
    }

    try {
        const pies = await scrapePies();
        console.log(`Found ${pies.length} pies`);

        const piesWithImages = [];

        for (const pie of pies) {
            const sanitizedName = sanitizeFilename(pie.name);
            // Determine file extension from URL or default to .jpg
            const urlExt = pie.sourceImageUrl?.match(/\.(\w+)$/)?.[1]?.toLowerCase() || 'jpg';
            const ext = ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(urlExt) ? urlExt : 'jpg';
            const imageFilename = `${sanitizedName}.${ext}`;
            
            console.log(`Processing: ${pie.name}`);
            await downloadSourceImage(pie.sourceImageUrl, imageFilename);

            piesWithImages.push({
                name: pie.name,
                price: pie.price,
                imageFilename: imageFilename
            });
        }

        // Write JSON file
        const jsonPath = path.join(OUTPUT_DIR, 'pies.json');
        fs.writeFileSync(jsonPath, JSON.stringify(piesWithImages, null, 2));
        console.log(`\nWrote ${piesWithImages.length} pies to pies.json`);
        console.log('Done!');

    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

main();
