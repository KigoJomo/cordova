
import { Product } from '@/types/declarations';
import React from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[]
}

const ProductGrid: React.FC<ProductGridProps> = ({products}) => {
  return (
    <div className="product-grid mt-6 w-full grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
  );
};

export default ProductGrid;
