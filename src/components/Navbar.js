import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <h1 className=" w-full text-2xl font-bold text-black">React Styling</h1>
      <ul className="hi md:flex">
        <li className="p-4 text-1xl font-mono">Home</li>
        <li className="p-4 text-1xl font-mono">Portfolio</li>
        <li className="p-4 text-1xl font-mono">About</li>
        <li className="p-4 text-1xl font-mono">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
