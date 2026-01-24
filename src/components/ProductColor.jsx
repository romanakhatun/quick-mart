const ProductColor = ({ variants, selectedVariant, onSelect }) => {
  return (
    <div className="mt-4">
      <p className="font-semibold mb-2">Color:</p>

      <div className="flex gap-3 flex-wrap">
        {variants.map((variant) => {
          const active = selectedVariant._id === variant._id;

          return (
            <button
              key={variant._id}
              onClick={() => onSelect(variant)}
              className={`px-3 py-1 border rounded text-sm
                ${
                  active
                    ? "border border-red-500 text-red-500"
                    : "border-gray-300"
                }`}
            >
              {variant.attributes.Color}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductColor;
