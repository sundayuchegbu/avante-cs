import styles, { layout } from "../style";
import moloyalproduct from "../images/moloyalproduct.png";
import smallloyal from "../images/smallloyal.png";
import smallwhite from "../images/smallwhite.png";
import { Link } from "react-router-dom";
const ProductBanner = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div
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
                MoLoyal is a customer rewards program that incentivizes
                customers to make transactions in various industries by offering
                free airtime rewards. It also serves as a digital airtime retail
                and distribution platform with multiple payment options.
              </p>
            </div>
            <Link to="https://www.moloyal.com" target="_blank">
              <button className="bg-secondary text-white flex flex-start font-bold py-4 px-24 rounded">
                Request a demo
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" block md:hidden flex-col flex justify-center item-center bg-background mb-12">
        <img src={smallloyal} alt="smallloyal" />
        <div className="flex-start bg-background mt-12">
          <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-6 ">
            Mo{" "}
          </h1>
          <h1 className=" font-inter font-semibold flex ml-[50px] text-primary mt-[-23px]">
            LOYAL{" "}
          </h1>
          <p className="font-inter font-normal text-[12px] mt-12 ml-4 mr-4 leading-[30.8px]">
            MoLoyal is a customer rewards program that incentivizes customers to
            make transactions in various industries by offering free airtime
            rewards. It also serves as a digital airtime retail and distribution
            platform with multiple payment options.
          </p>
          <button className="flex  items-center text-white text-[12px] ml-4 mt-8 h-[46px] w-[192px] rounded-lg  bg-secondary ">
            <span className="mx-8 text-[12px] font-inter font-normal">
              Request a demo
            </span>
            <i className="fas fa-chevron-right">
              <img
                src={smallwhite}
                alt="smallwhite"
                className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
              />{" "}
            </i>
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default ProductBanner;
