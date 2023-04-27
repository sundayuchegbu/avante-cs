import { layout } from "../style";
import union from "../images/union.png";
import { Link } from "react-router-dom";
const Union = () => {
  return (
    <section className={` mt-[-150px] ${layout.sectionReverse} mb-24`}>
      <div id="cta9" className={` relative   ${layout.sectionImgReverse1} `}>
        <img src={union} alt="uinor" className="block h-[428.8px]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[10px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-2  mt-[150px]`}
        >
          UNION <span className="text-secondary ">BANK</span>{" "}
          <br className="sm:block hidden " />
          <span className="text-primary ">
            Campaign Management <br className="sm:block hidden" />
            Automation
          </span>
        </h2>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
        >
          SAS and Union Bank have determined a roadmap to formulating a
          partnership to achieve Union Bank’s Digital Transformation vision.
          This project is the first phase of the roadmap and it is intended to
          help • Implementation of a world-class analytics & AI platform •
          Automation and Establishing foundation for Campaign Management
          solution by performing integrations with EDW and key channels. • Build
          a consistent and rich data platform, focusing on the quality and
          completeness of the data. • Enabling marketing team to design and
          execute marketing campaigns. • Enablement of the Union Bank staff on
          the usage and best practices of the platform. Avante was hired to
          provide project management services on this project to ensure all
          deliverables related to the scope and agreed upon timelines were met
          and delivered successfully.
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

export default Union;
