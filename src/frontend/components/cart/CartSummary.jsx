import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function CartSummary() {
  const { getCartTotal, getCartCount } = useCart();
  const total = getCartTotal();
  const count = getCartCount();

  return (
    <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100 p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({count} {count === 1 ? 'item' : 'items'})</span>
          <span className="font-medium text-gray-900">${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="text-primary-600 font-medium">Free</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span className="text-gray-500">Calculated at checkout</span>
        </div>
      </div>

      <div className="border-t border-primary-100 pt-4 mb-6">
        <div className="flex justify-between text-xl font-bold">
          <span className="text-gray-900">Total</span>
          <span className="text-primary-600">${total.toFixed(2)}</span>
        </div>
      </div>

      <Link
        to="/checkout"
        className="block w-full bg-primary-500 hover:bg-primary-600 text-white text-center font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg shadow-primary-200 hover:shadow-xl transform hover:-translate-y-0.5"
      >
        Proceed to Checkout
      </Link>
      
      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Secure checkout
      </div>
    </div>
  );
}

export default CartSummary;
