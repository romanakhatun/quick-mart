"use client";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mid-container">
      <div className="py-5 mt-4 flex gap-10">
        <div className="w-[20%] hidden lg:block">
          <ProductFilter />
        </div>
        <div className="w-full lg:w-[80%]">
          <div className="flex bg-white shadow rounded-md md:items-center gap-2 md:flex-row flex-col justify-between py-5 px-5 mb-8 w-full">
            <div className="flex items-center justify-between gap-1">
              <button className="bg-primary text-white shadow-lg rounded px-2.5 py-1.5 lg:hidden flex items-center gap-1 text-base">
                <CiFilter />
                Filter
              </button>
              <p className="text-base font-bold text-base-content">
                Total {products.length} Items Found
              </p>
            </div>
            <div className="hidden md:block">
              <form className="flex items-center gap-4">
                <label
                  htmlFor="sort"
                  className="text-gray-600 hidden md:block font-medium"
                >
                  Sort by:
                </label>

                <select
                  id="sort"
                  name="sort"
                  className="border w-[130px] md:w-auto rounded px-3 border-gray-400
               text-sm outline-none py-1.5 md:py-2.5 cursor-pointer"
                >
                  <option value="">Sort By Price</option>
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                </select>
              </form>
            </div>
          </div>
          <div>
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 md:gap-5">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
