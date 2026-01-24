"use client";
import { useState } from "react";
import ProductColor from "./ProductColor";

const ProductVariantWrapper = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variant?.[0]);

  return (
    <>
      {/* STOCK */}
      <p className="mt-2 text-sm">
        <span className="font-semibold">Stock:</span>{" "}
        {selectedVariant.quantity > 0 ? (
          <span className="text-green-600">In Stock</span>
        ) : (
          <span className="text-red-500">Out of Stock</span>
        )}
      </p>

      {/* PRICE */}
      <div className="flex items-center gap-4 mt-4">
        <span className="text-3xl font-bold text-orange-600">
          TK {selectedVariant.salePrice}
        </span>

        <span className="bg-red-600 px-3 py-1 text-white text-xs rounded-full">
          {selectedVariant.discount}% OFF
        </span>
      </div>

      {/* COLOR */}
      <ProductColor
        variants={product.variant}
        selectedVariant={selectedVariant}
        onSelect={setSelectedVariant}
      />
    </>
  );
};

export default ProductVariantWrapper;
