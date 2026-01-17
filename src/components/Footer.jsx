import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="mid-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* ABOUT */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-white">QuickMart</div>
            <p className="text-sm leading-relaxed text-gray-400">
              QuickMart is your trusted neighborhood marketplace, designed to
              make everyday shopping fast, easy, and reliable. We bring together
              quality products, affordable prices, and a seamless shopping
              experience—so you can spend less time shopping and more time
              living.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[FaFacebookF, FaInstagram, FaYoutube, FaTiktok].map(
                (Icon, i) => (
                  <span
                    key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition cursor-pointer"
                  >
                    <Icon />
                  </span>
                )
              )}
            </div>
          </div>

          {/* CATEGORIES */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop Categories</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Electronics</li>
              <li className="hover:text-white cursor-pointer">Laptop</li>
              <li className="hover:text-white cursor-pointer">Phone</li>
              <li className="hover:text-white cursor-pointer">Airpods</li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">
                Return & Refund Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">About Us</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Account & Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <CgMail className="text-primary" />
                romanakhatun2004@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-primary" />
                01796953902
              </li>
              <li className="flex items-center gap-3">
                <IoLocationOutline className="text-primary" />
                Mohammadpur, Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* SUBSCRIBE */}
        <div className="mt-12 bg-[#1e293b] rounded-lg p-6 flex flex-col text-center md:text-left md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-white text-lg font-semibold">
              Get Exclusive Deals
            </h4>
            <p className="text-sm text-gray-400">
              Subscribe to get special offers and new product updates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:flex-none px-4 py-2 bg-slate-700 text-white placeholder-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2 cursor-pointer justify-center">
              Subscribe <FaArrowRight />
            </button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>QuickMart © 2025 . All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">
              Shipping Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
