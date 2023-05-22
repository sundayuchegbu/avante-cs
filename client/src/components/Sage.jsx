import { layout } from "../style";
import sage from "../images/sage.png";
import { Link } from "react-router-dom";

const Sage = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}>
      <div className={`md:mx-24 px-8 ${layout.sectionInfo}`}>
        <h2
          className={`font-inter font-semibold xs:text-[20px] mt-[70px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-4`}
        >
          SAGE INTEGRATED MARINE SERVICES LTD <br />
          <span className="text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2 ">
            Professional training assistance
          </span>
        </h2>
        <div
          className={`font-inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
        >
          Sage Integrated Marine Services Ltd specialises in providing marine
          and offshore support solutions to the oil and gas industry. The
          company was founded to bridge the gap of providing international best
          practices whilst satisfying the local Nigerian market demand. Avante
          was chosen to build a website for Sage that showcases their mission,
          vision, services, clients and most importantly their world class
          standards.
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div>
        <div className="hidden md:block">
          <div
            id="cta10"
            className={`${layout.sectionImg} mx-24 px-24 relative`}
          >
            <img
              src={sage}
              alt="sage"
              className=" block -mx-4 w-[100%]  h-[70%] "
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="cta20" className="block md:hidden">
            <img src={sage} alt="sage" />
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Sage;
