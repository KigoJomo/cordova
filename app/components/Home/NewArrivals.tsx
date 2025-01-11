'use client';

import { Product } from '@/types/declarations';
import { FC, useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import Link from 'next/link';
import { ChevronRight, Minus } from 'lucide-react';

const NewArrivals: FC = () => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        const merged = [...data.jackets, ...data.ski_suits, ...data.pants];

        const random = merged.sort(() => 0.5 - Math.random()).slice(0, 5);
        setItems(random);
      });
  }, []);
  
  return (
    <section className="">
      <h3>New arrivals</h3>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-6">
        {items.slice(0, 2).map((item, index) => (
          <ProductCard key={index} {...item} className="col-span-1" />
        ))}

        <div className="blank col-span-1 hidden md:flex"></div>

        <Link
          href={'/'}
          className="w-full h-auto md:aspect-[3/4] col-span-2 md:col-span-1 py-4 md:py-0 flex flex-col items-center md:items-start border border-black/40 bg-slate-100">
          <div className="w-full md:h-4/5 flex items-center justify-center opacity-50">
            <Minus size={16} className="-mr-2" />
            <ChevronRight className="" />
          </div>

          <p className="py-2 px-4">
            We always welcome <br className='hidden md:flex' /> new talent.
          </p>
        </Link>

        {items.slice(2, 3).map((item, index) => (
          <ProductCard
            key={index}
            {...item}
            className="col-span-1 hidden md:flex"
          />
        ))}

        <div className="blank col-span-1 hidden md:flex"></div>

        {items.slice(3, items.length).map((item, index) => (
          <ProductCard key={index} {...item} className="col-span-1" />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
