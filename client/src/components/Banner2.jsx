import base from "../images/base.png";
import banner2 from "../images/banner2.png";
import styles from "../style";
import { Link } from "react-router-dom";

const Banner2 = () => (
  <div className="relative">
    <div className="grid lg:grid-cols-2 gap-0 bg-primary ">
      <div className="relative">
        <img src={base} alt="base" className="w-full lg:h-full object-cover " />
        <div className="absolute inset-0 bg-primary opacity-75"></div>
        <div className="absolute inset-0 flex items-center  justify-center">
          <div className=" text-white max-w-[470px]">
            <h1
              className={` font-Inter font-semibold xs:text-[40px] mt-[20px] text-[40px] text-white xs:leading-[60.8px] leading-[66.8px] `}
            >
              Lorem ipsum dolor
              <br className="sm:block hidden " /> sit amet consectetur.
            </h1>
            <p className={`${styles.paragraph2}  mt-5   mb-8  `}>
              Lorem ipsum dolor sit amet consectetur. Proin vel orci tempor
              velit mattis tempor at nisiLorem ipsum dolor sit amet consectetur.
              Proin vel orci tempor velit mattis tempor at nisi.
            </p>
            <Link to="/contacts">
              <button className="bg-secondary font-inter text-white flex  lg:flex-center py-2 px-8 mt-8 items-center font-bold   rounded">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full   relative ">
        <img
          src={banner2}
          alt="banner"
          className="block w-[557.88px] h-[568.46px] mt-12  "
        />
        <div className="absolute top-[49px] bottom-0  left-[410px] -right-0 h-12 bg-primary"></div>
        <div className="absolute top-[390px] bottom-0  left-[400px] -right-0 h-4 bg-primary"></div>
        <div className="absolute top-[560px] bottom-0  right-[600px] left-0 h-14 bg-primary"></div>
        <div className="absolute top-[280px] bottom-0  right-[600px] left-0 h-4 bg-primary"></div>
        <div className="absolute top-[520px] bottom-0 left-[174px] right-[350px]  h-4 bg-primary"></div>
        <div className="absolute top-0 bottom-0 left-[159px] w-4 bg-primary"></div>
        <div className="absolute top-0 bottom-0 left-[400px] w-4 bg-primary"></div>
      </div>
    </div>
  </div>
);

export default Banner2;
