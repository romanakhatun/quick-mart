"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Personalized = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
        {topOffers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Personalized;
