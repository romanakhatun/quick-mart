"use client";

import Image from "next/image";

const ProductImages = ({
  variants = [],
  images = [],
  activeImage,
  onThumbnailClick,
}) => {
  // Variant images (only if exists)
  const variantImages = variants?.map((v) => v.image).filter(Boolean);

  // Merge variant images + imageURLs
  const thumbnails = Array.from(
    new Set([...(variantImages || []), ...(images || [])]),
  );

  if (!activeImage && !thumbnails.length) return null;

  return (
    <div>
      {/* MAIN IMAGE */}
      {activeImage && (
        <div className="relative w-full h-96 rounded-md">
          <Image
            src={activeImage}
            alt="product"
            fill
            className="object-contain rounded-md"
            priority
          />
        </div>
      )}

      {/* THUMBNAILS */}
      <div className="flex gap-3 pt-4 flex-wrap">
        {thumbnails.map((img, i) => (
          <button
            key={i}
            onClick={() => onThumbnailClick(img)}
            className={`relative w-20 h-20 border rounded-md ${
              activeImage === img ? "border-primary" : "border-gray-300"
            }`}
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
