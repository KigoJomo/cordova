// components/Header.tsx
'use client';

import { AlignLeft, Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import SideMenu from './SideMenu';
import MenuButton from './MenuButton';

const Header: FC = () => {
  const favsCount = 0;
  const cartCount = 0;

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [wishlistOpen, setWishlistOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const pages = [
    { name: 'ski suits', href: '/' },
    { name: 'jackets', href: '/' },
    { name: 'pants', href: '/' },
    { name: 'layers', href: '/' },
    { name: 'accessories', href: '/' },
    { name: 'resort', href: '/' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-background border-b">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo and Menu Button */}
        <div className="flex items-center gap-4">
          <button onClick={() => setMenuOpen(true)} className="text-gray-700 focus:outline-none">
            <AlignLeft />
          </button>

          <Link href="/">
            <Image
              src="/images/logo.webp"
              alt="Cordova Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Favorites and Cart */}
        <div className="flex items-center gap-4 md:gap-8">
          <MenuButton
            onClick={() => setWishlistOpen(true)}
            icon={<Heart className="md:hidden" />}
            label="wishlist"
            count={favsCount}
          />

          <MenuButton
            onClick={() => setCartOpen(true)}
            icon={<ShoppingCart className="md:hidden" />}
            label="cart"
            count={cartCount}
          />
        </div>
      </div>

      {/* Navigation Side Menu */}
      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} position="left">
        <ul className="flex flex-col gap-6 ">
          {pages.map((page, index) => (
            <li key={index}>
              <Link
                href={page.href}
                className="uppercase text-lg font-semibold border-b border-transparent hover:border-foreground transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </SideMenu>

      {/* Wishlist Side Menu */}
      <SideMenu isOpen={wishlistOpen} onClose={() => setWishlistOpen(false)} position="right">
        <div className="">
          <h2 className="uppercase text-lg font-semibold mb-6">Wishlist</h2>
          <p className="text-gray-700">Your wishlist is empty.</p>
        </div>
      </SideMenu>

      {/* Cart Side Menu */}
      <SideMenu isOpen={cartOpen} onClose={() => setCartOpen(false)} position="right">
        <div className="">
          <h2 className="uppercase text-lg font-semibold mb-6">Cart</h2>
          <p className="text-gray-700">Your cart is empty.</p>
        </div>
      </SideMenu>
    </header>
  );
};

export default Header;