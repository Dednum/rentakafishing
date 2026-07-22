import StoreCard from "@/components/stores/StoreCard";

export default function StoreList({ stores, selectedStoreId, onSelectStore }) {
  if (stores.length === 0) {
    return (
      <div
        className="
          rounded-3xl
          border
          border-dashed
          border-gray-200
          bg-gray-50
          px-6
          py-16
          text-center
        "
      >
        <p className="text-lg font-semibold text-[#111111]">
          No stores found
        </p>
        <p className="text-gray-500 mt-2">
          Try a different search term.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        flex
        flex-col
        gap-4
        max-h-[520px]
        lg:max-h-[640px]
        overflow-y-auto
        pr-1
        scrollbar-thin
      "
    >

      {stores.map((store) => (
        <StoreCard
          key={store.id}
          store={store}
          isSelected={store.id === selectedStoreId}
          onSelect={() => onSelectStore(store.id)}
        />
      ))}

    </div>
  );
}
