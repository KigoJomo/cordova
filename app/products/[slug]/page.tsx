// app/products/[slug]/page.tsx

import CartButton from '@/app/components/CartButton';
import FavsButton from '@/app/components/FavsButton';
import HorizontalGallery from '@/app/components/HorizontalGallery';
import SizeSelector from '@/app/components/SizeSelector';
import { Product } from '@/types/declarations';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getAllProducts(): Promise<Product[]> {
  const data = await import('@/public/data/products.json');
  const allProducts = [...data.ski_suits, ...data.jackets, ...data.pants].map(product => ({
    ...product,
    collection: product.collection as 'winter' | 'classic' | 'urban'
  }));
  return allProducts;
}

async function getProduct(slug: string): Promise<Product | undefined> {
  const products = await getAllProducts();
  return products.find(
    (product) => product.name.toLowerCase().replace(/ /g, '-') === slug
  );
}

async function getSimilarProducts(
  collection: string,
  name: string
): Promise<Product[]> {
  const products = await getAllProducts();
  const similarPoducts: Product[] = [];
  products.forEach((product) => {
    if (product.collection === collection && product.name !== name) {
      similarPoducts.push(product);
    }
  });
  return similarPoducts;
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

  const similarProducts = await getSimilarProducts(
    product.collection,
    product.name
  );

  return (
    <>
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
          <p className="mb-2 md:mb-4">Ksh {product.price.toLocaleString()}</p>
          <p className="text-xs opacity-50">About:</p>
          <p className="text-sm">{product.description}</p>
          <p className="capitalize mt-2">
            collection: <strong>{product.collection}</strong>
          </p>

          <hr className="my-2 md:my-4" />
          <SizeSelector />
          <div className="buttons w-full my-6 space-y-2">
            <CartButton product={product} showText className='w-full md:w-full' />
            <FavsButton product={product} showText className='w-full md:w-full' />
          </div>
        </div>
      </section>

      <section>
        <h3 className="capitalize mb-4">you may also like</h3>

        <HorizontalGallery products={similarProducts} />
      </section>
    </>
  );
}
