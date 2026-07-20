export default function VariantSelector({
  variants,
  selectedVariant,
  setSelectedVariant,
}) {
  return (
    <div className="flex flex-wrap gap-3">

      {variants.map((variant) => {
        const active =
          selectedVariant.id === variant.id;

        return (
          <button
            key={variant.id}
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
                  ? "bg-[#D91E18] text-white border-[#0A483D] shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#EB9F36] hover:text-[#EB9F36]"
              }
            `}
          >
            {variant.variant}
          </button>
        );
      })}

    </div>
  );
}