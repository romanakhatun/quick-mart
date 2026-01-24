"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const ProductImages = ({
  images = [],
  variants = [],
  activeImage,
  onThumbnailClick,
}) => {
  const thumbnails = variants?.length
    ? variants.map((v) => v.image).filter(Boolean)
    : images;

  return (
    <div>
      {/* MAIN IMAGE */}
      <div className="relative w-full h-96 rounded-md">
        <Image
          src={activeImage}
          alt="product"
          fill
          className="object-contain rounded-md"
          priority
        />
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-3 pt-4 flex-wrap">
        {thumbnails.map((img, i) => (
          <button
            key={i}
            onClick={() => onThumbnailClick(img)}
            className={`relative w-20 h-20 border rounded-md
              ${activeImage === img ? "border-primary" : "border-gray-300"}`}
          >
            <Image
              src={img}
              alt="thumbnail"
              fill
              className="object-contain rounded-md cursor-pointer"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
