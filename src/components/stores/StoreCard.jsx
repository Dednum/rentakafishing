"use client";
import { MapPinned, MessageCircle } from "lucide-react";

export default function StoreCard({
  store,
  isSelected,
  onSelect,
}) {

const hasLocation =
  store.location?.lat !== "" &&
  store.location?.lng !== "";

  return (
    <button
      onClick={onSelect}
      className={`
        w-full
        rounded-xl
        border
        p-5
        text-left
        transition

        ${
          isSelected
            ? "border-red-600 bg-red-50"
            : "border-gray-200 hover:border-red-400"
        }
      `}
    >
        <h3 className="text-xl font-bold text-[#111111]">
            {store.name}
        </h3>

        <p className="mt-2 text-gray-600">
            {store.city}
        </p>

        <p className="text-gray-500">
            {store.state}
        </p>

        <div className="mt-5 flex flex-col gap-3">

        {store.location?.googleMaps && (
        <a
            href={store.location.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="
            mt-3
            flex
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-red-600
            py-2
            text-sm
            font-semibold
            text-white
            hover:bg-red-700
            transition
            "
        >
            <MapPinned size={18} />
            Open in Google Maps
        </a>
        )}

        {store.contact?.whatsapp && (
            <a
            href={`https://wa.me/${store.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-green-600
                py-2
                text-sm
                font-semibold
                text-white
                hover:bg-green-700
                transition
            "
            >
            <MessageCircle size={18} />
            WhatsApp
            </a>
        )}

        </div>
    </button>
  );
}