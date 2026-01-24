import ProductCard from "@/components/ProductCard";

const Category = async ({ searchParams }) => {
  const query = await searchParams;
  const params = new URLSearchParams();

  const url = `${process.env.NEXT_PUBLIC_API_URL}/product/website?${params.toString()}`;
  const res = await fetch(url, {
    headers: {
      "store-id": process.env.NEXT_PUBLIC_STORE_ID,
    },
    cache: "no-store",
  });

  const json = await res.json();
  const products = json?.data?.data || [];

  const filteredProduct = products.filter(
    (product) => product.category?.[0] === query.category,
  );

  console.log(url);

  return (
    <div className="mid-container my-10">
      <div className="flex bg-white shadow rounded-md md:items-center gap-2 md:flex-row flex-col justify-between py-5 px-5 mb-8 w-full">
        <div className="flex items-center justify-between gap-2">
          <p className="text-base font-bold text-base-content">
            Total {filteredProduct.length} Items Found
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 md:gap-5">
        {filteredProduct.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
