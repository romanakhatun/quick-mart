"use client";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

const CartDrawer = () => {
  return (
    <div className="drawer drawer-end z-50">
      {/* Toggle */}
      <input id="cart-drawer" type="checkbox" className="drawer-toggle" />

      {/* Drawer Side */}
      <div className="drawer-side">
        <label htmlFor="cart-drawer" className="drawer-overlay"></label>

        <div className="w-95 bg-white flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 bg-primary text-white">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <label
              htmlFor="cart-drawer"
              className="btn btn-sm btn-circle bg-white text-black"
            >
              <IoCloseOutline size={20} />
            </label>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Item */}
            <div className="flex gap-3 items-center border rounded-lg p-3">
              <Image
                src="/assets/products/padmini1.webp"
                alt="product"
                width={60}
                height={60}
                className="object-contain"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-sm">Honor Pad 8</h3>
                <p className="text-sm text-gray-500 line-through">৳300</p>
                <p className="text-sm font-bold">৳300</p>
              </div>

              {/* Qty */}
              <div className="flex items-center gap-1 border rounded px-2 py-1">
                <button className="px-1">-</button>
                <span>3</span>
                <button className="px-1">+</button>
              </div>

              {/* Remove */}
              <button className="text-red-500">
                <FaTrash />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t">
            <button className="w-full bg-primary text-white py-3 rounded-lg flex items-center justify-between px-4 font-semibold">
              <span>Proceed To Checkout</span>
              <span className="bg-white text-primary px-3 py-1 rounded">
                ৳900
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
