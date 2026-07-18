import Image from "next/image";
import Navbar from "@/components/Navbar";
import categories from "@/data/categories";
import FeatureProduct from "@/components/FeatureProduct";
import featureProducts from "@/data/FeatureProduct";
import ChooseSection from "@/components/ChooseSection";
import GallerySection from "@/components/GallerySection";
import FishingExpert from "@/components/FishingExpert";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
  "
  style={{
    backgroundImage: "url('/background.jpg')"
  }}
>
      <Navbar />
      <section
        className="
          w-full
          h-[630px]
          bg-[url('/ww.png')]
          bg-cover
          bg-center
          bg-no-repeat
        "
      />

      <section className="
  w-full
  bg-white/90
  backdrop-blur-sm
  py-10
">

  <div className="max-w-7xl mx-auto px-6">

    {/* product category */}
    <div className="text-center mb-14">

      <h2 className="text-4xl font-bold text-black">
        Product Categories
      </h2>

      <p className="text-gray-500 mt-3">
        Find the perfect equipment for your fishing adventure.
      </p>

    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {categories.map((category) => (

        <div
          key={category.id}
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

          <Image
            src={category.image}
            alt={category.title}
            width={400}
            height={300}
            className="
              w-full
              h-60
              object-cover
              group-hover:scale-110
              transition
              duration-500
            "
          />

          <div className="p-6">

            <h3 className="text-2xl font-semibold text-black">
              {category.title}
            </h3>

            <p className="text-gray-500 mt-2">
              {category.description}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

{/*end of product category*/}
<section className="w-full  py-5">
  <FeatureProduct products={featureProducts}/>
  </section>



{/*end of product feature*/}

<section className="w-full bg-white py-5">
  <ChooseSection />
  </section>

  {/*end of why choose section*/}

<section className="w-full bg-black py-5" >
  <GallerySection />
  </section>

  {/*end of gallery section*/}

<section className="w-full bg-white py-5">
  <FishingExpert />
</section>

  {/*end of rentaka specialist*/}

  <section className="w-full bg-white py-5">
  <ContactSection />
</section>

  {/*end of Contact Section*/}

<Footer />
    </div>
  );
}
