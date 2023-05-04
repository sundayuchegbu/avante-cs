import { layout } from "../style";
import funmobile from "../images/funmobile.png";
import { Link } from "react-router-dom";

const FunMobile = () => {
  return (
    <section className={` mt-[-150px] ${layout.sectionReverse}`}>
      <div id="cta9" className={` relative   ${layout.sectionImgReverse1} `}>
        <img src={funmobile} alt="funmobile" className="block h-[428.8px]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[10px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-2  mt-[150px]`}
        >
          FUNMOBILE <br className="sm:block hidden " />
          <span className="text-primary ">LASTVEB up-skilling youth.</span>
        </h2>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
        >
          An online company that provides mobile content such as ringtones,
          messaging solutions, flight booking services and Infosearch, an online
          business directory for customers. Avante Consulting implemented a
          Network Infrastructure that is robust and reliable. This is an
          essential requirement for FunMobile as they position themselves to be
          the top player in the mobile content market in West Africa.
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

export default FunMobile;
