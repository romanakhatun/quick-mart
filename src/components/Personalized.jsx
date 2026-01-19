import ProductCard from "./ProductCard";

const Personalized = async () => {
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

  const topOffers = [...products]
    .filter((p) => p.discount > 0)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 5);

  return (
    <section className="mid-container py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="title">Just For You</h2>
        <button className="btn-primary">Show More</button>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 md:gap-5">
        {topOffers.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Personalized;
