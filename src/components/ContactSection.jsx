"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  FaWhatsapp, 
  FaFacebookF, 
  FaTiktok 
} from "react-icons/fa"; 

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-20">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-12
        items-stretch
      ">


        {/* LEFT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.7,
            ease: "easeOut"
          }}

          viewport={{
            once: true
          }}
          className="
            relative
            h-full
min-h-[420px]
            overflow-hidden
            rounded-3xl
            shadow-xl
            group
          "
        >

          <Image
            src="/image.png"
            alt="Fishing Lake"
            fill
            className="
              object-cover
              group-hover:scale-110
              transition
              duration-700
            "
          />


          {/* overlay */}
          <div className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-transparent
            to-transparent
          " />


          <div className="
            absolute
            bottom-8
            left-8
            text-white
          ">

            <h3 className="
              text-3xl
              font-bold
            ">
              Ready For Your Next Catch?
            </h3>

            <p className="
              mt-2
              text-gray-200
            ">
              Premium fishing gear with expert guidance.
            </p>

          </div>

        </motion.div>



        {/* RIGHT CARD */}
        <motion.div

          initial={{
            opacity: 0,
            y: 40
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.7,
            ease: "easeOut"
          }}

          viewport={{
            once: true
          }}

          className="
            bg-[#c00000]
            rounded-3xl
            p-10
            text-white
            shadow-2xl
            relative
            overflow-hidden
            h-full
            min-h-[420px]
            flex
            flex-col
            justify-center
          "
        >


          {/* glow effect */}
          <div className="
            absolute
            -top-20
            -right-20
            w-60
            h-60
            bg-white/10
            rounded-full
          "/>


          <div className="relative z-10">

            <h2 className="
              text-4xl
              font-bold
            ">
              Need Help?
            </h2>


            <p className="
              mt-4
              text-gray-200
              leading-relaxed
            ">
              Looking for the perfect fishing setup?
              Our team is ready to help you choose
              the right equipment for your adventure.
            </p>



<div className="
  mt-8
  flex
  gap-5
">


  {/* Whatsapp */}
  <a
    href="https://wa.me/60123456789"
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-14
      h-14
      rounded-full
      bg-white
      text-[#25D366]
      flex
      items-center
      justify-center
      text-3xl
      shadow-lg
      hover:scale-110
      transition
      duration-300
    "
  >
    <FaWhatsapp />
  </a>



  {/* Facebook */}
  <a
    href="https://www.facebook.com/FASTackle/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-14
      h-14
      rounded-full
      bg-white
      text-[#1877F2]
      flex
      items-center
      justify-center
      text-2xl
      shadow-lg
      hover:scale-110
      transition
      duration-300
    "
  >
    <FaFacebookF />
  </a>



  {/* TikTok */}
  <a
    href="https://www.tiktok.com/search?q=%23rentaka&t=1784546912522"
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-14
      h-14
      rounded-full
      bg-white
      text-black
      flex
      items-center
      justify-center
      text-2xl
      shadow-lg
      hover:scale-110
      transition
      duration-300
    "
  >
    <FaTiktok />
  </a>


</div>


          </div>


        </motion.div>



      </div>

    </section>
  );
}