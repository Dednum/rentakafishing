"use client";

import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

export default function ProductHero({ data }) {

  const [selectedImage, setSelectedImage] = useState(data.gallery[0]);

  return (

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT */}

      <div>

        <div className="bg-gray-50 rounded-3xl p-6 shadow-lg">

          <Image
            src={selectedImage}
            alt={data.name}
            width={800}
            height={800}
            className="
              w-full
              object-contain
              rounded-2xl
              transition-all
              duration-300
            "
          />

        </div>

        {/* Gallery */}

        <div className="flex gap-4 mt-6">

          {data.gallery.map((image) => (

            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              className={`
                rounded-xl
                overflow-hidden
                border-2
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg

                ${
                  selectedImage === image
                    ? "border-red-600"
                    : "border-gray-200 hover:border-red-600"
                }
              `}
            >

              <Image
                src={image}
                alt=""
                width={90}
                height={90}
                className="w-20 h-20 object-cover"
              />

            </button>

          ))}

        </div>

      </div>

      {/* RIGHT */}

      <div className="relative">

        {/* Watermark */}

        <h2
          className="
            absolute
            -top-10
            left-0
            text-8xl
            font-black
            text-gray-100
            -z-10
            select-none
          "
        >
          {data.name.toUpperCase()}
        </h2>

        <p className="uppercase tracking-[6px] text-red-600 font-semibold">
          Rentaka Fishing
        </p>

        <h1 className="text-6xl font-black text-black mt-4">
          {data.name}
        </h1>

        <p className="text-2xl text-gray-500 mt-4">
          {data.tagline}
        </p>

        <p className="mt-8 text-gray-600 leading-8 text-lg">
          {data.description}
        </p>

        {/* Highlights */}

        {data.highlights && (

          <div className="mt-10 space-y-4">

            {data.highlights.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >

                <FaCheckCircle className="text-red-600" />

                <span className="text-gray-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

        )}

        {/* WhatsApp */}

        <button
          className="
            mt-12
            inline-flex
            items-center
            gap-3
            bg-black
            text-white
            px-8
            py-4
            rounded-full
            hover:bg-red-600
            transition-all
            duration-300
            hover:scale-105
          "
        >

          <FaWhatsapp className="text-2xl" />

          Contact via WhatsApp

        </button>

      </div>

    </div>

  );

}