// components/OrderSummary.tsx
'use client';

import { CartItem } from '@/context/ShopContext';
import CtaButton from './CtaButton';
import Image from 'next/image';
import Link from 'next/link';

interface OrderSummaryProps {
  cart: CartItem[];
  onClose?: () => void; // Optional for close functionality
}

export const OrderSummary = ({ cart, onClose }: OrderSummaryProps) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="w-full h-fit flex flex-col">
      <div className="w-full flex items-center justify-between">
        <h4 className="capitalize text-lg font-semibold">Order Summary ({cart.length})</h4>
      </div>

      <hr className='my-4' />

      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="w-full max-h-[60vh] overflow-y-scroll flex flex-col gap-4 md:px-12">
          {cart.map((item) => (
            <div key={item.name} className="w-full group flex gap-2 pb-4 border-b">
              <div className="w-1/4 aspect-[3/4] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`cordova | ${item.name}`}
                  width={500}
                  height={500}
                  className="w-full aspect-[9/16] md:aspect-[3/4] group-hover:scale-105 transition-all duration-300"
                />
              </div>

              <div className="w-3/4 flex flex-col justify-between">
                <div className="flex flex-col gap-0">
                  <h5 className="capitalize font-semibold">{item.name}</h5>
                  <p className="opacity-50 text-xs capitalize">
                    {item.collection} collection
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <p className="italic">Ksh {(item.price * item.quantity).toLocaleString()}</p>
                    <div className="flex items-center gap-2">
                      <span className="opacity-75">Qty: {item.quantity}</span>
                    </div>
                  </div>

                  <Link 
                    href={`/products/${item.name.toLowerCase().replace(/ /g, '-')}`} 
                    onClick={onClose}
                  >
                    <CtaButton
                      label="view this item"
                      hideIcon
                      className="*:text-xs py-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-auto border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total:</span>
            <span className="italic">Ksh {total.toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};