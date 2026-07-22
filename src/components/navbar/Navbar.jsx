"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import stores from "@/data/store";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {

  const [storeOpen, setStoreOpen] = useState(false);
const [selectedCountry, setSelectedCountry] = useState(null);

  function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

const storeMenu = Object.values(
  stores.reduce((acc, store) => {
    const country = store.country;

    if (!acc[country]) {
      acc[country] = {
        country,
        countrySlug: slugify(country),
        states: [],
      };
    }

    if (!acc[country].states.find((s) => s.name === store.state)) {
      acc[country].states.push({
        name: store.state,
        slug: slugify(store.state),
      });
    }

    return acc;
  }, {})
);

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

        <DesktopMenu
          menus={menus}
          navLink={navLink}
          storeMenu={storeMenu}
          storeOpen={storeOpen}
          setStoreOpen={setStoreOpen}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />



        {/* hamburger button */}
        <MobileMenu
          isProductPage={isProductPage}
          open={open}
          setOpen={setOpen}
          menus={menus}
          storeMenu={storeMenu}
          storeOpen={storeOpen}
          setStoreOpen={setStoreOpen}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full">


          {/* Red line */}
          <div className="h-[3px] bg-red-600"></div>

        {/* White line */}
          <div className="h-[1px] bg-white"></div>

        </div>



      </nav>

    </header>
  );
}