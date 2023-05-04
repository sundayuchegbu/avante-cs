import { Link } from "react-router-dom";
import { layout } from "../style";
import venture from "../images/venture.png";

const Venture = () => {
  return (
    <section className={` mt-[-150px] ${layout.sectionReverse}`}>
      <div id="cta9" className={` relative   ${layout.sectionImgReverse1} `}>
        <img
          src={venture}
          alt="venture"
          className="block h-[446px] w-[448px] mr-24"
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[10px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-2  mt-[150px]`}
        >
          VENTURE GARDEN GROUP (VGG) <br className="sm:block hidden " />
          <span className="text-primary ">
            Campaign Management <br className="sm:block hidden " /> Automation{" "}
          </span>
        </h2>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[20.8px] max-w-[470px] mt-5 mb-6`}
        >
          Venture Garden Group (VGG) is a leading provider of innovative,
          data-driven, end-to-end technology platforms addressing reconciliation
          and payment processing inefficiencies across multiple sectors of the
          African economy. VGG required a solution to be deployed to manage
          multiple communication (submission, tracking and resolution) of
          beneficiary and service provider cases, including a centralised call
          center for individuals to obtain information about the programs and to
          report problems or make complaints. Avante was chosen to deploy eGain
          17 comprising of deploy eGain Mail, eGain Chat, eGain CallTrack and
          eGain Knowledge+AI as the solution to serve their purpose.
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

export default Venture;
