import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import CartDrawer from "./CartDrawer";

const ProductCard = ({ product }) => {
  const { path, name, salePrice, productPrice, discount, imageURLs, variant } =
    product;

  return (
    <div className="bg-white rounded-md shadow transition p-3 relative flex flex-col">
      {/* Image */}
      <div className="relative w-full h-40 mb-4 mt-2">
        {discount > 0 && (
          <span className="absolute left-2 z-10 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
            {discount}% OFF
          </span>
        )}

        {/* Wishlist */}
        <button className="absolute right-2 z-10 bg-white/80 backdrop-blur-sm text-gray-800 hover:text-red-500 transition-colors p-1.5 border border-gray-200 rounded-full shadow-sm cursor-pointer">
          <FaRegHeart size={14} />
        </button>
        <div className="relative w-full h-40">
          <Link href={`/product/${path}`}>
            <Image
              src={imageURLs?.[0] || variant?.[0].image}
              alt={name || "Product image"}
              fill
              sizes="(max-width: 768px) 100vw, 250px"
              className="object-contain hover:scale-110 transition"
            />
          </Link>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-primary font-semibold">৳ {salePrice}</span>

        {productPrice > salePrice && (
          <span className="line-through text-gray-400 text-sm">
            ৳ {productPrice}
          </span>
        )}
      </div>

      {/* Title */}
      <Link href={`/product/${path}`}>
        <h3 className="text-sm font-semibold mb-4 line-clamp-2">{name}</h3>
      </Link>

      {/* Actions */}
      <div className="flex gap-2 mt-auto">
        <label
          htmlFor="cart-drawer"
          className="flex-1 border border-blue-500 text-blue-500 text-xs font-semibold py-2 rounded-md hover:bg-blue-50 transition flex justify-center cursor-pointer"
        >
          Add To Cart
        </label>

        <Link
          href={`/checkout/${path}`}
          className="flex-1 bg-blue-500 text-white text-xs font-semibold py-2 rounded-md hover:bg-blue-600 transition flex justify-center"
        >
          Buy Now
        </Link>
      </div>
      <CartDrawer />
    </div>
  );
};

export default ProductCard;
