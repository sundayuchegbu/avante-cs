import React from "react";
import { layout } from "../style";
import lagferry2 from "../images/lagferry2.png";
import { Link } from "react-router-dom";
const Lagferry = () => {
  return (
    <section className={` mt-[-150px] ${layout.sectionReverse} mb-24`}>
      <div id="cta9" className={` relative   ${layout.sectionImgReverse1} `}>
        <img src={lagferry2} alt="codeit" className="block h-[428.8px]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[10px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-2  mt-[150px]`}
        >
          LAGFERRY <br className="sm:block hidden " />
          <span className="text-primary ">Water transport infrastructure</span>
        </h2>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
        >
          Lagos Ferry Services Company (LFSC) known as Lagferry is a limited
          liability company which was established as a Special Purpose Vehicle
          (SPV) to compliment the efforts of the Lagos State Government (LASG)
          in developing the water transportation sector and subsequently
          reducing the strain on Lagos roads. They are a private company in
          which the sole initial investor is the Lagos State Government (LASG).
          Avante Consulting were asked to implement a network infrastructure and
          ticketing solution for Lagferry. Our ticketing solution as well as an
          intelligent infrastructure will assist Lagferry in achieving their
          goal as the safest and most reliable transport service for customers
          on the Lagos waterways.
        </p>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Lagferry;
