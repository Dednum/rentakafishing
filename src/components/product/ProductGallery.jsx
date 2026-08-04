"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProductGallery({
  product,
  images,
}) {

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
    cursor-zoom-in
  "
  onClick={() => setIsFullscreen(true)}
>
  <img
    src={selectedImage}
    alt={product.name}
    width={2000}
    height={2000}
    className="w-full h-auto object-contain p-8"
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

      {isFullscreen && (
  <div
    className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
    onClick={() => setIsFullscreen(false)}
  >
    <img
      src={selectedImage}
      alt={product.name}
      className="max-w-full max-h-full object-contain"
      onClick={(e) => e.stopPropagation()}
    />

    <button
      className="absolute top-5 right-5 text-white text-4xl"
      onClick={() => setIsFullscreen(false)}
    >
      ✕
    </button>
  </div>
)}

    </div>
  );
}