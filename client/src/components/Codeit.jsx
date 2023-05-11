import { layout } from "../style";
import codeit from "../images/codeit.png";
import { Link } from "react-router-dom";

const Codeit = () => {
  return (
    <section className={`${layout.sectionReverse} md:mt-[10px] mt-[-400px] `}>
      <div className={layout.sectionImgReverse}>
        <div className="flex mt-24">
          <ul className="md:mt-[305px] mt-[100px] md:mx-12 mx-8 ">
            <li className="w-full border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2 ">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 w-2 h-2 checked:bg-secondary text-red-500 focus:ring-red-500 disabled:bg-secondary"
                checked
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey "
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
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
            src={codeit}
            alt="codeit"
            className=" relative md:w-[488.47px] w-[296.91] md:h-[535.1px] h-[215.13px] "
          />
          <div className="absolute md:top-[13.1%] md:left-[63%] md:right-[11.2%] md:h-[10%] bg-background"></div>
          <div className="absolute md:top-[60%] md:left-[63%] md:right-[11.4%] md:h-[2%] bg-background "></div>
          <div className="absolute md:top-[75.5%] md:right-[65%] md:left-[16.7%] md:h-[10%] bg-background "></div>
          <div className="absolute md:top-[45%] md:right-[65%] md:left-[16.7%] md:h-[2%] bg-background "></div>
          <div className="absolute md:bottom-[14.5%] md:top-[13.2%] md:left-[35%] md:w-[2%] bg-background "></div>
          <div className="absolute md:top-[13.4%] md:bottom-[14.5%] md:right-[36%] md:w-[2%] bg-background "></div>
          <div className="absolute md:top-[76%] md:left-[36.9%] md:right-[37.8%] md:h-[2%] bg-background "></div>

          <div>
            <ul className=" mx-12">
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="md:w-4 md:h-4 w-2 h-2 checked:bg-secondary text-red-500 focus:ring-red-500 disabled:bg-secondary"
                  checked
                  disabled
                />{" "}
              </li>
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                  disabled
                />{" "}
              </li>
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                  disabled
                />{" "}
              </li>
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                  disabled
                />{" "}
              </li>
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                  disabled
                />{" "}
              </li>
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
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
          </div>
        </div>
      </div>
      <div className={`${layout.sectionInfo} md:mt-[-180px] mt-[100px]`}>
        <h2
          className={`font-Inter font-semibold xs:text-[16px] mt-[20px] text-[16px] text-black xs:leading-[30.8px] leading-[40.8px] w-full   `}
        >
          WHO WE ARE <br className="sm:block  hidden" />
          <span className="text-primary text xs:text-[24px] text-[24px] font-normal font-inter block">
            Business & Technology Consulting
          </span>
        </h2>
        <div
          className={`font-Inter font-normal  text-background text-[15px] leading-[40.8px] max-w-[470px]  mt-5 mb-6`}
        >
          <p className="text-dark ">
            We are a leading business and technology consulting organisation,
            with a very strong focus on Customer Experience, Knowledge
            Management, Loyalty and Ticketing solutions. We have our own
            research and development team who develop innovative business and
            mobile solutions. We also provide and support ATM security products
            to banks and financial institutions.
          </p>
        </div>
        <Link to="/services/consulting">
          <button className="bg-secondary text-white flex flex-start font-normal font-inter py-2 px-4 rounded">
            Read more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Codeit;
