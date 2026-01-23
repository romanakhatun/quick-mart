"use client";
import { useQueryState } from "nuqs";
import { useState } from "react";

const ProductFilter = () => {
  const [category, setCategory] = useQueryState("category", {
    shallow: false,
    defaultValue: "",
  });

  const [subCategory, setSubCategory] = useQueryState("subCategory", {
    shallow: false,
    defaultValue: "",
  });

  const [minPrice, setMinPrice] = useQueryState("minPrice", {
    shallow: false,
    defaultValue: "",
  });

  const [maxPrice, setMaxPrice] = useQueryState("maxPrice", {
    shallow: false,
    defaultValue: "",
  });

  const [min, setMin] = useState(minPrice || "");
  const [max, setMax] = useState(maxPrice || "");

  const toggleMulti = (value, current, setFn) => {
    const arr = current ? current.split(",") : [];
    const updated = arr.includes(value)
      ? arr.filter((i) => i !== value)
      : [...arr, value];

    setFn(updated.length ? updated.join(",") : null);
  };

  const applyPrice = () => {
    setMinPrice(min || null);
    setMaxPrice(max || null);
  };

  const clearAll = () => {
    setCategory(null);
    setSubCategory(null);
    setMinPrice(null);
    setMaxPrice(null);
    setMin("");
    setMax("");
  };

  return (
    <aside className="space-y-6">
      {/* Price */}
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="font-semibold mb-4">Filter by Price</h3>

        <div className="flex gap-3 mb-4">
          <input
            type="number"
            placeholder="Min"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="number"
            placeholder="Max"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={applyPrice}
            className="flex-1 bg-primary text-white py-2 rounded"
          >
            Apply
          </button>
          <button
            onClick={clearAll}
            className="flex-1 bg-gray-400 text-white py-2 rounded"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Category  */}
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="font-semibold mb-4">Category</h3>

        {["Electronics", "Laptop"].map((cat) => (
          <label key={cat} className="flex items-center gap-3 mb-3">
            <input
              type="checkbox"
              checked={category?.split(",").includes(cat) || false}
              onChange={() => toggleMulti(cat, category, setCategory)}
              className="checkbox checkbox-sm"
            />
            <span className="capitalize">{cat}</span>
          </label>
        ))}
      </div>

      {/* Subcategory */}
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="font-semibold mb-4">Sub Category</h3>

        {["Gaming Laptop", "Study Laptop"].map((sub) => (
          <label key={sub} className="flex items-center gap-3 mb-3">
            <input
              type="checkbox"
              checked={subCategory?.split(",").includes(sub)}
              onChange={() => toggleMulti(sub, subCategory, setSubCategory)}
              className="checkbox checkbox-sm"
            />
            <span>{sub}</span>
          </label>
        ))}
      </div>
    </aside>
  );
};

export default ProductFilter;
