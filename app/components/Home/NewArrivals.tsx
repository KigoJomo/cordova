"use client"

import { Product } from "@/types/declarations";
import { FC, useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const NewArrivals: FC = () => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then(res => res.json())
      .then(data => {
        const merged = [
          ...data.jackets,
          ...data.ski_suits,
          ...data.pants,
        ];

        const random = merged.sort(() => 0.5 - Math.random()).slice(0, 4);
        setItems(random);
      });
  }, []);
  return (
    <section className="">
      <h3>New arrivals</h3>

      <div className="w-full grid grid-cols-4 gap-4">
        {items.slice(0, 2).map((item, index) => (
          <ProductCard key={index} {...item} className="col-span-1" />
        ))}
      </div>
    </section>
  )
}

export default NewArrivals