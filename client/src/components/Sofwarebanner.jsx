import styles, { layout } from "../style";
import softpix from "../images/softpix.png";
import { useNavigate } from "react-router-dom";
const Softwarebanner = () => {
  const navigate = useNavigate();
  return (
    <section id="ctas" className={` mb-8 ${layout.sectionReverse}`}>
      <div id="cta1" className={`${layout.sectionImgReverse}  `}>
        <img src={softpix} alt="sofware" />
      </div>
      <div className={` mx-24 ${layout.sectionInfo}`}>
        <h2 className={`${styles.heading3} mb-4 `}>
          SOFTWARE <br className="sm:block hidden" /> DEVELOPMENT
        </h2>
        <div
          className={`${styles.paragraph} max-w-[470px] sm:p-auto mt-5 mb-6`}
        >
          <p className="text-dark">
            Avante is a software development company that specializes in
            e-commerce, mobile solutions, customer relationship management, and
            enterprise resource management. They have experience building custom
            solutions for various industries and use technologies such as
            Service-oriented architecture (SOA) to improve productivity.
          </p>
        </div>
        <button
          className="bg-secondary text-white flex flex-start font-bold py-4 px-24 rounded"
          onClick={() => navigate("/contacts")}
        >
          Request a quote
        </button>
      </div>
    </section>
  );
};

export default Softwarebanner;
