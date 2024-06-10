import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <>
      <nav className="relative bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Repair IT
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white  font-medium rounded-lg text-sm px-4 py-2 text-center bg-[#ec0e4f] hover:bg-[#ec0e4f] focus:ring-[#ec0e4f]"
            >
              Share problem
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <motion.ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-[#ec0e4f] rounded md:bg-transparent  md:p-0 md:text-[#ec0e4f]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  md:p-0 md:hover:text-[#ec0e4f] text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  md:p-0 md:hover:text-[#ec0e4f] text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  md:p-0 md:hover:text-[#ec0e4f] text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Contact
                </a>
              </li>
            </motion.ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
// 188
// 217
// 12