import React from "react";
import govagency from "../images/govagency.png";
import smallagency from "../images/smallagency.png";
import smallwhite from "../images/smallwhite.png";
import { layout } from "../style";
import { Link } from "react-router-dom";

const AgencyBanner = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div id="ctas2" className={`  h-[721px] ${layout.section}`}>
          <div className={`mx-32 ${layout.sectionInfo}`}>
            <h2
              className={`font-Inter font-semibold xs:text-[60px] mt-[20px] text-[40px] text-black xs:leading-[60.8px] leading-[66.8px] w-full mb-4 `}
            >
              Government <br className="sm:hidden" />
              agencies{" "}
            </h2>
            <div
              className={`font-Inter font-normal text-black2 text-[16px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
            >
              Lorem ipsum dolor sit amet consectetur. Proin vel orci tempor
              velit mattis tempor at nisiLorem ipsum dolor sit amet consectetur.
              Proin vel orci tempor velit mattis tempor at nisi.
            </div>
            <Link to="/contacts">
              {" "}
              <button className="flex  items-center text-white text-[12px] -ml-2 mt-8 h-[45px] w-[165px] rounded-lg  bg-secondary ">
                <span className="mx-8 text-[12px] font-inter font-normal">
                  Read more
                </span>
                <i className="fas fa-chevron-right">
                  <img
                    src={smallwhite}
                    alt="smallwhite"
                    className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
                  />{" "}
                </i>
              </button>
            </Link>
          </div>
          <div
            id="cta2"
            className={`${layout.sectionImg} md:mx-24 md:px-24   relative`}
          >
            <img
              src={govagency}
              alt="card"
              className=" mt-[20px] w-[471.19px] h-[518.48px]   "
            />
          </div>
        </div>
      </div>
      <div className=" md:hidden flex-col flex justify-center item-center bg-background mb-12">
        <img src={smallagency} alt="smallagency" />
        <div className="flex-start bg-background mt-12">
          <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-8 ">
            GOVERNMENT
          </h1>
          <h1 className=" font-inter font-semibold flex ml-[150px] text-primary mt-[-23px]">
            AGENCIES
          </h1>
          <p className="font-inter font-normal text-[12px] mt-12 ml-8 mr-4 leading-[30.8px]">
            Lorem ipsum dolor sit amet consectetur. Proin vel orci temporvelit
            mattis tempor at nisiLorem ipsum dolor sit amet consectetur. Proin
            vel orci tempor velit mattis tempor at nisi.
          </p>
          <button className="flex  items-center text-white text-[12px] ml-8 mt-8 h-[45px] w-[165px] rounded-lg  bg-secondary ">
            <span className="mx-8 text-[12px] font-inter font-normal">
              Read more
            </span>
            <i className="fas fa-chevron-right">
              <img
                src={smallwhite}
                alt="smallwhite"
                className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
              />{" "}
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgencyBanner;
