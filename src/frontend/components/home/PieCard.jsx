import { useState } from 'react';
import { useCart } from '../../context/CartContext';

function PieCard({ pie, index }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      pieId: index.toString(),
      name: pie.name,
      price: pie.price,
      imageFilename: pie.imageFilename,
    });
    
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={`/src/frontend/assets/images/pies/${pie.imageFilename}`}
          alt={pie.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
          {pie.name}
        </h3>
        <p className="text-primary-600 font-medium text-lg mb-3">
          {pie.price}
        </p>
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full py-2 px-4 rounded-md font-medium transition-all duration-200 ${
            isAdding
              ? 'bg-green-500 text-white'
              : 'bg-primary-500 text-white hover:bg-primary-600'
          }`}
        >
          {isAdding ? '✓ Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default PieCard;
