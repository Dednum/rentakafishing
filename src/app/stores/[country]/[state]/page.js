import stores from "@/data/store";
import StoreLocator from "@/components/stores/StoreLocator";


function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export async function generateMetadata({ params }) {
  const { country, state } = await params;

  const store = stores.find(
    (item) =>
      slugify(item.country) === country &&
      slugify(item.state) === state
  );

  if (!store) {
    return {
      title: "Store Not Found",
    };
  }

  return {
    title: `${store.state}, ${store.country} | Rentaka Fishing Store`,

    description: `Find Rentaka Fishing dealers and stores in ${store.state}, ${store.country}. Locate your nearest authorized retailer and explore our premium fishing tackle and equipment.`,

    keywords: [
      "Rentaka Fishing",
      `${store.state} Fishing Store`,
      `${store.country} Fishing Store`,
      "Fishing Equipment",
      "Fishing Tackle",
      "Authorized Dealer",
    ],

    alternates: {
      canonical: `/store/${country}/${state}`,
    },
  };
}

export default async function StorePage({ params }) {
  const { country, state } = await params;

  const filteredStores = stores.filter(
    (store) =>
      slugify(store.country) === country &&
      slugify(store.state) === state
  );

  return (
    <>


      <StoreLocator stores={filteredStores} />
    </>
  );
}