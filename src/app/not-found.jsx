"use client";

import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-none">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        Opps! Page Not Found
      </h2>
      <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
        The page you're looking for doesn't exist or has been moved to another
        location.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-6"
      >
        <BiLeftArrowAlt />
        Go Back Home
      </Link>
    </div>
  );
}
