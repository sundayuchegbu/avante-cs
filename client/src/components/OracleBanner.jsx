import styles, { layout } from "../style";
import database from "../images/database.png";
const OracleBanner = () => {
  return (
    <section className={layout.section}>
      <div className={`mx-24 ${layout.sectionInfo}`}>
        <h2 className={`${styles.heading3} mb-4 `}>Oracle Database</h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
          Lorem ipsum dolor sit amet consectetur. Proin vel orci tempor velit
          mattis tempor at nisiLorem ipsum dolor sit amet consectetur. Proin vel
          orci tempor velit mattis tempor at nisi.
        </div>
        <button className="bg-secondary text-white flex flex-start font-bold py-2 px-4 rounded">
          Get started
        </button>
      </div>
      <div className={`${layout.sectionImg} lg:mx-24 lg:px-24  relative`}>
        <img src={database} alt="card" className=" block  w-[80%] h-[100%] " />
      </div>
    </section>
  );
};

export default OracleBanner;
