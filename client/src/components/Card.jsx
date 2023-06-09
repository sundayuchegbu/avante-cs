import vector1 from "../images/vector1.png";
import whitearrow from "../images/whitearrow.png";
import carbon from "../images/carbon.png";
import vector from "../images/vector.png";
import icon from "../images/icon.png";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div className="flex flex-col sm:mb-0 mb-8">
      <div className=" flex  sm:justify-center justify-center sm:items-end items-end sm:ml-[900px] ml-[200px] mb-2 ">
        <h1 className="sm:mb-4 font-inter font-semibold sm:text-[16px] text-[14px]  ">
          OUR <span className="text-primary ">SERVICES</span>{" "}
        </h1>{" "}
      </div>
      <div className=" flex  sm:justify-center justtify-end sm:items-center items-end sm:ml-[700px] ml-[165px] mb-4">
        <h1 className="sm:mb-8 font-inter font-normal sm:text-[28px] text-[12px]">
          Your Success, Our Priority{" "}
        </h1>{" "}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="sm:ml-32 ">
          <div className=" bg-black flex flex-col items-center sm:items-start justify-center sm:px-8 p-2 py-6  sm:w-[482px] w-[320px] sm:h-[293px] h-[215px] ">
            <div className="text-white text-4xl sm:text-6xl bg-primary sm:ml-[-65px] ml-[-330px] sm:mt-[-110px] rounded-full p-4  absolute">
              <i>
                <img
                  src={vector1}
                  alt="vector"
                  className="sm:h-8 h-4 sm:w-8 w-4"
                />
              </i>
            </div>
            <div className="text-white sm:ml-8 -ml-20 sm:text-[32px] text-[16px] font-inter font-semibold mb-4">
              Business Consulting{" "}
            </div>
            <div className="text-white ml-8 leading-[25.8px font-inter sm:text-[14px] text-[10px] sm:text-base mb-4">
              Avante Consulting provides implementation solutions for our
              customers from pre-sales assistance ...
            </div>
            <Link to="/services/consulting">
              <button className="flex sm:ml-8 ml-[-53px] items-center text-white text-[12px] ">
                <span className="sm:mr-8 mr-20">Read more</span>
                <i className="fas fa-chevron-right">
                  <img
                    src={whitearrow}
                    alt="whitearrow"
                    className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
                  />
                </i>
              </button>
            </Link>
          </div>
        </div>

        <div className="sm:mt-24 sm:ml-4 ">
          <div className="bg-black flex flex-col items-end sm:items-start justify-center px-8 py-6 sm:w-[482px] w-[320px] sm:h-[293px] h-[215px]">
            <div className="text-white text-4xl sm:text-6xl sm:ml-[415px] ml-[30px] bg-primary sm:mt-[-110px] rounded-full p-4 absolute sm:mr-0 -mr-12">
              <i>
                <img
                  src={vector}
                  alt="vector"
                  className="sm:h-8 h-4 sm:w-8 w-4 "
                />
              </i>
            </div>
            <div className="text-white sm:ml-2 ml-[-26px]  sm:text-[32px] text-[24px] font-inter font-semibold mb-4 ">
              Software Development
            </div>
            <div className="text-white leading-[25.8px sm:text-[14px] text-[12px]  sm:text-base mb-4">
              Avante is a software development company that specializes in
              e-commerce, mobile solutions, ...
            </div>
            <Link to="/services/software">
              <button className="flex sm:ml-0 ml-[-115px] items-center text-white text-[12px] ">
                <span className="mr-12">Read more</span>
                <i className="fas fa-chevron-right">
                  <img
                    src={whitearrow}
                    alt="whitearrow"
                    className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
                  />{" "}
                </i>
              </button>
            </Link>
          </div>
        </div>
        <div className="sm:ml-32 ">
          <div className=" bg-black flex flex-col items-center sm:items-start justify-center px-8 py-6  sm:w-[482px] w-[320px] sm:h-[293px] h-[215px] ">
            <div className="text-white text-4xl sm:text-6xl bg-primary sm:ml-[-65px] ml-[-330px] sm:mt-[-110px] rounded-full p-4 absolute">
              <i>
                <img
                  src={carbon}
                  alt="carbon"
                  className="sm:h-8 h-4 sm:w-8 w-4"
                />
              </i>
            </div>
            <div className="text-white sm:ml-8 -ml-10 sm:text-[32px] text-[24px] font-inter font-semibold mb-4">
              SAS Analytics{" "}
            </div>
            <div className="text-white ml-8 font-inter leading-[25.8px sm:text-[14px] text-[12px] sm:text-base mb-4">
              Avante is a silver partner of SAS and a solution partner within
              the Customer ...
            </div>
            <Link to="/services/sas">
              <button className="flex sm:ml-8 ml-[-53px] items-center text-white text-[12px] ">
                <span className="mr-12">Read more</span>
                <i className="fas fa-chevron-right">
                  <img
                    src={whitearrow}
                    alt="whitearrow"
                    className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
                  />
                </i>
              </button>
            </Link>
          </div>
        </div>
        <div className="sm:mt-24 sm:ml-4 ">
          <div className="bg-black flex flex-col items-end sm:items-start justify-center px-8 py-6 sm:w-[482px] w-[320px] sm:h-[293px] h-[215px]">
            <div className="text-white text-4xl sm:text-6xl sm:ml-[415px] ml-[30px] bg-primary sm:mt-[-110px] rounded-full p-4 absolute sm:mr-0 -mr-12">
              <i>
                <img
                  src={icon}
                  alt="icon"
                  className=" sm:h-8 h-4 sm:w-8 w-4 "
                />
              </i>
            </div>
            <div className="text-white sm:ml-2 ml-[-45px]  sm:text-[32px] text-[24px] font-inter font-semibold mb-4 ">
              Web Development{" "}
            </div>
            <div className="text-white sm:text-[14px] leading-[25.8px] text-[12px]  sm:text-base mb-4">
              View our projects to see a lists of our clients and how we have
              helped them to take their business ...
            </div>
            <Link to="/services/web/development">
              <button className="flex sm:ml-0 ml-[-115px] items-center text-white text-[12px] ">
                <span className="mr-12">Read more</span>
                <i className="fas fa-chevron-right">
                  <img
                    src={whitearrow}
                    alt="whitearrow"
                    className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
                  />{" "}
                </i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
