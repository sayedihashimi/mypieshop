import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Header() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  return (
    <header className="bg-white border-b border-gray-100">
      {/* Top banner */}
      <div className="bg-primary-600 text-white text-center py-2 text-sm font-medium tracking-wide">
        <span>FRESH PIES + PIE CLASSES — LIMITED AVAILABILITY →</span>
      </div>
      
      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
          Southside Pie Shop
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
            About
          </Link>
          <Link to="/cart" className="relative text-gray-600 hover:text-primary-600 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
