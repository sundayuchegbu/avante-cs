import { layout } from "../style";
import jwt from "../images/jwt.png";
import { Link } from "react-router-dom";
const Jwt = () => {
  return (
    <section className={` mt-[-150px] ${layout.sectionReverse}`}>
      <div id="cta9" className={` relative   ${layout.sectionImgReverse1} `}>
        <img src={jwt} alt="jwt" className="block h-[428.8px]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[10px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-2  mt-[150px]`}
        >
          JWT <br className="sm:block hidden " />
          <span className="text-primary ">LASTVEB up-skilling youth.</span>
        </h2>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
        >
          JWT is the world\'s best known marketing and Communications brand. In
          Nigeria the company operates as LTC-JWT. As a result of an initiative
          to make client services more efficient, JWT engaged Avante to provide
          Project Management training to 40 members of staff. The course was
          based on University of Surrey\'s School of Management curriculum on
          professional development and current JWT projects. This resulted in
          reduced delivery timelines and costs savings for the company.{" "}
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

export default Jwt;
