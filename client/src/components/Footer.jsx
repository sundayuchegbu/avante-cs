import React from "react";
import logo from "../images/logo.png";
import styles from "../style";
import mail from "../images/mail.png";
import phone from "../images/phone.png";
import { footerLinks } from "../constants";

const Footer = () => (
  <div className={`bg-dark sm:px-16 px-6 flex justify-center items-start`}>
    <div className="xl:max-w-[1280px] w-full">
      <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className="flex-1 flex flex-col justify-start mr-10">
            <img
              src={logo}
              alt="logo"
              className="w-[266px] h-[72px] object-contain"
            />
            <p className={`${styles.paragraph2} mt-2 max-w-[310px]`}>
              Funding freemium long tail hypotheses first mover advantage assets
              ownership niche market startup investor.
            </p>
            <div className="overflow-auto w-3/5 flex items-center mt-4">
              <img
                src={mail}
                alt="mail"
                className="w-[10px] h-[14px] mx-2 object-contain"
              />
              <p className="text-[12px] text-dimWhite">agensi@mail.com</p>
            </div>
            <div className="overflow-auto w-3/5 flex items-center ">
              <img
                src={phone}
                alt="phone"
                className="w-[10px] h-[14px] mx-2 object-contain"
              />
              <p className="text-[12px] text-dimWhite">+234 -1-2953541</p>
            </div>
          </div>
          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerLink) => (
              <div
                key={footerLink.key}
                className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              >
                <h4 className="font-inter font-medium text-[18px] leading-[27px] text-white">
                  {" "}
                  {footerLink.title}
                </h4>
                <ul className="list-none mb-4">
                  {footerLink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`font-inter font-normal text-[16px] leading-[24px] text-dimWhite hover:text-primary ${
                        index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                      } cursor-pointer`}
                    >
                      {link.name}{" "}
                    </li>
                  ))}{" "}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
