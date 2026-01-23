"use client";
import { useRouter, useSearchParams } from "next/navigation";

const SortSelect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "";

  const handleChange = (e) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", e.target.value);
    params.set("page", "1");
    router.push(`/products?${params.toString()}`);
  };

  return (
    <select
      value={currentSort}
      onChange={handleChange}
      className="border w-40 rounded px-3 border-gray-400 text-sm outline-none py-2 cursor-pointer"
    >
      <option value="">Sort By Price</option>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  );
};

export default SortSelect;
