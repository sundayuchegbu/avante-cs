import React from "react";
import { layout } from "../style";
import globalcom from "../images/globalcom.png";
import { Link } from "react-router-dom";
const Glo = () => {
  return (
    <section className={` mt-[-150px] ${layout.sectionReverse}`}>
      <div id="cta9" className={` relative   ${layout.sectionImgReverse1} `}>
        <img src={globalcom} alt="codeit" className="block h-[428.8px]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[10px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-2  mt-[150px]`}
        >
          GLOBACOM <br className="sm:block hidden " />
          <span className="text-primary ">LASTVEB up-skilling youth.</span>
        </h2>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
        >
          Globacom Limited is a Nigerian multinational telecommunications
          company headquartered in Lagos, Nigeria. GLO started operations on 29
          August 2003. GLO owns four business units; Glo Mobile, GLO Access, GLO
          1 Submarine Cable and Broad Access. GLO Mobile has an estimate of over
          25 million subscribers. Avante Consulting implemented the integration
          of Siebel Customer Relationship Management with Omni docs document
          management solution. Easing the availability of scanned documents such
          as Know your customer forms, utility bills, legal documents etc. in
          the CRM tool enabled customer service agents to be more effective in
          resolving queries.
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

export default Glo;
