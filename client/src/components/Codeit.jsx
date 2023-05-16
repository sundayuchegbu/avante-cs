import { layout } from "../style";
import codeit2 from "../images/codeit2.png";
import codeit from "../images/codeit.png";
import { Link } from "react-router-dom";

const Codeit = () => {
  return (
    <section
      className={`flex md:flex-row flex-col sm:py-16 py-6 md:mt-[10px] mt-[-200px] `}
    >
      <div className={layout.sectionImgReverse}>
        <div className="flex mt-24">
          <ul className="md:mt-[305px] mt-[90px] md:mx-12 px-4 ">
            <li className="w-full border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2 ">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 checked:bg-secondary text-red-500 focus:ring-red-500 disabled:bg-secondary"
                checked
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-1">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-1">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-1">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey "
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-1">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-1">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
          </ul>

          <div className="hidden md:block">
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
          </div>
          <div className="block md:hidden">
            <img
              src={codeit2}
              alt="codeit2"
              className=" relative w-[296.91px] h-[215.13px]"
            />
            <div className="absolute top-[27%] left-[60.5%] right-[11%] h-[20%] bg-background"></div>
            <div className="absolute top-[64%] left-[60%] right-[11%] h-[5%] bg-background "></div>
            <div className="absolute top-[76.5%] right-[65%] left-[11%] h-[10%] bg-background "></div>
            <div className="absolute top-[55%] right-[65%] left-[11%] h-[4%] bg-background "></div>
            <div className="absolute bottom-[13.6%] top-[27.4%] left-[35%] w-[4%] bg-background "></div>
            <div className="absolute top-[27.5%] bottom-[13.5%] right-[39%] w-[4%] bg-background "></div>
            <div className="absolute top-[70%] left-[36.9%] right-[38.8%] h-[4%] bg-background "></div>
          </div>

          <div>
            <ul className=" md:mx-12 md:ml-0 px-4">
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="md:w-4 md:h-4 checked:bg-secondary text-red-500 focus:ring-red-500 disabled:bg-secondary"
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
                  className="md:w-4 md:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                  disabled
                />{" "}
              </li>
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="md:w-4 md:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                  disabled
                />{" "}
              </li>
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="md:w-4 md:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                  disabled
                />{" "}
              </li>
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="md:w-4 md:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                  disabled
                />{" "}
              </li>
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-2">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="md:w-4 md:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
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
