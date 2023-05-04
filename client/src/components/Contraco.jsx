import styles, { layout } from "../style";
import contraco from "../images/contraco.png";
import { Link } from "react-router-dom";

const Contraco = () => {
  return (
    <section className={`mb-32 ${layout.section}`}>
      <div className={`mx-24 ${layout.sectionInfo}`}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[70px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-4 `}
        >
          CONTRACO LIMITED <br className="sm:block hidden" />
          <span className="text-primary">Water transport infrastructure</span>
        </h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
          Contraco Limited is a reputable and multifaceted Oil and Gas,
          shipping, and Logistics Company incorporated in 1986 with
          certification of incorporation number RC 53587. Contraco Limited
          provides a complete range of engineering design services to the Oil
          and Gas sector. Avante developed a website to help Contraco connect
          with clients and showcase their projects
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div id="cta10" className={`${layout.sectionImg} mx-24 px-24 relative`}>
        <img
          src={contraco}
          alt="mtn2"
          className=" block -mx-4 w-[100%]  h-[70%] "
        />
      </div>
    </section>
  );
};

export default Contraco;
