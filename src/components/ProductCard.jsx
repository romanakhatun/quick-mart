import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CartDrawer from "./CartDrawer";

const ProductCard = ({ product }) => {
  const { slug, name, price, oldPrice, discount, images } = product;

  return (
    <div className="bg-white rounded-md shadow duration-100 transition p-3 relative">
      <div className="relative w-full h-40 mb-6 mt-2">
        <span className="absolute left-2 z-10 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
          {discount}% off
        </span>

        {/* Wishlist Button */}
        <button className="absolute right-2 z-10 bg-white/80 backdrop-blur-sm text-gray-800 hover:text-red-500 transition-colors p-1.5 border border-gray-200 rounded-full shadow-sm">
          <FaRegHeart size={14} />
        </button>
        <Link href={`/product/${slug}`}>
          <Image
            src={images[0]}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 250px"
            className="object-contain hover:scale-110 duration-150"
            priority={false}
          />
        </Link>
      </div>

      {/* Price */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-primary font-semibold">BDT {price}</span>
        <span className="line-through text-gray-400 text-sm">
          BDT {oldPrice}
        </span>
      </div>

      <Link href={`/product/${slug}`}>
        <h3 className="text-sm font-semibold mb-4 line-clamp-2">{name}</h3>
      </Link>

      {/* Actions */}
      <div className="flex gap-2 top-3 right-3 mt-auto">
        <label
          htmlFor="cart-drawer"
          className="flex-1 border border-blue-500 text-blue-500 text-xs font-semibold py-2 rounded-md hover:bg-blue-50 transition-colors flex justify-center cursor-pointer"
        >
          Add To Cart
        </label>

        <Link
          href={`/checkout/${slug}`}
          className="cursor-pointer flex-1 bg-blue-500 text-white text-xs font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors flex justify-center"
        >
          Buy Now
        </Link>
      </div>
      <CartDrawer />
    </div>
  );
};

export default ProductCard;
