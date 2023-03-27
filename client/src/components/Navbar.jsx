import { useState } from "react";
import { navLinks } from "../constants";
import close from "../images/close.svg";
import menu from "../images/menu.svg";
import logo from "../images/logo.png";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <NavLink to="/">
        {" "}
        <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      </NavLink>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-inter font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0 text-red-600" : "mr-10 "
            } hover:text-primary `}
          >
            <NavLink to={`${nav.id}`}>{nav.title}</NavLink>
          </li>
        ))} */}
        <NavLink
          to="/"
          className="font-inter font-normal cursor-pointer text-[16px] hover:text-primary mr-10"
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className="font-inter font-normal cursor-pointer text-[16px] hover:text-primary mr-10"
        >
          ABOUT US
        </NavLink>
        <div class="relative inline-block text-left mr-10">
          <div>
            <button
              type="button"
              class="inline-flex w-full justify-center gap-x-2 rounded-md bg-background px-3 py-2 text-sm  text-gray-900 shadow-sm  ring-inset ring-gray-300 hover:bg-background hover:text-primary"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              SERVICES
              <svg
                class="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95" */}

          <div
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <Link
                to="/services/consulting"
                class="text-gray-700 block text-center px-4 py-2 mb-4 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Business Consulting
              </Link>
              <Link
                to="/services/software"
                class="text-gray-700 block px-4 py-2 text-center  mb-4 text-sm "
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Software Development
              </Link>
            </div>
            <div class="py-1" role="none">
              <Link
                to="/services/sas"
                class="text-gray-700 block px-4 py-2 text-center mb-4 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                SAS Analytics{" "}
              </Link>
              <Link
                to="/services/egain/collaboration"
                class="text-gray-700 block px-4 text-center py-2 mb-4 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                eGain Collaboration
              </Link>
            </div>
            <div class="py-1" role="none">
              <Link
                to="/services/egain/knowledge"
                class="text-gray-700 block px-4 text-center py-2 mb-4 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-4"
              >
                eGain Knowledge
              </Link>
              <Link
                to="/services/media/management"
                class="text-gray-700 block text-center px-4 py-2 mb-4 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-5"
              >
                Social Media Management (Falcon.io){" "}
              </Link>
            </div>
            <div class="py-1" role="none">
              <Link
                to="/services/oracle"
                class="text-gray-700 block px-4 py-2 text-center mb-4 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-6"
              >
                Oracle Database
              </Link>
            </div>
            <div class="py-1" role="none">
              <Link
                to="services/web/development"
                class="text-gray-700 block px-4 py-2 mb-4 text-sm text-center"
                role="menuitem"
                tabindex="-1"
                id="menu-item-6"
              >
                Web Development
              </Link>
            </div>
          </div>
        </div>

        <NavLink
          to="/products"
          className="font-inter font-normal cursor-pointer text-[16px] hover:text-primary mr-10"
        >
          PRODUCTS
        </NavLink>
        <NavLink
          to="/clients"
          className="font-inter font-normal cursor-pointer text-[16px] hover:text-primary mr-10"
        >
          CLIENTS
        </NavLink>
        <NavLink
          to="/news"
          className="font-inter font-normal cursor-pointer text-[16px] hover:text-primary mr-10"
        >
          NEWS
        </NavLink>
        <NavLink
          to="/contact"
          className="font-inter font-normal cursor-pointer text-[16px] hover:text-primary mr-10 text-secondary"
        >
          CONTACT US
        </NavLink>
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
                <NavLink to={`${nav.id}`}>{nav.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
