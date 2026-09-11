"use client";

import { MessageCircle } from "lucide-react";
import social from "@/data/social";

export default function WhatsAppButton() {

  return (
<a
  href={social.whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  className="
    whatsapp-glow
    fixed
    bottom-29
    right-6
    z-50
    flex
    h-24
    w-24
    items-center
    justify-center
    rounded-full
    bg-[#e2e9e4]
    shadow-[0_0_15px_rgba(37,211,102,0.5)]
    transition-all
    duration-300
    hover:scale-110
    hover:shadow-[0_0_30px_rgba(37,211,102,0.8)]
  "
>
  <img
    src="/logo/ws.png"
    alt="WhatsApp"
    className="relative z-10 h-24 w-24"
  />
</a>
  );
}