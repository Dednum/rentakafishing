"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProductGallery({
  product,
  images,
}) {

  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

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
        <img
          src={selectedImage}
          alt={product.name}
          width={2000}
          height={2000}
          className="
            w-full
            h-auto
            object-contain
            p-8
          "
        />
      </div>

      {/* Thumbnail */}
      <div className="flex gap-4 overflow-x-auto max-w-full">

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`
              relative
              w-20
              h-20
              flex-shrink-0
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