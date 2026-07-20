"use client";

import Link from "next/link";

const tabs = [
  { name: "Rod", slug: "rod" },
  { name: "Line", slug: "line" },
  { name: "Lure", slug: "lure" },
  { name: "Terminal Tackle", slug: "terminal-tackle" },
  { name: "Outfit", slug: "outfit" },
];

export default function ProductTabs({ current }) {
  return (
    <div className="w-full bg-white " >

      <div className="max-w-7xl mx-auto">

                <Link
              href="/"
              className="
                md:hidden
                inline-flex
                items-center
                gap-2
                px-6
                pt-5
                text-gray-600
                hover:text-red-600
                transition
              "
            >
             ← Home
            </Link>

      <div
        className="
          flex
          justify-start
          md:justify-center

          gap-8
          md:gap-12

          py-5
          px-6

          overflow-x-auto
          whitespace-nowrap

          scrollbar-hide
        "
      >

          {tabs.map((tab) => (

            <Link
              key={tab.slug}
              href={`/product/${tab.slug}`}
              className={`
                relative
                flex-shrink-0
                pb-3
                text-base
                md:text-lg
                font-semibold
                transition-all
                duration-300

                ${
                  current === tab.slug
                    ? "text-red-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-red-600"
                    : "text-gray-700 hover:text-red-600"
                }
              `}
            >
              {tab.name}
            </Link>

          ))}

        </div>


      </div>

    </div>
  );
}