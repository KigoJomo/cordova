
import { Product } from '@/types/declarations';
import React from 'react';
import ProductCard from './ProductCard';

interface HorizontalGalleryProps {
  products: Product[]
}

const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({ products }) => {
  return (
    <div className='w-full flex gap-4 overflow-x-scroll scrollbar-hidden'>
      {products.map((product, index) => (
        <ProductCard key={index} className='w-2/3 flex-shrink-0 md:w-1/4' {...product} />
      ))}
    </div>
  );
};

export default HorizontalGallery;
