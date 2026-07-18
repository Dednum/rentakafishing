import Image from "next/image";

export default function FeatureProduct({ products }) {

  return (
    <section className="w-full py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-[#0A483D]">
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
                h-[450px]
                group
              "
            >


              {/* Background Image */}
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-500
                "
              />


              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/40
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
                  p-8
                  text-white
                "
              >


                <span
                  className="
                    text-sm
                    uppercase
                    tracking-widest
                    text-gray-200
                  "
                >
                  {product.type}
                </span>


                <h3
                  className="
                    text-3xl
                    font-bold
                    mt-2
                  "
                >
                  {product.title}
                </h3>


                <p
                  className="
                    text-gray-200
                    mt-3
                    max-w-md
                  "
                >
                  {product.description}
                </p>



                <a
                  href={product.link}
                  className="
                    mt-6
                    w-fit
                    px-6
                    py-3
                    rounded-full
                    bg-white
                    text-[#0A483D]
                    font-semibold
                    hover:bg-[#0A483D]
                    hover:text-white
                    transition
                  "
                >
                  {product.buttonText}
                </a>


              </div>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}