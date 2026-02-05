import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Header() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) => 
    `font-medium transition-colors duration-200 ${
      isActive 
        ? 'text-primary-600' 
        : 'text-gray-600 hover:text-primary-600'
    }`;

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      {/* Top banner */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center py-2.5 text-sm font-medium tracking-wide">
        <span className="inline-flex items-center gap-2">
          <span className="hidden sm:inline">🥧</span>
          FRESH PIES + PIE CLASSES — LIMITED AVAILABILITY 
          <span className="animate-pulse-soft">→</span>
        </span>
      </div>
      
      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors duration-200"
          >
            <span className="hidden sm:inline">Southside Pie Shop</span>
            <span className="sm:hidden">Southside Pies</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <Link 
              to="/cart" 
              className="relative text-gray-600 hover:text-primary-600 transition-colors duration-200 p-2 -m-2"
              aria-label={`Shopping cart with ${cartCount} items`}
            >
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
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-sm animate-scale-in">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <Link 
              to="/cart" 
              className="relative text-gray-600 hover:text-primary-600 transition-colors p-2"
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-gray-100 pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              <NavLink 
                to="/" 
                className={navLinkClass} 
                end
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
