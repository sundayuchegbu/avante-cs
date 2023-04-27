import styles, { layout } from "../style";
import mtn2 from "../images/mtn2.png";
import { Link } from "react-router-dom";
const MtnNigeria = () => {
  return (
    <section className={`mb-32 ${layout.section}`}>
      <div className={`mx-24 ${layout.sectionInfo}`}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[70px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-4 `}
        >
          MTN NIGERIA <br className="sm:block hidden" />
          <span className="text-primary">Water transport infrastructure</span>
        </h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
          MTN Nigeria is the biggest telecoms company in Nigeria supporting over
          58 million subscribers. Consequently the eGain multichannel project is
          the biggest Avante has undertaken providing end to end customer
          interaction capabilities covering all touch points and spanning 2
          departments. This Knowledge Management and omni-channel project was
          the first of its kind at MTN. Joining up separate channels like social
          & email then launching mobile and web chat for the first time in the
          MTN environment. Another first was a fully functional Knowledge base
          with federated search and diagnostics to support both agents
          internally and web self-service for customer. The customer
          satisfaction stats from post chat surveys carried out have been very
          high. There has also been a natural adoption of channels by chat by
          customers. This shows that customers want to interact with customers
          in multiple ways with the lowest effort possible.
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div id="cta10" className={`${layout.sectionImg} mx-24 px-24 relative`}>
        <img
          src={mtn2}
          alt="mtn2"
          className=" block -mx-4 w-[100%]  h-[70%] "
        />
      </div>
    </section>
  );
};

export default MtnNigeria;
