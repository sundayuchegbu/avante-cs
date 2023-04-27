import React from "react";
import govagency from "../images/govagency.png";
import { layout } from "../style";
import { Link } from "react-router-dom";

const AgencyBanner = () => {
  return (
    <section id="ctas2" className={`mb-32  h-[721px] ${layout.section}`}>
      <div className={`mx-32 ${layout.sectionInfo}`}>
        <h2
          className={`font-Inter font-semibold xs:text-[60px] mt-[20px] text-[40px] text-black xs:leading-[60.8px] leading-[66.8px] w-full mb-4 `}
        >
          Government <br className="sm:hidden" />
          agencies{" "}
        </h2>
        <div
          className={`font-Inter font-normal text-black2 text-[16px] leading-[20.8px] max-w-[470px] mt-5 mb-6`}
        >
          Lorem ipsum dolor sit amet consectetur. Proin vel orci tempor velit
          mattis tempor at nisiLorem ipsum dolor sit amet consectetur. Proin vel
          orci tempor velit mattis tempor at nisi.
        </div>
        <Link to="/contacts">
          {" "}
          <button className="bg-secondary text-white flex flex-start font-bold py-2 px-12 rounded">
            Get started{" "}
          </button>
        </Link>
      </div>
      <div
        id="cta2"
        className={`${layout.sectionImg} lg:mx-24 lg:px-24   relative`}
      >
        <img
          src={govagency}
          alt="card"
          className=" mt-[20px] w-[471.19px] h-[518.48px]   "
        />
      </div>
    </section>
  );
};

export default AgencyBanner;
