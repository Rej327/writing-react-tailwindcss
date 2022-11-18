import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-2xl font-bold text-[#00df9a] font-mono">
        React Styling
      </h1>
      <ul className="hidden md:flex">
        <Link to="/">
          <li className="p-4 text-1xl font-mono cursor-pointer hover:text-[#00df9a] hover:scale-105 duration-500">
            Home
          </li>
        </Link>
        <li className="p-4 text-1xl font-mono cursor-pointer hover:text-[#00df9a] hover:scale-105 duration-500">
          Portfolio
        </li>
        <li className="p-4 text-1xl font-mono cursor-pointer hover:text-[#00df9a] hover:scale-105 duration-500">
          About
        </li>
        <li className="p-4 text-1xl font-mono cursor-pointer hover:text-[#00df9a] hover:scale-105 duration-500">
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className="block cursor-pointer md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "z-[1000] fixed left-0 top-0 w-[60%] h-full border-r border-r-black bg-black ease-in-out duration-500 p-4"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="my-6 w-full text-2xl font-medium text-white">
          React Writing
        </h1>
        <li className="border-b border-b-gray-600 text-gray-400 font-light py-4 hover:scale-105 duration-500 hover:text-white hover:border-b-white hover:font-bold cursor-pointer">
          Home
        </li>
        <li className="border-b border-b-gray-600 text-gray-400 font-light py-4 hover:scale-105 duration-500 hover:text-white hover:border-b-white hover:font-bold cursor-pointer">
          Portfolio
        </li>
        <li className="border-b border-b-gray-600 text-gray-400 font-light py-4 hover:scale-105 duration-500 hover:text-white hover:border-b-white hover:font-bold cursor-pointer">
          About
        </li>
        <li className="border-b border-b-gray-600 text-gray-400 font-light py-4 hover:scale-105 duration-500 hover:text-white hover:border-b-white hover:font-bold cursor-pointer">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
