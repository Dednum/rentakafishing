"use client";

import Image from "next/image";
import FadeUp from "./animations/FadeUp";


export default function AwardsSection() {
const igfaAnglers = [
  {
    id: "mohd-aliff",
    number: "01",
    name: "Mohd Aliff",
    title: "IGFA World Record • Toman",
    achievement: "Toman — 13.15 kg",
    image: "/award/igfa/alif10.png",
    description:
      "Set an IGFA world record for a 13.15 kg toman in the 50 lb line class, caught in Rawang.",
  },

  {
    id: "khirfirdaus",
    number: "02",
    name: "Khirfirdaus",
    title: "IGFA World Record • Tapah",
    achievement: "Tapah — 8.16 kg",
    image: "/award/igfa/khir2.png",
    description:
      "Recorded an IGFA world record for an 8.16 kg tapah caught at Sungai Siong, Sibu.",
  },

  {
    id: "mohd-amzari",
    number: "03",
    name: "Mohd Amzari",
    title: "IGFA All-Tackle World Record",
    achievement: "Tapah — 19.13 kg",
    image: "/award/igfa/amzari.png",
    description:
      "Set the IGFA All-Tackle World Record for tapah with a 19.13 kg catch from Sungai Bernam.",
  },
];
  return (
    <section className="relative overflow-hidden bg-white py-20 text-black">

      {/* Background texture */}
      <div className="absolute ">
        <Image
          src="/background.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Red glow / accent */}
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-12 text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-red-500">
            Recognition & Excellence
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Awards{" "}
            <span className="text-red-600">&</span>{" "}
            Achievements
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Recognition that reflects our commitment to performance,
            innovation, and excellence in fishing.
          </p>

        </div>




        {/* ================= AWARDS GRID ================= */}
        <div className="grid gap-6 lg:grid-cols-2">


          {/* ================= IGFA ================= */}
          <div className="group/igfa relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-6 transition duration-500 hover:border-red-600/60 sm:p-8">

            {/* Red corner */}
            <div className="absolute right-0 top-0 h-24 w-24 bg-red-600/10 blur-2xl transition duration-500 group-hover/igfa:bg-red-600/20" />

            <div className="relative">

              {/* Award heading */}
              <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
                    International Recognition
                  </p>

                  <h3 className="mt-2 text-3xl text-gray-300 uppercase italic sm:text-4xl">
                    IGFA
                  </h3>

                  <p className="mt-1 text-xl font-medium text-white">
                    International Game Fish Association
                  </p>
                </div>

                <Image
                  src="/logo/igfa.png"
                  alt="International Game Fish Association"
                  width={163}
                  height={63}
                  className="h-auto w-[130px] sm:w-[163px]"
                />

              </div>


              {/* Anglers */}
              <div className="space-y-4">
                {igfaAnglers.map((angler) => (
                  <AwardPerson
                    key={angler.id}
                    {...angler}
                  />
                ))}
              </div>

            </div>
          </div>


          {/* ================= MGDA ================= */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-6 transition duration-500 hover:border-red-600/60 sm:p-8">

            {/* Background red shape */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/10 blur-3xl transition duration-500 group-hover:bg-red-600/20" />

            <div className="relative">

              <div className="mb-8 flex items-start justify-between">

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
                    National Recognition
                  </p>

                  <h3 className="mt-2 text-3xl text-gray-300 uppercase italic sm:text-4xl">
                    MGDA
                  </h3>

                  <p className="mt-1 text-xl font-medium text-white">
                    Malaysia Good Design Award
                  </p>
                </div>


                <Image
                src="/logo/mgda.jpg"
                alt="Fishing Lake"
                width="43"
                height="13"
                className="
                "
                />


              </div>

              <div className="grid grid-cols-3 gap-2">

                {/* LEFT */}
                <div className="space-y-2">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                    <Image
                      src="/award/mgda/1.jpg"
                      alt="Rentaka Blackheart"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                    <Image
                      src="/award/mgda/2.jpg"
                      alt="Rentaka Blackheart"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>


                {/* CENTER */}
                <div className="space-y-2 pt-6">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                    <Image
                      src="/award/mgda/5.jpg"
                      alt="Rentaka Blackheart"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                    <Image
                      src="/award/mgda/6.jpg"
                      alt="Rentaka Blackheart"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>


                {/* RIGHT */}
                <div className="space-y-2">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                    <Image
                      src="/award/mgda/3.jpg"
                      alt="Rentaka Blackheart"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                    <Image
                      src="/award/mgda/4.jpg"
                      alt="Rentaka Blackheart"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

            </div>
            {/* Winner */}
            <a
              href="/awards/mgda/blackheart"
              className="
                group/mgda-winner
                relative
                mt-6
                block
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-gray-200
                p-6
                transition-all
                duration-500
                hover:border-red-600/60
                sm:p-8
              "
            >
              <div className="relative">

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
                  Award Winner
                </p>

                <h4 className="mt-3 text-2xl font-black uppercase sm:text-3xl">
                  Rentaka
                  <br />
                  <span className="text-red-600">
                    Blackheart
                  </span>
                </h4>

                <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
                  Recognized for its distinctive design, innovation,
                  and premium identity in fishing equipment.
                </p>

                {/* View Details - muncul bila hover
                <div
                  className="
                    mt-0
                    max-h-0
                    overflow-hidden
                    opacity-0
                    transition-all
                    duration-500
                    group-hover/mgda-winner:mt-4
                    group-hover/mgda-winner:max-h-10
                    group-hover/mgda-winner:opacity-100
                  "
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                    View Details →
                  </span>
                </div> */}

              </div>
            </a>

            </div>
          </div>

        </div>




{/* ================= BOTTOM STATEMENT ================= */}
<div className="mt-10 border-t border-white/10 pt-8 text-center">
  <p className="px-1 text-[8px] font-black uppercase tracking-[0.08em] text-gray-500 sm:px-0 sm:text-sm sm:tracking-[0.35em]">
    Recognized
    <span className="mx-1 text-red-600">•</span>
    Respected
    <span className="mx-1 text-red-600">•</span>
    Unstoppable
  </p>
</div>



      </div>

    </section>
  );
}


/* ================= PERSON COMPONENT ================= */

function AwardPerson({
  id,
  number,
  name,
  title,
  image,
  description,
}) {
  return (
    <a
      href={`/awards/igfa/${id}`}
      className="
        group
        relative
        block
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-zinc-900
        transition-all
        duration-500
        hover:border-red-600/60
      "
    >

      {/* IMAGE */}
      <div className="relative aspect-[16/7] overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-black/10
          "
        />

      </div>


      {/* CONTENT */}
      <div className="absolute inset-x-0 bottom-0 p-5">

        {/* Number */}
        <span
          className="
            inline-flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            border border-red-500/70
            bg-black/70
            text-xs
            font-black
            text-red-500
          "
        >
          {number}
        </span>


        {/* Name */}
        <h4 className="mt-3 text-lg font-bold uppercase tracking-wide text-white">
          {name}
        </h4>


        {/* Title */}
        <p className="mt-1 text-xs text-gray-300">
          {title}
        </p>


        {/* Description */}
        <p
          className="
            mt-2
            max-h-5
            overflow-hidden
            text-xs
            leading-5
            text-gray-400
            transition-all
            duration-500
            group-hover:max-h-24
          "
        >
          {description}
        </p>


        {/* View story */}
        <div
          className="
            mt-0
            max-h-0
            overflow-hidden
            opacity-0
            transition-all
            duration-500
            group-hover:mt-3
            group-hover:max-h-10
            group-hover:opacity-100
          "
        >
          <span
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-red-500
            "
          >
            View Full Story →
          </span>
        </div>

      </div>

    </a>
  );
}