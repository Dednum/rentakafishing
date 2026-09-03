"use client";
import Image from "next/image";
import { FaWhatsapp, FaFacebookF, FaTiktok } from "react-icons/fa";
import social from "@/data/social";
import FadeUp from "./animations/FadeUp";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

  const hideTopImage =
    pathname === "/awards/mgda";

  return (
    


<footer className="w-full">

{/* Top Divider */}
{!hideTopImage && (
  <img
    src="/footer1.JPG"
    alt=""
    className="w-full h-auto block"
  />
)}
  {/* Footer */}
  <div className="bg-black text-white">
    <FadeUp>
    <div className="max-w-7xl mx-auto py-3 px-6 text-center">

      <img
        src="/verticallogo2.PNG"
        className="w-40 mx-auto mb-4"
      />

      <p className="italic text-white/70 mb-8">
        Where Every Cast Tells A Story
      </p>

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

      <p className="text-sm text-white/60">
        © 2026 Rentaka Fishing. All Rights Reserved.
      </p>

      <p className="text-sm text-white/40 mt-2">
        Privacy Policy | Terms & Conditions
      </p>

    </div>
    </FadeUp>
  </div>

</footer>
  );
}