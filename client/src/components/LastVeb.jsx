import React from "react";
import styles, { layout } from "../style";
import lastveb from "../images/lastveb.png";
import { Link } from "react-router-dom";

const LastVeb = () => {
  return (
    <section className={layout.section}>
      <div className={`mx-24 ${layout.sectionInfo}`}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[70px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-4 `}
        >
          LASTVEB <br className="sm:block hidden" />
          <span className="text-primary">LASTVEB up-skilling youth.</span>
        </h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
          Lagos State Technical and Vocational Education Board (LASTVEB) aims to
          be National Leader for jobs and self-empowerment by up-skilling and
          integrating young people into the labour market by providing them with
          high quality technical skills. Avante Consulting were able to assist
          LASTVEB with their goals for up-skilling young people by providing
          Software Engineering and Oracle Database Management training.
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div id="cta10" className={`${layout.sectionImg} mx-24 px-24 relative`}>
        <img
          src={lastveb}
          alt="nsip"
          className=" block -mx-4 w-[100%]  h-[70%] "
        />
      </div>
    </section>
  );
};

export default LastVeb;
