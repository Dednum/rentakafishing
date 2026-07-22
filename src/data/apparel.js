



const apparel = [
  {
  id: 1,
  slug: "windbreaker",
  category: "outfit",
  name: "Rentaka  Windbreaker",
  tagline: "Lightweight Protection for Every Adventure",
  image: "/products/apparel/windbreaker/front1.jpg",

  description:
    "Designed for anglers who never stop chasing the next cast. The Rentaka Performance Windbreaker combines lightweight comfort, water-resistant fabric, and practical outdoor features to keep you protected in changing weather conditions.",

  gallery: [
    "/products/apparel/windbreaker/frontback.jpg",
    "/products/apparel/windbreaker/side.jpg",
    "/products/apparel/windbreaker/back.jpg",
  ],

  features: [
    "Water-resistant fabric",
    "Internal storage pocket",
    "Adjustable wrist cuff",
    "Detachable hood",
    "Lightweight construction",
  ],

  variants: [
    {
        name: "Black",

        gallery: [
        "/products/apparel/windbreaker/frontback.jpg",
        "/products/apparel/windbreaker/side.jpg",
        "/products/apparel/windbreaker/back.jpg",
        ],

        specifications: [
        {
            label: "Material",
            value: "Water-resistant Performance Fabric",
        },
        {
            label: "Fit",
            value: "Regular Fit",
        },
        {
            label: "Hood",
            value: "Detachable",
        },
        {
            label: "Pocket",
            value: "Internal Pocket",
        },
        {
            label: "Cuff",
            value: "Adjustable Wrist Cuff",
        },
        ],

        sizes: [
        {
            name: "S",
            length: 65,
            chest: 106,
            shoulder: 43.5,
            sleeve: 58,
        },

        {
            name: "M",
            length: 67,
            chest: 110,
            shoulder: 45,
            sleeve: 59.5,
        },

        {
            name: "L",
            length: 69,
            chest: 114,
            shoulder: 46.5,
            sleeve: 61,
        },

        {
            name: "XL",
            length: 71,
            chest: 118,
            shoulder: 48,
            sleeve: 62.5,
        },

        {
            name: "2XL",
            length: 73,
            chest: 122,
            shoulder: 49.5,
            sleeve: 64,
        },

        {
            name: "3XL",
            length: 75,
            chest: 126,
            shoulder: 51,
            sleeve: 65.5,
        },

        {
            name: "4XL",
            length: 77,
            chest: 130,
            shoulder: 52.5,
            sleeve: 67,
        },
        ],
    },
    ],
},  

{
  id: 2,
  slug: "cap",
  category: "outfit",

  name: "Rentaka Snapback Cap",

  tagline: "Built for Comfort. Styled for Every Cast.",

  description:
    "More than just a fishing cap, the Rentaka Cap represents the spirit of every angler. Featuring the iconic embroidered Rentaka logo alongside exclusive Malaysian-inspired patterns, every detail symbolizes strength, balance, and pride. Built with breathable materials and an adjustable fit, it provides lasting comfort on and off the water while carrying the identity of the Rentaka brand wherever your journey takes you.",

  image: "/products/apparel/cap2026/front.jpg",

  variants: [

    {
      name: "Flat Brim",

      image: "/products/apparel/cap2026/flatbrim.jpg",

      gallery: [
        "/products/apparel/cap2026/flatbrim.jpg",
        "/products/apparel/cap2026/front.jpg",
        "/products/apparel/cap2026/inside.jpg",
      ],

      specifications: [
        {
            label: "Visor",
            value: "Flat Brim",
        },
        {
            label: "Closure",
            value: "Adjustable Snapback",
        },
        {
            label: "Material",
            value: "Cotton & Mesh",
        },
        {
            label: "Fit",
            value: "Adjustable",
        },
        ],
    },

    {
      name: "Trucker",

      image: "/products/apparel/cap2026/trucker.jpg",

      gallery: [
        "/products/apparel/cap2026/trucker.jpg",
        "/products/apparel/cap2026/front.jpg",
        "/products/apparel/cap2026/inside.jpg",
      ],

      specifications: [
            {
                label: "Visor",
                value: "Trucker",
            },
            {
                label: "Closure",
                value: "Adjustable Snapback",
            },
            {
                label: "Material",
                value: "Cotton & Mesh",
            },
            {
                label: "Fit",
                value: "Adjustable",
            },
        ]
    },

  ],

  features: [
    "Structured front panel",
    "Breathable mesh back",
    "Adjustable snapback closure",
    "High-quality embroidered logo",
    "Lightweight and comfortable",
  ],
}
];

export default apparel;