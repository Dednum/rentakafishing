"use client";

import { useState, useEffect } from "react";

import ProductGallery from "./ProductGallery";
import VariantSelector from "./VariantSelector";
import ProductSpecs from "./ProductSpecs";
import SizeSelector from "./SizeSelector";

export default function ProductInfo({ product }) {

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0] ?? null
  );

  const [selectedSize, setSelectedSize] = useState(
      product.variants[0]?.sizes?.[0] ?? null
  );

  const [selectedColour, setSelectedColour] = useState(
    product.colours?.[0] ?? null
  );

  const displayImages =
  product.colours?.length > 0 && selectedColour
    ? [
        selectedColour.image,
        ...(product.gallery ?? []),
      ]
    : selectedVariant?.gallery?.length > 0
    ? selectedVariant.gallery
    : product.gallery?.length > 0
    ? product.gallery
    : [product.image];

  useEffect(() => {
      setSelectedSize(selectedVariant?.sizes?.[0] ?? null);
  }, [selectedVariant]);

  useEffect(() => {
    setSelectedColour(product.colours?.[0] ?? null);
  }, [product]);

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 min-w-0">

          {/* LEFT */}
          <ProductGallery
              product={product}
              images={displayImages}
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

            {/* colourline */}
            {product.colours?.length > 0 && (
              <div className="mt-8">

                <h3 className="font-semibold text-lg mb-5 text-black">
                  Choose Colour
                </h3>

                <div className="flex flex-wrap gap-8">

                  {product.colours.map((colour) => (

                    <button
                      key={colour.id}
                      onClick={() => setSelectedColour(colour)}
                      className="flex flex-col items-center gap-3 group"
                    >

                      <div
                        className={`
                          w-12
                          h-12
                          rounded-full
                          border-2
                          transition-all
                          duration-300

                          ${
                            selectedColour?.id === colour.id
                              ? "ring-4 ring-[#0A483D]/20 border-[#0A483D] scale-110"
                              : "border-gray-300 group-hover:scale-105"
                          }
                        `}
                        style={{
                          backgroundColor:
                            colour.id === "blue"
                              ? "#2D9CFF"
                              : colour.id === "red"
                              ? "#E53935"
                              : "#39D353",
                        }}
                      />

                      <span
                        className={`text-sm font-medium transition-colors ${
                          selectedColour?.id === colour.id
                            ? "text-[#0A483D]"
                            : "text-gray-600"
                        }`}
                      >
                        {colour.name}
                      </span>

                    </button>

                  ))}

                </div>

              </div>
            )}

            {/* Variant */}
            {product.variants && (
              <div className="mt-12">

                <h3 className="font-semibold text-lg mb-5 text-black">
                  Choose Variant
                </h3>

                <VariantSelector
                  variants={product.variants}
                  selectedVariant={selectedVariant}
                  setSelectedVariant={setSelectedVariant}
                  sizes={selectedVariant.sizes}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                />

              </div>
            )}


            {/* Size */}
            {selectedVariant?.sizes && (
              <div className="mt-8">

                <h3 className="font-semibold text-lg mb-5 text-black">
                  Choose Size
                </h3>

                <SizeSelector
                  sizes={selectedVariant.sizes}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                />

              </div>
            )}

            {/* Specs */}
            <div className="mt-12">

              <h3 className="font-semibold text-lg mb-5 text-black">
                Specifications
              </h3>

              <ProductSpecs
                specs={
                  selectedVariant?.specifications ??
                  selectedVariant?.specs ??
                  (selectedVariant?.power
                    ? [
                        { label: "PE", value: selectedVariant.pe },
                        { label: "Power", value: selectedVariant.power },
                        { label: "Diameter", value: selectedVariant.diameter },
                        {
                          label: "Length",
                          value: selectedVariant.lengths.join(" / "),
                        },
                      ]
                    : product.specifications ?? [])
                }
                selectedSize={selectedSize}
              />



            </div>

            

          </div>

        </div>

      </div>
    </section>
  );
}