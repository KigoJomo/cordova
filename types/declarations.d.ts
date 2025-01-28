export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  collection: string;
  type?: string;
}

export type ProductCategory = 'ski_suits' | 'jackets' | 'pants';

export interface Products {
  ski_suits: Product[];
  jackets: Product[];
  pants: Product[];
}
