# Data Specification

## Pie Data

### Source File
**Location:** `src/frontend/data/pies.json` (moved from `src/images/pies.json`)

### Structure
Array of 16 pie objects:

```json
[
  {
    "name": "Sunshine & Joy. Lemon Meringue",
    "price": "$46.00",
    "imageFilename": "sunshine-lemon-cloud.jpeg"
  },
  {
    "name": "Midnight Chocolate Bottom",
    "price": "$46.00",
    "imageFilename": "chocolate-lime-twist.png"
  }
  // ... 14 more pies
]
```

### Complete Pie List
1. Sunshine & Joy. Lemon Meringue - $46.00
2. Midnight Chocolate Bottom - $46.00
3. Midnight Chocolate Bottom Gluten Free - $48.00
4. The Grand Tasting Flight - $44.00
5. Sweet Escape Pie Flight - $26.00
6. Caramel Crackle Custard - $40.00
7. Heritage Buttermilk Pie - $42.00
8. Citrus Grove Key Lime Pie - $46.00
9. Garden Goat Cheese Quiche - $44.00
10. Autumn Maple Pecan - $44.00
11. Comfort Kitchen Pot Pie - $46.00
12. Molten Midnight Chocolate Pie - $42.00
13. Cookie Crumble Dream Pie - from $42.00
14. Morning Harvest Quiche - $44.00
15. Nutty Butter Bliss - from $44.00
16. Tropical Breeze Coconut Cream Pie - $44.00

### Image Files
**Location:** `src/frontend/assets/images/pies/` (moved from `src/images/`)

**File Types:** 
- .jpeg
- .jpg
- .png

**Required Images:**
- sunshine-lemon-cloud.jpeg
- chocolate-lime-twist.png
- chocolate-lime-twist-gf.jpeg
- grand-tasting-sampler.jpg
- sampler-trio-collection.jpg
- caramelized-custard-delight.jpeg
- southern-buttermilk-classic.jpg
- tangy-citrus-dream.jpg
- goat-cheese-veggie-tart.jpeg
- maple-pecan-bliss.jpeg
- hearty-comfort-classic.jpg
- molten-chocolate-heaven.jpg
- cookie-crumble-fantasy.jpeg
- garden-vegetable-quiche.jpg
- nutty-chocolate-indulgence.jpg
- tropical-coconut-paradise.jpg

## Cart Data (localStorage)

### Storage Key
`southsidePieShop_cart`

### Structure
```json
{
  "items": [
    {
      "pieId": "0",
      "name": "Sunshine & Joy. Lemon Meringue",
      "price": "$46.00",
      "quantity": 2,
      "imageFilename": "sunshine-lemon-cloud.jpeg"
    }
  ]
}
```

### localStorage Operations
- **Read:** `JSON.parse(localStorage.getItem('southsidePieShop_cart'))`
- **Write:** `localStorage.setItem('southsidePieShop_cart', JSON.stringify(cartData))`
- **Clear:** `localStorage.removeItem('southsidePieShop_cart')`

### Data Validation
When loading from localStorage:
- Check if data exists
- Validate JSON structure
- Handle parsing errors
- Verify item structure
- Default to empty cart if invalid

## About Page Content (Fictitious)

### Location
Shartlesville, PA

### Content Requirements
Generate compelling fictitious content including:
- **Origin Story:** When and how the shop was founded
- **Mission:** What drives Southside Pie Shop
- **Location:** Connection to Shartlesville, PA community
- **Craft:** Traditional pie-making techniques and values
- **Offerings:** Brief mention of pies and pie classes
- **Tone:** Warm, authentic, homey

### Example Content Structure
```markdown
## Our Story
[Origin and founding story]

## Our Mission
[What makes us special]

## Our Location
[Why Shartlesville, community connections]

## Our Craft
[Traditional techniques, quality ingredients]
```

## Price Handling

### Price Formats
- Standard: `"$46.00"` (most pies)
- Variable: `"from $42.00"` (2 pies: Cookie Crumble Dream Pie, Nutty Butter Bliss)

### Price Parsing
For calculations, extract numeric value:
```javascript
const parsePrice = (priceString) => {
  const match = priceString.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
};
```

### Display
- Show price as-is from JSON on product cards
- Calculate totals using parsed numeric values
- Format totals as currency: `$XX.XX`

## Order Confirmation Data

### Confirmation Number Generation
Generate random confirmation number:
```javascript
const generateConfirmationNumber = () => {
  return `SS-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
};
```

Format: `SS-1675889234567-ABC123XYZ`

### Order Summary
Display on confirmation page:
- Order confirmation number
- Order date/time
- Customer name
- Delivery address
- Items ordered (name, quantity, price)
- Order total
