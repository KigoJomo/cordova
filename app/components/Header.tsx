// components/Header.tsx
'use client';

import { AlignLeft, Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import SideMenu from './SideMenu';
import MenuButton from './MenuButton';
import { usePathname } from 'next/navigation';

const Header: FC = () => {
  const favsCount = 0;
  const cartCount = 0;

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [favsOpen, setFavsOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const pages = [
    { name: 'all products', href: '/products' },
    { name: 'ski suits', href: '/collections/ski-suits' },
    { name: 'jackets', href: '/collections/jackets' },
    { name: 'pants', href: '/collections/pants' },
    { name: 'account', href: '/account' },
  ];

  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-background border-b">
      <div className="container mx-auto flex justify-between items-center py-2">
        <nav className="w-1/3 hidden md:flex items-center gap-8">
          {pages.slice(0, 4).map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className={`uppercase text-sm border-b-2 ${
                pathname.match(page.href)
                  ? 'border-foreground'
                  : 'border-transparent'
              } hover:border-foreground transition-all duration-500`}>
              {page.name}
            </Link>
          ))}
        </nav>

        {/* Logo and MenuButton */}
        <div className="flex items-center gap-4 md:mx-auto">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-gray-700 focus:outline-none md:hidden">
            <AlignLeft />
          </button>

          <Link href="/" className="">
            <Image
              src="/images/logo.webp"
              alt="Cordova Logo"
              width={100}
              height={50}
              className="object-contain md:hover:scale-105 transition-all duration-300"
            />
          </Link>
        </div>

        {/* Favorites and Cart */}
        <div className="md:w-1/3 flex items-center md:justify-end gap-4 md:gap-8">
          <MenuButton
            onClick={() => setFavsOpen(true)}
            icon={<Heart className="md:hidden" />}
            label="favorites"
            count={favsCount}
          />

          <MenuButton
            onClick={() => setCartOpen(true)}
            icon={<ShoppingCart className="md:hidden" />}
            label="cart"
            count={cartCount}
          />

          <Link
            href={'/account'}
            className="hidden md:flex uppercase text-sm border-b-2 border-transparent hover:border-foreground transition-all duration-500">
            account
          </Link>
        </div>
      </div>

      {/* Navigation Side Menu */}
      <SideMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        position="left">
        <ul className="flex flex-col gap-6 ">
          {pages.map((page, index) => (
            <li key={index}>
              <Link
                href={page.href}
                className="uppercase text-lg font-semibold border-b-2 border-transparent hover:border-foreground transition-all duration-300"
                onClick={() => setMenuOpen(false)}>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </SideMenu>

      {/* Favorites Side Menu */}
      <SideMenu
        isOpen={favsOpen}
        onClose={() => setFavsOpen(false)}
        position="right">
        <div className="">
          <h2 className="uppercase text-lg font-semibold mb-6">Favorites</h2>
          <p className="text-gray-700">Your favs list is empty.</p>
        </div>
      </SideMenu>

      {/* Cart Side Menu */}
      <SideMenu
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        position="right">
        <div className="">
          <h2 className="uppercase text-lg font-semibold mb-6">Cart</h2>
          <p className="text-gray-700">Your cart is empty.</p>
        </div>
      </SideMenu>
    </header>
  );
};

export default Header;
