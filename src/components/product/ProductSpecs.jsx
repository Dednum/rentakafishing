export default function ProductSpecs({
  specs,
  selectedSize,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

      {(specs ?? []).map((spec, index) => (
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
          <span className="text-gray-500 font-medium">
            {spec.label}
          </span>

          <span className="font-semibold text-[#D91E18] text-right">
            {spec.value}
          </span>
        </div>
      ))}

      {selectedSize?.length && (
        <>
          <div className="flex justify-between px-6 py-4 border-t border-gray-100">
            <span className="text-gray-500">Length</span>
            <span className="font-semibold text-[#D91E18]">
              {selectedSize.length} cm
            </span>
          </div>

          <div className="flex justify-between px-6 py-4 border-t border-gray-100">
            <span className="text-gray-500">Chest</span>
            <span className="font-semibold text-[#D91E18]">
              {selectedSize.chest} cm
            </span>
          </div>

          <div className="flex justify-between px-6 py-4 border-t border-gray-100">
            <span className="text-gray-500">Shoulder</span>
            <span className="font-semibold text-[#D91E18]">
              {selectedSize.shoulder} cm
            </span>
          </div>

          <div className="flex justify-between px-6 py-4 border-t border-gray-100">
            <span className="text-gray-500">Sleeve</span>
            <span className="font-semibold text-[#D91E18]">
              {selectedSize.sleeve} cm
            </span>
          </div>
        </>
      )}

    </div>
  );
}