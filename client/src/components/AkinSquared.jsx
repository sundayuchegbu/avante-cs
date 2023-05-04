import styles, { layout } from "../style";
import akinsqured from "../images/akinsqured.png";
import { Link } from "react-router-dom";

const AkinSquared = () => {
  return (
    <section className={`mb-32 ${layout.section}`}>
      <div className={`mx-24 ${layout.sectionInfo}`}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[70px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-4 `}
        >
          AKIN SQUARED <br className="sm:block hidden" />
          <span className="text-primary">Water transport infrastructure</span>
        </h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
          A production outfit that does both Photography and film. They have
          worked with some of the big cooperate bodies and individuals around
          Nigeria and abroad. To create the awareness for Akin Squared
          Productions, Avante developed a website which would be visually
          appealing to art critics, art lovers, players in the entertainment
          industry and the general public alike.{" "}
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div id="cta10" className={`${layout.sectionImg} mx-24 px-24 relative`}>
        <img
          src={akinsqured}
          alt="akinsqured"
          className=" block -mx-4 w-[100%]  h-[70%] "
        />
      </div>
    </section>
  );
};

export default AkinSquared;
