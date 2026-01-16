"use client";
import { FaUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiMiniChevronDown } from "react-icons/hi2";

import { GrMenu } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const mainMenu = [
  { name: "Home", href: "/" },
  { name: "All Product", href: "/products" },
  { name: "Offer", href: "/offer" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Free Delivery", href: "/delivery" },
];

const categoryMenu = [
  {
    title: "Electronics",
  },
  {
    title: "Laptop",
    children: ["Gaming Laptop", "Study Laptop"],
  },
  {
    title: "Airpods",
    children: ["Wireless Airpods", "Noise Cancelling"],
  },
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
  const [activeTab, setActiveTab] = useState("categories");

  return (
    <div className="w-full border-b border-base-100">
      {/* Top Header */}
      <div className="border-b border-base-100">
        <div className="mid-container ">
          <div className="flex items-center justify-between px-4 py-3 gap-3">
            <div>
              <label htmlFor="mobile-menu" className="btn border lg:hidden">
                <GrMenu size={20} />
              </label>
            </div>

            <div>
              <Link href={"/"}>
                <Image
                  src="/assets/logo.png"
                  width={50}
                  height={50}
                  className="w-full h-full object-contain"
                  alt="Logo"
                />
              </Link>
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
      </div>

      {/* Bottom Nav */}
      <div className="mid-container">
        <div className="hidden lg:flex lg:items-center justify-center gap-6 px-4 py-2 relative">
          {/* Browse Categories */}
          <div className="relative group">
            <button className=" text-white px-5 justify-between w-[250px] rounded-md py-2.5  bg-primary text-sm font-medium flex items-center gap-1 cursor-pointer">
              Browse Categories
              <span className="transition-transform duration-800 group-hover:rotate-180">
                <HiMiniChevronDown />
              </span>
            </button>

            {/* Dropdown Panel */}
            <div className="absolute left-0 top-full mt-2 w-65 min-h-68 bg-white shadow-lg opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              <ul className="divide-y menu w-full">
                {categoryMenu.map((cat, i) => (
                  <li className="border-b border-gray-100" key={i}>
                    {cat.children ? (
                      <details>
                        <summary>{cat.title}</summary>
                        <ul>
                          {cat.children.map((sub, idx) => (
                            <li key={idx}>
                              <a>{sub}</a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <a>{cat.title}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Menu */}
          <nav className="flex gap-6 font-medium">
            {mainMenu.map((item, i) => (
              <li key={i} className="list-none">
                <Link href={item.href} className="hover:text-primary">
                  {item.name}
                </Link>
              </li>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className="drawer lg:hidden">
        <input id="mobile-menu" type="checkbox" className="drawer-toggle" />

        {/* Page content */}
        <div className="drawer-content"></div>

        {/* Drawer side */}
        <div className="drawer-side z-50">
          <label htmlFor="mobile-menu" className="drawer-overlay"></label>

          <div className="w-70 min-h-full bg-white p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">QuickMart</h2>
              <label htmlFor="mobile-menu" className="btn btn-sm btn-circle">
                ✕
              </label>
            </div>

            {/* Tabs */}
            <div className="w-full grid grid-cols-2 rounded-lg overflow-hidden">
              <button
                className={`py-2 font-bold text-sm cursor-pointer bg-gray-200 text-black/60 transition duration-200 ${
                  activeTab === "categories" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setActiveTab("categories")}
              >
                Categories
              </button>

              <button
                className={`py-2 font-bold text-sm cursor-pointer bg-gray-200 text-black/60 transition duration-200 ${
                  activeTab === "menu" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setActiveTab("menu")}
              >
                Menu
              </button>
            </div>

            {/* Menu Content */}
            <ul className="menu gap-2 w-full">
              {activeTab === "categories" && (
                <>
                  {categoryMenu.map((cat, i) => (
                    <li className="border-b border-gray-100" key={i}>
                      {cat.children ? (
                        <details>
                          <summary>{cat.title}</summary>
                          <ul>
                            {cat.children.map((sub, idx) => (
                              <li key={idx}>
                                <a>{sub}</a>
                              </li>
                            ))}
                          </ul>
                        </details>
                      ) : (
                        <a>{cat.title}</a>
                      )}
                    </li>
                  ))}
                </>
              )}

              {activeTab === "menu" && (
                <>
                  {mainMenu.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        onClick={() =>
                          document.getElementById("mobile-menu").click()
                        }
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
