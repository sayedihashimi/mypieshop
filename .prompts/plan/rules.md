# Project Rules & Constraints

## Development Rules

### Code Quality
- Use functional components with hooks (no class components)
- Implement proper prop validation (PropTypes or TypeScript)
- Keep components small and focused (single responsibility)
- Extract reusable logic into custom hooks when appropriate
- Use meaningful variable and function names
- Add comments only for complex logic

### File Organization
- One component per file
- Co-locate related components in feature folders
- Keep utils and helpers in dedicated folders
- Import order: React → third-party → local components → utils → styles

### State Management
- Use Context API for global state (cart)
- Use local state (useState) for component-specific state
- Avoid prop drilling (use Context when passing data through 3+ levels)
- Keep state as close to where it's used as possible

### Styling
- Use Tailwind utility classes
- Create custom classes in index.css only when necessary
- Follow mobile-first responsive design
- Maintain consistent spacing and sizing
- Use Tailwind's color palette (configure custom colors in tailwind.config.js)

## Technical Constraints

### Demo Application Limitations
- **No real payment processing** - checkout is simulation only
- **No backend API** - all data is client-side
- **No database** - data persists in localStorage only
- **No user authentication** - no login/signup functionality
- **No order history** - orders are not saved long-term
- **Static inventory** - no real-time stock management

### Browser & Storage
- Requires localStorage support
- localStorage quota: ~5-10MB (sufficient for cart data)
- Handle localStorage quota exceeded errors gracefully
- Support modern browsers only (ES6+ features)

### Data Limitations
- Pie data is static (loaded from JSON)
- No ability to add/edit/delete pies (no admin panel)
- Image files must be present in assets folder
- No image upload functionality

## Design Constraints

### Visual Style
- **Mandatory:** Modern and clean aesthetic
- **Color Scheme:** Fresh, contemporary colors (whites, light grays, accent colors like teal or coral)
- **Typography:** Clean, modern sans-serif fonts
- **Avoid:** Overly rustic/vintage designs, bright neon colors, overly corporate feel

### Layout Requirements
- **Header Text:** "FRESH PIES + PIE CLASSES — LIMITED AVAILABILITY →" (exact)
- **Footer Text:** "(c) Southside Pie Shop" (exact)
- Must include navigation to: Home, About, Cart
- Cart icon must show item count badge
- Must be fully responsive (mobile and desktop)

### Content Constraints
- About page content must be completely fictitious
- Location must be Shartlesville, PA
- All references to Southside Pie Shop are made-up

## Validation Rules

### Checkout Form
- **Validation Type:** Client-side only
- **Validation Rule:** All fields must be filled in (non-empty)
- **No Complex Validation:**
  - No email format validation
  - No phone number format validation
  - No credit card number validation
  - No expiration date validation
  - No CVV format validation
- **Error Handling:** Display simple error messages for empty fields
- **Success Criteria:** All fields contain at least one character

### Cart Validation
- Quantity must be positive integer (≥ 1)
- Cannot have negative quantities
- Cannot have duplicate entries (same pie should increment quantity)

## Security Considerations (Demo Level)

### What NOT to Include
- Do not implement actual credit card processing
- Do not store any sensitive information
- Do not send data to external servers
- Do not include real API keys or secrets

### What to Include
- Basic input sanitization for display
- Prevent XSS through React's built-in escaping
- Validate data loaded from localStorage

## Performance Rules

### Image Handling
- Use appropriate image formats (WebP where possible, fallback to JPEG/PNG)
- Implement lazy loading for images below fold
- Optimize image sizes (max width: 800px for pie images)
- Use proper alt text for accessibility

### Bundle Size
- Keep dependencies minimal
- Tree-shake unused code
- Code-split routes if bundle becomes large
- Monitor and optimize initial load time

## Accessibility Requirements

### Minimum Standards
- Use semantic HTML elements (`<nav>`, `<main>`, `<footer>`, etc.)
- Provide alt text for all images
- Ensure keyboard navigation works
- Maintain sufficient color contrast (WCAG AA)
- Include focus indicators for interactive elements
- Use proper heading hierarchy (h1, h2, h3)

### Forms
- Associate labels with inputs
- Provide clear error messages
- Indicate required fields
- Support keyboard submission

## Git & Version Control

### Not Committed
- node_modules/
- dist/ or build/
- .env files (if added later)
- IDE-specific files

### Must Be Committed
- Source code
- Configuration files (vite.config.js, tailwind.config.js, etc.)
- Package.json and package-lock.json
- Public assets
- README documentation

## Testing Approach (Optional for Demo)

### Manual Testing Required
- All user flows (browse → add to cart → checkout → confirmation)
- Cart persistence (close/reopen browser)
- Responsive design on multiple screen sizes
- Form validation
- Navigation between pages

### Automated Testing (Optional)
- Not required for this demo project
- If implemented: use Vitest + React Testing Library

## Documentation Requirements

### README.md Must Include
- Project description
- Technology stack
- Installation instructions
- How to run development server
- How to build for production
- Project structure overview
- Known limitations (demo app, no real payment, etc.)

### Code Comments
- Document complex logic
- Explain "why" not "what" (code should be self-documenting for "what")
- Add JSDoc comments for utility functions
- Document any workarounds or hacks

## Future Expansion Considerations

### Keep Flexible For
- Potential backend integration
- User authentication addition
- Real payment processing
- Admin panel for pie management
- Order history tracking

### Design Decisions
- Structure code to make backend integration easier
- Keep business logic separate from UI components
- Use consistent data structures
- Plan for API integration points
