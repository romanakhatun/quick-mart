import CategoryCard from "./CategoryCard";

const categoryData = [
  {
    title: "Phones",
    image: "/assets/phones.webp",
  },
  {
    title: "Tablet",
    image: "/assets/tablet.webp",
  },
  {
    title: "Laptop",
    image: "/assets/laptop.webp",
  },
  {
    title: "Airpods",
    image: "/assets/airpods.webp",
  },
];

const Category = () => {
  return (
    <section className="mid-container py-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="title">Category</h2>
        <button className="btn-primary">Show More</button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {categoryData.map((category, i) => (
          <CategoryCard title={category.title} image={category.image} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Category;
