// app/products/page.tsx

'use client';
import { Product } from '@/types/declarations';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import FilterComponent from '../components/FilterComponent';
import { SlidersHorizontal } from 'lucide-react';
import SideMenu from '../components/SideMenu';

const Page: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [selectedSort, setSelectedSort] = useState<string>('default');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(
    null
  );

  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);

  const filters = [
    {
      label: 'sort by',
      options: [
        'default',
        'a-z',
        'z-a',
        'price - low to high',
        'price - high to low',
      ],
      onChange: setSelectedSort,
      selectedOption: selectedSort,
    },
    {
      label: 'product type',
      options: ['all', 'ski suits', 'jackets', 'pants'],
      onChange: (value: string) =>
        setSelectedType(value === 'all' ? null : value),
      selectedOption: selectedType === null ? 'all' : selectedType,
    },
    {
      label: 'collection',
      options: ['all', 'classic', 'urban', 'winter'],
      onChange: (value: string) =>
        setSelectedCollection(value === 'all' ? null : value),
      selectedOption: selectedCollection === null ? 'all' : selectedCollection,
    },
  ];

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        const merged = [
          ...data.jackets.map((item: Product) => ({
            ...item,
            type: 'jackets',
          })),
          ...data.ski_suits.map((item: Product) => ({
            ...item,
            type: 'ski suits',
          })),
          ...data.pants.map((item: Product) => ({ ...item, type: 'pants' })),
        ];
        setProducts(merged);
        setFilteredProducts(merged);
      });
  }, []);

  useEffect(() => {
    let tempProducts = [...products];

    if (selectedType) {
      tempProducts = tempProducts.filter(
        (product) => product.type === selectedType
      );
    }
    if (selectedCollection) {
      tempProducts = tempProducts.filter(
        (product) => product.collection === selectedCollection
      );
    }

    if (selectedSort === 'a-z') {
      tempProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === 'z-a') {
      tempProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (selectedSort === 'price - low to high') {
      tempProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'price - high to low') {
      tempProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(tempProducts);
  }, [products, selectedCollection, selectedSort, selectedType]);

  return (
    <>
      <section className="">
        <div className="w-full flex flex-col md:flex-row gap-4 md:justify-between">
          <h3>Product catalog</h3>

          <div className="filters flex flex-col">
            <button className="w-fit flex items-center gap-4" onClick={() => setFiltersOpen(true)}>
              <SlidersHorizontal size={16} />
              <p className="text-sm">Filters</p>
            </button>

            <SideMenu isOpen={filtersOpen} onClose={() => setFiltersOpen(false)} position='left'>
              <div className="w-full flex flex-col gap-6">
                {filters.map((filter, index) => (
                  <FilterComponent key={index} {...filter} />
                ))}
              </div>
            </SideMenu>
          </div>
        </div>

        <ProductGrid products={filteredProducts} />

        <hr className="my-12" />

        <p className="md:px-32 md:text-center">
          Explore luxury winter fashion with Cordova, a leader in high-end ski
          wear. From designer ski suits and insulated jackets to tailored pants,
          Cordova combines premium craftsmanship with cutting-edge materials for
          unmatched style and performance. <br /> <br /> Layer up with
          moisture-wicking ski layers or accessorize with elegant backpacks and
          wool buffs. Redefining alpine elegance, Cordova blends functionality
          with runway-worthy designs, making it the ultimate destination for
          luxury ski apparel.
        </p>
      </section>
    </>
  );
};

export default Page;
