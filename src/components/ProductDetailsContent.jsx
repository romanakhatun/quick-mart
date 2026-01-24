"use client";
import { FaWhatsapp, FaPhone, FaRegHeart } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import ProductImages from "./ProductImage";
import Link from "next/link";
import Quantity from "./Quantity";
import ProductColor from "./ProductColor";
import { useState } from "react";

const ProductDetailsContent = ({ product, slug }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variant?.[0] || null,
  );

  const [activeImage, setActiveImage] = useState(
    product.variant?.[0]?.image || product.imageURLs?.[0] || null,
  );

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-5">
        {/* Image */}
        <div className="border border-base-100 rounded-xl p-5">
          <ProductImages
            images={product.imageURLs}
            variants={product.variant}
            activeImage={activeImage}
            onThumbnailClick={setActiveImage}
          />
        </div>

        {/* RIGHT: Info */}
        <div className="border border-base-100 rounded-xl p-6 space-y-2">
          <h1 className="font-semibold text-xl md:text-3xl mt-2 mb-4">
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
                <Link
                  href={`/category?category=${product.category}`}
                  className="cursor-pointer text-[#9234D2] hover:text-black duration-150 text-sm font-extrabold"
                >
                  {product.category}
                </Link>
              </p>

              <p>
                <span className="font-semibold">Brand:</span>{" "}
                <span className="text-base text-[#9234D2] font-medium underline cursor-pointer hover:text-primary duration-300">
                  {product.brand}
                </span>
              </p>
            </div>

            {/* Icons */}
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
          {product.variant?.length > 0 && (
            <ProductColor
              variants={product.variant}
              selectedVariant={selectedVariant}
              onSelect={(variant) => {
                setSelectedVariant(variant);
                setActiveImage(variant.image);
              }}
            />
          )}

          <Quantity />

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-4">
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

          {/* Extra Actions */}
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
    </div>
  );
};

export default ProductDetailsContent;
