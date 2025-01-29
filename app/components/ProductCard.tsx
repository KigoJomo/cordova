// app/components/ProductCard.tsx

import { Product } from '@/types/declarations';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import CartButton from './CartButton';
import FavsButton from './FavsButton';

interface ProductProps {
  image: string;
  name: string;
  price: number;
  collection: 'winter' | 'classic' | 'urban';
  description: string;
  className?: string;
}

const ProductCard: FC<ProductProps> = ({
  image,
  name,
  price,
  collection,
  description,
  className,
}) => {
  const slug = name.toLowerCase().replace(/ /g, '-');

  const thisPoduct: Product = { name, image, price, collection, description };

  return (
    <div
      className={`w-full flex flex-col gap-2 ${className} fade-in relative group`}>
      <div className="fav-and-cart-buttons absolute z-10 top-0 left-0 w-full aspect-[3/4] bg-transparent pointer-events-none md:*:pointer-events-none md:opacity-0 md:group-hover:*:pointer-events-auto md:group-hover:opacity-100 transition-all duration-300 flex flex-col items-end justify-between p-2 md:p-4">

        <FavsButton  product={thisPoduct}/>

        <CartButton product={thisPoduct} />
      </div>

      <Link
        href={`/products/${slug}`}
        className="w-full overflow-hidden">
        <Image
          src={image}
          alt={`Cordova | ${name}`}
          width={1000}
          height={1000}
          className="w-full aspect-[3/4] hover:scale-105 transition-all duration-300"
        />
      </Link>

      <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
        <h4 className="capitalize font-semibold">{name}</h4>
        <p className="italic text-sm">Ksh {price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;
