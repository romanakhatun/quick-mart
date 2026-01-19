import CategoryCard from "./CategoryCard";

// const categoryData = [
//   {
//     title: "Phones",
//     image: "/assets/phones.webp",
//   },
//   {
//     title: "Tablet",
//     image: "/assets/tablet.webp",
//   },
//   {
//     title: "Laptop",
//     image: "/assets/laptop.webp",
//   },
//   {
//     title: "Airpods",
//     image: "/assets/airpods.webp",
//   },
// ];

const Category = async () => {
  const res = await fetch(
    `https://ecommerce-saas-server-wine.vercel.app/api/v1/category/website/${process.env.NEXT_PUBLIC_STORE_ID}`,
  );

  const data = await res.json();
  const categories = data?.data || [];

  return (
    <section className="mid-container py-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="title">Category</h2>
        <button className="btn-primary">Show More</button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {categories.map((category, i) => (
          <CategoryCard
            key={i}
            title={category?.parentCategory}
            image={category?.imageURLs}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
