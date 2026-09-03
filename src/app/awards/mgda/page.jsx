"use client";

import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import FadeScale from "@/components/animations/FadeScale";
import { Audiowide } from "next/font/google";

const galleryTop = [
  "/award/mgda/gallery/a.jpg",
  "/award/mgda/gallery/b.jpg",
  "/award/mgda/gallery/c.jpg",
  "/award/mgda/gallery/d.jpg",
  "/award/mgda/gallery/e.jpg",
  "/award/mgda/gallery/f.jpg",
  "/award/mgda/gallery/g.jpg",
  "/award/mgda/gallery/h.jpg",
];

const galleryBottom = [
  "/award/mgda/gallery/i.jpg",
  "/award/mgda/gallery/j.jpg",
  "/award/mgda/gallery/k.jpg",
  "/award/mgda/gallery/l.jpg",
  "/award/mgda/gallery/m.jpg",
  "/award/mgda/gallery/n.jpg",
  "/award/mgda/gallery/o.jpg",
  "/award/mgda/gallery/a.jpg",
];

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
});

function GalleryRow({ images, direction }) {
  return (
    <div className="flex overflow-hidden">
      <div
        className={`
          flex
          gap-5
          w-max
          ${
            direction === "right"
              ? "animate-scroll-right"
              : "animate-scroll-left"
          }
        `}
      >
        {[...images, ...images, ...images].map((img, index) => (
          <div
            key={index}
            className="
              relative
              w-[220px]
              h-[160px]
              sm:w-[260px]
              sm:h-[180px]
              lg:w-[280px]
              lg:h-[200px]
              rounded-2xl
              overflow-hidden
              shrink-0
            "
          >
            <Image
              src={img}
              alt="Rentaka Blackheart MGDA"
              fill
              className="
                object-cover
                hover:scale-110
                transition
                duration-500
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BlackheartPage() {
  return (
    <main className="bg-white text-black">

      {/* ================================================= */}
      {/* HERO / TITLE */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-black py-24">
        <div className="absolute inset-0">
          <Image
            src="/background.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <FadeUp>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-500">
              Malaysia Good Design Award
            </p>

            <h1 className="
              text-4xl
              font-black
              uppercase
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-7xl
            ">
              Rentaka{" "}
              <span className={`${audiowide.className} text-red-600`}>
                Blackheart
              </span>
            </h1>

            <p className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-gray-400
              sm:text-base
            ">
              A recognition of design, innovation and identity
              in modern fishing equipment.
            </p>

          </FadeUp>
        </div>
      </section>


      {/* ================================================= */}
      {/* AWARD MOMENT */}
      {/* ================================================= */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <FadeUp>
            <div className="mb-12">

              <p className="
                text-sm
                font-bold
                uppercase
                tracking-[0.3em]
                text-red-600
              ">
                The Achievement
              </p>

              <h2 className="
                mt-3
                text-3xl
                font-black
                uppercase
                sm:text-4xl
                lg:text-5xl
              ">
                A Moment of Recognition
              </h2>

            </div>
          </FadeUp>


          <div className="
            grid
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-16
          ">

            {/* IMAGE */}
            <FadeScale>
              <div className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-3xl
                bg-gray-100
              ">
                <Image
                  src="/award/mgda/11.jpg"
                  alt="Rentaka Blackheart receiving award"
                  fill
                  className="
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            </FadeScale>


            {/* ARTICLE */}
            <FadeUp>
              <article>

                <span className="
                  inline-block
                  rounded-full
                  bg-red-600
                  px-4
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white
                ">
                  MGDA Winner
                </span>

                <h3 className="
                  mt-6
                  text-3xl
                  font-black
                  uppercase
                  sm:text-4xl
                ">
                  Designed to Stand Out
                </h3>

                <div className="
                  mt-6
                  space-y-5
                  text-sm
                  leading-7
                  text-gray-500
                  sm:text-base
                ">

                  <p>
                    Rentaka Blackheart represents a commitment to
                    thoughtful design, functionality and distinctive
                    identity within the fishing equipment industry.
                  </p>

                  <p>
                    The recognition through the Malaysia Good Design
                    Award reflects the effort behind developing a product
                    that combines performance with a strong visual
                    character.
                  </p>

                  <p>
                    This achievement is an important milestone for
                    Rentaka and reinforces our belief that fishing
                    equipment can be both functional and beautifully
                    designed.
                  </p>

                </div>

              </article>
            </FadeUp>

          </div>
        </div>
      </section>


      {/* ================================================= */}
      {/* TEAM */}
      {/* ================================================= */}

      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="
            grid
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-16
          ">

            {/* ARTICLE */}
            <FadeUp>
              <article className="lg:order-1">

                <p className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-red-600
                ">
                  Behind The Achievement
                </p>

                <h2 className="
                  mt-3
                  text-3xl
                  font-black
                  uppercase
                  sm:text-4xl
                  lg:text-5xl
                ">
                  More Than An Award
                </h2>

                <div className="
                  mt-6
                  space-y-5
                  text-sm
                  leading-7
                  text-gray-500
                  sm:text-base
                ">

                  <p>
                    Behind every achievement is a team that shares
                    the same passion, dedication and vision.
                  </p>

                  <p>
                    The MGDA recognition is not only a celebration
                    of Rentaka Blackheart, but also a reflection of
                    the people involved throughout the journey.
                  </p>

                  <p>
                    From design and development to testing and
                    refinement, every contribution helped shape
                    Blackheart into what it is today.
                  </p>

                </div>

              </article>
            </FadeUp>


            {/* TEAM IMAGE */}
            <FadeScale>
              <div className="
                relative
                aspect-[4/3]
                overflow-hidden
                rounded-3xl
                bg-gray-200
                lg:order-2
              ">
                <Image
                  src="/award/mgda/31.jpg"
                  alt="Rentaka team with MGDA award"
                  fill
                  className="
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            </FadeScale>

          </div>
        </div>
      </section>


      {/* ================================================= */}
      {/* GALLERY */}
      {/* ================================================= */}

      <section className="
        overflow-hidden
        bg-black
        py-20
        sm:py-24
      ">

        <div className="mx-auto max-w-7xl px-6">

          <FadeUp>
            <div className="mb-14 text-center">

              <p className="
                text-sm
                font-bold
                uppercase
                tracking-[0.35em]
                text-red-500
              ">
                Moments
              </p>

              <h2 className="
                mt-3
                text-4xl
                font-black
                uppercase
                text-white
                sm:text-5xl
              ">
                Blackheart Gallery
              </h2>

              <p className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-6
                text-gray-500
              ">
                A collection of moments from the journey,
                recognition and people behind Rentaka Blackheart.
              </p>

            </div>
          </FadeUp>

        </div>


        {/* TOP ROW */}
        <div className="mb-6 overflow-hidden">
          <GalleryRow
            images={galleryTop}
            direction="right"
          />
        </div>


        {/* BOTTOM ROW */}
        <div className="overflow-hidden">
          <GalleryRow
            images={galleryBottom}
            direction="left"
          />
        </div>

      </section>


      {/* ================================================= */}
      {/* END STATEMENT */}
      {/* ================================================= */}

      <section className="bg-red-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <FadeUp>

            <p className="
              text-2xl
              font-black
              uppercase
              tracking-tight
              text-white
              sm:text-4xl
            ">
              Designed With Purpose.
              <br />
              Built For The Journey.
            </p>

          </FadeUp>

        </div>
      </section>

    </main>
  );
}