export default function VariantSelector({
  variants,
  selectedVariant,
  setSelectedVariant,
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {variants.map((variant, index) => {

        const label = variant.name ?? `PE ${variant.pe}`;

        const active =
          (selectedVariant?.name ?? `PE ${selectedVariant?.pe}`) === label;

        return (
          <button
            key={variant.id ?? index}
            onClick={() => setSelectedVariant(variant)}
            className={`
              px-5
              py-3
              rounded-xl
              border
              transition-all
              duration-300
              font-medium
              text-sm

              ${
                active
                  ? "bg-[#D91E18] text-white border-[#D91E18]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#EB9F36] hover:text-[#EB9F36]"
              }
            `}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}