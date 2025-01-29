// context/ShopContext.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Product } from '@/types/declarations';

interface CartItem extends Product {
  quantity: number;
}

type ShopContextType = {
  cart: CartItem[];
  favorites: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productName: string) => void;
  toggleFavorite: (product: Product) => void;
};

const ShopContext = createContext<ShopContextType>({} as ShopContextType);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));

    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.name === product.name);
      if (existingItem) {
        return prev.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productName: string) => {
    setCart((prev) =>{
        const existingItem = prev.find(item => item.name === productName);

        if(existingItem?.quantity && existingItem.quantity > 1){
          return prev.map(item => 
            item.name === productName
            ? {...item, quantity: item.quantity - 1}
            : item
          )
        }

        return prev.filter((item) => item.name !== productName);
      });
  };

  const toggleFavorite = (product: Product) => {
    setFavorites((prev) =>
      prev.some((item) => item.name === product.name)
        ? prev.filter((item) => item.name !== product.name)
        : [...prev, product]
    );
  };

  return (
    <ShopContext.Provider
      value={{ cart, favorites, addToCart, removeFromCart, toggleFavorite }}>
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);
