import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function CartSummary() {
  const { getCartTotal, getCartCount } = useCart();
  const total = getCartTotal();
  const count = getCartCount();

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-gray-600">
          <span>Items ({count})</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="text-primary-600">Free</span>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between text-lg font-semibold text-gray-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <Link
        to="/checkout"
        className="block w-full bg-primary-500 hover:bg-primary-600 text-white text-center font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default CartSummary;
