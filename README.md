# Southside Pie Shop

A demo e-commerce website for a traditional pie shop, built with React and Vite.

![React](https://img.shields.io/badge/React-18+-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-teal)

## Overview

Southside Pie Shop is a fictional pie shop located in Shartlesville, PA. This web application showcases a complete e-commerce experience including:

- 🥧 **Browse Pies** - View all 16 delicious pies with images and prices
- 🛒 **Shopping Cart** - Add, update quantities, and remove items
- 💾 **Persistent Cart** - Cart saves to localStorage across browser sessions
- 📝 **Checkout Flow** - Complete checkout form with validation
- ✅ **Order Confirmation** - Confirmation page with order summary
- 📖 **About Page** - Fictitious story of the pie shop

## Technology Stack

- **Framework:** React 18+
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Routing:** React Router 6
- **State Management:** React Context API
- **Data Persistence:** localStorage

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd MyPieShop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
MyPieShop/
├── public/                  # Static assets
├── src/
│   └── frontend/
│       ├── components/
│       │   ├── layout/      # Header, Footer, Layout
│       │   ├── home/        # PieCard, PieGrid
│       │   ├── cart/        # CartItem, CartSummary
│       │   └── checkout/    # CheckoutForm, OrderConfirmation
│       ├── pages/           # Home, About, Cart, Checkout
│       ├── context/         # CartContext (global state)
│       ├── data/            # pies.json (pie catalog)
│       ├── assets/images/   # Pie images
│       ├── utils/           # cartStorage helpers
│       ├── App.jsx          # Main app with routing
│       ├── main.jsx         # Entry point
│       └── index.css        # Global styles + Tailwind
├── .prompts/                # Project specifications
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features

### Home Page
- Grid display of all 16 pies
- Each pie shows image, name, and price
- "Add to Cart" button with visual feedback
- Responsive grid layout (1-4 columns based on screen size)

### Shopping Cart
- View all items in cart
- Adjust quantities with +/- buttons
- Remove items completely
- Real-time total calculation
- Empty cart state with call-to-action
- Persists across browser sessions

### Checkout
- Contact information form
- Delivery address fields
- Payment information (demo only)
- Client-side validation (all fields required)
- Order confirmation with unique confirmation number

### About Page
- Fictitious origin story (founded 1987)
- Location: Shartlesville, PA
- Information about pie classes
- Family legacy story

## Demo Limitations

This is a **demo application**:

- ❌ No real payment processing
- ❌ No backend API or database
- ❌ No user authentication
- ❌ No order history
- ❌ No real-time inventory management

Cart data is stored in localStorage only.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Requires localStorage support.

## License

This project is for demonstration purposes only.

---

*Southside Pie Shop is a fictional business. All content is made up for demonstration purposes.*
