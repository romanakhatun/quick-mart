import Image from "next/image";
import Link from "next/link";

const CategoryMenu = ({ data, closeDrawer }) => {
  return (
    <>
      <li className="border-b border-gray-100" key={i}>
        {cat.children ? (
          <details>
            <summary>
              <Image
                className="rounded-md object-contain w-5 h-5"
                loading="lazy"
                src={cat.image}
                alt="Image"
                width={50}
                height={50}
              />{" "}
              {cat.title}
            </summary>
            <ul>
              {cat.children.map((sub, idx) => (
                <li key={idx}>
                  <a>{sub}</a>
                </li>
              ))}
            </ul>
          </details>
        ) : (
          <div>
            <Image
              className="rounded-md object-contain w-5 h-5"
              loading="lazy"
              src={cat.image}
              alt="Image"
              width={50}
              height={50}
            />
            <a>{cat.title}</a>
          </div>
        )}
      </li>
    </>
  );
};

export default CategoryMenu;
