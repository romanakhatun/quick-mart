"use client";
import { FaPhone, FaRegHeart, FaWhatsapp } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import ProductImages from "./ProductImage";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductAttributes from "./ProductAttributes";
import Quantity from "./Quantity";

const ProductDetailsContent = ({ product, slug }) => {
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (product?.variant?.length) {
      const defaultVariant = product.variant[0];

      setSelectedVariant(defaultVariant);
      setSelectedAttributes(defaultVariant.attributes);
      setActiveImage(defaultVariant.image || product.imageURLs?.[0] || null);
    }
  }, [product]);

  const updateVariantByAttributes = (updatedAttributes) => {
    const matched = product.variant.find((variant) =>
      Object.entries(updatedAttributes).every(
        ([key, value]) => variant.attributes?.[key] === value,
      ),
    );

    if (matched) {
      setSelectedVariant(matched);
      setActiveImage(matched.image || product.imageURLs?.[0] || null);
    }

    setSelectedAttributes(updatedAttributes);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-5">
      {/* IMAGE */}
      <div className="border border-base-100 rounded-xl p-5">
        <ProductImages
          variants={product.variant}
          images={product.imageURLs}
          activeImage={activeImage}
          onThumbnailClick={setActiveImage}
        />
      </div>

      {/* INFO */}
      <div className="border border-base-100 rounded-xl p-6 space-y-3">
        <h1 className="font-semibold text-xl md:text-3xl mb-4">
          {product.name}
        </h1>

        <p className="text-base">
          <span className="font-semibold">SKU : </span>
          <span className="font-medium">{product.sku}</span>
        </p>

        <div className="flex justify-between">
          <div>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {product.category?.map((cat) => (
                <Link
                  key={cat}
                  href={`/category?category=${cat}`}
                  className="text-[#9234D2] hover:text-black duration-150 text-sm font-extrabold"
                >
                  {cat}
                </Link>
              ))}
            </p>

            <p>
              <span className="font-semibold">Brand:</span>{" "}
              <span className="text-base text-[#9234D2] font-medium underline cursor-pointer hover:text-primary duration-300">
                {product.brand}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <button className="cursor-pointer bg-gray-200 p-2 rounded-md text-gray-800">
              <FaRegHeart className="text-primary cursor-pointer" />
            </button>
            <button className="cursor-pointer bg-gray-200 p-2 rounded-md hover:text-primary duration-300">
              <BsShareFill />
            </button>
          </div>
        </div>

        {/* STOCK */}
        {selectedVariant && (
          <p className="mt-2 text-sm">
            <span className="font-semibold">Stock:</span>{" "}
            {selectedVariant.quantity > 0 ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-500">Out of Stock</span>
            )}
          </p>
        )}

        {/* PRICE */}
        {selectedVariant && (
          <div className="flex items-center gap-4 mt-4">
            <span className="text-3xl font-bold text-orange-600">
              TK {selectedVariant.salePrice}.00
            </span>
            <span className="bg-red-600 px-3 py-1 text-white text-xs rounded-full">
              {selectedVariant.discount}% OFF
            </span>
          </div>
        )}

        {product.attributes && (
          <ProductAttributes
            attributes={product.attributes}
            variants={product.variant}
            selectedAttributes={selectedAttributes}
            onChange={updateVariantByAttributes}
          />
        )}

        <Quantity />
        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-base-100">
          <Link
            href={`/checkout/${slug}`}
            className="py-3 px-5 font-medium justify-center w-full border-none rounded-lg flex items-center gap-1 md:gap-2 bg-[#0078ff] hover:bg-[#0078ff]/80 duration-300 text-white cursor-pointer"
          >
            Buy Now
          </Link>
          <button className="py-3 px-5 text-white font-medium justify-center  w-full border-none  rounded-lg flex items-center gap-1 md:gap-2 bg-yellow-600 hover:bg-yellow-600/80 duration-300 cursor-pointer">
            Add To Cart
          </button>
        </div>
        <button className="py-3 px-2 md:px-5 justify-center  font-medium bg-[#075E54] text-white w-full md:text-base text-sm mx-auto hover:bg-[#075E54]/80 duration-300 rounded-lg flex items-center gap-1 md:gap-2 border-none cursor-pointer">
          <FaWhatsapp /> হোয়াটসঅ্যাপ অর্ডার
        </button>
        <a
          href="tel:01796953902"
          className="py-3 px-5 justify-center font-medium bg-[#0078ff] w-full mx-auto hover:bg-[#0078ff]/80 duration-300 rounded-lg flex items-center gap-1 md:gap-2 text-white border-none"
        >
          <FaPhone /> কল অর্ডার করুন
        </a>
      </div>
    </div>
  );
};

export default ProductDetailsContent;
