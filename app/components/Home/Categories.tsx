import { FC, ReactNode } from 'react';
import CategoryDetails from './CategoryDetails';
import Accordion from '../Accordion';
import products from "../../../public/data/products.json"
import { ProductCategory } from '@/types/declarations';

interface CategoryItem {
  title: string;
  content: ReactNode;
}

interface Category {
  title: string;
  key: ProductCategory; // Changed from string to ProductCategory
  description: string;
}

const Categories: FC = () => {
  const categories: Category[] = [
    {
      title: "Ski Suits",
      key: "ski_suits" as ProductCategory,
      description:
        "Conquer the slopes with top-notch insulation and weather resistance. Designed for warmth, mobility, and comfort in extreme conditions, so you can focus on the thrill of the descent.",
    },
    {
      title: "Jackets",
      key: "jackets" as ProductCategory,
      description:
        "Stylish, breathable outerwear that keeps you warm and protected. Built to block wind and repel moisture, these jackets adapt to changing weather for all-day comfort.",
    },
    {
      title: "Pants",
      key: "pants" as ProductCategory,
      description:
        "Durable, comfortable bottoms for active or casual wear. Made with resilient materials to handle any adventure while keeping you stylish and mobile.",
    },
  ];

  const accordionItems: CategoryItem[] = categories.map((category) => {
    const selectedProducts = products[category.key]?.slice(0, 2) || [];
    const images = selectedProducts.map((product: { image: string; }) => product.image);

    return {
      title: category.title,
      content: <CategoryDetails description={category.description} images={images} />,
    };
  });

  return (
    <section className="mt-6">
      <h3 className="mb-4">Categories</h3>
      <Accordion items={accordionItems} />
    </section>
  );
};

export default Categories;