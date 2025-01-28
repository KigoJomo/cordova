// app/collections/[slug]/page.tsx

import ProductGrid from "@/app/components/ProductGrid";
import { getAllProducts } from "@/app/products/[slug]/page";
import { Product } from "@/types/declarations";

async function getProducts(collection: string): Promise<Product[]>{
  const allProducts = await getAllProducts();

  const products: Product[] = []

  allProducts.forEach((product) => {
    if(product.collection === collection){
      products.push(product);
    }
  })

  return products;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const collection = (await params).slug.replace(/-/g, "_");
  const products = await getProducts(collection);

  return (
    <section className="">
      <h3>Collection</h3>
      <h1 className="italic opacity-50">{slug.replace(/-/g, " ")}</h1>

      <hr className="-my-4" />

      <ProductGrid products={products} />
    </section>
  );
}
