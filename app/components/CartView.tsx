import { useShop } from '@/context/ShopContext';
import Image from 'next/image';
import React, { FC } from 'react';
import CtaButton from './CtaButton';
import { Product } from '@/types/declarations';
import Link from 'next/link';

interface CartViewProps {
  className?: string;
  onClose: () => void;
}

const CartView: React.FC<CartViewProps> = ({ className, onClose }) => {
  const { cart, addToCart, removeFromCart } = useShop();
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className={`w-full h-[90%] flex flex-col gap-4 ${className}`}>
      <div className="w-full flex items-center justify-between">
        <h4 className="capitalize">Shopping Cart ({cart.length})</h4>
      </div>

      <hr />

      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="w-full h-full overflow-y-scroll flex flex-col gap-4 pb-4">
          {cart.map((item, index) => (
            <CartItem 
              key={index} 
              product={item} 
              onClose={onClose}
              quantity={item.quantity}
              onIncrement={() => addToCart(item)}
              onDecrement={() => removeFromCart(item.name)}
            />
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-auto border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total:</span>
            <span className="italic">Ksh {total.toLocaleString()}</span>
          </div>
          <CtaButton 
            label="Proceed to Checkout" 
            className="w-full"
            onClick={onClose}
          />
        </div>
      )}
    </div>
  );
};

export default CartView;

interface CartItemProps {
  product: Product & { quantity: number };
  onClose: () => void;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CartItem: FC<CartItemProps> = ({ 
  product, 
  onClose,
  quantity,
  onIncrement,
  onDecrement
}) => {
  const slug = product.name.toLowerCase().replace(/ /g, '-');

  return (
    <div className="w-full group flex gap-2 pb-4 border-b">
      <div className="w-1/4 aspect-[3/4] overflow-hidden">
        <Image
          src={product.image}
          alt={`cordova | ${product.name}`}
          height={500}
          width={500}
          className="w-full aspect-[9/16] md:aspect-[3/4] group-hover:scale-105 transition-all duration-300"
        />
      </div>

      <div className="w-3/4 aspect-[9/4] flex flex-col justify-between">
        <div className="flex flex-col gap-0">
          <h5 className="capitalize font-semibold">{product.name}</h5>
          <p className="opacity-50 text-xs capitalize">
            {product.collection} collection
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="italic">Ksh {(product.price * quantity).toLocaleString()}</p>
            <div className="flex items-center gap-2">
              <button 
                onClick={onDecrement}
                className="px-2 border rounded-sm hover:bg-gray-100"
              >
                -
              </button>
              <span>{quantity}</span>
              <button 
                onClick={onIncrement}
                className="px-2 border rounded-sm hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <Link href={`/products/${slug}`} onClick={onClose}>
            <CtaButton
              label="view this item"
              hideIcon
              className="*:text-xs py-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};