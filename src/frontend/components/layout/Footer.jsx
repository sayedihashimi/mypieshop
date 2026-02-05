import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-warm-100 border-t border-warm-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-lg font-bold text-gray-900 hover:text-primary-600 transition-colors">
              Southside Pie Shop
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              © {new Date().getFullYear()} Southside Pie Shop. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center justify-center gap-6 text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">
              Shop Pies
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
              Our Story
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-primary-600 transition-colors">
              Cart
            </Link>
          </div>

          {/* Location */}
          <div className="text-center md:text-right text-sm text-gray-500">
            <p className="flex items-center justify-center md:justify-end gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Shartlesville, PA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
