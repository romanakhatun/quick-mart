"use client";
import { useState } from "react";

const ProductTabs = ({ product }) => {
  const [active, setActive] = useState("description");

  return (
    <section className="mid-container py-10">
      <div className="border border-gray-300 rounded-xl shadow p-6">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center border-b border-base-100 pb-6">
          {["description", "ingredient", "how", "review", "video"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-5 py-1 rounded-full text-[14px] md:text-base font-medium transition cursor-pointer
                  ${
                    active === tab
                      ? "bg-primary text-white"
                      : "border border-base-300 text-gray-600"
                  }`}
              >
                {tab === "how"
                  ? "How To Use"
                  : tab === "ingredient"
                    ? "Ingredient"
                    : tab === "review"
                      ? `Review (${product.review.length})`
                      : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ),
          )}
        </div>

        {/* Content */}
        <div className="pt-8 text-gray-700 leading-relaxed">
          {active === "description" && (
            <div
              className="prose prose-sm md:prose-base max-w-none prose-h1:text-2xl prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-semibold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary prose-ul:list-disc"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          )}

          {active === "ingredient" && (
            <div
              className="prose prose-sm md:prose-base max-w-none prose-h1:text-2xl prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-semibold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary prose-ul:list-disc"
              dangerouslySetInnerHTML={{ __html: product.ingredient }}
            />
          )}

          {active === "how" && (
            <div
              className="prose prose-sm md:prose-base max-w-none prose-h1:text-2xl prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-semibold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary prose-ul:list-disc"
              dangerouslySetInnerHTML={{ __html: product.how_to_use }}
            />
          )}

          {active === "review" && (
            <p className="text-gray-500">No reviews yet.</p>
          )}

          {active === "video" &&
            (product.video ? (
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={product.youtube}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            ) : (
              <p className=" text-gray-500">Video Not Found</p>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
