import { useState } from "react";

import close from "../images/close.svg";
import menu from "../images/menu.svg";
import logo from "../images/logo.png";

import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-background w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-inter font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1
                      ? "mr-0 text-red-600"
                      : "mr-10 "
                  } hover:text-primary `}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? close : menu}
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle((prev) => !prev)}
                alt="menu"
              />
              <div
                className={`${
                  toggle ? "flex" : "hidden"
                } p-6 bg-blue-gradient top-20 right-0 mx-4 my-2 min-w-[140px]   absolute rounded-xl sidebar`}
              >
                <ul className="list-none flex flex-col justify-end items-center flex-1">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-inter font-normal cursor-pointer text-[16px] ${
                        index === navLinks.length - 1
                          ? "mb-0 text-red-600"
                          : "mb-4 hover:text-color-primary "
                      } `}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
