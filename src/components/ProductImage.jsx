import { useState } from "react";
import Image from "next/image";

const ProductImages = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images?.[0] || null);

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
          />
        )}
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-3 mt-4">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setActiveImage(img)}
            className={`relative w-20 h-20 border rounded-md cursor-pointer
              ${activeImage === img ? "border-primary" : "border-gray-300"}`}
          >
            <Image src={img} alt="" fill className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
