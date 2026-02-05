# Pie Generator

This tool scrapes pie data from Mixed Fillings Pie Shop and generates AI images for each pie.

## Prerequisites

- Node.js 18+
- Azure OpenAI access with DALL-E deployment (optional for image generation)

## Installation

```bash
cd tools/pies
npm install
npx playwright install chromium
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PIE_SHOP_URL` | Base URL of the pie shop website | `https://www.mixedfillingspieshop.com` |

```bash
export PIE_SHOP_URL="https://www.mixedfillingspieshop.com"
```

## Usage

```bash
node generate-pies.js
```

## Output

- `pies.json` - Array of pie objects with name, price, and imageFilename
- `images/` - Generated pie images (one per pie)

## JSON Schema

```json
[
  {
    "name": "Apple Pie",
    "price": "$42.00",
    "imageFilename": "apple-pie.png"
  }
]
```
