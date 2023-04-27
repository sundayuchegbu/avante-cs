import { Link } from "react-router-dom";
import { layout } from "../style";
import brokers from "../images/brokers.png";
const InsuraceBroker = () => {
  return (
    <section className={` mt-[-150px] ${layout.sectionReverse}`}>
      <div id="cta9" className={` relative   ${layout.sectionImgReverse1} `}>
        <img src={brokers} alt="codeit" className="block h-[428.8px]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[10px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-2  mt-[150px]`}
        >
          STANBIC IBTC INSURANCE BROKER <br className="sm:block hidden " />
          <span className="text-primary ">
            Professional training assistance
          </span>
        </h2>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
        >
          Stanbic IBTC Insurance brokers is a duly registered and licensed
          Insurance Broking firm transacting business as Brokers, Risk
          Management Consultants, Life and Pensions, Health Insurance
          Consultants and Claims Service Experts. The Asset Management team
          sought a solution that would allow them to classify customer queries
          based on content, help manage multiple tasks for a single message, and
          create a single consistent response. Agents needed a complete picture
          of what had happened already with a customer. They required access to
          relevant customer data and guidance in resolving, what were often
          complex problems.
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

export default InsuraceBroker;
