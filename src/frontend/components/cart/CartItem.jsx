import { useCart } from '../../context/CartContext';

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(item.pieId);
    } else {
      updateQuantity(item.pieId, newQuantity);
    }
  };

  const lineTotal = parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity;

  return (
    <div className="flex items-center gap-4 py-5 first:pt-0 last:pb-0 group">
      {/* Image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
        <img
          src={`/src/frontend/assets/images/pies/${item.imageFilename}`}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Details */}
      <div className="flex-grow min-w-0">
        <h3 className="font-semibold text-gray-900 truncate pr-2">{item.name}</h3>
        <p className="text-primary-600 font-medium mt-1">{item.price} each</p>
        
        {/* Mobile: Quantity and Price */}
        <div className="flex items-center justify-between mt-3 sm:hidden">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-8 text-center font-semibold text-gray-900">
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <span className="font-bold text-gray-900">${lineTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Desktop: Quantity Controls */}
      <div className="hidden sm:flex items-center gap-3">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="w-9 h-9 rounded-full bg-gray-100 hover:bg-primary-100 hover:text-primary-600 flex items-center justify-center text-gray-600 transition-all duration-200 font-medium"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-10 text-center font-semibold text-gray-900 text-lg">
          {item.quantity}
        </span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="w-9 h-9 rounded-full bg-gray-100 hover:bg-primary-100 hover:text-primary-600 flex items-center justify-center text-gray-600 transition-all duration-200 font-medium"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      {/* Desktop: Line Total */}
      <div className="hidden sm:block w-24 text-right">
        <span className="font-bold text-gray-900 text-lg">${lineTotal.toFixed(2)}</span>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.pieId)}
        className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-2 hover:bg-red-50 rounded-lg"
        aria-label="Remove item"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
