import { useState, useRef, Fragment } from "react";
// import { navLinks } from "../constants";
import close from "../images/close.svg";
import menu from "../images/menu.svg";
import logo from "../images/logo.png";
import { Popover, Transition } from "@headlessui/react";

import { Link, NavLink } from "react-router-dom";

const timeoutDuration = 120;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const [isList, setIsList] = useState(false);
  const [isListed, setIsListed] = useState(false);

  const triggerRef = useRef();
  const timeOutRef = useRef();
  const handleEnter = (isOpen) => {
    clearTimeout(timeOutRef.current);
    !isOpen && triggerRef.current?.click();
  };

  const handleLeave = (isOpen) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click();
    }, timeoutDuration);
  };

  return (
    <nav className=" w-full flex p-8   justify-between items-center navbar ">
      <NavLink to="/">
        {" "}
        <img
          src={logo}
          alt="logo"
          className="sm:w-[192.76pxpx] sm:h-[46px] -ml-12"
        />
      </NavLink>
      <div className=" sm:flex hidden justify-end items-center flex-1 ">
        <NavLink
          to="/"
          className="font-inter font-normal cursor-pointer text-[14px] hover:text-primary mr-9"
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className="font-inter font-normal cursor-pointer text-[14px] hover:text-primary mr-9"
        >
          ABOUT US
        </NavLink>
        <Popover
          as="div"
          className="relative group inline-block text-left mr-9"
        >
          {({ open }) => (
            <div
              onMouseEnter={() => handleEnter(open)}
              onMouseLeave={() => handleLeave(open)}
            >
              <Popover.Button
                ref={triggerRef}
                type="pop-button"
                className="inline-flex w-full justify-center focus:ring-0 focus:ring-offset-0  gap-x-2  focus:bg-backgound  bg-background px-3 py-0 text-[14px]  text-gray-900   hover:bg-background focus:ring-none hover:text-primary"
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
              </Popover.Button>

              <Transition>
                <div>
                  <Popover.Panel
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <Popover.Panel>
                        <Link
                          to="/services/consulting"
                          className="text-gray-700 block text-center px-4 py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          Business Consulting
                        </Link>
                      </Popover.Panel>

                      <Popover.Panel>
                        <Link
                          to="/services/software"
                          className="text-gray-700 block px-4 py-2 text-center  mb-4 text-sm hover:bg-primary hover:text-white"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-1"
                        >
                          Software Development
                        </Link>
                      </Popover.Panel>
                    </div>
                    <div className="py-1" role="none">
                      <Popover.Panel>
                        <Link
                          to="/services/sas"
                          className="text-gray-700 block px-4 py-2 text-center mb-4 text-sm hover:bg-primary hover:text-white"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                        >
                          SAS Analytics{" "}
                        </Link>
                      </Popover.Panel>

                      <Popover.Panel>
                        <Link
                          to="/services/egain/collaboration"
                          className="text-gray-700 block px-4 text-center py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-3"
                        >
                          eGain Collaboration
                        </Link>
                      </Popover.Panel>
                    </div>
                    <div className="py-1" role="none">
                      <Popover.Panel>
                        <Link
                          to="/services/egain/knowledge"
                          className="text-gray-700 block px-4 text-center py-2 mb-4 text-sm hover:bg-primary hover:text-white hover:bg-primary hover:text-white"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-4"
                        >
                          eGain Knowledge
                        </Link>
                      </Popover.Panel>
                      <Popover.Panel>
                        <Link
                          to="/services/media/management"
                          className="text-gray-700 block text-center px-4 py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-5"
                        >
                          Social Media Management{" "}
                        </Link>
                      </Popover.Panel>
                    </div>
                    <div className="py-1" role="none">
                      <Popover.Panel>
                        <Link
                          to="/services/oracle"
                          className="text-gray-700 block px-4 py-2 text-center mb-4 text-sm hover:bg-primary hover:text-white"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-6"
                        >
                          Oracle Database
                        </Link>
                      </Popover.Panel>
                    </div>
                    <div className="py-1" role="none">
                      <Popover.Panel>
                        <Link
                          to="services/web/development"
                          className="text-gray-700 block px-4 py-2 mb-4 text-sm text-center hover:bg-primary hover:text-white"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-6"
                        >
                          Web Development
                        </Link>
                      </Popover.Panel>
                    </div>
                  </Popover.Panel>
                </div>
              </Transition>
            </div>
          )}
        </Popover>

        <NavLink
          to="/products"
          className="font-inter font-normal cursor-pointer text-[14px] hover:text-primary mr-9"
        >
          PRODUCTS
        </NavLink>

        <Popover
          as="div"
          className="relative group inline-block text-left mr-9"
        >
          <div
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
          >
            <Popover.Button
              type="popover-button"
              className="inline-flex w-full justify-center focus:ring-0 focus:ring-offset-0  gap-x-2  focus:bg-backgound  bg-background px-3 py-0 text-[14px]  text-gray-900   hover:bg-background focus:ring-none hover:text-primary"
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
            </Popover.Button>
          </div>

          <Transition
            show={isShowing}
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
            as={Fragment}
          >
            <div>
              <Popover.Panel
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <Popover.Panel>
                    <Link
                      to="/clients/agencies"
                      className="text-gray-700 block text-center px-4 py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Government Agencies
                    </Link>
                  </Popover.Panel>

                  <Popover.Panel>
                    <Link
                      to="/clients/financial"
                      className="text-gray-700 block px-4 py-2 text-center  mb-4 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      Financial Sector
                    </Link>
                  </Popover.Panel>
                </div>
                <div className="py-0" role="none">
                  <Popover.Panel>
                    <Link
                      to="/clients/telecoms"
                      className="text-gray-700 block px-4 py-2 text-center mb-4 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      Telecoms Sector{" "}
                    </Link>
                  </Popover.Panel>

                  <Popover.Panel>
                    <Link
                      to="/clients/sme"
                      className="text-gray-700 block px-4 text-center py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                    >
                      SME{" "}
                    </Link>
                  </Popover.Panel>
                </div>
                <div className="py-0" role="none">
                  <Popover.Panel>
                    <Link
                      to="/clients/goods"
                      className="text-gray-700 block px-4 text-center py-2 mb-4 text-sm hover:bg-primary hover:text-white hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-4"
                    >
                      Consumer Goods{" "}
                    </Link>
                  </Popover.Panel>
                </div>
              </Popover.Panel>
            </div>
          </Transition>
        </Popover>
        <NavLink
          to="/news"
          className="font-inter font-normal cursor-pointer text-[14px] hover:text-primary mr-9"
        >
          NEWS
        </NavLink>
        <NavLink
          to="/contacts"
          className="font-inter font-normal cursor-pointer text-[14px] hover:text-primary -mr-20 text-secondary"
        >
          CONTACT US
        </NavLink>
      </div>

      <div className="sm:hidden  flex flex-1 justify-end    items-center bg-background ">
        <img
          src={`${toggle && !showMobileNav ? close : menu} `}
          className={` w-[28px] h-[28px] object-contain`}
          onClick={() => {
            setToggle((prev) => !prev);
            setShowMobileNav(false);
          }}
          alt="menu"
        />
        <div
          className={` p-6  absolute bg-background w-full h-full   top-20 pl-2 duration-500 py-24   ${
            toggle ? " flex right-0 " : "right-[-100%]  hidden  "
          }  ${showMobileNav ? "hidden" : ""} `}
        >
          <div
            className={`list-none px-3 text-left   flex flex-col justify-start items-start flex flex-1 -mt-12`}
          >
            <NavLink
              to="/"
              className=" font-inter font-normal cursor-pointer text-[14px] hover:text-primary mr-10 mb-6 text-[14px]"
              onClick={() => setShowMobileNav(true)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className="font-inter font-normal cursor-pointer text-[14px] hover:text-primary mr-10 mb-6"
              onClick={() => setShowMobileNav(true)}
            >
              ABOUT US
            </NavLink>
            <div>
              <div
                onClick={() => setIsList(!isList)}
                className="w-64 p-4 -ml-4  -mt-4 mb-4 text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer"
              >
                SERVICES
                <div>
                  {isList ? (
                    <div>
                      <svg
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                          fill="#1F2937"
                        />
                      </svg>
                    </div>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />{" "}
                      </svg>
                    </>
                  )}
                </div>
              </div>
              {isList && (
                <div className="w-64 -mt-5 p-4 ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        className="hidden"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="#4B5563"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="pl-4 -ml-10 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink
                            onClick={() => setShowMobileNav(true)}
                            to="/services/consulting"
                          >
                            {" "}
                            Business Consulting{" "}
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 pt-3 -ml-14">
                    <div className="flex items-center justify-between ">
                      <div className="pl-4 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink
                            onClick={() => setShowMobileNav(true)}
                            to="/services/software"
                          >
                            {" "}
                            Software Development{" "}
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 pt-3 -ml-14">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink to="/services/sas"> SAS Analytics</NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 pt-3 -ml-14">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink to="/services/egain/collaboration">
                            {" "}
                            eGain Collaboration{" "}
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 pt-3 -ml-14">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink to="/services/egain/knowledge">
                            {" "}
                            eGain Knowledge
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 pt-3 -ml-14">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink to="/services/media/management">
                            {" "}
                            Social Media Management{" "}
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 pt-3 -ml-14">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink
                            onClick={() => setShowMobileNav(true)}
                            to="/services/oracle"
                          >
                            {" "}
                            Oracle Database{" "}
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 pt-3 -ml-14">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink to="/services/web/development">
                            {" "}
                            Web Development{" "}
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/products"
              className="font-inter font-normal cursor-pointer text-[14px] hover:text-primary mr-10 mb-6"
              onClick={() => setShowMobileNav(true)}
            >
              PRODUCTS
            </NavLink>
            <div>
              <div
                onClick={() => setIsListed(!isListed)}
                className="w-64 p-4 -ml-4 text-sm font-medium leading-none text-gray-800 flex items-center  mb-4 justify-between cursor-pointer"
              >
                CLIENTS
                <div>
                  {isListed ? (
                    <div>
                      <svg
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                          fill="#1F2937"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />{" "}
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {isListed && (
                <div className="w-64 mt-2 p-4  -pt-8 -ml-5 bg-background ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className=" flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink
                            onClick={() => setShowMobileNav(true)}
                            to="/clients/agencies"
                          >
                            {" "}
                            Government Agencies{" "}
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 -ml-8 pt-3">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink
                            onClick={() => setShowMobileNav(true)}
                            to="/clients/financial"
                          >
                            {" "}
                            Financial Sector
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 -ml-8 pt-3">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink to="/clients/telecoms">
                            {" "}
                            Telecomms Sector{" "}
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 -ml-8 pt-3">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink
                            onClick={() => setShowMobileNav(true)}
                            to="/clients/sme"
                          ></NavLink>
                          SME{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 -ml-8 pt-3">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink
                            onClick={() => setShowMobileNav(true)}
                            to="/clients/goods"
                          >
                            {" "}
                            Consumer Goods{" "}
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <NavLink
              to="/news"
              className="font-inter font-normal text-black1 cursor-pointer text-[14px] hover:text-primary mb-6"
              onClick={() => setShowMobileNav(true)}
            >
              NEWS
            </NavLink>
            <NavLink
              to="/contacts"
              className="font-inter font-normal cursor-pointer text-[14px] hover:text-primary mb-0 text-secondary"
              onClick={() => setShowMobileNav(true)}
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
