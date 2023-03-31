import styles, { layout } from "../style";
import hero from "../images/hero.png";

const Hero = () => {
  return (
    <section className={layout.section}>
      <div className={`mx-24 ${layout.sectionInfo}`}>
        <h2 className={`${styles.heading3} mb-4 `}>SAS Analytics</h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
          Avante is a silver partner of SAS and a solution partner within the
          Customer Intelligence practice. They have experience in delivering
          end-to-end SAS customer or citizen intelligence solutions, including
          customer relationship management and knowledge management business
          processes.
        </div>
        <button className="bg-secondary text-white flex flex-start font-bold py-2 px-4 rounded">
          Request a quote
        </button>
      </div>
      <div className={`${layout.sectionImg} lg:mx-24 lg:px-24  relative`}>
        <img src={hero} alt="card" className=" block  w-[80%] h-[100%] " />
      </div>
    </section>
  );
};

export default Hero;
