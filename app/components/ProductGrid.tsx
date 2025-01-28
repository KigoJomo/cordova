import { Product } from '@/types/declarations';
import React from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="product-grid mt-6 border-t pt-6 w-full grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 fade-in">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
      {products.length === 0 && (
        <div className="w-full col-span-2 md:col-span-4 flex items-center justify-center">
          <p>No items found</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
