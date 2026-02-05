# Application Specification

## Technology Stack

### Core
- **Framework:** React 18+
- **Build Tool:** Vite
- **Language:** JavaScript (or TypeScript if preferred)
- **Styling:** Tailwind CSS

### Libraries & Tools
- **Routing:** React Router v6
- **State Management:** React Context API
- **Data Persistence:** localStorage API
- **Package Manager:** npm

## Architecture

### Application Structure
```
southside-pie-shop/
├── public/
├── src/
│   └── frontend/
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Header.jsx
│       │   │   ├── Footer.jsx
│       │   │   └── Layout.jsx
│       │   ├── home/
│       │   │   ├── PieCard.jsx
│       │   │   └── PieGrid.jsx
│       │   ├── cart/
│       │   │   ├── CartItem.jsx
│       │   │   └── CartSummary.jsx
│       │   └── checkout/
│       │       ├── CheckoutForm.jsx
│       │       └── OrderConfirmation.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── About.jsx
│       │   ├── Cart.jsx
│       │   └── Checkout.jsx
│       ├── context/
│       │   └── CartContext.jsx
│       ├── data/
│       │   └── pies.json
│       ├── assets/
│       │   └── images/
│       │       └── pies/
│       │           └── [all pie images]
│       ├── utils/
│       │   └── cartStorage.js
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Routing Structure

```
/ (Home)
  └─ Browse all pies

/about
  └─ Learn about Southside Pie Shop

/cart
  └─ View shopping cart
  
/checkout
  └─ Complete purchase
      └─ /confirmation (nested or separate route for order confirmation)
```

## State Management

### Cart Context
**Provider:** `CartContext`
**Location:** `src/context/CartContext.jsx`

**State:**
- `cartItems`: Array of cart items
- `cartCount`: Total number of items in cart
- `cartTotal`: Calculated total price

**Actions:**
- `addToCart(pie)`: Add item to cart
- `removeFromCart(pieId)`: Remove item completely
- `updateQuantity(pieId, quantity)`: Update item quantity
- `clearCart()`: Empty cart
- `getCartTotal()`: Calculate total price
- `getCartCount()`: Calculate total items

**Persistence:**
- Automatically save to localStorage on state changes
- Load from localStorage on mount
- Storage key: `southsidePieShop_cart`

## Data Models

### Pie
```javascript
{
  id: number|string,          // Index or generated ID
  name: string,               // "Sunshine & Joy. Lemon Meringue"
  price: string,              // "$46.00" or "from $46.00"
  imageFilename: string       // "sunshine-lemon-cloud.jpeg"
}
```

### Cart Item
```javascript
{
  pieId: number|string,       // Reference to pie
  name: string,               // Pie name
  price: string,              // Pie price
  quantity: number,           // Quantity in cart
  imageFilename: string       // For display in cart
}
```

### Order (for confirmation display)
```javascript
{
  orderId: string,            // Generated confirmation number
  items: CartItem[],          // Array of cart items
  total: string,              // Calculated total
  customerInfo: {
    name: string,
    email: string,
    phone: string,
    address: {
      street: string,
      city: string,
      state: string,
      zip: string
    }
  },
  timestamp: Date
}
```

## Styling Approach

### Tailwind Configuration
- **Color Palette:** Warm, rustic colors
  - Primary: Muted reds/browns
  - Secondary: Creams/beiges
  - Accent: Darker browns
- **Typography:** Comfortable, readable fonts
- **Responsive Breakpoints:** Default Tailwind breakpoints

### Design Tokens
- Consistent spacing scale
- Border radius for cards and buttons
- Shadow utilities for depth
- Hover states for interactive elements

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- localStorage support required

## Performance Considerations
- Lazy load images
- Optimize image sizes
- Minimize bundle size
- Fast initial page load

## Accessibility
- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Alt text for all images
- Sufficient color contrast
- Focus indicators

## Error Handling
- Graceful handling of missing images
- localStorage quota exceeded handling
- Malformed localStorage data handling
- Form validation error messages
- Empty states (cart, etc.)
