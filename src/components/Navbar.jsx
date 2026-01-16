import { FaUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GrMenu } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

const mainMenu = [
  { name: "Home", href: "/" },
  { name: "All Product", href: "/products" },
  { name: "Offer", href: "/offer" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Free Delivery", href: "/delivery" },
];
const categoryData = [
  {
    title: "Phones",
    image: "/assets/phones.webp",
  },
  {
    title: "Tablet",
    image: "/assets/tablet.webp",
  },
  {
    title: "Laptop",
    image: "/assets/laptop.webp",
  },
  {
    title: "Airpods",
    image: "/assets/airpods.webp",
  },
];

const Navbar = () => {
  return (
    <div className="w-full border-b">
      {/* Top Header */}
      <div className="mid-container border-b border-base-100">
        <div className="flex items-center justify-between px-4 py-3 gap-3">
          <div>
            <label htmlFor="mobile-menu" className="btn border lg:hidden">
              <GrMenu size={20} />
            </label>
          </div>

          <div>
            <Image
              src="/assets/logo.png"
              width={50}
              height={50}
              className="w-full h-full object-contain"
              alt="Logo"
            />
          </div>

          {/* Search */}
          <div className="w-full max-w-2xl hidden lg:block">
            <div className="w-full relative px-2 lg:px-0">
              <form className="flex items-center w-full rounded overflow-hidden border border-primary">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="w-full px-3 py-2.5 outline-none text-sm"
                  name="search"
                />
                <button
                  type="submit"
                  className="px-3 py-3 transition-colors bg-primary border-primary text-white border-0 cursor-pointer"
                >
                  <GoSearch />
                </button>
              </form>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <div>
              <GoSearch size={20} className="block lg:hidden" />
            </div>

            <div className="indicator">
              <MdOutlineShoppingBag size={20} className="text-[#5b6777]" />
              <span className=" text-xs  absolute -top-2 -right-3 flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white">
                0
              </span>
            </div>

            <div className="indicator hidden md:block">
              <FaRegHeart size={20} className="text-[#5b6777]" />
              <span className=" text-xs  absolute -top-2 -right-3 flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white">
                0
              </span>
            </div>

            <Link
              href={"/auth/login"}
              className="flex items-center gap-1 border border-gray-400 rounded px-3 py-1 text-sm text-base-content"
            >
              <FaUser className="w-2.5" />{" "}
              <span className="hidden lg:block">Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="hidden lg:flex items-center gap-6 px-4 py-2">
        <button className="btn btn-primary btn-sm">Browse Categories</button>

        <nav className="flex gap-6 font-medium">
          <a href="#">Home</a>
          <a href="#">All Product</a>
          <a href="#">Offer</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Free Delivery</a>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <input id="mobile-menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer drawer-start lg:hidden">
        <div className="drawer-side z-50">
          <label htmlFor="mobile-menu" className="drawer-overlay"></label>

          <div className="menu p-4 w-72 min-h-full ">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">QuickMart</h2>
              <label htmlFor="mobile-menu" className="btn btn-sm btn-circle">
                ✕
              </label>
            </div>

            <div className="tabs tabs-boxed mb-4">
              <a className="tab tab-active">Categories</a>
              <a className="tab">Menu</a>
            </div>

            <ul className="menu gap-2">
              <li>
                <details open>
                  <summary>Electronics</summary>
                  <ul>
                    <li>
                      <a>Laptop</a>
                    </li>
                    <li>
                      <a>Accessories</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Fashion</a>
              </li>
              <li>
                <a>Home & Kitchen</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
