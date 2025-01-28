// app/products/[slug]/page.tsx

import CtaButton from '@/app/components/CtaButton';
import SizeSelector from '@/app/components/SizeSelector';
import { Product } from '@/types/declarations';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getProduct(slug: string): Promise<Product | undefined> {
  const data = await import('../../../public/data/products.json');
  const allProducts = [...data.jackets, ...data.ski_suits, ...data.pants];
  return allProducts.find(
    (product) => product.name.toLowerCase().replace(/ /g, '-') === slug
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  console.log(`\n\n\nProduct to fetch: ${slug}`);
  const product = await getProduct(slug);

  if (!product) {
    return notFound();
  }

  return (
    <section className="p-0 md:px-16 flex flex-col md:flex-row md:gap-6">
      <div className="w-full md:w-2/3 md:p-8 md:order-2 md:flex md:gap-4">
        <Image
          src={product.image}
          alt={`cordova | ${product.name}`}
          width={1000}
          height={1000}
          className="w-full md:w-1/2 aspect-[3/4]"
        />
        <Image
          src={product.image}
          alt={`cordova | ${product.name}`}
          width={1000}
          height={1000}
          className="hidden md:flex w-full md:w-1/2 aspect-[3/4] scale-x-[-1]"
        />
      </div>

      <div className="details w-full md:w-1/3 p-4 md:px-8 md:py-8">
        <h3 className="capitalize">{product.name}</h3>
        <p className="mb-2">Ksh {product.price.toLocaleString()}</p>

        <p className="text-xs opacity-50">About:</p>
        <p className="text-sm">{product.description}</p>
        <p className='capitalize mt-2'>collection: <strong>{product.collection}</strong></p>
        
        <hr className='my-2' />

        <SizeSelector />

        <div className="buttons w-full my-6 space-y-2">
          <CtaButton label='add to cart' hideIcon className='md:w-full' dark />
          <CtaButton label='add to favs' hideIcon className='md:w-full' />
        </div>
      </div>
    </section>
  );
}