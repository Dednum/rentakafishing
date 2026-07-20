import {
  ShieldCheck,
  BadgeCheck,
  Wallet,
  Headphones
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Quality Products",
    description:
      "We provide carefully selected products with reliable quality and durability."
  },
  {
    icon: BadgeCheck,
    title: "Trusted Service",
    description:
      "Committed to delivering a smooth and trustworthy experience for every customer."
  },
  {
    icon: Wallet,
    title: "Affordable Price",
    description:
      "Get great value products with competitive pricing that suits your needs."
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Our team is always ready to assist you whenever you need help."
  }
];


export default function ChooseSection() {

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Rentaka?
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            We focus on delivering quality products, trusted service,
            and the best experience for our customers.
          </p>

        </div>



        {/* Cards */}

        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-6
        ">


          {reasons.map((item,index)=>{

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="
                  group
                  p-8
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
              >

                {/* Icon */}

                <div
                  className="
                    w-14
                    h-14
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#D91E18]
                    text-white
                    mb-6
                    group-hover:scale-110
                    transition
                  "
                >

                  <Icon size={28}/>

                </div>



                {/* Title */}

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-gray-900
                    mb-3
                  "
                >
                  {item.title}
                </h3>



                {/* Description */}

                <p
                  className="
                    text-gray-500
                    leading-relaxed
                  "
                >
                  {item.description}
                </p>


              </div>

            )

          })}


        </div>


      </div>

    </section>
  )
}