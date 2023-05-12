import banner2 from "../images/banner2.png";
import { Link } from "react-router-dom";

const Banner2 = () => (
  <div className="h-[781px] md:bg-primary flex flex-row items-center justify-between">
    <div className="flex flex-col justify-center p-6 hidden md:block ">
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
    <div className="mr-24">
      {" "}
      <img
        src={banner2}
        alt="banner"
        className="md:h-[564.46px] h-[411.7px] md:w-[557.88px]"
      />
      <div className="absolute md:top-[27.1%] md:left-[82%] md:right-[6.3%] md:h-[10%] bg-primary"></div>
      <div className="absolute md:top-[80%] md:left-[82%] md:right-[6.3%] md:h-[2%] bg-primary "></div>
      <div className="absolute md:top-[91.9%] md:right-[31%] md:left-[57%] md:h-[10%] bg-primary "></div>
      <div className="absolute md:top-[58%] md:right-[31%] md:left-[57%] md:h-[2%] bg-primary "></div>
      <div className="absolute md:bottom-[-2%] md:top-[27.3%] md:left-[67%] md:w-[2%] bg-primary "></div>
      <div className="absolute md:top-[27.2%] md:bottom-[-2%] md:right-[18%] md:w-[2%] bg-primary "></div>
      <div className="absolute md:top-[95%] md:left-[68.8%] md:right-[20%] md:h-[2%] bg-primary "></div>
    </div>
  </div>
);

export default Banner2;
