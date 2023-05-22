import { useState } from "react";
// import { navLinks } from "../constants";
import close from "../images/close.svg";
import menu from "../images/menu.svg";
import logo from "../images/logo.png";
import { Menu } from "@headlessui/react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" w-full flex p-8 justify-between items-center navbar">
      <NavLink to="/">
        {" "}
        <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      </NavLink>
      <div className=" sm:flex hidden justify-end items-center flex-1">
        <NavLink
          to="/"
          className="font-inter font-normal cursor-pointer text-[14px] hover:text-primary mr-10"
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className="font-inter font-normal cursor-pointer text-[16px] hover:text-primary mr-10"
        >
          ABOUT US
        </NavLink>
        <Menu as="div" className="relative group inline-block text-left mr-10 ">
          <div className="">
            <Menu.Button
              type="button"
              className="inline-flex w-full justify-center gap-x-2 rounded-md bg-background px-3 py-0 text-sm  text-gray-900   ring-inset ring-gray-300 hover:bg-background hover:text-primary"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              SERVICES
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Menu.Button>
          </div>

          <Menu.Items
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <Menu.Item>
                <Link
                  to="/services/consulting"
                  className="text-gray-700 block text-center px-4 py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  Business Consulting
                </Link>
              </Menu.Item>

              <Menu.Item>
                <Link
                  to="/services/software"
                  className="text-gray-700 block px-4 py-2 text-center  mb-4 text-sm hover:bg-primary hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  Software Development
                </Link>
              </Menu.Item>
            </div>
            <div className="py-1" role="none">
              <Menu.Item>
                <Link
                  to="/services/sas"
                  className="text-gray-700 block px-4 py-2 text-center mb-4 text-sm hover:bg-primary hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  SAS Analytics{" "}
                </Link>
              </Menu.Item>

              <Menu.Item>
                <Link
                  to="/services/egain/collaboration"
                  className="text-gray-700 block px-4 text-center py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-3"
                >
                  eGain Collaboration
                </Link>
              </Menu.Item>
            </div>
            <div className="py-1" role="none">
              <Menu.Item>
                <Link
                  to="/services/egain/knowledge"
                  className="text-gray-700 block px-4 text-center py-2 mb-4 text-sm hover:bg-primary hover:text-white hover:bg-primary hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-4"
                >
                  eGain Knowledge
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to="/services/media/management"
                  className="text-gray-700 block text-center px-4 py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-5"
                >
                  Social Media Management (Falcon.io){" "}
                </Link>
              </Menu.Item>
            </div>
            <div className="py-1" role="none">
              <Menu.Item>
                <Link
                  to="/services/oracle"
                  className="text-gray-700 block px-4 py-2 text-center mb-4 text-sm hover:bg-primary hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-6"
                >
                  Oracle Database
                </Link>
              </Menu.Item>
            </div>
            <div className="py-1" role="none">
              <Menu.Item>
                <Link
                  to="services/web/development"
                  className="text-gray-700 block px-4 py-2 mb-4 text-sm text-center hover:bg-primary hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-6"
                >
                  Web Development
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>

        <NavLink
          to="/products"
          className="font-inter font-normal cursor-pointer text-[16px] hover:text-primary mr-10"
        >
          PRODUCTS
        </NavLink>
        <Menu as="div" className="relative inline-block text-left mr-10">
          <div>
            <Menu.Button
              type="button"
              className="inline-flex w-full justify-center gap-x-2 rounded-md bg-background px-3 py-0 text-sm  text-gray-900   ring-inset ring-gray-300 hover:bg-background hover:text-primary"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              CLIENTS
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Menu.Button>
          </div>

          <Menu.Items
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <Menu.Item>
                <Link
                  to="/clients/agencies"
                  className="text-gray-700 block text-center px-4 py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  Government Agencies
                </Link>
              </Menu.Item>

              <Menu.Item>
                <Link
                  to="/clients/financial"
                  className="text-gray-700 block px-4 py-2 text-center  mb-4 text-sm hover:bg-primary hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  Financial Sector
                </Link>
              </Menu.Item>
            </div>
            <div className="py-1" role="none">
              <Menu.Item>
                <Link
                  to="/clients/telecoms"
                  className="text-gray-700 block px-4 py-2 text-center mb-4 text-sm hover:bg-primary hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Telecoms sector{" "}
                </Link>
              </Menu.Item>

              <Menu.Item>
                <Link
                  to="/clients/sme"
                  className="text-gray-700 block px-4 text-center py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-3"
                >
                  SME{" "}
                </Link>
              </Menu.Item>
            </div>
            <div className="py-1" role="none">
              <Menu.Item>
                <Link
                  to="/clients/goods"
                  className="text-gray-700 block px-4 text-center py-2 mb-4 text-sm hover:bg-primary hover:text-white hover:bg-primary hover:text-white"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-4"
                >
                  Consumer goods{" "}
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
        <NavLink
          to="/news"
          className="font-inter font-normal cursor-pointer text-[16px] hover:text-primary mr-10"
        >
          NEWS
        </NavLink>
        <NavLink
          to="/contacts"
          className="font-inter font-normal cursor-pointer text-[16px] hover:text-primary mr-0 text-secondary"
        >
          CONTACT US
        </NavLink>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center bg-background">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
          alt="menu"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6   absolute bg-grey w-full   top-20 right-0  my-4 min-w-[140px] sidenav`}
        >
          <div className="list-none flex flex-col justify-end items-center flex-1">
            <NavLink
              to="/"
              className="font-inter font-normal cursor-pointer text-[16px] hover:text-primary mr-10 mb-6"
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className="font-inter font-normal cursor-pointer text-[16px] hover:text-primary mr-10 mb-6"
            >
              ABOUT US
            </NavLink>
            <Menu
              as="div"
              className="relative inline-block text-left mr-10 mb-4"
            >
              <div>
                <Menu.Button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-2 rounded-none bg-grey  text-sm  text-gray-900    ring-inset ring-gray-300 hover:bg-background hover:text-primary"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  SERVICES
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400 -mt-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.79 7.21a.75.75 0 011.06.02L17 11.168l-3.71 3.938a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                      clipRule="evenodd"
                      transform="rotate(90 10 10)"
                    />
                  </svg>
                </Menu.Button>
              </div>

              <Menu.Items
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="/services/consulting"
                      className="text-gray-700 block text-center px-4 py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Business Consulting
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link
                      to="/services/software"
                      className="text-gray-700 block px-4 py-2 text-center  mb-4 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      Software Development
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="/services/sas"
                      className="text-gray-700 block px-4 py-2 text-center mb-4 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      SAS Analytics{" "}
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link
                      to="/services/egain/collaboration"
                      className="text-gray-700 block px-4 text-center py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                    >
                      eGain Collaboration
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="/services/egain/knowledge"
                      className="text-gray-700 block px-4 text-center py-2 mb-4 text-sm hover:bg-primary hover:text-white hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-4"
                    >
                      eGain Knowledge
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to="/services/media/management"
                      className="text-gray-700 block text-center px-4 py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-5"
                    >
                      Social Media Management (Falcon.io){" "}
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="/services/oracle"
                      className="text-gray-700 block px-4 py-2 text-center mb-4 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-6"
                    >
                      Oracle Database
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="services/web/development"
                      className="text-gray-700 block px-4 py-2 mb-4 text-sm text-center hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-6"
                    >
                      Web Development
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>

            <NavLink
              to="/products"
              className="font-inter font-normal cursor-pointer text-[16px] hover:text-primary mr-10 mb-6"
            >
              PRODUCTS
            </NavLink>
            <Menu
              as="div"
              className="relative inline-block text-left mr-10 mb-6"
            >
              <div>
                <Menu.Button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-2 rounded-md bg-grey px-3 py-0 text-sm  text-gray-900   ring-inset ring-gray-300 hover:bg-background hover:text-primary"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  CLIENTS
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
              </div>

              <Menu.Items
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="/clients/agencies"
                      className="text-gray-700 block text-center px-4 py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Government Agencies
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link
                      to="/clients/financial"
                      className="text-gray-700 block px-4 py-2 text-center  mb-4 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      Financial Sector
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="/clients/telecoms"
                      className="text-gray-700 block px-4 py-2 text-center mb-4 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      Telecoms sector{" "}
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link
                      to="/clients/sme"
                      className="text-gray-700 block px-4 text-center py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                    >
                      SME{" "}
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="/clients/goods"
                      className="text-gray-700 block px-4 text-center py-2 mb-4 text-sm hover:bg-primary hover:text-white hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-4"
                    >
                      Consumer goods{" "}
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
            <NavLink
              to="/news"
              className="font-inter font-normal cursor-pointer text-[16px] hover:text-primary mb-6"
            >
              NEWS
            </NavLink>
            <NavLink
              to="/contact"
              className="font-inter font-normal cursor-pointer text-[16px] hover:text-primary mb-0 text-secondary"
            >
              CONTACT US
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
