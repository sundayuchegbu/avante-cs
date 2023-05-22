import vector1 from "../images/vector1.png";
import whitearrow from "../images/whitearrow.png";
import carbon from "../images/carbon.png";
import vector from "../images/vector.png";
import icon from "../images/icon.png";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div className="flex flex-col md:mb-0 mb-8">
      <div className=" flex  md:justify-center justify-end md:items-end items-end md:ml-[800px] ml-[200px] mb-4 ">
        <h1 className="md:mb-4 font-inter font-semibold text-[16px]  ">
          OUR <span className="text-primary ">SERVICES</span>{" "}
        </h1>{" "}
      </div>
      <div className=" flex items-center justify-center md:items-end items-center md:ml-[600px] ml-[150px] mb-4">
        <h1 className="md:mb-8 font-inter font-normal md:text-[28px] text-[16px]  ">
          Lorem Ipsum consectetur.{" "}
        </h1>{" "}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:ml-32 ml-4">
          <div className=" bg-black flex flex-col items-center md:items-start justify-center px-8 py-6  md:w-[482px] w-[338px] md:h-[293px] h-[223px] ">
            <div className="text-white text-4xl md:text-6xl bg-primary sm:ml-[-65px] ml-[-330px] sm:mt-[-110px] rounded-full p-4 absolute">
              <i>
                <img src={vector1} alt="vector" className="h-8 w-8" />
              </i>
            </div>
            <div className="text-white ml-8 md:text-[32px] text-[24px] font-inter font-semibold mb-4">
              Business Consulting{" "}
            </div>
            <div className="text-white ml-8 font-inter sm:text-[14px] text-[12px] md:text-base mb-4">
              Avante Consulting provides implementation solutions for our
              customers from pre-sales assistance through to “go-live” events.
              These solutions are based on a proven implementation methodologies
              developed over the years and are...
            </div>
            <Link to="/services/consulting">
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

        <div className="md:mt-24 md:ml-0 ml-[-4px]">
          <div className="bg-black flex flex-col items-center md:items-start justify-center px-8 py-6 md:w-[482px] w-[338px] md:h-[293px] h-[223px]">
            <div className="text-white text-4xl md:text-6xl md:ml-[415px] ml-[310px] bg-primary sm:mt-[-110px] rounded-full p-4 absolute">
              <i>
                <img src={vector} alt="vector" className="h-8 w-8" />
              </i>
            </div>
            <div className="text-white md:ml-2 ml-[-45px]  md:text-[32px] text-[24px] font-inter font-semibold mb-4 ">
              Software Development
            </div>
            <div className="text-white sm:text-[14px] text-[12px]  md:text-base mb-4">
              Avante is a software development company that specializes in
              e-commerce, mobile solutions, customer relationship management,
              and enterprise resourcemanagement. They have experience ...
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
        <div className="md:ml-32 ml-4">
          <div className=" bg-black flex flex-col items-center md:items-start justify-center px-8 py-6  md:w-[482px] w-[338px] md:h-[293px] h-[223px] ">
            <div className="text-white text-4xl md:text-6xl bg-primary sm:ml-[-65px] ml-[-330px] sm:mt-[-110px] rounded-full p-4 absolute">
              <i>
                <img src={carbon} alt="carbon" className="h-8 w-8" />
              </i>
            </div>
            <div className="text-white ml-8 md:text-[32px] text-[24px] font-inter font-semibold mb-4">
              SAS Analytics{" "}
            </div>
            <div className="text-white ml-8 font-inter sm:text-[14px] text-[12px] md:text-base mb-4">
              Our partnership with eGain strengthens our commitment to the
              industry's most innovative omni-channel customer service and
              knowledge management solutions. Avante is the number one eGain
              partner in Nigeria based on successful...
            </div>
            <Link to="/services/sas">
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
        <div className="md:mt-24 md:ml-0 ml-[-4px]">
          <div className="bg-black flex flex-col items-center md:items-start justify-center px-8 py-6 md:w-[482px] w-[338px] md:h-[293px] h-[223px]">
            <div className="text-white text-4xl md:text-6xl md:ml-[415px] ml-[310px] bg-primary sm:mt-[-110px] rounded-full p-4 absolute">
              <i>
                <img src={icon} alt="icon" className="h-8 w-8" />
              </i>
            </div>
            <div className="text-white md:ml-2 ml-[-45px]  md:text-[32px] text-[24px] font-inter font-semibold mb-4 ">
              Web Development{" "}
            </div>
            <div className="text-white sm:text-[14px] text-[12px]  md:text-base mb-4">
              View our projects below to see a lists of our clients and how we
              have helped them to take their business to the next level.
            </div>
            <Link to="/services/web/development">
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
export default Card;
