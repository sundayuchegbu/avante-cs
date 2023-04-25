import { layout } from "../style";
import hero from "../images/hero.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="ctas2" className={`mb-32  h-[721px] ${layout.section}`}>
      <div className={`mx-32 ${layout.sectionInfo}`}>
        <h2
          className={`font-Inter font-semibold xs:text-[60px] mt-[20px] text-[40px] text-black xs:leading-[60.8px] leading-[66.8px] w-full mb-4 `}
        >
          SAS Analytics
        </h2>
        <div
          className={`font-Inter font-normal text-black2 text-[16px] leading-[20.8px] max-w-[470px] mt-5 mb-6`}
        >
          Avante is a silver partner of SAS and a solution partner within the
          Customer Intelligence practice. They have experience in delivering
          end-to-end SAS customer or citizen intelligence solutions, including
          customer relationship management and knowledge management business
          processes.
        </div>
        <button
          className="bg-secondary text-white flex flex-start font-bold py-2 px-12 rounded"
          onClick={() => navigate("/contacts")}
        >
          Request a quote
        </button>
      </div>
      <div
        id="cta2"
        className={`${layout.sectionImg} lg:mx-24 lg:px-24   relative`}
      >
        <img
          src={hero}
          alt="card"
          className=" mt-[20px] w-[471.19px] h-[518.48px]   "
        />
      </div>
    </section>
  );
};

export default Hero;
