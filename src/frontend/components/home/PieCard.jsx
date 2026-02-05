import { useState } from 'react';
import { useCart } from '../../context/CartContext';

function PieCard({ pie, index }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: index.toString(),
      name: pie.name,
      price: pie.price,
      imageFilename: pie.imageFilename,
    });
    
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1500);
  };

  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="aspect-square overflow-hidden relative bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 img-loading" />
        )}
        <img
          src={`/src/frontend/assets/images/pies/${pie.imageFilename}`}
          alt={pie.name}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        {/* Quick add overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-primary-700 transition-colors">
          {pie.name}
        </h3>
        <div className="flex items-center justify-between mb-4">
          <p className="text-primary-600 font-bold text-xl">
            {pie.price}
          </p>
          {pie.price.includes('from') && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              Multiple sizes
            </span>
          )}
        </div>
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform active:scale-95 ${
            isAdding
              ? 'bg-green-500 text-white shadow-green-200 shadow-lg'
              : 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-200'
          }`}
          aria-label={`Add ${pie.name} to cart`}
        >
          {isAdding ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Added!
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add to Cart
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

export default PieCard;
