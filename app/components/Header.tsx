import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  className="h-12 w-12 rounded-full ml-7"
                  src="https://png.pngtree.com/element_our/20200609/ourmid/pngtree-flat-kids-programming-image_2231450.jpg"
                  alt="logo"
                /> 
              </Link>
              <h1 className="cursor-pointer text-xl">CODERS{"</>"}</h1>
            </div>
            <p className="text-lg text-right text-fuchsia-50">
                " From Invention to Innovation "
            </p>

            <div className="hidden md:flex md:items-center md:space-x-10">
              <Link
                href="/"
                title=""
                className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70  focus:text-opacity-70"
              >
                
                Home
              </Link>

              <Link
                href="about"
                title=""
                className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
              >
                
                About
              </Link>
            </div>
          </nav>
          <nav className="min-h-2 px-2 py-5 text-center bg-black md:hidden">
            <button
              type="button"
              className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav className="flex flex-col items-center mt-10 space-y-2">
              <Link
                href="/"
                title=""
                className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                {" "}
                Home{" "}
              </Link>

              <Link
                href="about"
                title=""
                className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                {" "}
                About{" "}
              </Link>
            </nav>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
