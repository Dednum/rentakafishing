import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import igfaAnglers from "@/data/igfaAngler";

export default async function IGFAArticlePage({ params }) {
  const { id } = await params;

  const angler = igfaAnglers.find(
    (item) => item.id === id
  );

  if (!angler) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-zinc-950">

      {/* Header */}
      <section className="px-2 pb-10 pt-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">

          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-red-600">
            IGFA Recognition
          </p>

          <h1 className="mt-3 text-center text-4xl font-black uppercase tracking-tight sm:text-5xl">
            Stories Behind The Catch
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-6 text-zinc-500">
            Discover the achievements, records and stories
            behind Rentaka's recognized anglers.
          </p>

        </div>
      </section>


      {/* Angler Image Tabs */}
      <section className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-3 sm:gap-5">

          {igfaAnglers.map((item) => {
            const active = item.id === angler.id;

            return (
              <Link
                key={item.id}
                href={`/awards/igfa/${item.id}`}
                className={`
                  group relative overflow-hidden rounded-2xl
                  border transition-all duration-500
                  ${
                    active
                      ? "border-red-600 ring-2 ring-red-600/20"
                      : "border-zinc-200 hover:border-red-400"
                  }
                `}
              >

                <div className="relative aspect-[16/8]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={`
                      object-cover transition duration-700
                      ${
                        active
                          ? "scale-105"
                          : "group-hover:scale-105"
                      }
                    `}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60 sm:text-xs">
                      {item.number}
                    </p>

                    <h2 className="mt-1 text-sm font-black uppercase text-white sm:text-lg">
                      {item.name}
                    </h2>
                  </div>

                </div>

              </Link>
            );
          })}

        </div>
      </section>


      {/* Article */}
      <article className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">

          {/* Category */}
          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
              {angler.title}
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-6xl">
              {angler.name}
            </h2>

            <p className="mt-4 text-sm font-semibold text-zinc-500">
              {angler.achievement}
            </p>

          </div>


          {/* Main Image */}
          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl">
            <Image
              src={angler.image}
              alt={angler.name}
              fill
              priority
              className="object-cover"
            />
          </div>


          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-4">

            <Stat label="Species" value={angler.species} />
            <Stat label="Weight" value={angler.weight} />
            <Stat label="Location" value={angler.location} />
            <Stat label="Date" value={angler.date} />

          </div>


            {/* Article Introduction */}
            <div className="mt-14">

            {angler.article?.eyebrow && (
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                {angler.article.eyebrow}
                </p>
            )}

            {angler.article?.headline && (
                <h3 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl">
                {angler.article.headline}
                </h3>
            )}

            {angler.article?.intro && (
                <p className="mt-6 text-xl font-semibold leading-8 text-zinc-800 sm:text-2xl sm:leading-10">
                {angler.article.intro}
                </p>
            )}

            </div>


            {/* Article Image */}
            {angler.articleImages?.[0] && (
            <div className="mt-14 overflow-hidden rounded-3xl bg-zinc-100">
                <Image
                src={angler.articleImages[0]}
                alt={`${angler.name} IGFA World Record`}
                width={1600}
                height={1100}
                className="h-auto w-full"
                />
            </div>
            )}
          
            {/* Article Sections */}
            <div className="mt-14 space-y-14">

            {angler.article?.sections?.map((section, index) => (
                <section key={index}>

                <h3 className="text-2xl font-black uppercase sm:text-3xl">
                    {section.heading}
                </h3>

                <div className="mt-6 space-y-6 text-base leading-8 text-zinc-600">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>
                        {paragraph}
                    </p>
                    ))}
                </div>

                </section>
            ))}

            </div>



            {/* Second Image */}
            {angler.articleImages?.[1] && (
            <div className="mt-14 overflow-hidden rounded-3xl bg-zinc-100">
                <Image
                src={angler.articleImages[1]}
                alt={`${angler.name} IGFA World Record`}
                width={1600}
                height={1100}
                className="h-auto w-full"
                />
            </div>
            )}

        </div>
      </article>

    </main>
  );
}


function Stat({ label, value }) {
  return (
    <div className="bg-white p-5">
      <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-red-600">
        {label}
      </p>

      <p className="mt-2 text-sm font-bold text-zinc-900">
        {value}
      </p>
    </div>
  );
}