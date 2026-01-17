"use client";
import { useState } from "react";

const ProductFilter = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const handleCheckbox = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  return (
    <aside className="space-y-6">
      {/* Filter by Price */}
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-lg font-semibold mb-4">Filter by Price</h3>

        <div className="flex gap-3 mb-4">
          <input
            type="number"
            placeholder="Min"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="w-full border rounded-md px-3 py-2 outline-none"
          />
          <input
            type="number"
            placeholder="Max"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className="w-full border rounded-md px-3 py-2 outline-none"
          />
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-primary text-white py-2 rounded-md font-medium cursor-pointer">
            Apply
          </button>
          <button
            onClick={() => {
              setMin("");
              setMax("");
            }}
            className="flex-1 bg-gray-400 text-white py-2 rounded-md font-medium cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Filter by Category */}
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>

        {["Electronics", "Laptop", "Accessories"].map((cat) => (
          <label
            key={cat}
            className="flex items-center gap-3 mb-3 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={categories.includes(cat)}
              onChange={() => handleCheckbox(cat, categories, setCategories)}
              className="checkbox checkbox-sm"
            />
            <span className="hover:text-primary font-medium">{cat}</span>
          </label>
        ))}
      </div>

      {/* Filter by Subcategory */}
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-lg font-semibold mb-4">Filter by Subcategory</h3>

        {["Gaming Laptop", "Study Laptop"].map((sub) => (
          <label
            key={sub}
            className="flex items-center gap-3 mb-3 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={subCategories.includes(sub)}
              onChange={() =>
                handleCheckbox(sub, subCategories, setSubCategories)
              }
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
