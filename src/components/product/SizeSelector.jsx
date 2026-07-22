export default function SizeSelector({
  sizes,
  selectedSize,
  setSelectedSize,
}) {
  return (
    <div className="flex flex-wrap gap-3">

      {sizes.map((size) => {
        const active = selectedSize?.name === size.name;

        return (
          <button
            key={size.name}
            onClick={() => setSelectedSize(size)}
            className={`
              px-5
              py-2
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
            {size.name}
          </button>
        );
      })}

    </div>
  );
}