// components/FavsButton.tsx
'use client';

import { useShop } from '@/context/ShopContext';
import { Product } from '@/types/declarations';
import { Heart } from 'lucide-react';
import React from 'react';
import CtaButton from './CtaButton';

interface FavsButtonProps {
  className?: string;
  product: Product;
  showText?: boolean;
}

const FavsButton: React.FC<FavsButtonProps> = ({
  className,
  product,
  showText = false,
}) => {
  const { favorites, toggleFavorite } = useShop();
  const isFavorite = favorites.some((item) => item.name === product.name);

  return showText ? (
    <CtaButton
      icon={
        <Heart
          fill={isFavorite ? 'currentColor' : 'none'}
          strokeWidth={1}
          size={16}
          className="transition-all duration-300"
        />
      }
      label={isFavorite ? 'Saved to favorites' : 'Add to favorites'}
      className={className}
      onClick={() => toggleFavorite(product)}
      hideIcon
    />
  ) : (
    <button
      onClick={() => toggleFavorite(product)}
      className={`w-fit px-2 aspect-square md:group-hover:flex items-center justify-center bg-background rounded-full shadow hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer ${className}`}>
      <Heart
        fill={isFavorite ? 'foreground' : 'none'}
        strokeWidth={1}
        size={16}
        className="transition-all duration-300"
      />
    </button>
  );
};

export default FavsButton;