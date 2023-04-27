import styles, { layout } from "../style";
import nsip from "../images/nsip.png";
import { Link } from "react-router-dom";
const NationalInvestiment = () => {
  return (
    <section className={layout.section}>
      <div className={`mx-24 ${layout.sectionInfo}`}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[70px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-4 `}
        >
          THE NATIONAL SOCIAL INVESTMENT PROGRAMMS{" "}
          <br className="sm:block hidden" />
          <span className="text-primary">Customer service application</span>
        </h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
          The National Social Investment Programmes were created to overcome the
          failings of the past and to enshrine the values and vision of the
          current Administration for graduating its citizens from poverty
          through capacity building, investment and direct support. The NSIP
          sought an application that would help them provide excellent customer
          care for their beneficiaries. Avante was chosen to deploy eGain Mail,
          eGain Chat, eGain CallTrack and eGain Knowledge for the NSIP
          programmes like Government Enterprise & Empowerment Programme (GEEP),
          N-POWER, Homegrown School Feeding Programme (HGSF) and Conditional
          Cash transfer Programme.
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div id="cta10" className={`${layout.sectionImg} mx-24 px-24 relative`}>
        <img
          src={nsip}
          alt="nsip"
          className=" block -mx-4 w-[100%]  h-[70%] "
        />
      </div>
    </section>
  );
};

export default NationalInvestiment;
