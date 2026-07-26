import products from "@/data";
import stores from "@/data/store";

const baseUrl = "https://www.rentakafishing.com";

const categories = [
  "rod",
  "line",
  "lure",
  "terminal-tackle",
  "outfit",
];

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export default function sitemap() {
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/product/${category}`,
    lastModified: new Date(),
  }));

  const productPages = products.map((product) => ({
    url: `${baseUrl}/product/${product.category}/${product.slug}`,
    lastModified: new Date(),
  }));

  const storePages = stores.map((store) => ({
    url: `${baseUrl}/store/${slugify(store.country)}/${slugify(store.state)}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },

    ...categoryPages,
    ...productPages,
    ...storePages,
  ];
}