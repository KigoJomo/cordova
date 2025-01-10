"use client"

import Link from "next/link";
import { FC, useState } from "react";

const Header: FC = () => {
  const favsCount = 0
  const cartCount = 0

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const pages = [
    {
      name: "ski suits",
      href: "/"
    },
    {
      name: "jackets",
      href: "/"
    },
    {
      name: "pants",
      href: "/"
    },
    {
      name: "layers",
      href: "/"
    },
    {
      name: "accessories",
      href: "/"
    },
    {
      name: "resort",
      href: "/"
    },
  ]

  return (
    <header className={`sticky top-0 z-30 h-fit bg-background border-b overflow-hidden`}>
      <div className="w-full h-12 flex items-center justify-between">
        <button className="uppercase cursor-pointer font-semibold" onClick={toggleMenu}>
          menu
        </button>

        <div className="fav-cart flex items-center gap-4">
          <button className="uppercase cursor-pointer font-semibold">
            favs({favsCount})
          </button>

          <button className="uppercase cursor-pointer font-semibold">
            cart({cartCount})
          </button>
        </div>
      </div>

      <div className={`flex flex-col justify-between ${menuOpen ? 'h-40 mt-4 opacity-100' : 'h-0 mt-0 opacity-0'} transition-all duration-300`}>
        {pages.map((page, index) => (
          <Link key={index} href={page.href} className="uppercase text-sm">
            {index + 1}/{page.name}
          </Link>
        ))}
      </div>

    </header>
  )
}

export default Header