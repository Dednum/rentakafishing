export default function ProductSpecs({ specs }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

      {specs.map((spec, index) => (
        <div
          key={index}
          className={`
            flex
            items-center
            justify-between
            px-6
            py-4

            ${
              index !== specs.length - 1
                ? "border-b border-gray-100"
                : ""
            }
          `}
        >
          {/* Label */}
          <span className="text-gray-500 font-medium">
            {spec.label}
          </span>

          {/* Value */}
          <span className="font-semibold text-[#D91E18] text-right">
            {spec.value}
          </span>
        </div>
      ))}

    </div>
  );
}