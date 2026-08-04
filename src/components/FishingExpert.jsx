"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import crew from "@/data/crewData";

export default function FishingExpert() {
  // =========================
  // STATES
  // =========================
  const [open, setOpen] = useState(false);

  // =========================
  // EMBLA
  // =========================
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  // =========================
  // AUTOPLAY
  // =========================
  useEffect(() => {
    if (!emblaApi || !open) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2500);

    return () => clearInterval(interval);
  }, [emblaApi, open]);

  const stopAuto = useCallback(() => {
    // autoplay dihentikan bila hover
  }, []);

  const startAuto = useCallback(() => {
    // autoplay sambung semula bila mouse keluar
  }, []);

  return (
    <section
      id="crew"
      className="bg-[#081B1E] text-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-[#EB9F36] text-sm md:text-base">
            Meet Our Team
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Expert Rentaka Crew
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            Explore our experienced anglers and crew behind Rentaka Fishing.
          </p>

        </div>

        {/* ========================= */}
        {/* POSTER */}
        {/* ========================= */}

        <div className="mt-16 flex justify-center">

          <div
            onClick={() => setOpen(!open)}
            className="
            relative
            w-full
            max-w-xs
            sm:max-w-md
            md:max-w-3xl
            lg:max-w-5xl
            rounded-3xl
            overflow-hidden
            shadow-2xl
            ring-1
            ring-white/10
            group
            cursor-pointer
            "
          >

            <Image
              src="/crew/crewcrew0.webp"
              alt="Rentaka Crew"
              width={1800}
              height={1000}
              priority
              className="
              w-full
              h-auto
              object-cover
              transition-all
              duration-700
              group-hover:scale-105
              "
            />

            {/* Overlay */}

            <div
              className="
              hidden
              md:flex

              absolute
              inset-0
              bg-black/60
              opacity-0
              group-hover:opacity-100
              transition
              duration-500

              flex-col
              items-center
              justify-center
              text-center
            "
            >

              <h3 className="text-4xl font-bold">
                Meet Our Crew
              </h3>

              <p className="mt-4 text-gray-200">
                Click to Explore
              </p>

              <div className="mt-8 text-5xl animate-bounce">
                ↓
              </div>

            </div>

          </div>

        </div>

        <div className="mt-6 flex justify-center md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="
              bg-[#EB9F36]
              text-white
              px-6
              py-3
              rounded-full
              font-semibold
              shadow-lg
              active:scale-95
              transition
            "
          >
            {open ? "Hide Crew" : "Explore Our Crew"}
          </button>
        </div>

        {/* ========================= */}
        {/* EXPAND SECTION */}
        {/* ========================= */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-700
            ${
              open
                ? "max-h-[800px] opacity-100 mt-14"
                : "max-h-0 opacity-0"
            }
          `}
        >

          {/* PART 2 SAMBUNG SINI */}
          <div className="relative">
            <div
              ref={emblaRef}
              className="overflow-hidden "
              onMouseEnter={stopAuto}
              onMouseLeave={startAuto}
            >
              <div className="flex px-16">

                {crew.map((member, index) => (
                  <div
                  key={index}
                  className="
                  flex-[0_0_150px]
                  sm:flex-[0_0_170px]
                  md:flex-[0_0_200px]
                  lg:flex-[0_0_220px]
                  px-4
                  py-4
                  "
                  >
                    <div
                      className="
                        group
                        flex
                        flex-col
                        items-center
                        cursor-pointer
                        transition-all
                        duration-300
                        overflow-visible
                        hover:-translate-y-2
                      "
                    >

                      {/* Avatar */}

                      <div
                        className="
                          relative
                          w-24
                          h-24
                          md:w-28
                          md:h-28
                          lg:w-32
                          lg:h-32
                          rounded-full
                          overflow-hidden
                          border-4
                          border-white/20
                          transition-all
                          duration-500
                          group-hover:border-[#a80000]
                          group-hover:scale-110


                          shadow-lg
                        "
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-110
                          "
                        />
                      </div>

                      {/* Name */}

                      <h3
                        className="
                          mt-6
                          text-xl
                          font-semibold
                          text-center
                          transition
                        "
                      >
                        {member.name}
                      </h3>

                      {/* Role */}

                      <p
                        className="
                          mt-2
                          text-sm
                          text-[#EB9F36]
                          tracking-wide
                          text-center
                        "
                      >
                        {member.role}
                      </p>

                    </div>
                  </div>
                ))}

              </div>
            </div>

             {/* Left Gradient */}

            <div
                className="
                pointer-events-none
                absolute
                left-0
                top-0
                h-full
                w-24
                bg-gradient-to-r
                from-[#081B1E]
                to-transparent
                z-20
                "
            />

            {/* Right Gradient */}

            <div
                className="
                pointer-events-none
                absolute
                right-0
                top-0
                h-full
                w-24
                bg-gradient-to-l
                from-[#081B1E]
                to-transparent
                z-20
                "
            />
          </div>
          
        </div>

      </div>
    </section>
  );
}