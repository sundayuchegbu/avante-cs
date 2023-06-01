import banner from "../images/banner.png";
import home from "../images/home.png";
import smallwhite from "../images/smallwhite.png";
import { Link } from "react-router-dom";

const Banner = () => (
  <div className="flex flex-col md:flex-row h-screen">
    <div className="md:w-1/2 h-screen bg-primary flex flex-col justify-center items-center sm:items-start p-8 hidden sm:block">
      <h2 className="font-inter font-semibold text-[40px] text-white font-bold mb-4 ml-[100px] mt-[100px] w-[546px]">
        Driving Success Through <br />
        Innovative Solutions{" "}
      </h2>
      <p className=" font-inter text-[16px] leading-[25.8px] text-white mb-6 ml-[100px] w-[520px]">
        At Avante Consulting Solutions, we are dedicated to driving success for
        your business. With our innovative solutions and industry expertise, we
        empower organizations to thrive in today's dynamic market. Partner with
        us and unlock your business's full potential.
      </p>
      <Link to="/contacts">
        <button className="bg-secondary font-inter text-white  py-2 px-4 rounded ml-[100px] w-[148px] h-[46.36px]">
          Get in Touch{" "}
        </button>
      </Link>{" "}
    </div>

    <div className="md:w-1/2  h-screen bg-cover bg-center hidden sm:block ">
      <img src={banner} alt="banner" className="w-full sm:h-screen " />
    </div>
    <div className=" block sm:hidden flex-col flex justify-center item-center bg-background">
      <img src={home} alt="banner4" />
      <div className="flex-start bg-background mt-12">
        <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 ">
          Avante-cs
        </h1>
        <p className="font-inter font-normal text-[12px] mt-12 ml-4 mr-4">
          At Avante Consulting Solutions, we are dedicated to driving success
          for your business. With our innovative solutions and industry
          expertise, we empower organizations to thrive in today's dynamic
          market. Partner with us and unlock your business's full potential.
        </p>
        <Link to="/contacts">
          <button className="flex  items-center text-white text-[12px] ml-4 mt-8 h-[45px] w-[165px] rounded-lg  bg-secondary ">
            <span className="mx-8 text-[12px] font-inter font-normal">
              Get in Touch
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
    </div>
  </div>
);

export default Banner;
