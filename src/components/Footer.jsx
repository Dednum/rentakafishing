import Image from "next/image";
import { FaWhatsapp, FaFacebookF, FaTiktok } from "react-icons/fa";
import social from "@/data/social";

export default function Footer() {
  return (
    <footer
      className="
        relative
        w-full
        h-[500px]
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

              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  className="
                    text-2xl
                    hover:text-[#25D366]
                    hover:scale-125
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                />
              </a>


              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF
                  className="
                    text-2xl
                    hover:text-[#1877F2]
                    hover:scale-125
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                />
              </a>


              <a
                href={social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok
                  className="
                    text-2xl
                    hover:text-white
                    hover:scale-125
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                />
              </a>

            </div>

          </div>


        </div>



        {/* Bottom */}
        <div
          className="

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