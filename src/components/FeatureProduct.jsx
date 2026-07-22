import Image from "next/image";
import Link from "next/link";

export default function FeatureProduct({ products }) {

  return (
    <section className="w-full py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-[#111111]">
            Featured Collection
          </h2>

          <p className="text-500 mt-3">
            Discover our best seller and latest fishing equipment.
          </p>

        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


          {products.map((product)=> (

            <div
              key={product.id}
              className="
                relative
                overflow-hidden
                rounded-3xl
                h-[560px]
                group
                shadow-xl
              "
            >


              {/* Background Image */}
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />


              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black
                  via-black/55
                  to-black/10

                  transition-all
                  duration-500

                  group-hover:from-black
                  group-hover:via-black/70
                "
              />


              {/* Content */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  justify-end
                  p-10
                  text-white
                "
              >


                <span
                  className={`
                    inline-flex
                    items-center
                    w-fit

                    rounded-full

                    px-4
                    py-2

                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]

                    ${
                    product.type === "BEST SELLER"
                    ? "bg-[#D91E18] text-white"
                    : "bg-[#EB9F36] text-black"
                    }
                  `}
                >
                  {product.type}
                </span>


                <h3
                  className="
                    text-5xl
                    leading-tight
                    font-bold
                    mt-2
                  "
                >
                  {product.title}
                </h3>


                <p
                  className="
                    text-gray-300
                    leading-8
                    text-lg
                  "
                >
                  {product.description}
                </p>



                <Link
                  href={product.link}
                  className="
                    mt-6
                    w-fit
                    px-6
                    py-3
                    rounded-full
                    bg-white
                    text-[#111111]
                    font-semibold
                    hover:bg-[#D91E18]
                    hover:text-white
                    transition
                  "
                >
                  {product.buttonText}
                </Link>


              </div>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}