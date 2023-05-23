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
    <section id="cta" className="flex flex-row  sm:py-16 py-6">
      <div className="md:ml-24 flex-[1.5] flex justify-center items-start flex-col">
        <h2
          className={` underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] mb-8
          ${styles.heading5}`}
        >
          OUR <span className="text-primary">PRODUCT</span>{" "}
        </h2>
        <div className=" flex items-center justify-center    mb-4 hidden md:block">
          <h3 className=" font-inter font-normal md:text-[28px] text-[16px]  ">
            Lorem Ipsum consectefgghjj
            <br />
            Lorem Ipsum consectetur.
          </h3>{" "}
        </div>
        <div className=" items-center justify-center   visible md:invisible ">
          <h3 className=" font-inter font-normal md:text-[28px] text-[16px] w-auto ">
            Lorem Ipsum consectefgghjj Lorem Ipsum consectetur
          </h3>{" "}
        </div>
        <p
          className={`font-Inter font-normal text-black2 md:text-[14px] text-[12px] md:leading-[20.8px] leading-[20px] max-w-[470px] mt-5 mb-5 `}
        >
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
          className="-mt-4  ml-[100px] h-[20px]   w-[100px] top-[10px] mb-8"
        />{" "}
        <div className="flex ">
          <ul className=" mr-8 mt-0 mt-12">
            <li className=" w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-12 mb-2">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="absolute md:w-4 md:h-4 w-2 h-2 checked:bg-primary text-blue-500 focus:ring-blue-500 disabled:bg-primary"
                checked
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-0">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-0">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-0">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey "
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-0">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-0">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
          </ul>
          <img
            src={productimage1}
            alt="productimage1"
            className="md:[w-400px] md:h-[400px] w-[214px] h-[157px]  mb-4"
          />
        </div>
      </div>
      <div className={`${layout.sectionInfo} mt-[450px] `}>
        <img
          src={productimage2}
          alt="productimage2"
          className="md:w-[448px] md:h-[500px] w-[140.41px] h-[156.71px]  md:mt-[-200px] mt-[-340px] "
        />
        <img
          src={productimage3}
          alt="productimage3"
          className="md:mt-[10px] mt-[80px] md:[w-448px] md:h-[306px] "
        />
      </div>
    </section>
  );
};

export default ProductSample;
