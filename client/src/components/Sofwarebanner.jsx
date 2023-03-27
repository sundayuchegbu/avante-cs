import styles, { layout } from "../style";
import softpix from "../images/softpix.png";
const Softwarebanner = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={softpix} alt="sofware" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading3} mb-4 `}>
        SOFTWARE <br className="sm:block hidden" /> DEVELOPMENT
      </h2>
      <div className={`${styles.paragraph} max-w-[470px] sm:p-auto mt-5 mb-6`}>
        <p className="text-dark">
          Avante is a software development company that specializes in
          e-commerce, mobile solutions, customer relationship management, and
          enterprise resource management. They have experience building custom
          solutions for various industries and use technologies such as
          Service-oriented architecture (SOA) to improve productivity.
        </p>
      </div>
      <button className="bg-secondary text-white flex flex-start font-bold py-4 px-24 rounded">
        Read more
      </button>
    </div>
  </section>
);

export default Softwarebanner;
