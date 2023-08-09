import { useState, useRef, useEffect } from "react";
import logo from "../images/logo.png";
import styles from "../style";
import mail from "../images/mail.png";
import insta2 from "../images/insta2.png";
import egainfooter from "../images/egainfooter.jpg";
import { Popover, Transition } from "@headlessui/react";
import Facebook from "../images/Facebook.png";
import phone from "../images/phone.png";
import sas2 from "../images/sas2.png";
import linkedin2 from "../images/linkedin2.png";

import { Link, useLocation } from "react-router-dom";

const timeoutDuration = 120;

const Footer = ({ link }) => {
  const location = useLocation();

  const [activePage, setActivePage] = useState(location.pathname);

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

  useEffect(() => {}, [location]);

  return (
    <div className={`bg-dark sm:px-16 px-6 flex justify-center items-start`}>
      <div className=" xl:max-w-[1280px] w-full">
        <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
          <div
            className={`${styles.flexStart} md:flex-row flex-col mb-10 w-full`}
          >
            <div className="flex-[3.0] flex flex-col justify-start mr-[100px] w-full ">
              <img src={logo} alt="logo" className="w-full " />
              <p className={`${styles.paragraph5} mt-2 max-w-[470px]  `}>
                We are a leading business and technology consulting
                organisation, with a very strong focus on Customer Experience,
                Knowledge Management, Loyalty and Ticketing solutions.
              </p>
              <div className="overflow-auto  flex items-center mt-4 mb-2">
                <img
                  src={mail}
                  alt="mail"
                  className="w-[14px] h-[14px] mr-4 object-contain"
                />
                <p className="text-[16px] text-background font-inter">
                  info@avante-cs.com
                </p>
              </div>

              <div className="overflow-auto  flex items-center ">
                <img
                  src={phone}
                  alt="phone"
                  className="w-[14px] h-[14px] mr-4  object-contain"
                />
                <p className="md:text-[16px] text-background font-inter text-[12px]">
                  +234 -1-2953541
                </p>
              </div>
            </div>
            <div className="flex-[2.0] mr-8 w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
              <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-inter font-medium text-[18px] leading-[24px] text-white mb-4">
                  {" "}
                  Services{" "}
                </h4>
                <div className="list-none mb-4 block ">
                  <Popover
                    as="div"
                    className=" group inline-block text-left mr-12"
                  >
                    {({ open }) => (
                      <div
                        onMouseEnter={() => handleEnter(open)}
                        onMouseLeave={() => handleLeave(open)}
                      >
                        <Popover.Button
                          ref={triggerRef}
                          type="popover-button"
                          className={` ${
                            activePage === "/services"
                              ? "text-primary"
                              : "text-black2"
                          } inline-flex w-full justify-start gap-x-2 text-white  py-0 text-[16px] `}
                          id="menu-button"
                          aria-expanded="true"
                          aria-haspopup="true"
                        >
                          Business Consulting{" "}
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
                              className=" -right-24 z-10 mt-1 w-64 origin-top-center  rounded-md   ring-1 ring-black ring-opacity-5 focus:outline-none "
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="menu-button"
                              tabIndex="-1"
                            >
                              <div>
                                <Popover.Panel>
                                  <Link
                                    to="/services/implementations"
                                    className=" block px-4 py-2 text-background mt-4  mb-4  text-sm hover:bg-primary hover:text-white"
                                    tabIndex="-1"
                                    id="menu-item-1"
                                    onClick={() => setActivePage("/services")}
                                  >
                                    Implementation Services{" "}
                                  </Link>
                                </Popover.Panel>
                              </div>
                              {/* <div className="py-1 " role="none"> */}
                              <Popover.Panel>
                                <Link
                                  to="/services/project/management"
                                  className=" block px-4 py-2 text-background  mb-4 text-sm hover:bg-primary hover:text-white"
                                  tabIndex="-1"
                                  id="menu-item-2"
                                  onClick={() => setActivePage("/services")}
                                >
                                  Project Management{" "}
                                </Link>
                              </Popover.Panel>

                              <Popover.Panel>
                                <Link
                                  to="/services/user/research"
                                  className=" block px-4 text-background  py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                                  tabIndex="-1"
                                  id="menu-item-3"
                                  onClick={() => setActivePage("/services")}
                                >
                                  User Experience Reasearch{" "}
                                </Link>
                              </Popover.Panel>
                              {/* </div> */}
                              {/* <div className="py-1" role="none"> */}
                              <Popover.Panel>
                                <Link
                                  to="/services/market/survey"
                                  className=" block px-4 text-background  py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                                  tabIndex="-1"
                                  id="menu-item-4"
                                  onClick={() => setActivePage("/services")}
                                >
                                  Market Survey{" "}
                                </Link>
                              </Popover.Panel>
                              <Popover.Panel>
                                <Link
                                  to="/services/feasibility/studies"
                                  className="text-background block  px-4 py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                                  tabIndex="-1"
                                  id="menu-item-5"
                                  onClick={() => setActivePage("/services")}
                                >
                                  Feasibility Studies{" "}
                                </Link>
                              </Popover.Panel>

                              {/* </div> */}
                            </Popover.Panel>
                          </div>
                        </Transition>
                      </div>
                    )}
                  </Popover>

                  <Link
                    to="/services/software"
                    className={`font-inter font-normal text-[16px] leading-[24px] mt-4 text-background hover:text-primary cursor-pointer block mb-4`}
                  >
                    Software Development{" "}
                  </Link>
                  <Link
                    to="/services/sas"
                    className={`font-inter block font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4`}
                  >
                    SAS CX and Analytics{" "}
                  </Link>
                  <Link
                    to="/services/egain/collaboration"
                    className={`font-inter font-normal block text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4`}
                  >
                    eGain Collaboration{" "}
                  </Link>
                  <Link
                    to="/services/egain/knowledge"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    eGain Knowledge{" "}
                  </Link>
                  <Link
                    to="/services/media/management"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    Social Media Management{" "}
                  </Link>

                  <Link
                    to="/services/web/development"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer block`}
                  >
                    Website Development{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-[2.0] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
              <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-inter font-medium text-[18px] leading-[24px] text-white mb-4">
                  {" "}
                  About Us{" "}
                </h4>
                <ul className="list-none mb-4 block">
                  <Link
                    to=""
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    Corporate Philosophy{" "}
                  </Link>
                  <Link
                    to=""
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    Corporate Profile{" "}
                  </Link>
                  <Link
                    to=""
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer block mb-4`}
                  >
                    Our Partners{" "}
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex-[2.0] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
              <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-inter font-medium text-[18px] leading-[27px] text-white mb-4">
                  {" "}
                  Clients{" "}
                </h4>
                <ul className="list-none mb-4">
                  <Link
                    to="/clients/agencies"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    Government Agencies{" "}
                  </Link>
                  <Link
                    to="/clients/financial"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    Financial Sector{" "}
                  </Link>
                  <Link
                    to="/clients/telecoms"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    Telecoms Sector{" "}
                  </Link>
                  <Link
                    to="/clients/sme"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    SME{" "}
                  </Link>
                  <Link
                    to="/clients/goods"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer block`}
                  >
                    Consumer Goods{" "}
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex-[2.3] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 ">
              <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-inter font-medium text-[18px] leading-[24px] text-white mb-4">
                  {" "}
                  Address{" "}
                </h4>
                <ul className="list-none mb-4">
                  <li
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer `}
                  >
                    66 Bode Thomas, Surulere, Lagos.{" "}
                  </li>
                  <div className="flex mt-4">
                    <ul className="flex">
                      <div className="flex  h-[40px] w-[39.97px]  rounded-full ring-2 ring-white  mr-6 hover:bg-blue">
                        <Link
                          target="_blank"
                          to="https://web.facebook.com/AvanteConsultingSolutions?_rdc=1&_rdr"
                        >
                          <img
                            src={Facebook}
                            alt="Facebook"
                            className="w-[6.50px] h-[15px] mt-3.5 ml-4 -p-1  "
                          />
                        </Link>
                      </div>

                      <div className=" flex  h-[40px] w-[39.97px]  rounded-full ring-2 ring-white hover:bg-blue  mr-7">
                        <Link
                          target="_blank"
                          to="https://www.linkedin.com/company/avante-consulting-solutions-ltd/mycompany/"
                        >
                          <img
                            src={linkedin2}
                            alt="twitter"
                            className="w-[11.99px] h-[12px] mt-3.5 ml-3.5 -p-1  "
                          />
                        </Link>
                      </div>
                      <div className="flex  h-[40px] w-[39.97px]  rounded-full ring-2 ring-white  mr-7 hover:bg-blue">
                        <Link
                          to="https://www.instagram.com/avanteconsultingsolutions"
                          target="_blank"
                        >
                          <img
                            src={insta2}
                            alt="insta"
                            className="w-[11.99px] h-[12px]  mt-3.5 ml-3.5 -p-1 "
                          />
                        </Link>
                      </div>
                    </ul>
                  </div>
                  <Link
                    to="https://www.sas.com/en_us/solutions/customer-intelligence.html"
                    target="_blank"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background mt-[20px] hover:text-primary  cursor-pointer block`}
                  >
                    <img src={sas2} alt="sas" className="w-[200px]" />{" "}
                  </Link>
                  <Link
                    to="https://www.sas.com/en_us/solutions/customer-intelligence.html"
                    target="_blank"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background mt-[20px] hover:text-primary  cursor-pointer block`}
                  >
                    <img
                      src={egainfooter}
                      alt="sas"
                      className="w-[200px] h-[60px]"
                    />{" "}
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
