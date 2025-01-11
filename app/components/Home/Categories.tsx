import { FC, ReactNode } from 'react';
import CategoryDetails from './CategoryDetails';
import Accordion from '../Accordion';
import products from "../../../public/data/products.json"
import { ProductCategory } from '@/types/declarations';

interface CategoryItem {
  title: string;
  content: ReactNode;
}

const Categories: FC = () => {
  const categories = [
    {
      title: "Ski Suits",
      key: "ski_suits",
      description:
        "Conquer the slopes with top-notch insulation and weather resistance. Designed for warmth, mobility, and comfort in extreme conditions, so you can focus on the thrill of the descent.",
    },
    {
      title: "Jackets",
      key: "jackets",
      description:
        "Stylish, breathable outerwear that keeps you warm and protected. Built to block wind and repel moisture, these jackets adapt to changing weather for all-day comfort.",
    },
    {
      title: "Pants",
      key: "pants",
      description:
        "Durable, comfortable bottoms for active or casual wear. Made with resilient materials to handle any adventure while keeping you stylish and mobile.",
    },
  ];

  const accordionItems: CategoryItem[] = []

  categories.forEach((category) => {
      const currentCategory: ProductCategory = category.key
      const selectedProducts = products[currentCategory]?.slice(0, 2) || []
      const images = selectedProducts.map((product: { image: string; }) => product.image)

    const newItem = {
      title: category.title,
      content: <CategoryDetails description={category.description} images={images} />,
    };

    accordionItems.push(newItem);
  });

  return (
    <section className="mt-6">
      <h3 className='mb-4'>Categories</h3>

      <Accordion items={accordionItems} />

      <div className="w-full aspect-video"></div>
    </section>
  );
};

export default Categories;
