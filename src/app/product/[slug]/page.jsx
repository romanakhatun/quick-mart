"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaWhatsapp, FaPhone, FaRegHeart } from "react-icons/fa";
import { LuMinus } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import ProductTabs from "@/components/ProductTabs";
import { BsShareFill } from "react-icons/bs";
import ProductImages from "@/components/ProductImage";

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.slug === slug);
        setProduct(found);
      });
  }, [slug]);

  if (!product) return null;

  return (
    <main className="min-h-screen bg-white">
      <section className="mid-container py-10">
        <div className="grid lg:grid-cols-2 gap-5">
          {/* Image */}
          <div className="border border-base-100 rounded-xl p-5">
            <ProductImages images={product.images} />
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
                  <span className="cursor-pointer text-[#9234D2] hover:text-black duration-150 text-sm font-extrabold">
                    {product.category}
                  </span>
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

            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span className="text-green-600">In Stock</span>
            </p>

            {/* Price */}
            <div className="flex items-center gap-4 mt-4">
              <span className="text-3xl font-bold text-[#ea580c]">
                TK {product.price}.00
              </span>
              <p className="bg-red-600 py-1 px-3 text-white rounded-2xl btn-sm text-xs btn-warning hover:bg-red-600">
                {product.discount}% OFF
              </p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-4">
              <span className="font-semibold">QUANTITY :</span>
              <div className="flex items-center h-[45px] justify-start border-gray-300 border-2 rounded-md">
                <button
                  className="px-3 py-1 cursor-pointer"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                >
                  <LuMinus />
                </button>
                <span className="px-4">{qty}</span>
                <button
                  className="px-3 py-1 cursor-pointer"
                  onClick={() => setQty(qty + 1)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <button className="py-3 px-5 font-medium justify-center w-full border-none rounded-lg flex items-center gap-1 md:gap-2 bg-[#0078ff] hover:bg-[#0078ff]/80 duration-300 text-white cursor-pointer">
                Buy Now
              </button>
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
        <ProductTabs product={product} />
      </section>
    </main>
  );
};

export default ProductDetails;
