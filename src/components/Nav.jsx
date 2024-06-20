import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', link: "#" },
    { id: 2, text: 'About', link: "#about" },
    { id: 3, text: 'Services', link: "#our-services" },
    { id: 4, text: 'Steps of service', link: "#steps-of-service" },
    { id: 5, text: 'Contact', link: "#contact" },
  ];

  return (
    <>
      <div className='fixed w-screen bg-gray-900 flex justify-between items-center h-20 px-5 text-white font-medium border-b-[1px] '>
        {/* Logo */}
        <h1 className='w-full text-2xl font-bold text-[#fff]'>Repair IT</h1>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex w-full'>
          {navItems.map(item => (
            <a href={item.link} key={item.id}>
              <li
                className='p-4 hover:text-[#ec0e4f] rounded-xl m-2 cursor-pointer duration-300'
              >
                {item.text}
              </li>
            </a>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='block md:hidden pe-4'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#222222] ease-in-out duration-500'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          {/* Mobile Logo */}
          <h1 className='w-full text-2xl font-bold text-[#fff] m-4'>Repair IT</h1>

          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <a href={item.link} key={item.id} onClick={()=>setNav(!nav)}>
              <li
                className='p-4 border-b rounded-xl hover:text-[#ec0e4f] duration-300 cursor-pointer border-gray-600 font-medium'
              >
                {item.text}
              </li>
            </a>
          ))}
        </ul>
      </div>
      {/* <nav className="fixed bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Repair It
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white  font-medium rounded-lg text-sm px-4 py-2 text-center bg-[#ec0e4f] hover:bg-white hover:text-black hover:ring-[#ec0e4f]"
            >
              <a href="#contact">Share problem</a>
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
                  className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 md:hover:text-[#ec0e4f]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3  md:p-0 md:hover:text-[#ec0e4f] text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#our-services"
                  className="block py-2 px-3  md:p-0 md:hover:text-[#ec0e4f] text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#steps-of-service"
                  className="block py-2 px-3  md:p-0 md:hover:text-[#ec0e4f] text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Steps of services
                </a>
              </li>
            </motion.ul>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Nav;