import ProductCard from "./ProductCard";

const NewArrivals = async () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("/data/products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  const res = await fetch(
    "https://ecommerce-saas-server-wine.vercel.app/api/v1/product/website",
    {
      headers: {
        "store-id": process.env.NEXT_PUBLIC_STORE_ID,
      },
    },
  );

  const json = await res.json();
  const products = json?.data?.data || [];

  return (
    <section className="mid-container py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="title">New Arrivals</h2>
        <button className="btn-primary">Show More</button>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 md:gap-5">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
