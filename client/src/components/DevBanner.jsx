import styles, { layout } from "../style";
import webimage1 from "../images/webimage1.png";
import smallweb from "../images/smallweb.png";
import smallwhite from "../images/smallwhite.png";
import { Link } from "react-router-dom";
const DevBanner = () => {
  return (
    <div className="md:mb-56">
      <div className="hidden md:block">
        <div
          className={`bg-gradient-to-r from-blue-100 to-ffffff ${layout.sectionReverse}`}
        >
          <div className={`${layout.sectionImgReverse} relative `}>
            <img
              src={webimage1}
              alt="webimage"
              className="block w-[561px] h-[567px]"
            />
            {/* <div className="absolute top-0 bottom-0  left-[480px] right-[90px] h-24 bg-background"></div> */}
            {/* <div className="absolute top-[390px] bottom-0  left-[480px] right-20 h-4 bg-background"></div> */}
            {/* <div className="absolute top-[500px] bottom-0  right-[460px] left-[93px] h-18 bg-background"></div> */}
            {/* <div className="absolute top-[250px] bottom-0  right-[460px] left-[93px] h-4 bg-background"></div> */}
            {/* <div className="absolute top-0 bottom-0 left-[279px] w-4 bg-background"></div> */}
            {/* <div className="absolute top-0 bottom-0 left-[470px] w-4 bg-background"></div> */}
            {/* <div className="absolute top-[480px] bottom-0 left-[279px] right-[255px]  h-4 bg-background"></div> */}
          </div>
          <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading3} mb-4 `}>Web Development </h2>
            <div
              className={`${styles.paragraph} max-w-[470px] sm:p-auto mt-5 mb-6`}
            >
              <p className="text-dark">
                Avante is a software development company that specializes in
                e-commerce, mobile solutions, customer relationship management,
                and enterprise resource management. They have experience
                building custom solutions for various industries and use
                technologies such as Service-oriented architecture (SOA) to
                improve productivity.
              </p>
            </div>
            <Link to="/contacts">
              <button className="bg-secondary text-white flex flex-start font-bold py-4 px-24 rounded">
                Request a Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" block md:hidden flex-col flex justify-center item-center bg-background mb-12">
        <img src={smallweb} alt="smallweb" />
        <div className="flex-start bg-background mt-12">
          <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 ">
            WEB
          </h1>
          <h1 className=" font-inter font-semibold flex ml-[70px] text-primary mt-[-23px]">
            DEVELOPMENT
          </h1>
          <p className="font-inter font-normal text-[12px] mt-12 ml-4 mr-4 leading-[30.8px]">
            View our projects below to see a lists of our clients and how we
            have helped them to take their business to the next level.
          </p>
          <button className="flex  items-center text-white text-[12px] ml-4 mt-8 h-[46px] w-[247px] rounded-lg  bg-secondary ">
            <span className="mx-14 text-[12px] font-inter font-normal">
              Request a demo
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

export default DevBanner;
