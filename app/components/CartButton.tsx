// components/CartButton.tsx
'use client';

import { useShop } from '@/context/ShopContext';
import { Product } from '@/types/declarations';
import { ShoppingCart } from 'lucide-react';
import React from 'react';
import CtaButton from './CtaButton';

interface CartButtonProps {
  className?: string;
  product: Product;
  showText?: boolean;
}

const CartButton: React.FC<CartButtonProps> = ({
  className,
  product,
  showText = false,
}) => {
  const { cart, addToCart } = useShop();
  const isInCart = cart.some((item) => item.name === product.name);

  return showText ? (
    <CtaButton
      dark
      icon={
        <ShoppingCart
          fill={isInCart ? 'currentColor' : 'none'}
          strokeWidth={1}
          size={16}
          className="transition-all duration-300"
        />
      }
      label={isInCart ? 'Added to cart' : 'Add to cart'}
      className={className}
      onClick={() => addToCart(product)}
      hideIcon
    />
  ) : (
    <button
      onClick={() => addToCart(product)}
      className={`w-fit px-2 aspect-square md:group-hover:flex items-center justify-center bg-background rounded-full shadow hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer ${className}`}>
      <ShoppingCart
        fill={isInCart ? 'foreground' : 'none'}
        strokeWidth={1}
        size={16}
        className="transition-all duration-300"
      />
    </button>
  );
};

export default CartButton;