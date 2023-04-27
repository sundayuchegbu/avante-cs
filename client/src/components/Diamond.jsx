import { layout } from "../style";
import diamond from "../images/diamond.png";
import { Link } from "react-router-dom";
const Diamond = () => {
  return (
    <section className={` mt-[-150px] ${layout.sectionReverse} mb-24`}>
      <div id="cta9" className={` relative   ${layout.sectionImgReverse1} `}>
        <img src={diamond} alt="codeit" className="block h-[428.8px]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[10px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-2  mt-[150px]`}
        >
          DIAMOND BANK <br className="sm:block hidden " />
          <span className="text-primary ">Water transport infrastructure</span>
        </h2>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
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
