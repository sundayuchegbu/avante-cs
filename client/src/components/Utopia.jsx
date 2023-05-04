import styles, { layout } from "../style";
import utopia from "../images/utopia.png";
import { Link } from "react-router-dom";

const Utopia = () => {
  return (
    <section className={`mb-32 ${layout.section}`}>
      <div className={`mx-24 ${layout.sectionInfo}`}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[70px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-4 `}
        >
          UTOPIA MEDIA <br className="sm:block hidden" />
          <span className="text-primary">Water transport infrastructure</span>
        </h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
          A digitally wired media and communication agency that delivers digital
          solutions to clients. Through collaboration with Utopia Media, Avante
          Consulting have built an intelligent Network Infrastructure which will
          enable Utopia Media to achieve their goal of becoming the No. 1
          Digital Agency in Africa by 2018.
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div id="cta10" className={`${layout.sectionImg} mx-24 px-24 relative`}>
        <img
          src={utopia}
          alt="utopia"
          className=" block -mx-4 w-[100%]  h-[70%] "
        />
      </div>
    </section>
  );
};

export default Utopia;
