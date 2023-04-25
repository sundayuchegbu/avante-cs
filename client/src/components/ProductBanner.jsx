import styles, { layout } from "../style";
import moloyalproduct from "../images/moloyalproduct.png";
import { Link } from "react-router-dom";
const ProductBanner = () => {
  return (
    <section
      id="ctas3"
      className={`bg-gradient-to-r from-blue-500 to-blue-400  ${layout.sectionReverse}`}
    >
      <div className={`  ${layout.sectionImgReverse1} h-[721px] mt-0   `}>
        <img src={moloyalproduct} alt="moloyalproduct" />
      </div>
      <div className={` ml-24 ${layout.sectionInfo}`}>
        <h2 className={`${styles.heading3} mb-4 `}>
          MO <span className="text-secondary"> LOYAL</span>
        </h2>
        <div
          className={`${styles.paragraph} max-w-[470px] sm:p-auto mt-5 mb-6`}
        >
          <p className="text-dark">
            MoLoyal is a customer rewards program that incentivizes customers to
            make transactions in various industries by offering free airtime
            rewards. It also serves as a digital airtime retail and distribution
            platform with multiple payment options.
          </p>
        </div>
        <Link to="https://www.moloyal.com" target="_blank">
          <button className="bg-secondary text-white flex flex-start font-bold py-4 px-24 rounded">
            Request a demo
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProductBanner;
