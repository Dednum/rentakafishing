"use client";

import Link from "next/link";

export default function StoreDropdown({
  mobile = false,
  storeMenu,
  selectedCountry,
  setSelectedCountry,
  setStoreOpen,
  setOpen,
}) {

  const countryClass = mobile
    ? "flex w-full justify-between px-10 py-3 text-white hover:bg-red-600"
    : "flex w-full items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-100";

  const stateClass = mobile
    ? "block px-10 py-3 text-white hover:bg-red-600"
    : "block px-4 py-3 text-gray-800 hover:bg-gray-100";

  const backClass = mobile
    ? "w-full px-10 py-3 text-left text-white hover:bg-red-600"
    : "w-full border-b px-4 py-3 text-left text-gray-800 font-medium hover:bg-gray-100";

  return (
    <>
      {!selectedCountry ? (
        storeMenu.map((country) => (
          <button
            key={country.country}
            onClick={() => setSelectedCountry(country)}
            className={countryClass}
          >
            <span>{country.country}</span>
            <span>›</span>
          </button>
        ))
      ) : (
        <>
          <button
            onClick={() => setSelectedCountry(null)}
            className={backClass}
          >
            ← Back
          </button>

          {selectedCountry.states.map((state) => (
            <Link
              key={state.slug}
              href={`/stores/${selectedCountry.countrySlug}/${state.slug}`}
              onClick={() => {
                setStoreOpen(false);
                setSelectedCountry(null);

                if (setOpen) {
                  setOpen(false);
                }
              }}
              className={stateClass}
            >
              {state.name}
            </Link>
          ))}
        </>
      )}
    </>
  );
}