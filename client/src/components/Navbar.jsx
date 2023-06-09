import { useState, useRef, Fragment } from "react";
// import { navLinks } from "../constants";
import close from "../images/close.svg";
import menu from "../images/menu.svg";
import logo from "../images/logo.png";
import { Menu, Popover, Transition } from "@headlessui/react";

import { Link, NavLink } from "react-router-dom";

const timeoutDuration = 120;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

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
    <nav className=" w-full flex p-8  justify-between items-center navbar ">
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

        <Menu as="div" className="relative inline-block text-left mr-9">
          <div
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
          >
            <Menu.Button
              type="button"
              className="inline-flex w-full justify-center gap-x-2 rounded-md bg-background px-3 py-0 text-[14px]  text-gray-900   ring-inset ring-gray-300 hover:bg-background hover:text-primary"
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

          <Transition
            show={isShowing}
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <div>
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
                <div className="py-0" role="none">
                  <Menu.Item>
                    <Link
                      to="/clients/telecoms"
                      className="text-gray-700 block px-4 py-2 text-center mb-4 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      Telecoms Sector{" "}
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
                <div className="py-0" role="none">
                  <Menu.Item>
                    <Link
                      to="/clients/goods"
                      className="text-gray-700 block px-4 text-center py-2 mb-4 text-sm hover:bg-primary hover:text-white hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-4"
                    >
                      Consumer Goods{" "}
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </div>
          </Transition>
        </Menu>
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
      <div className="sm:hidden flex flex-1 justify-end items-center bg-background">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => {
            setToggle((prev) => !prev);
            setShowMobileNav(false);
          }}
          alt="menu"
        />
        <div
          className={` p-6   absolute bg-background w-full h-full  top-20  pl-2 duration-500 py-24 min-w-[140px] ${
            toggle ? "right-0 " : "right-[-100%] && collapse"
          }  ${showMobileNav ? "hidden" : ""}`}
        >
          <div className="list-none px-3 text-left   flex flex-col justify-start items-start flex-1 -mt-12">
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
            <Menu
              as="div"
              className="relative inline-block text-left mr-10 mb-4"
              onClick={() => setShowMobileNav(true)}
            >
              <div>
                <Menu.Button
                  type="button"
                  className="inline-flex w-full justify-end item-end gap-x-2 rounded-none bg-background  text-[14px]  text-gray-900    ring-inset ring-gray-300  hover:text-primary font-inter font-normal"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  SERVICES
                  <svg
                    className="mr-32 h-5 w-5 text-gray-400 -mt-2.5"
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
                onClick={() => setShowMobileNav(true)}
              >
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="/services/consulting"
                      className="text-gray-700 block text-center px-4 py-2 mb-4 text-sm hover:bg-primary hover:text-white text-[14px]"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                      onClick={() => setShowMobileNav(true)}
                    >
                      Business Consulting
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link
                      to="/services/software"
                      className="text-gray-700 block px-4 py-2 text-center  mb-4 text-[14px] hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                      onClick={() => setShowMobileNav(true)}
                    >
                      Software Development
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="/services/sas"
                      className="text-gray-700 block px-4 py-2 text-center mb-4 text-[14px] hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                      onClick={() => setShowMobileNav(true)}
                    >
                      SAS Analytics{" "}
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link
                      to="/services/egain/collaboration"
                      className="text-gray-700 block px-4 text-center py-2 mb-4 text-[14px] hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                      onClick={() => setShowMobileNav(true)}
                    >
                      eGain Collaboration
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="/services/egain/knowledge"
                      className="text-gray-700 block px-4 text-center py-2 mb-4 text-[14px] hover:bg-primary hover:text-white hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-4"
                      onClick={() => setShowMobileNav(true)}
                    >
                      eGain Knowledge
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to="/services/media/management"
                      className="text-gray-700 block text-center px-4 py-2 mb-4 text-[14px] hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-5"
                      onClick={() => setShowMobileNav(true)}
                    >
                      Social Media Management{" "}
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="/services/oracle"
                      className="text-gray-700 block px-4 py-2 text-center mb-4 text-[14px] hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-6"
                      onClick={() => setShowMobileNav(true)}
                    >
                      Oracle Database
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="services/web/development"
                      className="text-gray-700 block px-4 py-2 mb-4 text-[14px] text-center hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-6"
                      onClick={() => setShowMobileNav(true)}
                    >
                      Web Development
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>

            <NavLink
              to="/products"
              className="font-inter font-normal cursor-pointer text-[14px] hover:text-primary mr-10 mb-6"
              onClick={() => setShowMobileNav(true)}
            >
              PRODUCTS
            </NavLink>
            <Menu
              as="div"
              className="relative inline-block text-center mr-10 mb-6"
              onClick={() => setShowMobileNav(true)}
            >
              <div>
                <Menu.Button
                  type="button"
                  className="inline-flex w-full justify-end item-end gap-x-2 rounded-none bg-background  text-[14px]  text-gray-900    ring-inset ring-gray-300  hover:text-primary font-inter font-normal"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  CLIENTS
                  <svg
                    className="mr-32 h-5 w-5 text-gray-400 -mt-2.5"
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
                onClick={() => setShowMobileNav(true)}
              >
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="/clients/agencies"
                      className="text-gray-700 block text-center px-4 py-2 mb-4 text-[14px] hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                      onClick={() => setShowMobileNav(true)}
                    >
                      Government Agencies
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link
                      to="/clients/financial"
                      className="text-gray-700 block px-4 py-2 text-center  mb-4 text-[14px] hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                      onClick={() => setShowMobileNav(true)}
                    >
                      Financial Sector
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="/clients/telecoms"
                      className="text-gray-700 block px-4 py-2 text-center mb-4 text-[14px] hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                      onClick={() => setShowMobileNav(true)}
                    >
                      Telecoms Sector{" "}
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link
                      to="/clients/sme"
                      className="text-gray-700 block px-4 text-center py-2 mb-4 text-[14px] hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                      onClick={() => setShowMobileNav(true)}
                    >
                      SME{" "}
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-1" role="none">
                  <Menu.Item>
                    <Link
                      to="/clients/goods"
                      className="text-black1 block px-4 text-center py-2 mb-4 text-[14px] hover:bg-primary hover:text-white hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-4"
                      onClick={() => setShowMobileNav(true)}
                    >
                      Consumer Goods{" "}
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
            <NavLink
              to="/news"
              className="font-inter font-normal text-black1 cursor-pointer text-[14px] hover:text-primary mb-6"
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
