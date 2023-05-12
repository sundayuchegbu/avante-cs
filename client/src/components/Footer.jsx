import React from "react";
import logo from "../images/logo.png";
import styles from "../style";
import mail from "../images/mail.png";
import Google from "../images/Google.png";
import Twitter from "../images/Twitter.png";
import Facebook from "../images/Facebook.png";
import phone from "../images/phone.png";
// import sas2 from "../images/sas2.png";
import { Link } from "react-router-dom";

const Footer = ({ link }) => {
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
                Funding freemium long tail hypotheses first mover advantage
                assets ownership niche market startup investor.
              </p>
              <div className="overflow-auto  flex items-center mt-4 mb-2">
                <img
                  src={mail}
                  alt="mail"
                  className="w-[14px] h-[14px] mr-4 object-contain"
                />
                <p className="text-[16px] text-background font-inter">
                  agensi@mail.com
                </p>
              </div>

              <div className="overflow-auto  flex items-center ">
                <img
                  src={phone}
                  alt="phone"
                  className="w-[14px] h-[14px] mr-4  object-contain"
                />
                <p className="text-[16px] text-background font-inter text-[12px]">
                  +234-1-2953541
                </p>
              </div>
            </div>
            <div className="flex-[2.0] mr-8 w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
              <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-inter font-medium text-[18px] leading-[27px] text-white mb-4">
                  {" "}
                  Services{" "}
                </h4>
                <ul className="list-none mb-4 block ">
                  <Link
                    to="/services/consulting"
                    className={
                      "font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary my-4 cursor-pointer block"
                    }
                  >
                    Business consulting{" "}
                  </Link>
                  <Link
                    to="/services/software"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary cursor-pointer block mb-4`}
                  >
                    Software Development{" "}
                  </Link>
                  <Link
                    to="/services/sas"
                    className={`font-inter block font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4`}
                  >
                    SAS Analytics{" "}
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
                    to="/services/oracle"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    Oracle Database{" "}
                  </Link>
                  <Link
                    to="/services/web/development"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer block`}
                  >
                    Website Development{" "}
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex-[2.0] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
              <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-inter font-medium text-[18px] leading-[27px] text-white mb-4">
                  {" "}
                  About Us{" "}
                </h4>
                <ul className="list-none mb-4 block">
                  <Link
                    to=""
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    Corporate philosophy{" "}
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
                    Our partners{" "}
                  </Link>
                  {/* <Link
                    to="https://www.sas.com/en_us/solutions/customer-intelligence.html"
                    target="_blank"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer block`}
                  >
                    <img src={sas2} alt="sas" className="w-[150px]" />{" "}
                  </Link> */}
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
                    Government agencies{" "}
                  </Link>
                  <Link
                    to="/clients/financial"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    Financial sector{" "}
                  </Link>
                  <Link
                    to="/clients/telecoms"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    Telecoms sector{" "}
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
                    Consumer goods{" "}
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex-[2.3] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 ">
              <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-inter font-medium text-[18px] leading-[27px] text-white mb-4">
                  {" "}
                  Address{" "}
                </h4>
                <ul className="list-none mb-4">
                  <li
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer `}
                  >
                    Penthouse 11B, Kayode <br /> Otitoju Street, Off Admiralty
                    Road, Lekki Phase 1, Lagos{" "}
                  </li>
                  <div className="flex mt-4">
                    <ul className="flex">
                      <div className="flex  h-full w-full  rounded-full ring-2 ring-white  mr-6 hover:bg-blue">
                        <Link to="https://web.facebook.com/watch/?ref=search&v=3245498065762721&external_log_id=bf58f002-e9b0-4cda-8a5b-ec0cc2a17180&q=avante-cs">
                          <img
                            src={Facebook}
                            alt="Facebook"
                            className="w-full h-full p-3"
                          />
                        </Link>
                      </div>
                      <div className="flex  h-full w-full  rounded-full ring-2 ring-white  mr-7 hover:bg-blue">
                        <Link>
                          <img
                            src={Google}
                            alt="google"
                            className="w-full h-full p-3"
                          />
                        </Link>
                      </div>
                      <div className=" flex  h-full w-full  rounded-full ring-2 ring-white hover:bg-blue  mr-7">
                        <Link>
                          <img
                            src={Twitter}
                            alt="twitter"
                            className="w-full h-full p-3 "
                          />
                        </Link>
                      </div>
                    </ul>
                  </div>
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
