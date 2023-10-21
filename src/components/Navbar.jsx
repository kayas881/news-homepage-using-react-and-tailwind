import React, { useState } from "react";
import MenuClose from "../assets/images/icon-menu-close.svg";
import MenuOpen from "../assets/images/icon-menu.svg";
import logo from "../assets/images/logo.svg";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between  items-center h-24 max-w-[1240px] mx-auto px-4 text-black text-very-dark-blue">
      <img className=" pt-16" src={logo} alt="logo" />

      <ul className="hidden md:flex md:pt-16">
        <li className="p-4 font-interLight">Home</li>
        <li className="p-4 font-interLight">New</li>
        <li className="p-4 font-interLight">Popular</li>
        <li className="p-4 font-interLight">Trending</li>
        <li className="p-4 font-interLight">Categories</li>
      </ul>
      <div className="block md:hidden pt-16 ">
        {nav ? (
          <img onClick={handleNav} src={MenuClose} alt="Close" />
        ) : (
          <img onClick={handleNav} src={MenuOpen} alt="Open" />
        )}
      </div>
      <div
        className={
          nav
            ? " fixed right-0  top-0 w-[60%] h-full ease-in-out duration-500  border-l bg-off-white"
            : "fixed right-[-100%]"
        }
      >
        <div className="flex justify-end md:hidden pt-16 ">
          {nav ? (
            <img
              className="pr-5"
              onClick={handleNav}
              src={MenuClose}
              alt="Close"
            />
          ) : (
            <img onClick={handleNav} src={MenuOpen} alt="Open" />
          )}
        </div>
        <ul className="p-4 mt-[50%] font-bold text-very-dark-blue text-opacity-80 text-[20px]">
          <li className="p-4 ">Home</li>
          <li className="p-4 ">New</li>
          <li className="p-4 ">Popular</li>
          <li className="p-4 ">Trending</li>
          <li className="p-4 ">Categories</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
