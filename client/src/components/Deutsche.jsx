import styles, { layout } from "../style";
import deutsche from "../images/deutsche.png";
import { Link } from "react-router-dom";

const Deutsche = () => {
  return (
    <section className={layout.section}>
      <div className={`mx-24 ${layout.sectionInfo}`}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[70px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-4 `}
        >
          Deutsche Telekom AG
          <br className="sm:block hidden" />
          <span className="text-primary">Professional training assistance</span>
        </h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
          Deutsche Telekom AG is a German telecommunications company
          headquartered in Bonn. Deutsche Telekom AG offers services such as
          Fixed Telephony, Mobile Telephony, Broadband Internet, IT Services,
          Networking Solutions and Digital television. T-Online merged with
          parent Deutsche Telekom in 2006. It provides around 40 million
          narrowband lines, over 9 million broadband lines and has 14 million
          registered Internet customers. Avante Consulting carried out Siebel
          CRM data migration for Deutsche Telekom. The project involved the
          migration of 60 million customer records and 3 billion transactional
          records.
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div id="cta10" className={`${layout.sectionImg} mx-24 px-24 relative`}>
        <img
          src={deutsche}
          alt="nsip"
          className=" block -mx-4 w-[100%]  h-[70%] "
        />
      </div>
    </section>
  );
};

export default Deutsche;
