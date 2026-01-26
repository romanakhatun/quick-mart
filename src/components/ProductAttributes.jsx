"use client";

const ProductAttributes = ({
  attributes,
  variants,
  selectedAttributes,
  onChange,
}) => {
  const isOptionAvailable = (attrName, value) => {
    return variants.some((variant) =>
      Object.entries({
        ...selectedAttributes,
        [attrName]: value,
      }).every(([key, val]) => variant.attributes?.[key] === val),
    );
  };

  return (
    <div className="space-y-4 mt-4">
      {Object.entries(attributes).map(([attrName, values]) => (
        <div key={attrName}>
          <p className="font-semibold mb-2">{attrName}:</p>

          <div className="flex gap-2 flex-wrap">
            {values.map((value) => {
              const active = selectedAttributes?.[attrName] === value;

              const disabled = !isOptionAvailable(attrName, value);

              return (
                <button
                  key={value}
                  disabled={disabled}
                  onClick={() =>
                    onChange({
                      ...selectedAttributes,
                      [attrName]: value,
                    })
                  }
                  className={`px-3 py-1 border rounded text-sm cursor-pointer
                    ${
                      active ? "border-red-500 text-red-500" : "border-gray-300"
                    }
                    ${disabled && "opacity-40 cursor-not-allowed"}`}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductAttributes;
