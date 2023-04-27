import React from "react";
import { layout } from "../style";
import naijacities from "../images/naijacities.png";
import { Link } from "react-router-dom";
const NaijaCities = () => {
  return (
    <section className={` mt-[-150px] ${layout.sectionReverse}`}>
      <div id="cta9" className={` relative   ${layout.sectionImgReverse1} `}>
        <img src={naijacities} alt="codeit" className="block h-[428.8px]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[10px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-2  mt-[150px]`}
        >
          FUTURE CITIES <span className="text-secondary ">NIGERIA</span>{" "}
          <br className="sm:block hidden " />
          <span className="text-primary ">
            Collaborative infrastructure <br className="sm:block hidden" />
            program.
          </span>
        </h2>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
        >
          The Future Cities Nigeria (FCN) program is a series of infrastructure
          and capacity building projects delivered for Nigerian State
          governments in collaboration with the British government. The projects
          are implemented globally by Adam Smith International (ASI) who partner
          with Infrastructure Delivery International (IDI) in Nigeria for
          projects in Lagos, Ogun and other states. Under leadership from IDI,
          Avante worked closely with LASWA to provide Customer and Market
          intelligence services in conducting a market survey of the Lagos
          Inland Water ways in relation to usage by passenger, freight, operator
          and other interest groups. Our work included Survey Design, Content
          Development, Planning, Data Gathering, Survey Software Implementation,
          Data Management, Analysis and Reporting. Avante also provided Content
          Management and Data Sharing Services for the FCN project.
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

export default NaijaCities;
