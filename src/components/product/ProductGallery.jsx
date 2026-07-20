"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ product }) {
  const images =
    product.gallery?.length > 0
      ? product.gallery
      : [product.image];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-5">

      {/* Main Image */}
      <div
        className="
          relative
          w-full
          aspect-square
          rounded-3xl
          bg-gray-100
          overflow-hidden
          border
          border-gray-200
        "
      >
        <Image
          src={selectedImage}
          alt={product.name}
          fill
          className="
            object-contain
            p-8
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </div>

      {/* Thumbnail */}
      <div className="flex gap-4 overflow-x-auto">

        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`
              relative
              w-24
              h-24
              rounded-xl
              overflow-hidden
              border-2
              transition-all

              ${
                selectedImage === image
                  ? "border-[#0A483D]"
                  : "border-gray-200 hover:border-[#EB9F36]"
              }
            `}
          >
            <Image
              src={image}
              alt={`${product.name}-${index}`}
              fill
              className="object-contain p-2"
            />
          </button>
        ))}

      </div>

    </div>
  );
}