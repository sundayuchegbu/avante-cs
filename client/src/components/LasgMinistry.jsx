import React from "react";
import { layout } from "../style";
import lasgm from "../images/lasgm.png";
import { Link } from "react-router-dom";

const LasgMinistry = () => {
  return (
    <section className={` mt-[-150px] ${layout.sectionReverse}`}>
      <div id="cta9" className={` relative   ${layout.sectionImgReverse1} `}>
        <img src={lasgm} alt="codeit" className="block h-[428.8px]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[10px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-2  mt-[150px]`}
        >
          LASG MINISTRY OF SCIENCE AND TECHNOLOGY{" "}
          <br className="sm:block hidden " />
          <span className="text-primary ">
            Professional training assistance
          </span>
        </h2>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
        >
          The sole responsibility of this Ministry, since its inception is to
          provide professional and technical knowhow in the areas of IT, ICT and
          Science-related services to the citizenry through Ministries,
          Departments and Agencies (MDAs) of Government spread across the State.
          Avante Consulting were able to assist the Lagos State Ministry of
          Science and Technology with their objectives by providing Cisco
          training. The course was delivered using official Cisco Certified
          Network Administrator training material and a certified trainer.
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

export default LasgMinistry;
