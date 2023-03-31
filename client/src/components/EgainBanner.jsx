import styles, { layout } from "../style";
import egainbanner from "../images/egainbanner.png";
const EgainBanner = () => {
  return (
    <section className={`bg-lightBlue ${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse} bg-lightBlue`}>
        <img src={egainbanner} alt="egainbanner" />
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
        <button className="bg-secondary text-white flex flex-start font-bold py-4 px-24 rounded">
          eGain Demo Chat
        </button>
      </div>
    </section>
  );
};

export default EgainBanner;
