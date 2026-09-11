import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.rentakafishing.com"),

  title: {
    default: "Rentaka Fishing",
    template: "%s | Rentaka Fishing",
  },

  description:
    "Discover premium fishing tackle, rods, reels, hooks, lines and accessories for anglers across Malaysia.",

  keywords: [
    "Rentaka",
    "Rentaka Fishing",
    "Fishing Malaysia",
    "Fishing Tackle",
    "Fishing Equipment",
    "Fishing Rod",
    "Fishing Reel",
    "Fishing Hook",
    "Fishing Line",
    "Lure",
  ],

  authors: [
    {
      name: "Rentaka Fishing",
    },
  ],

  openGraph: {
    title: "Rentaka Fishing",
    description:
      "Premium fishing tackle and equipment in Malaysia.",
    url: "https://www.rentakafishing.com",
    siteName: "Rentaka Fishing",
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: "/meta.png",
        width: 1200,
        height: 630,
        alt: "Rentaka Fishing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rentaka Fishing",
    description:
      "Premium fishing tackle and equipment in Malaysia.",
    images: ["/meta.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
            <body className="min-h-full flex flex-col">

        <Navbar />

        <main className="flex-1">
          {children}

          <WhatsAppButton />
        </main>

        <Footer />

      </body>
    </html>
  );
}
