// app/products/page.tsx

'use client';
import { Product } from '@/types/declarations';
import { ChevronDown } from 'lucide-react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';

const Page: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        const merged = [...data.jackets, ...data.ski_suits, ...data.pants];
        setProducts(merged);
      });
  }, []);

  return (
    <>
      <section className="">
        <div className="w-full flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
          <h3>Product catalog</h3>

          <div className="filters flex flex-col">
            <p className="text-xs opacity-50">Filters</p>

            <div className="w-full flex items-center gap-6 md:gap-12 border-b border-black/0">
              <p className="capitalize flex items-center">
                sort by <ChevronDown size={16} />
                {/*
                  Featured (just random picks)
                  A-Z
                  Z-A 
                  price - low to high
                  price - high to low
                 */}
              </p>

              <p className="capitalize flex items-center">
                product type <ChevronDown size={16} />
                {/*
                  ski suit
                  jacket
                  pants
                 */}
              </p>

              <p className="capitalize flex items-center">
                collection <ChevronDown size={16} />
                {/*
                  winter
                  classic
                  urban
                 */}
              </p>
            </div>
          </div>
        </div>

        <ProductGrid products={products} />

        <hr className='my-12' />

        <p className="md:px-32 md:text-center">
          Explore luxury winter fashion with Cordova, a leader in high-end ski
          wear. From designer ski suits and insulated jackets to tailored pants,
          Cordova combines premium craftsmanship with cutting-edge materials for
          unmatched style and performance. <br /> <br /> Layer up with moisture-wicking ski
          layers or accessorize with elegant backpacks and wool buffs.
          Redefining alpine elegance, Cordova blends functionality with
          runway-worthy designs, making it the ultimate destination for luxury
          ski apparel.
        </p>
      </section>
    </>
  );
};

export default Page;
