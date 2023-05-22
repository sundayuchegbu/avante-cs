import { layout } from "../style";
import financial from "../images/financial.png";
import smallwhite from "../images/smallwhite.png";
import { Link } from "react-router-dom";
const TelecomsBanner = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div id="financial" className={`mb-32  h-[721px] ${layout.section}`}>
          <div className={`mx-32 ${layout.sectionInfo}`}>
            <h2
              className={`font-inter font-semibold xs:text-[53px] mt-[20px] text-[40px] text-black xs:leading-[60.8px] leading-[66.8px] w-full mb-4 `}
            >
              Telecoms sectors{" "}
            </h2>
            <div
              className={`font-inter font-normal text-black2 text-[16px] leading-[20.8px] max-w-[470px] mt-5 mb-6`}
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
          <div className={`${layout.sectionImg} md:mx-24 md:px-24   relative`}>
            <img
              src={financial}
              alt="telecombanner"
              className=" mt-[20px] w-[471.19px] h-[518.48px]   "
            />
          </div>
        </div>
      </div>
      <div className="block">
        <div className="block md:hidden">
          <div className="  flex-col flex justify-center item-center bg-background mb-44">
            <img src={financial} alt="telecombanner" className="h-[281.73px]" />
            <div className="flex-start bg-background mt-12 ">
              <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 ">
                Telecoms sectors{" "}
              </h1>

              <p className="font-inter font-normal text-[12px] mt-12 ml-4 mr-4 leading-[30.8px]">
                Lorem ipsum dolor sit amet consectetur. Proin vel orci tempor
                velit mattis tempor at nisiLorem ipsum dolor sit amet
                consectetur. Proin vel orci tempor velit mattis tempor at nisi.
              </p>
              <button className="flex  items-center text-white text-[12px] ml-4 mt-8 h-[45px] w-[165px] rounded-lg  bg-secondary ">
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
      </div>{" "}
    </div>
  );
};

export default TelecomsBanner;
