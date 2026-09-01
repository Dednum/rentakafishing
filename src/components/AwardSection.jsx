"use client";

import Image from "next/image";

export default function AwardsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">

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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

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
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-6 transition duration-500 hover:border-red-600/60 sm:p-8">

            {/* Red corner */}
            <div className="absolute right-0 top-0 h-24 w-24 bg-red-600/10 blur-2xl transition duration-500 group-hover:bg-red-600/20" />

            <div className="relative">

              {/* Award heading */}
              <div className="mb-8 flex items-start justify-between">

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                    International Recognition
                  </p>

                  <h3 className="mt-2 text-3xl font-black uppercase italic sm:text-4xl">
                    IGFA
                  </h3>

                  <p className="mt-1 text-sm font-medium text-gray-400">
                    International Game Fish Association
                  </p>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-600/30 bg-red-600/10">
                  <span className="text-2xl">🏆</span>
                </div>

              </div>


              {/* Anglers */}
              <div className="space-y-3">

                <AwardPerson
                  number="01"
                  name="Mohd Aliff"
                />

                <AwardPerson
                  number="02"
                  name="Khirfirdaus"
                />

                <AwardPerson
                  number="03"
                  name="Mohd Amzari"
                />

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
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                    National Recognition
                  </p>

                  <h3 className="mt-2 text-3xl font-black uppercase italic sm:text-4xl">
                    MGDA
                  </h3>

                  <p className="mt-1 text-sm font-medium text-gray-400">
                    Malaysia Good Design Award
                  </p>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-600/30 bg-red-600/10">
                  <span className="text-2xl">🏆</span>
                </div>

              </div>


              {/* Winner */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6">

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

              </div>

            </div>
          </div>

        </div>


        {/* ================= BOTTOM STATEMENT ================= */}
        <div className="mt-10 border-t border-white/10 pt-8 text-center">

          <p className="text-xs font-black uppercase tracking-[0.35em] text-gray-500 sm:text-sm">
            Recognized
            <span className="mx-3 text-red-600">•</span>
            Respected
            <span className="mx-3 text-red-600">•</span>
            Unstoppable
          </p>

        </div>

      </div>
    </section>
  );
}


/* ================= PERSON COMPONENT ================= */

function AwardPerson({ number, name }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition duration-300 hover:border-red-600/50 hover:bg-red-600/[0.05]">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-red-600/50 text-xs font-black text-red-500">
        {number}
      </div>

      <div>
        <p className="text-sm font-bold uppercase tracking-wide sm:text-base">
          {name}
        </p>

        <p className="mt-0.5 text-xs text-gray-500">
          IGFA Recognized Angler
        </p>
      </div>

    </div>
  );
}