import Image from "next/image";
import { FaWhatsapp, FaFacebookF, FaTiktok } from "react-icons/fa";
import social from "@/data/social";

export default function Footer() {
  return (
    <footer className="relative w-full">

  {/* Background Image */}
  <img
    src="/footer.jpeg"
    alt="Footer Background"
    className="w-full h-auto block"
  />

<div
  className="
    absolute
    inset-0
    flex
    justify-center
    items-end
    pb-10
    text-center
text-white
    z-10
  "
>
  <div className="text-center">
      {/* Overlay Content */}


    {/* Logo */}
    <img
      src="/verticallogo2.PNG"
      alt="Rentaka"
      width={120}
      height={120}
      className="w-44 h-auto mx-auto mb-4"
    />

    <p className="italic text-white/80 mb-10">
      Where Every Cast Tells A Story
    </p>

    <h3 className="text-2xl font-bold mb-4">
      Contact
    </h3>

    <div className="flex justify-center gap-6 text-3xl mb-12">
  <a
    href={social.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp className="hover:text-[#25D366] transition-all duration-300 hover:scale-125" />
  </a>

  <a
    href={social.facebook}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF className="hover:text-[#1877F2] transition-all duration-300 hover:scale-125" />
  </a>

  <a
    href={social.tiktok}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTiktok className="hover:text-white transition-all duration-300 hover:scale-125" />
  </a>
</div>

    <div className="text-center text-sm text-white/70">
      © 2026 Rentaka Fishing. All Rights Reserved.
      <br />
      Privacy Policy | Terms & Conditions
    </div>


  </div>
</div>


</footer>
  );
}