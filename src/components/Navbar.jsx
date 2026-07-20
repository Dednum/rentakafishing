"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const isProductPage = pathname.startsWith("/product");

  const menus = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Product",
    href: "/product/rod",
  },
  {
    name: "Stores",
    href: "/stores",
  },
  {
    name: "Contact Us",
    href: "/#contact",
  },
];

  const navLink = `
    relative
    text-white
    font-medium
    transition-all
    duration-300
    hover:text-red-500

    after:absolute
    after:left-1/2
    after:-translate-x-1/2
    after:-bottom-2
    after:h-[3px]
    after:w-0
    after:rounded-full
    after:bg-red-600
    after:transition-all
    after:duration-300

    hover:after:w-full
  `;

  return (
    <header className=" bg-black">

      <nav className="
relative 
flex 
items-center 
justify-between 
px-4
md:px-10
py-5
">

        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Rentaka Logo"
          width={180}
          height={60}
          priority
          className="w-32 md:w-64 h-auto"
        />

        {/* Menu */}
        <div className="
hidden
md:flex
items-center
gap-10
text-xl
">

          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              className={navLink}
            >
              {menu.name}
            </Link>
          ))}

        </div>

        {/* hamburger button */}
        {!isProductPage && (
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full">


          {/* Red line */}
          <div className="h-[3px] bg-red-600"></div>

        {/* White line */}
          <div className="h-[1px] bg-white"></div>

        </div>

        {open && (
          <div className="md:hidden bg-black">

            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                onClick={() => setOpen(false)}
                className="
                  block
                  px-6
                  py-4
                  text-white
                  border-b
                  border-gray-800
                  hover:bg-red-600
                  transition
                "
              >
                {menu.name}
              </Link>
            ))}

          </div>
        )}

      </nav>

    </header>
  );
}