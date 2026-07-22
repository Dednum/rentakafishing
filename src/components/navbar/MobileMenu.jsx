"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import StoreDropdown from "./StoreDropdown";

export default function MobileMenu({
  isProductPage,
  open,
  setOpen,
  menus,
  storeMenu,
  storeOpen,
  setStoreOpen,
  selectedCountry,
  setSelectedCountry,
}) {
  return (
    <>
      {/* Hamburger Button */}
      {!isProductPage && (
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      )}

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 top-full w-full bg-black md:hidden z-50">

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

          <div className="border-b border-gray-800">
            <button
              onClick={() => {
                setStoreOpen(!storeOpen);
                setSelectedCountry(null);
              }}
              className="block w-full px-6 py-4 text-left text-white hover:bg-red-600"
            >
              Stores
            </button>



                {storeOpen && (
                    <div className="    bg-[#111]
    max-h-[320px]
    overflow-y-auto">
                        <StoreDropdown
                        mobile
                        storeMenu={storeMenu}
                        selectedCountry={selectedCountry}
                        setSelectedCountry={setSelectedCountry}
                        setStoreOpen={setStoreOpen}
                        setOpen={setOpen}
                        />
                    </div>
                )}

          </div>

        </div>
      )}
    </>
  );
}