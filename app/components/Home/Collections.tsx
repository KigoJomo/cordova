import { ChevronRight, Minus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import CustomLink from '../CustomLink';

const Collections: FC = () => {
  return (
    <section id='collections' className="mt-8 px-0 md:px-8">
      <h3 className="px-4 md:px-0">Collections</h3>

      <div className="w-full flex mt-6">
        <div className="w-full md:w-1/3">
          <Image
            src={'/images/products/nauvoo-wool-jacket.webp'}
            alt="Cordova Collection"
            width={1000}
            height={1000}
            className="w-full aspect-square"
          />
          <p className="font-semibold mt-4 px-4 md:px-0">Winter 25/26</p>
        </div>

        <div className="hidden md:flex gap-4 ml-auto">
          <div className="w-[20vw]">
            <Image
              src={'/images/products/dune-white-jacket.webp'}
              alt="Leather Belt"
              width={1000}
              height={1000}
              className="w-full aspect-square"
            />
            <p className="font-semibold mt-4">Winter 24</p>
          </div>

          <div className="w-[20vw]">
            <Link
              href={'/'}
              className="w-[20vw] h-[20vw] aspect-square flex flex-col items-start border border-black/40 bg-slate-100">
              <div className="w-full h-4/5 pt-6 flex items-center justify-center opacity-50">
                <Minus size={16} className="-mr-2" />
                <ChevronRight className="" />
              </div>

              <p className="py-2 px-4">View the vintage winter collection.</p>
            </Link>

            <p className="font-semibold mt-4">Old Winter</p>
          </div>
        </div>
      </div>

      <p className='mt-8 md:mt-4 px-4 md:px-0 md:w-3/5 md:ml-auto'>
        Cordova is committed to maintaining high ethical standards, protecting
        human rights and active with honesty and integrity in everything we do.
        <br className='md:hidden' />
        <br className='md:hidden' />
        <span className='text-xs md:text-base'>
          We do not tolerate any form of modern slavery, forced labour or human trafficking in any part of our business or supply chain.
        </span>
      </p>

      <CustomLink
        href={'#collections'}
        label='View all collections'
        className="mt-6 md:hidden ml-4"
      />
    </section>
  );
};

export default Collections;
