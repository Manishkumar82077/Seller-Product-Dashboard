import React from 'react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full transition-transform hover:scale-105 focus-within:scale-105">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 sm:h-48 object-contain bg-gray-50"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-semibold mb-1 truncate text-gray-900">{product.title}</h3>
        <div className="flex justify-between items-center mb-1 text-xs sm:text-sm">
          <span className="text-gray-500">Category:</span>
          <span className="text-gray-700">{product.category}</span>
        </div>
        <div className="flex justify-between items-center mb-1 text-xs sm:text-sm">
          <span className="text-gray-500">Price:</span>
          <span className="text-green-600 font-semibold">${product.price}</span>
        </div>
        <div className="flex justify-between items-center text-xs sm:text-sm mt-auto">
          <span className="text-gray-500">Stock:</span>
          <span className={`font-semibold ${product.stock > 0 ? 'text-blue-600' : 'text-red-600'}`}>{product.stock}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 