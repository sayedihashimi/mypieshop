# Southside Pie Shop Website

**Created:** 2026-02-05  
**Status:** Planned  
**Type:** New Feature

## Overview

A complete React-based e-commerce website for Southside Pie Shop, a traditional pie shop located in Shartlesville, PA. The website showcases their pie selection with full shopping cart functionality and a streamlined checkout experience.

## Scope

### In Scope
- Home page displaying all available pies with prices and purchase functionality
- Shopping cart with persistence across browser sessions
- About page with fictitious shop history and story
- Complete checkout flow with contact and payment information collection
- Rustic/homey design aesthetic matching a traditional pie shop
- Header and footer with specified branding content

### Out of Scope
- Real payment processing (demo only)
- User authentication/accounts
- Order management/tracking
- Admin panel
- Real-time inventory management
- Backend API integration

## Technical Stack

- **Framework:** React with Vite
- **Styling:** Tailwind CSS
- **State Management:** React Context API + localStorage for cart persistence
- **Data Source:** JSON file with pie information

## User Flows

### 1. Browse & Purchase Flow
1. User lands on home page
2. Views grid/list of all available pies with images, names, and prices
3. Clicks "Add to Cart" on desired pies
4. Can view cart summary in header/navigation
5. Navigates to cart page to review items
6. Proceeds to checkout
7. Fills in contact and payment information
8. Submits order
9. Views order confirmation

### 2. Learn About Shop Flow
1. User navigates to About page
2. Reads fictitious history and story of Southside Pie Shop
3. Learns about location in Shartlesville, PA

## Pages & Components

### Home Page
- **Purpose:** Main landing page showcasing all available pies
- **Layout:** Grid layout of pie cards
- **Pie Card Components:**
  - Pie image
  - Pie name
  - Price
  - "Add to Cart" button
- **Data Source:** `src/frontend/data/pies.json` (moved from `src/images/pies.json`)
- **Behavior:**
  - Display all 16 pies from the JSON file
  - Clicking "Add to Cart" adds pie to shopping cart
  - Visual feedback when item added (e.g., brief animation, notification)
  - Cart icon in header updates with item count

### About Page
- **Purpose:** Tell the story of Southside Pie Shop
- **Content (Fictitious):**
  - Shop history and founding story
  - Location: Shartlesville, PA
  - Mission/values related to traditional pie-making
  - Any fun details about the shop, community involvement, etc.
- **Tone:** Warm, homey, authentic
- **Style:** Matches rustic/traditional aesthetic

### Shopping Cart Page
- **Purpose:** Review cart contents before checkout
- **Display:**
  - List of items in cart
  - Each item shows: image thumbnail, name, price, quantity controls
  - Subtotal for each line item
  - Total price at bottom
- **Actions:**
  - Adjust quantity (increase/decrease)
  - Remove items
  - "Continue Shopping" button (returns to home)
  - "Proceed to Checkout" button
- **Empty State:** Message when cart is empty with link back to home page

### Checkout Page
- **Purpose:** Collect customer information and payment details
- **Form Fields:**
  - **Contact Information:**
    - Full Name (required)
    - Email (required)
    - Phone (required)
    - Delivery Address fields (Street, City, State, ZIP) (required)
  - **Payment Information:**
    - Card Number (required)
    - Expiration Date (required)
    - CVV (required)
    - Billing ZIP Code (required)
- **Validation:**
  - Simple client-side validation: all fields must be filled in
  - No actual payment processing
  - No card number format validation (demo only)
- **Submit Action:**
  - On successful validation, show order confirmation
  - Clear cart
  - Display order submitted message/page

### Order Confirmation
- **Purpose:** Confirm successful order submission
- **Content:**
  - "Order Submitted" message
  - Order summary (items purchased, total)
  - Confirmation number (can be randomly generated)
  - Thank you message
  - Link back to home page

## Layout & Navigation

### Header
- **Content:** "FRESH PIES + PIE CLASSES — LIMITED AVAILABILITY →"
- **Navigation Links:**
  - Home
  - About
  - Cart (with item count badge)
- **Style:** Rustic, traditional aesthetic
- **Cart Icon:** Always visible with count of items

### Footer
- **Content:** "(c) Southside Pie Shop"
- **Style:** Simple, matches overall rustic theme
- **Optional additions:** Social media placeholders (not functional)

## Design Guidelines

### Visual Style
- **Theme:** Modern and clean
- **Color Palette:** Fresh, contemporary colors (whites, light grays, accent colors like teal or coral)
- **Typography:** Clean, modern sans-serif fonts
- **Images:** High-quality pie photos (existing images in `src/images/`)
- **Layout:** Minimal, spacious, easy navigation
- **Responsive:** Mobile-friendly design

### User Experience
- Clear, obvious navigation
- Fast, responsive interactions
- Immediate feedback for user actions (add to cart, form errors)
- Accessible (proper semantic HTML, alt text for images)

## Data Structure

### Pie Data (pies.json)
Current structure (16 pies):
```json
{
  "name": "String",
  "price": "String (format: $XX.XX or from $XX.XX)",
  "imageFilename": "String"
}
```

**Location:** Move from `src/images/pies.json` to `src/frontend/data/pies.json`  
**Images:** Move to `src/frontend/assets/images/pies/`

### Cart Data Structure (localStorage)
```json
{
  "items": [
    {
      "pieId": "index or unique identifier",
      "name": "String",
      "price": "String",
      "quantity": "Number",
      "imageFilename": "String"
    }
  ]
}
```

## State Management

### Shopping Cart State
- **Implementation:** React Context API
- **Persistence:** localStorage
- **Key Operations:**
  - Add item to cart
  - Remove item from cart
  - Update item quantity
  - Clear cart
  - Calculate total
  - Get cart item count
- **Persistence Strategy:**
  - Save to localStorage on every cart modification
  - Load from localStorage on app initialization
  - Handle edge cases (malformed data, storage limits)

## Acceptance Criteria

### Home Page
- [ ] All 16 pies display correctly with image, name, and price
- [ ] Images load properly from correct location
- [ ] "Add to Cart" button works for each pie
- [ ] Adding an item shows visual feedback
- [ ] Header shows updated cart count after adding items
- [ ] Page is responsive on mobile and desktop

### About Page
- [ ] Displays compelling fictitious content about Southside Pie Shop
- [ ] Mentions location: Shartlesville, PA
- [ ] Content matches rustic/traditional tone
- [ ] Page is visually consistent with rest of site

### Shopping Cart
- [ ] Displays all items added to cart
- [ ] Shows correct quantities and prices
- [ ] Allows quantity adjustment (increase/decrease)
- [ ] Allows item removal
- [ ] Calculates and displays correct total
- [ ] Shows empty state when cart is empty
- [ ] "Proceed to Checkout" button navigates to checkout
- [ ] Cart persists when browser is closed and reopened

### Checkout Flow
- [ ] Form displays all required fields
- [ ] Validation prevents submission with empty fields
- [ ] Validation shows helpful error messages
- [ ] Successful submission shows order confirmation
- [ ] Cart is cleared after successful submission
- [ ] Order confirmation displays order summary and confirmation number

### Layout & Navigation
- [ ] Header displays: "FRESH PIES + PIE CLASSES — LIMITED AVAILABILITY →"
- [ ] Footer displays: "(c) Southside Pie Shop"
- [ ] Navigation links work correctly
- [ ] Cart icon shows accurate item count
- [ ] Design feels rustic/homey/traditional
- [ ] Site is fully responsive

### Technical Requirements
- [ ] Built with React + Vite
- [ ] Styled with Tailwind CSS
- [ ] Cart state persists across browser sessions (localStorage)
- [ ] No console errors
- [ ] Clean, maintainable code structure

## Implementation Recommendations

### Project Structure
```
src/
  frontend/
    components/
      layout/
        Header.jsx
        Footer.jsx
        Layout.jsx
      home/
        PieCard.jsx
        PieGrid.jsx
      cart/
        CartItem.jsx
        CartSummary.jsx
      checkout/
        CheckoutForm.jsx
        OrderConfirmation.jsx
    pages/
      Home.jsx
      About.jsx
      Cart.jsx
      Checkout.jsx
    context/
      CartContext.jsx
    data/
      pies.json (moved from src/images/)
    assets/
      images/
        pies/
          [all pie images]
    utils/
      cartStorage.js (localStorage helpers)
```

### Key Technical Decisions
1. **Routing:** Use React Router for navigation
2. **Cart Context:** Global context provider wrapping entire app
3. **localStorage Key:** Use descriptive key like "southsidePieShop_cart"
4. **Price Parsing:** Handle both "$XX.XX" and "from $XX.XX" formats
5. **Image Imports:** Use Vite's asset handling for images
6. **Form Validation:** Simple client-side validation, library optional (or use browser native)

### Development Phases
1. **Phase 1:** Project setup (Vite + React + Tailwind + React Router)
2. **Phase 2:** Layout components (Header, Footer, Navigation)
3. **Phase 3:** Home page with pie display
4. **Phase 4:** Cart context and localStorage integration
5. **Phase 5:** Shopping cart page
6. **Phase 6:** Checkout flow
7. **Phase 7:** About page content
8. **Phase 8:** Styling and responsive design refinement
9. **Phase 9:** Testing and polish

## Open Questions / Future Considerations

None at this time. All requirements are clearly defined.

## Notes

- This is a demo application; payment processing is simulated
- All content about Southside Pie Shop is fictitious
- Focus on user experience and visual appeal over complex functionality
- Code should be clean and well-organized for potential future expansion
