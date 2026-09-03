import Image from "next/image";
import Link from "next/link";
import categories from "@/data/categories";
import FeatureProduct from "@/components/FeatureProduct";
import featureProducts from "@/data/FeatureProduct";
import ChooseSection from "@/components/ChooseSection";
import GallerySection from "@/components/GallerySection";
import FishingExpert from "@/components/FishingExpert";
import ContactSection from "@/components/ContactSection";
import AwardSection from "@/components/AwardSection";
import FadeScale from "@/components/animations/FadeScale";
import FadeUp from "@/components/animations/FadeUp";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Home",

  description:
    "Discover Rentaka Fishing, a Malaysian brand offering premium fishing tackle including hooks, rods, reels, lines, lures and accessories. Explore our featured products, product categories and expert fishing equipment for every angler.",

  keywords: [
    "Rentaka Fishing",
    "Malaysian Fishing Brand",
    "Fishing Tackle Malaysia",
    "Premium Fishing Equipment",
    "Fishing Products",
    "Fishing Hooks",
    "Fishing Rods",
    "Fishing Reels",
    "Fishing Lines",
    "Fishing Lures",
    "Fishing Accessories",
    "Featured Fishing Products",
  ],

  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div
      className="
        flex
        flex-col
        min-h-screen
        bg-fixed
        bg-cover
        bg-center
        bg-white-100
      "

    >

      {/* Hero Section */}
      <section
        className="
          relative
          w-full
          h-[630px]
          md:h-[700px]
          bg-[url('/herobg.JPG')]
          bg-cover
          bg-center
          bg-no-repeat
          flex
          items-center
          justify-center
        "
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Hero Content */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            text-center
            px-6
            gap-8
          "
        >

          {/* Logo */}
          <FadeScale>
            <Image
              src="/logobulat.png"
              alt="Rentaka Logo"
              width={250}
              height={250}
              priority
              className="
                w-50
                md:w-70
                lg:w-50
                drop-shadow-2xl
              "
            />
          </FadeScale>

          {/* Heading Text */}
          <FadeUp>
            <h1
              className={`${anton.className}
              text-white
              text-5xl
              font-bold
              `}
              >
              Malaysian's Brand of High Quality Fishing Products
            </h1>

            <h2
              className={`${anton.className}
              text-white
              text-4xl
              `}
              >
              Blended With Passion And Affordable Pricing!
            </h2>
          </FadeUp>
        </div>
      </section>

      {/* Category Section */}
      <section className="
        w-full
        bg-white/90
        backdrop-blur-sm
        py-10
      ">

        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-14">

              <h2 className="text-4xl font-bold text-black">
                Product Categories
              </h2>

              <p className="text-gray-500 mt-3">
                Find the perfect equipment for your fishing adventure.
              </p>

            </div>
          </FadeUp>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

            {categories.map((category, index) => (

              <FadeScale
                key={category.id}
                delay={index * 0.1}
              >
                <Link
                  key={category.id}
                  href={`/product/${category.slug}`}
                >
                  <div
                    className="
                    group
                    rounded-3xl
                    overflow-hidden
                    bg-white
                    shadow-md
                    hover:shadow-[0_20px_40px_rgba(220,38,38,0.35)]
                    hover:-translate-y-3
                    transition-all
                    duration-300
                    cursor-pointer
                    "
                    >

                    <div className="relative aspect-[3/2] overflow-hidden rounded-t-3xl">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className={`
                          object-cover
                          ${category.position}
                          group-hover:scale-110
                          transition
                          duration-500
                        `}
                      />
                    </div>

                    <div className="p-6">

                      <h3 className="text-2xl font-semibold text-black">
                        {category.title}
                      </h3>

                      <p className="text-gray-500 mt-2">
                        {category.description}
                      </p>

                    </div>
                  </div>
                </Link>
              </FadeScale>
            ))}
            </div>
        </div>
      </section>
      

      {/* Award Section */}

        <AwardSection/>


      {/* Feature Section */}

        <FeatureProduct products={featureProducts}/>


      {/*whychoose section*/}

        <ChooseSection />


      {/*Gallery Section*/}
      <section className="w-full bg-black py-5" >
        <GallerySection />
      </section>

      {/*Specialist Section*/}
      <section className="w-full">
        <FishingExpert />
      </section>

      {/*Contact Section*/}
      <section id="contact" className="w-full bg-white py-5">
        <ContactSection />
      </section>
    </div>
  );
}
