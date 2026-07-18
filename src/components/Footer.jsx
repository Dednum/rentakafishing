import Image from "next/image";
import { FaWhatsapp, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        relative
        w-full
        min-h-[500px]
        bg-cover
        bg-center
        flex
        items-center
        justify-center
      "
      style={{
        backgroundImage: "url('/footer.jpg')"
      }}
    >

      {/* Overlay */}
      <div 
        className="
          absolute
          inset-0

        "
      />


      {/* Content */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          w-full
          px-6
          text-white
          pt-20
        "
      >


        {/* Logo */}
        <div className="text-center mb-14">

          <Image
            src="/logo.png"
            alt="Rentaka Fishing"
            width={120}
            height={120}
            className="mx-auto mb-5"
          />


          <p className="text-white/70 italic mt-3">
            Where Every Cast Tells A Story
          </p>

        </div>



        {/* Footer links */}
        <div
  className="
    flex
    justify-center
    text-center
  "
>





          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>


            <div className="flex justify-center gap-5 mt-3">

              <FaWhatsapp
                className="
                  text-2xl
                  hover:scale-125
                  transition
                  cursor-pointer
                "
              />


              <FaFacebookF
                className="
                  text-2xl
                  hover:scale-125
                  transition
                  cursor-pointer
                "
              />


              <FaTiktok
                className="
                  text-2xl
                  hover:scale-125
                  transition
                  cursor-pointer
                "
              />

            </div>

          </div>


        </div>



        {/* Bottom */}
        <div
          className="
            border-t
            border-white/20
            mt-14
            pt-3
            text-center
            text-sm
            text-white/60
          "
        >

          © 2026 Rentaka Fishing.
          All Rights Reserved.

          <div className="mt-2">
            Privacy Policy | Terms & Conditions
          </div>

        </div>


      </div>


    </footer>
  );
}