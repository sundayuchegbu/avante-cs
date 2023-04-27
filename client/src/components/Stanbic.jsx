import styles, { layout } from "../style";
import stanbicibtc from "../images/stanbicibtc.png";
import { Link } from "react-router-dom";
const Stanbic = () => {
  return (
    <section className={layout.section}>
      <div className={`mx-24 ${layout.sectionInfo}`}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[70px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-4 `}
        >
          STANBIC IBTC MANAGEMENT LIMITED (SIAML){" "}
          <br className="sm:block hidden" />
          <span className="text-primary">Customer service application</span>
        </h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
          Stanbic IBTC Asset Management Limited (SIAML) is the leading
          non-pension asset manager in Nigeria and is committed to being the
          best wealth solutions provider in Nigeria. As part of an internal
          expansion process and in a bid to provide quality customer service
          across their organization, Avante was selected to implement eGain Mail
          management to provide automation and increase efficiency
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div id="cta11" className={`${layout.sectionImg} mx-24 px-24 relative`}>
        <img
          src={stanbicibtc}
          alt="nsip"
          className=" block -mx-4 w-[100%]  h-[70%] "
        />
      </div>
    </section>
  );
};

export default Stanbic;
