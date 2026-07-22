"use client";

import { useEffect, useMemo, useState } from "react";
import CategoryBanner from "@/components/CategoryBanner";
import StoreList from "@/components/stores/StoreList";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const StoreMap = dynamic(
  () => import("@/components/stores/StoreMap"),
  {
    ssr: false,
  }
);

function filterStores(stores, query) {
  const trimmed = query.trim().toLowerCase();

  if (!trimmed) {
    return stores;
  }

  return stores.filter((store) => {
    const searchable = [
      store.name,
      store.city,
      store.state,
      store.country,
      store.address,
      store.contact?.person,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchable.includes(trimmed);
  });
}

export default function StoreLocator({ stores }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStoreId, setSelectedStoreId] = useState(stores[0]?.id ?? null);

  const filteredStores = useMemo(
    () => filterStores(stores, searchQuery),
    [stores, searchQuery]
  );

  const selectedStore =
    stores.find((store) => store.id === selectedStoreId) ?? stores[0];

  useEffect(() => {
    const isSelectedVisible = filteredStores.some(
      (store) => store.id === selectedStoreId
    );

    if (!isSelectedVisible) {
      setSelectedStoreId(filteredStores[0]?.id ?? null);
    }
  }, [filteredStores, selectedStoreId]);

  return (
    <section className="bg-white min-h-screen">

      <div className="max-w-7xl mx-auto pt-2 pb-20 px-6">

        <div className="max-w-7xl mx-auto bg-white px-6 pt-3 pb-0 lg:hidden">
          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              py-2
              text-gray-500
              hover:text-red-600
              transition
            "
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </div>

        <CategoryBanner
          title="Stores"
          subtitle="FIND RENTAKA NEAR YOU"
          accent="red"
        />

        <div className="text-center mb-10">

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Browse our authorized dealers and stockists.
            Select a store to view its location on the map.
          </p>

        </div>



        <div
          className="
            mt-8
            grid
            grid-cols-1
            lg:grid-cols-5
            gap-8
            items-start
          "
        >

          {/* Store List */}
          <div
            className="
              order-2
              lg:order-1
              lg:col-span-2
            "
          >
            <StoreList
              stores={filteredStores}
              selectedStoreId={selectedStoreId}
              onSelectStore={setSelectedStoreId}
            />
          </div>

          {/* Store Map */}
          <div
            className="
              order-1
              lg:order-2
              lg:col-span-3
              lg:sticky
              lg:top-8
            "
          >
            {selectedStore && (
              <StoreMap store={selectedStore} />
            )}
          </div>

        </div>

      </div>

    </section>
  );
}
