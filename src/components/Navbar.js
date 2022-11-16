import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <h1 className="w-full text-2xl font-bold text-black">React Styling</h1>
      <ul className="hidden md:flex">
        <li className="p-4 text-1xl font-mono">Home</li>
        <li className="p-4 text-1xl font-mono">Portfolio</li>
        <li className="p-4 text-1xl font-mono">About</li>
        <li className="p-4 text-1xl font-mono">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-black bg-black ease-in-out duration-500 p-4"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="my-6 w-full text-2xl font-medium text-white">
          React Writing
        </h1>
        <li className="border-b border-b-white text-white font-light py-4 hover:scale-105 duration-500 cursor-pointer">
          Home
        </li>
        <li className="border-b border-b-white text-white font-light py-4 hover:scale-105 duration-500 cursor-pointer">
          Portfolio
        </li>
        <li className="border-b border-b-white text-white font-light py-4 hover:scale-105 duration-500 cursor-pointer">
          About
        </li>
        <li className="border-b border-b-white text-white font-light py-4 hover:scale-105 duration-500 cursor-pointer">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
