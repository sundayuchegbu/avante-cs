import microsoft from "../images/microsoft.png";
import egain from "../images/egain.png";
import oracle from "../images/oracle.png";
import sas from "../images/sas.png";
import whitearrow from "../images/whitearrow.png";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:ml-[250px] ml-4">
          <div className=" bg-black flex flex-col items-center md:items-start justify-center px-8 py-6  md:w-[482px] w-[338px] md:h-[293px] h-[223px] ">
            <div className="text-white text-4xl md:text-6xl  md:ml-[-72px] ml-[-330px] sm:mt-[-110px] rounded-full p-4 absolute">
              <i>
                <img src={microsoft} alt="vector" className="h-16 w-16" />
              </i>
            </div>
            <div className="text-white ml-8 md:text-[32px] text-[24px] font-inter font-semibold mb-4">
              eGain{" "}
            </div>
            <div className="text-white ml-8 font-inter sm:text-[14px] text-[12px] md:text-base mb-4">
              Our partnership with eGain strengthens our commitment to the
              industry's most innovative omni-channel customer service and
              knowledge management solutions. Avante is the number one eGain
              partner in Nigeria based on successful implementations in the
              finance and telecoms sectors.
            </div>
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
          </div>
        </div>

        <div className="md:mt-24 md:ml-[50px] ml-[-4px]">
          <div className="bg-black flex flex-col items-center md:items-start justify-center px-8 py-6 md:w-[482px] w-[338px] md:h-[293px] h-[223px]">
            <div className="text-white text-4xl md:text-6xl md:ml-[400px] ml-[310px]  sm:mt-[-110px] rounded-full p-4 absolute">
              <i>
                <img src={sas} alt="vector" className="h-16 w-16" />
              </i>
            </div>
            <div className="text-white md:ml-2 ml-[-45px]  md:text-[32px] text-[24px] font-inter font-semibold mb-4 ">
              SAS{" "}
            </div>
            <div className="text-white sm:text-[14px] text-[12px]  md:text-base mb-4">
              Our partnership with eGain strengthens our commitment to the
              industry's most innovative omni-channel customer service and
              knowledge management solutions. Avante is the number one eGain
              partner in Nigeria based on successful implementations in the
              finance and telecoms sectors.
            </div>
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
          </div>
        </div>
        <div className="md:ml-[250px] ml-4">
          <div className=" bg-black flex flex-col items-center md:items-start justify-center px-8 py-6  md:w-[482px] w-[338px] md:h-[293px] h-[223px] ">
            <div className="text-white text-4xl md:text-6xl  md:ml-[-72px] ml-[-330px] sm:mt-[-110px] rounded-full p-4 absolute">
              <i>
                <img src={oracle} alt="oracle" className="h-16 w-16" />
              </i>
            </div>
            <div className="text-white ml-8 md:text-[32px] text-[24px] font-inter font-semibold mb-4">
              ORACLE{" "}
            </div>
            <div className="text-white ml-8 font-inter sm:text-[14px] text-[12px] md:text-base mb-4">
              Our partnership with eGain strengthens our commitment to the
              industry's most innovative omni-channel customer service and
              knowledge management solutions. Avante is the number one eGain
              partner in Nigeria based on successful implementations in the
              finance and telecoms sectors.
            </div>
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
          </div>
        </div>
        <div className="md:mt-24 md:ml-[50px] ml-[-4px]">
          <div className="bg-black flex flex-col items-center md:items-start justify-center px-8 py-6 md:w-[482px] w-[338px] md:h-[293px] h-[223px]">
            <div className="text-white text-4xl md:text-6xl md:ml-[400px] ml-[310px]  sm:mt-[-110px] rounded-full p-4 absolute">
              <i>
                <img src={egain} alt="icon" className="h-16 w-16" />
              </i>
            </div>
            <div className="text-white md:ml-2 ml-[-45px]  md:text-[32px] text-[24px] font-inter font-semibold mb-4 ">
              Microsoft{" "}
            </div>
            <div className="text-white sm:text-[14px] text-[12px]  md:text-base mb-4">
              Our partnership with eGain strengthens our commitment to the
              industry's most innovative omni-channel customer service and
              knowledge management solutions. Avante is the number one eGain
              partner in Nigeria based on successful implementations in the
              finance and telecoms sectors.
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2;
