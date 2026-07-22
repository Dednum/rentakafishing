"use client";

import Link from "next/link";
import StoreDropdown from "./StoreDropdown";

export default function DesktopMenu({
  menus,
  navLink,
  storeMenu,
  storeOpen,
  setStoreOpen,
  selectedCountry,
  setSelectedCountry,
}) {
  return (
    <div
      className="
        hidden
        md:flex
        items-center
        gap-10
        text-xl
      "
    >
      {menus.map((menu) => (
        <Link
          key={menu.name}
          href={menu.href}
          className={navLink}
        >
          {menu.name}
        </Link>
      ))}

      <div className="relative">
        <button
          onClick={() => setStoreOpen(!storeOpen)}
          className={`${navLink} border-none bg-transparent outline-none cursor-pointer`}
        >
          Stores ▼
        </button>


            {storeOpen && (
                <div
                    className="
                      fixed
                      top-24
                      right-10
                      w-72
                      rounded-xl
                      bg-white
                      shadow-2xl
                      overflow-hidden
                      z-[9999]
                    "
                >
                    <StoreDropdown
                    storeMenu={storeMenu}
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                    setStoreOpen={setStoreOpen}
                    />
                </div>
            )}
      </div>
    </div>
  );
}