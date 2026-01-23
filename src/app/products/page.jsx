import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import SortSelect from "@/components/SortSelect";
import { CiFilter } from "react-icons/ci";
export const dynamic = "force-dynamic";

const Products = async ({ searchParams }) => {
  const query = await searchParams;

  const page = Number(query.page || 1);
  const PER_PAGE = 5;

  const sort = query.sort || "";

  const normalize = (value) => {
    if (!value) return null;
    if (Array.isArray(value)) return value.join(",");
    return value;
  };

  const minPrice = normalize(query.minPrice);
  const maxPrice = normalize(query.maxPrice);
  const category = normalize(query.category);
  const subCategory = normalize(query.subCategory);

  const params = new URLSearchParams();

  if (minPrice) params.set("minPrice", minPrice);
  if (maxPrice) params.set("maxPrice", maxPrice);
  if (category) params.set("category", category);
  if (subCategory) params.set("subCategory", subCategory);

  const url = `https://ecommerce-saas-server-wine.vercel.app/api/v1/product/website?${params.toString()}`;

  const res = await fetch(url, {
    headers: {
      "store-id": process.env.NEXT_PUBLIC_STORE_ID,
    },
    cache: "no-store",
  });

  const json = await res.json();
  const products = json?.data?.data || [];

  // Sort
  let sortedProducts = [...products];

  if (sort === "asc") {
    sortedProducts.sort((a, b) => a.salePrice - b.salePrice);
  }

  if (sort === "desc") {
    sortedProducts.sort((a, b) => b.salePrice - a.salePrice);
  }

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  const paginatedProducts = sortedProducts.slice(start, end);

  console.log({ params, params: params.toString(), url });
  return (
    <div className="drawer drawer-start lg:drawer-open">
      {/* Drawer Toggle */}
      <input id="filter-drawer" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content">
        <div className="mid-container">
          <div className="py-5 mt-4 flex gap-10">
            {/* Desktop Filter */}
            <div className="w-[20%] hidden lg:block">
              <ProductFilter />
            </div>

            <div className="w-full lg:w-[80%]">
              {/* Top Bar */}
              <div className="flex bg-white shadow rounded-md md:items-center gap-2 md:flex-row flex-col justify-between py-5 px-5 mb-8 w-full">
                <div className="flex items-center justify-between gap-2">
                  {/* Mobile Filter Button */}
                  <label
                    htmlFor="filter-drawer"
                    className="bg-primary text-white shadow-lg rounded px-3 py-2 lg:hidden flex items-center gap-1 text-base cursor-pointer"
                  >
                    <CiFilter />
                    Filter
                  </label>

                  <p className="text-base font-bold text-base-content">
                    Total {products.length} Items Found
                  </p>
                </div>

                {/* Sort */}
                <div className="hidden md:block">
                  <form className="flex items-center gap-4">
                    <label htmlFor="sort" className="text-gray-600 font-medium">
                      Sort by:
                    </label>

                    {/* <select
                      id="sort"
                      className="border w-40 rounded px-3 border-gray-400 text-sm outline-none py-2 cursor-pointer"
                    >
                      <option value="">Sort By Price</option>
                      <option value="asc">Price: Low to High</option>
                      <option value="desc">Price: High to Low</option>
                    </select> */}

                    <SortSelect />
                  </form>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 md:gap-5">
                {paginatedProducts.map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination currentPage={page} totalPages={totalPages} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Side */}
      <div className="drawer-side z-50 lg:hidden">
        <label htmlFor="filter-drawer" className="drawer-overlay"></label>

        <div className="w-[85%] max-w-[320px] bg-white min-h-full p-4">
          {/* Drawer Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Filter</h3>

            <label htmlFor="filter-drawer" className="btn btn-sm btn-circle">
              ✕
            </label>
          </div>

          <ProductFilter />
        </div>
      </div>
    </div>
  );
};
export default Products;
