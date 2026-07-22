import stores from "@/data/store";
import StoreLocator from "@/components/stores/StoreLocator";


function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
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