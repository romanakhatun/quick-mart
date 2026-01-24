"use client";
import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

const Quantity = () => {
  const [qty, setQty] = useState(1);
  return (
    <div>
      {/* Quantity */}
      <div className="flex items-center gap-4 mt-4">
        <span className="font-semibold">QUANTITY :</span>
        <div className="flex items-center h-11.25 justify-start border-gray-300 border-2 rounded-md">
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
            <LuPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
