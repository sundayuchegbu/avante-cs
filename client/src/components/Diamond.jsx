import { layout } from "../style";
import diamond from "../images/diamond.png";
import { Link } from "react-router-dom";
const Diamond = () => {
  return (
    <section
      className={`  mt-[-150px] flex md:flex-row flex-col sm:py-16 py-6`}
    >
      <div>
        <div className="hidden md:block">
          <div
            id="cta9"
            className={`relative md:mr-24  ${layout.sectionImgReverse1} `}
          >
            <img src={diamond} alt="diamond" className="block h-[428.8px]" />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="cta19" className="block md:hidden">
            <img src={diamond} alt="diamond" />
          </div>
        </div>
      </div>
      <div className={`${layout.sectionInfo} md:ml-56 px-8`}>
        <h2
          className={`font-inter font-semibold xs:text-[16px] md:mt-[150px] mt-[-100px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-2   `}
        >
          DIAMOND BANK <br />
          <span className="text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2   ">
            Water transport infrastructure
          </span>
        </h2>
        <p
          className={`font-inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
        >
          Diamond bank is one of the leading banks in Nigeria. They were looking
          to revamp the entire digital landscape from web to mobile. eGain gives
          them a 360degree view of customer interactions and provided a platform
          that enables the expansion of the digital strategy. This makes it
          easier for Diamond bank to innovate and deliver value without
          incurring the large costs usually associated with such projects. The
          Avante methodology ensured the project was delivered in only a couple
          of months on time and within budget.
        </p>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Diamond;
