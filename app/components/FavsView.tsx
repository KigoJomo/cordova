import { useShop } from '@/context/ShopContext';
import Image from 'next/image';
import React, { FC } from 'react';
import CtaButton from './CtaButton';
import { Product } from '@/types/declarations';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import FavsButton from './FavsButton';

interface FavsViewProps {
  className?: string;
  onClose: () => void;
}

const FavsView: React.FC<FavsViewProps> = ({ className, onClose }) => {
  const { favorites } = useShop();

  return (
    <div className={`w-full h-[90%] flex flex-col gap-4 ${className}`}>
      <div className="w-full flex items-center justify-between">
        <h4 className="capitalize">Favorites ({favorites.length})</h4>
      </div>

      <hr />

      {favorites.length === 0 ? (
        <p className="text-gray-700">Your favs list is empty.</p>
      ) : (
        <div className="w-full h-full overflow-y-scroll flex flex-col gap-4">
          {favorites.map((product, index) => (
            <FavItem key={index} product={product} onClose={onClose} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavsView;

interface FavItemProps {
  product: Product;
  onClose: () => void;
}

const FavItem: FC<FavItemProps> = ({ product, onClose }) => {
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
          <div className="flex items-center justify-between pr-6 relative">
            <p className="italic">Ksh {product.price.toLocaleString()}</p>
            <div className="absolute right-6 border bg-background px-2 aspect-square rounded-full flex items-center pointer-events-none z-[5]">
              <Trash2 size={16} />
            </div>
            <FavsButton product={product} className='z-[4]' />
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
