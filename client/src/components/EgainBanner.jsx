import styles, { layout } from "../style";
import egainbanner from "../images/egainbanner.png";
import { Link } from "react-router-dom";
const EgainBanner = () => {
  return (
    <section id="ctas" className={` ${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}  relative`}>
        <img src={egainbanner} alt="egainbanner" />

        <div className="absolute top-[-2px] bottom-0  left-[480px] right-[90px] h-16 bg-bluebg"></div>
        <div className="absolute top-[340px] bottom-0  left-[480px] right-[90px] h-4 bg-bluebg"></div>
        <div className="absolute top-[508px] bottom-0  right-[481px] left-[92px] h-14 bg-bluebg"></div>
        <div className="absolute top-[250px] bottom-0  right-[481px] left-[90px] h-4 bg-bluebg"></div>
        <div className="absolute top-[0] bottom-0 left-[242px] w-4 bg-bluebg"></div>
        <div className="absolute top-[22px] bottom-[0px] left-[480px] w-4 bg-bluebg"></div>
        <div className="absolute top-[440px] bottom-0 left-[252px] right-[255px]  h-4 bg-bluebg"></div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading3} mb-4 `}>eGain Collaboration</h2>
        <div
          className={`${styles.paragraph} max-w-[470px] sm:p-auto mt-5 mb-6`}
        >
          <p className="text-dark">
            Our partnership with eGain strengthens our commitment to the
            industry's most innovative omni-channel customer service and
            knowledge management solutions. Avante is the number one eGain
            partner in Nigeria based on successful implementations in the
            finance and telecoms sectors. Some of eGain's features include:
          </p>
        </div>
        <Link to="/contacts">
          <button className="bg-secondary text-white flex flex-start font-bold py-4 px-24 rounded">
            eGain Demo Chat
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EgainBanner;
