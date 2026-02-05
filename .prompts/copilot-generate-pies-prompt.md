You are Copilot acting as an automation agent in my repo. Implement a one-command workflow that:

1) Scrapes {PIE_SHOP_URL}/pies
2) Extracts all pie “cards” (name + price + image)
3) For EACH pie, generates a brand-new *similar-looking* pie image (do NOT reuse or transform the original image pixels) and saves it to disk using the pie name as the base filename
4) Writes a JSON file with an array of pies containing: { name, price, imageFilename }

Important notes:
- The page is Squarespace and content may be dynamic; use a real browser scraper (Playwright) rather than a simple HTTP regex.
- “Same name as the pie” must be made filesystem-safe. Use the exact display name for `name`, but sanitize for filenames (replace illegal characters with `-`, collapse whitespace, trim). Keep “&” as “and” or “-and-” in filenames.
- Prices should be captured exactly as displayed (e.g. "$46.00", "from $42.00"). Store it as a string in JSON (no numeric conversion).
- Only include actual pie products. Exclude obvious non-pie items like “Gift Card”.

Deliverables:
- tools/pies/generate-pies.js
- tools/pies/pies.json
- tools/pies/images/
- tools/pies/README.md

Acceptance criteria:
- Running the script produces pies.json and one generated image per pie.
- No original website images are copied into the repo.
