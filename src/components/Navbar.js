import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { styles } from "../constant/Global-style";
import { toggleStyle } from "../constant/Global-style";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className={styles.HEAD}>React Styling</h1>
      <ul className="hidden md:flex">
        <Link to="/">
          <li className={styles.LIST}>Home</li>
        </Link>
        <Link to="/product">
          <li className={styles.LIST}>Data</li>
        </Link>
        <li className={styles.LIST}>About</li>
        <li className={styles.LIST}>Contact</li>
      </ul>
      <div onClick={handleNav} className="block cursor-pointer md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? toggleStyle.NAVTOOGLE : toggleStyle.NAVTOOGLEOUT}>
        <h1 className={styles.MHEAD}>React Writing</h1>
        <Link to="/">
          <li className={styles.MLIST} onClick={handleNav}>
            Home
          </li>
        </Link>
        <Link to="/product">
          <li className={styles.MLIST} onClick={handleNav}>
            Data
          </li>
        </Link>
        <li className={styles.MLIST} onClick={handleNav}>
          About
        </li>
        <li className={styles.MLIST} onClick={handleNav}>
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
