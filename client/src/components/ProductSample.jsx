import React from "react";
import styles, { layout } from "../style";
import productimage1 from "../images/productimage1.png";
import productimage2 from "../images/productimage2.png";
import productimage3 from "../images/productimage3.png";
import arrow4 from "../images/arrow4.svg";
import { useNavigate } from "react-router-dom";

const ProductSample = () => {
  const navigate = useNavigate();
  return (
    <section id="cta" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2
          className={` underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 ${styles.heading5}`}
        >
          OUR <span className="text-primary">PRODUCT</span>{" "}
        </h2>
        <h3 className={styles.heading3}>MOLOYAL</h3>
        <h4 className="font-Inter font-semibold xs:text-[20px] mt-[5px] text-[24px] text-secondary xs:leading-[60.8px] leading-[66.8px] w-full">
          Free airtime rewards program.
        </h4>
        <p className={`${styles.paragraph3} max-w-[470px] mt-5 mb-5 `}>
          MoLoyal is also a digital airtime retail and distribution platform
          where airtime from all major networks will be electronically sold with
          flexible payment channels including Debit or Credit Cards, Reward
          Wallet, Mobile Money, Shortcodes and Bank deposits.
        </p>
        <button
          className="text-secondary"
          onClick={() => navigate("/products")}
        >
          Read more{" "}
        </button>
        <img
          src={arrow4}
          alt="arrow"
          className="-mt-4  ml-[100px] h-[20px]   w-[100px] top-[10px] mb-4"
        />{" "}
        <div className="flex">
          <ul className=" mx-12 ">
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="absolute w-4 h-4 checked:bg-primary text-blue-500 focus:ring-blue-500 disabled:bg-primary"
                checked
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey "
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
          </ul>
          <img
            src={productimage1}
            alt="productimage1"
            className="[w-400px] h-[400px]  mb-4"
          />
        </div>
      </div>
      <div id="cta6" className={`${layout.sectionInfo} mt-[400px] `}>
        <img src={productimage2} alt="product image" className="mt-[-600px]" />
        <img src={productimage3} alt="product image" className="mt-[-80px]" />
      </div>
    </section>
  );
};

export default ProductSample;
