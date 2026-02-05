import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

function Cart() {
  const { cartItems, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16 animate-fade-in">
        <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-5xl">🥧</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Your cart is empty</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Looks like you haven't added any pies yet! Browse our delicious selection and find your perfect pie.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-primary-200 hover:shadow-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Browse Our Pies
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
          <p className="text-gray-500 mt-1">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
        </div>
        <button
          onClick={clearCart}
          className="self-start text-sm text-gray-500 hover:text-red-500 transition-colors duration-200 flex items-center gap-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="divide-y divide-gray-100">
              {cartItems.map((item) => (
                <CartItem key={item.pieId} item={item} />
              ))}
            </div>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mt-6 font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
