import styles, { layout } from "../style";
import pharm from "../images/pharm.png";
import { Link } from "react-router-dom";

const ChilPharm = () => {
  return (
    <section className={`mb-32 ${layout.section}`}>
      <div className={`mx-24 ${layout.sectionInfo}`}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[70px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-4 `}
        >
          CHILPHARM PHARMACY
          <br className="sm:block hidden" />
          <span className="text-primary">Professional training assistance</span>
        </h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
          Chilpharm Pharmacy is a modern pharmacy store catering for the entire
          needs of the community by providing professional pharmaceutical
          services to customers and ensuring that all products are sourced from
          reliable wholesalers. Avante was selected to create an e-commerce
          website where customers are able to order and pay online and receive
          delivery for their products.
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div id="cta10" className={`${layout.sectionImg} mx-24 px-24 relative`}>
        <img
          src={pharm}
          alt="mtn2"
          className=" block -mx-4 w-[100%]  h-[70%] "
        />
      </div>
    </section>
  );
};

export default ChilPharm;
