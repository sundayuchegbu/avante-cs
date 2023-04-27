import { Link } from "react-router-dom";
import { layout } from "../style";
import ninemobile from "../images/ninemobile.png";
const Ninemobile = () => {
  return (
    <section className={` mt-[-150px] ${layout.sectionReverse}`}>
      <div id="cta9" className={` relative   ${layout.sectionImgReverse1} `}>
        <img
          src={ninemobile}
          alt="ninemobile"
          className="block h-[446px] w-[448px] mr-24"
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[10px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-2  mt-[150px]`}
        >
          <span className="text-success">9</span>mobile
          <br className="sm:block hidden " />
          <span className="text-primary ">
            Campaign Management <br className="sm:block hidden " /> Automation{" "}
          </span>
        </h2>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[20.8px] max-w-[470px] mt-5 mb-6`}
        >
          9mobile is Nigeria’s most innovative telecoms network. They began
          trading in October 2008 with the ground breaking “0809uchoose”
          campaign.. This tradition of customer-focused innovation continues
          today, with a growing customer base of more than 21 million. Trading
          as 9mobile (formerly Etisalat) Nigeria, Emerging Markets
          Telecommunication Services (EMTS) is a private Nigerian company in
          partnership with Mubadala Development Company and9mobile (formerly
          Etisalat) of the United Arab Emirates. It acquired the unified access
          license from the federal government in January 2007, which includes a
          mobile licence and spectrum in the GSM 1800 and 900 MHZ bands. 9mobile
          (formerly Etisalat) acquired a 40% stake in EMTS and is now the
          operator of the unified access license. Avante Consulting Solutions
          have implemented the Egain Mail, Chat and Knowledge Management (Self
          Service and Guided Help) solution for Etisalat Nigeria. The aim of
          using the Egain solution is to deflect customer emails by 60% and also
          resolve 88% of customer issues through self-service. Other benefits
          will include a reduction in training time for contact centre agents,
          an improvement in the contact centre agent time to competency and cost
          saving due to better knowledge access and diagnosis by agents.
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

export default Ninemobile;
