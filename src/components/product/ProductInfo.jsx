"use client";

import { useState } from "react";

import ProductGallery from "./ProductGallery";
import VariantSelector from "./VariantSelector";
import ProductSpecs from "./ProductSpecs";

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0]
  );

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <ProductGallery
            product={product}
          />

          {/* RIGHT */}
          <div className="flex flex-col">



            {/* Product Name */}
            <h1 className="mt-3 text-5xl font-bold text-[#111111]">
              {product.name}
            </h1>

            {/* Tagline */}
            <p className="mt-3 text-xl text-[#D91E18] italic">
              {product.tagline}
            </p>

            {/* Description */}
            <p className="mt-8 leading-8 text-gray-700">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mt-12">

              <h3 className="font-semibold text-lg mb-5 text-black">
                Choose Variant
              </h3>

              <VariantSelector
                variants={product.variants}
                selectedVariant={selectedVariant}
                setSelectedVariant={setSelectedVariant}
              />

            </div>

            {/* Specs */}
            <div className="mt-12">

              <h3 className="font-semibold text-lg mb-5 text-black">
                Specifications
              </h3>

              <ProductSpecs
                specs={selectedVariant.specs}
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}