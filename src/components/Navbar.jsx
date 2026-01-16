import { FaSearch, FaHeart, FaUser, FaBars } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-full border-b">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-3 gap-3">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <label htmlFor="mobile-menu" className="btn btn-ghost lg:hidden">
            <FaBars size={20} />
          </label>

          <h1 className="text-xl font-bold">QuickMart</h1>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-xl">
          <div className="join w-full">
            <input
              type="text"
              placeholder="Search Product"
              className="input input-bordered join-item w-full"
            />
            <button className="btn btn-primary join-item">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <div className="indicator">
            <span className="indicator-item badge badge-primary">0</span>
            <button className="btn btn-ghost">
              <BsCart size={20} />
            </button>
          </div>

          <div className="indicator">
            <span className="indicator-item badge badge-primary">0</span>
            <button className="btn btn-ghost">
              <FaHeart size={20} />
            </button>
          </div>

          <button className="btn btn-outline hidden sm:flex gap-2">
            <FaUser /> Login
          </button>
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
