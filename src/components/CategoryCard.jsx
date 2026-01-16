import Image from "next/image";

const CategoryCard = ({ title, image }) => {
  return (
    <div className="bg-white rounded-md border border-base-100 hover:shadow-lg transition flex flex-col items-center justify-center gap-2 px-5 py-7 cursor-pointer duration-300">
      {image && (
        <Image
          src={image}
          alt={title}
          width={1000}
          height={700}
          loading="lazy"
          className="w-10 h-10 object-contain"
        />
      )}

      <p className="text-sm font-medium">{title}</p>
    </div>
  );
};

export default CategoryCard;
