import { layout } from "../style";
import tanjarin from "../images/tanjarin.png";
import { Link } from "react-router-dom";
const Tanjarin = () => {
  return (
    <section className={` mt-[-150px] ${layout.sectionReverse}`}>
      <div id="cta9" className={` relative   ${layout.sectionImgReverse1} `}>
        <img src={tanjarin} alt="tanjarin" className="block h-[428.8px]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[10px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-2  mt-[150px]`}
        >
          TANGERINE
          <br className="sm:block hidden " />
          <span className="text-primary ">LASTVEB up-skilling youth.</span>
        </h2>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
        >
          Tanjarin.com is a news aggregation platform that pride itself on
          finding the most pertinent and important stories, videos, and every
          other kind of media. Concert tickets are also sold on the platform
          under the umbrella of their parent company Flytime entertainment.
          Avante was selected to build the state of the art entertainment
          platform and to be their technical support partner as they continue to
          grow into one of the biggest entertainment platforms in Nigeria.
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

export default Tanjarin;
