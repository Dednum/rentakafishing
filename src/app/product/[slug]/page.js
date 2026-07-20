
import ProductTabs from "@/components/ProductTabs";
import Link from "next/link";
import products from "@/data";
import CategoryBanner from "@/components/CategoryBanner";

const categories = {
  rod: {
    title: "Rod",
    subtitle: "Premium Fishing Rods",
    accent: "red",
  },

  line: {
    title: "Line",
    subtitle: "High Performance Fishing Lines",
    accent: "blue",
  },

  lure: {
    title: "Lure",
    subtitle: "Designed to Trigger Every Strike",
    accent: "orange",
  },

  "terminal-tackle": {
    title: "Terminal Tackle",
    subtitle: "Strength You Can Trust",
    accent: "green",
  },

  outfit: {
    title: "Outfit",
    subtitle: "Performance Fishing Apparel",
    accent: "white",
  },
};

export default async function ProductCategory({ params }) {

  const { slug } = await params;

  const filteredProducts = products.filter(
    (product) => product.category === slug
  );

return (
  <>

    <ProductTabs current={slug} />
      <section className="bg-white min-h-screen">

    <div className="max-w-7xl mx-auto pt-8 pb-20 px-6">

    <CategoryBanner
      title={categories[slug].title}
      subtitle={categories[slug].subtitle}
      accent={categories[slug].accent}
    />


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredProducts.map((product) => (
            <Link
            key={product.id}
    href={`/product/${slug}/${product.slug}`}
>
  
        {/* product card */}
          <div
            className="
              group
              overflow-hidden
              rounded-2xl
              border
              border-neutral-200
              bg-white
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-red-500/40
              hover:shadow-[0_20px_60px_rgba(220,38,38,.15)]

              "
          >
  
          {/* Image */}

            <div className="p-4">

              <div className="overflow-hidden rounded-xl">

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                  w-full
                  h-64
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-105
                  group-hover:brightness-110
                  "
                />

              </div>

            </div>

            {/* Content */}

            <div className="px-5 pb-5">

              <h2
                className="
                text-2xl
                font-bold
                text-black
                transition-all
                duration-300
                group-hover:translate-x-1
                "
                >
                {product.name}
              </h2>

              <p className="mt-2 text-neutral-500 text-sm leading-relaxed">

              {product.tagline}

              </p>

              <div
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-red-600
                  opacity-0
                  translate-y-2
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:translate-y-0
                "
              >
                  View Details →
              </div>

            </div>

          </div>
</Link>
        ))}

      </div>

    </div>
</section>
  </>
);

}