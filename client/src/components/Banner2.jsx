import banner2 from "../images/banner2.png";
import banner4 from "../images/banner4.png";
import smallwhite from "../images/smallwhite.png";

const Banner2 = () => (
  <div
    id="ctas4"
    className="md:h-[781px] bg-primary  flex flex-row items-center justify-between "
  >
    <div className="flex flex-col  justify-center p-6 hidden md:block ">
      <h2 className="font-inter font-semibold text-[50px] text-white font-bold mb-4 ml-[100px] mt-[100px]">
        Lorem ipsum dolor <br />
        sit amet consectetur.
      </h2>
      <p className=" font-inter text-[16px] text-white mb-6 ml-[100px]">
        Lorem ipsum dolor sit amet consectetur. Proin vel orci tempor
        <br /> velit mattis tempor at nisiLorem ipsum dolor sit amet
        consectetur.
        <br /> Proin vel orci tempor velit mattis tempor at nisi.
      </p>{" "}
      <button className="bg-secondary font-inter text-white  py-2 px-4 rounded ml-[100px] w-[148px] h-[46.36px]">
        Read more{" "}
      </button>
    </div>
    <div className="hidden md:block md:mr-24">
      {" "}
      <img
        src={banner2}
        alt="banner"
        className="md:h-[564.46px] h-[411.7px] md:w-[557.88px]  "
      />
      {/* <div className="absolute md:top-[27.1%] md:left-[82%] md:right-[6.3%] md:h-[10%] bg-primary"></div> */}
      {/* <div className="absolute md:top-[80%] md:left-[82%] md:right-[6.3%] md:h-[2%] bg-primary "></div> */}
      {/* <div className="absolute md:top-[98%] md:right-[32%] md:left-[57%] md:h-[10%] bg-primary "></div> */}
      {/* <div className="absolute md:top-[58%] md:right-[32%] md:left-[57%] md:h-[2%] bg-primary "></div> */}
      {/* <div className="absolute md:bottom-[-5%] md:top-[27.3%] md:left-[67%] md:w-[1%] bg-primary "></div> */}
      {/* <div className="absolute md:top-[27.2%] md:bottom-[-5%] md:right-[18%] md:w-[1%] bg-primary "></div> */}
      {/* <div className="absolute md:top-[95%] md:left-[67.8%] md:right-[19%] md:h-[2%] bg-primary "></div> */}
    </div>
    <div className=" block md:hidden flex-col flex justify-center item-center bg-background">
      <img src={banner4} alt="banner4" />
      <div className="flex-start bg-background mt-12">
        <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 ">
          Avante-cs
        </h1>
        <p className="font-inter font-normal text-[12px] mt-12 ml-4 mr-4">
          Lorem ipsum dolor sit amet consectetur. Proin vel orci temporvelit
          mattis tempor at nisiLorem ipsum dolor sit amet consectetur. Proin vel
          orci tempor velit mattis tempor at nisi.
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
);

export default Banner2;
