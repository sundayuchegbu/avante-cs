import styles, { layout } from "../style";
import sage from "../images/sage.png";
import { Link } from "react-router-dom";

const Sage = () => {
  return (
    <section className={layout.section}>
      <div className={`mx-24 ${layout.sectionInfo}`}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[70px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-4 `}
        >
          SAGE INTEGRATED MARINE SERVICES LTD <br className="sm:block hidden" />
          <span className="text-primary">Professional training assistance</span>
        </h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
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
      <div id="cta10" className={`${layout.sectionImg} mx-24 px-24 relative`}>
        <img
          src={sage}
          alt="nsip"
          className=" block -mx-4 w-[100%]  h-[70%] "
        />
      </div>
    </section>
  );
};

export default Sage;
