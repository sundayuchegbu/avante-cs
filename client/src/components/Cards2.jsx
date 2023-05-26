import microsoft from "../images/microsoft.png";
import egain from "../images/egain.png";
import oracle from "../images/oracle.png";
import sas from "../images/sas.png";
import whitearrow from "../images/whitearrow.png";
import { Link } from "react-router-dom";

const Cards2 = () => {
  return (
    <div className="flex flex-col md:mb-12 mb-8">
      <div className=" flex  md:justify-center justify-end md:items-end items-end md:mr-[1130px] ml-[200px]  ">
        <h1 className="md:mb-4 font-inter font-semibold text-[16px]  ">
          OUR <span className="text-secondary ">PARTNERS</span>{" "}
        </h1>{" "}
      </div>
      <div className=" flex items-center justify-center md:items-end items-center md:mr-[890px] ml-[150px] mb-4">
        <h1 className="md:mb-8 font-inter font-normal md:text-[28px] text-[16px]  ">
          Lorem Ipsum consectetur.{" "}
        </h1>{" "}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:-gap-6 gap-8">
        <div className="sm:ml-[310px] ml-4">
          <div className=" bg-black flex flex-col items-center md:items-start justify-center px-8 py-6  md:w-[482px] w-[338px] md:h-[293px] h-[223px] ">
            <div className="text-white text-4xl md:text-6xl  md:ml-[-72px] ml-[-330px] sm:mt-[-110px] rounded-full p-4 absolute">
              <i>
                <img src={microsoft} alt="vector" className="h-16 w-16" />
              </i>
            </div>
            <div className="text-white ml-8 md:text-[32px] text-[24px] font-inter font-semibold mb-4">
              eGain{" "}
            </div>
            <div className=" font-inter font-normal text-white ml-8 font-inter sm:text-[14px] leading-[25.8px] text-[12px] md:text-base mb-4">
              Our partnership with eGain strengthens our commitment to the
              industry's most innovative ...
            </div>
            <Link to="/services/egain/collaboration">
              <button className="flex md:ml-8 ml-[-53px] items-center text-white text-[12px] ">
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

        <div className="md:mt-24 md:ml-[50px] ml-4">
          <div className="bg-black flex flex-col items-center md:items-start justify-center px-8 py-6 md:w-[482px] w-[338px] md:h-[293px] h-[223px]">
            <div className="text-white text-4xl sm:text-6xl md:ml-[400px] sm:ml-[310px] mr-[-310px] -mt-16 sm:mt-[-110px] rounded-full p-4 absolute">
              <i>
                <img
                  src={sas}
                  alt="vector"
                  className="sm:h-16 sm:w-16 h-14 w-14"
                />
              </i>
            </div>
            <div className="text-white md:ml-2 ml-[-45px]  md:text-[32px] text-[24px] font-inter font-semibold mb-4 ">
              SAS{" "}
            </div>
            <div className=" font-inter font-normal leading-[25.8px] text-white sm:text-[14px] text-[12px]  md:text-base mb-4">
              Avante is a silver partner of SAS and a solution partner within
              the Customer Intelligence practice.
            </div>
            <Link to="/services/sas">
              <button className="flex md:ml-0 ml-[-115px] items-center text-white text-[12px] ">
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
        <div className="sm:ml-[310px] ml-4">
          <div className=" bg-black flex flex-col items-center md:items-start justify-center px-8 py-6  md:w-[482px] w-[338px] md:h-[293px] h-[223px] ">
            <div className="text-white text-4xl md:text-6xl  sm:ml-[-72px] ml-[-330px] sm:mt-[-110px] rounded-full p-4 absolute">
              <i>
                <img src={oracle} alt="oracle" className="h-16 w-16" />
              </i>
            </div>
            <div className="text-white ml-8 md:text-[32px] text-[24px] font-inter font-semibold mb-4">
              ORACLE{" "}
            </div>
            <div className=" font-inter font-normal leading-[25.8px] text-white ml-8 font-inter sm:text-[14px] text-[12px] md:text-base mb-4">
              Our Oracle Consultancy Practice is focused on helping
              organisations optimize and ...
            </div>
            <Link to="/services/oracle">
              <button className="flex md:ml-8 ml-[-53px] items-center text-white text-[12px] ">
                <span className="mr-12 font-inter font-normal">Read more</span>
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
        <div className="md:mt-24 md:ml-[50px] ml-4">
          <div className="bg-black flex flex-col items-center md:items-start justify-center px-8 py-6 md:w-[482px] w-[338px] md:h-[293px] h-[223px]">
            <div className="text-white text-4xl md:text-6xl md:ml-[400px] ml-[310px]  sm:mt-[-110px] rounded-full p-4 absolute">
              <i>
                <img src={egain} alt="icon" className="h-16 w-16" />
              </i>
            </div>
            <div className="text-white md:ml-2 ml-[-45px]  md:text-[32px] text-[24px] font-inter font-semibold mb-4 ">
              Microsoft{" "}
            </div>
            <div className="font-inter font-normal leading-[25.8px] text-white sm:text-[14px] text-[12px]  md:text-base mb-4">
              Avante is a software development company that specializes in
              e-commerce, mobile solutions,
            </div>
            <Link to="/services/software">
              <button className="flex md:ml-0 ml-[-115px] items-center text-white text-[12px] ">
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

export default Cards2;
