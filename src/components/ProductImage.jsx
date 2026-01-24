"use client";
import { useMemo, useState } from "react";
import Image from "next/image";

const ProductImages = ({ images = [], variant = [] }) => {
  console.log("variants", variant);

  const allImages = useMemo(() => {
    const variantImages = variant.map((v) => v.image).filter(Boolean);
    return images.length ? images : variantImages;
  }, [images, variant]);

  const [activeImage, setActiveImage] = useState(allImages[0] || null);

  return (
    <div>
      {/* MAIN IMAGE */}
      <div className="relative w-full h-100 rounded-lg">
        {activeImage && (
          <Image
            src={activeImage}
            alt="product"
            fill
            className="object-contain"
            priority
          />
        )}
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-3 pt-4 flex-wrap">
        {allImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(img)}
            className={`relative w-20 h-20 border rounded-md cursor-pointer
              ${activeImage === img ? "border-primary" : "border-gray-300"}`}
          >
            <Image
              src={img}
              alt="thumbnail"
              fill
              className="object-contain rounded-md"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
