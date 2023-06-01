import { layout } from "../style";
import codeit2 from "../images/codeit2.png";
import codeit from "../images/codeit.png";
import { Link } from "react-router-dom";

const Codeit = () => {
  return (
    <section
      className={`flex sm:flex-row flex-col sm:py-16 py-6 sm:mt-[10px] mt-[-200px] `}
    >
      <div className={layout.sectionImgReverse}>
        <div className="flex mt-24">
          <ul className="sm:mt-[305px] sm:mr-8 mt-[90px]  px-4  ">
            <li className="w-full border-gray-200 rounded-t-lg dark:border-gray-600 sm:mb-8 mb-2 ">
              <input
                autoComplete="off"
                id="list-radio-license1"
                type="radio"
                value=""
                name="list-radio"
                className="sm:w-4 sm:h-4 checked:bg-secondary text-red-500 focus:ring-red-500 disabled:bg-secondary"
                checked
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 sm:mb-8 mb-1">
              <input
                autoComplete="off"
                id="list-radio-license2"
                type="radio"
                value=""
                name="list-radio"
                className="sm:w-4 sm:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 sm:mb-8 mb-1">
              <input
                autoComplete="off"
                id="list-radio-license3"
                type="radio"
                value=""
                name="list-radio"
                className="sm:w-4 sm:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 sm:mb-8 mb-1">
              <input
                autoComplete="off"
                id="list-radio-license4"
                type="radio"
                value=""
                name="list-radio"
                className="sm:w-4 sm:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey "
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 sm:mb-8 mb-1">
              <input
                autoComplete="off"
                id="list-radio-license5"
                type="radio"
                value=""
                name="list-radio"
                className="sm:w-4 sm:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full block hidden sm:block border-gray-200 rounded-t-lg dark:border-gray-600 sm:mb-8 mb-1">
              <input
                autoComplete="off"
                id="list-radio-license6"
                type="radio"
                value=""
                name="list-radio"
                className="sm:w-4 sm:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
          </ul>

          <div className="hidden sm:block">
            <img
              src={codeit}
              alt="codeit"
              className=" relative sm:w-[488.47px] w-[296.91] sm:h-[535.1px] h-[215.13px] "
            />
          </div>
          <div className="block sm:hidden">
            <img
              src={codeit2}
              alt="codeit2"
              className=" relative w-[296.91px] h-[215.13px]"
            />
          </div>

          <div>
            <ul className=" sm:mx-12 sm:mr-4 -mr-4 px-4">
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 sm:mb-8 mb-2">
                <input
                  autoComplete="off"
                  id="list-radio-license21"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="sm:w-4 sm:h-4 checked:bg-secondary text-red-500 focus:ring-red-500 disabled:bg-secondary"
                  checked
                  disabled
                />{" "}
              </li>
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 sm:mb-8 mb-2">
                <input
                  autoComplete="off"
                  id="list-radio-license22"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="sm:w-4 sm:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                  disabled
                />{" "}
              </li>
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 sm:mb-8 mb-2">
                <input
                  autoComplete="off"
                  id="list-radio-license23"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="sm:w-4 sm:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                  disabled
                />{" "}
              </li>
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 sm:mb-8 mb-2">
                <input
                  autoComplete="off"
                  id="list-radio-license24"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="sm:w-4 sm:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                  disabled
                />{" "}
              </li>
              <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 sm:mb-8 mb-2">
                <input
                  autoComplete="off"
                  id="list-radio-license25"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="sm:w-4 sm:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                  disabled
                />{" "}
              </li>
              <li className="w-full hidden sm:block  border-gray-200 rounded-t-lg dark:border-gray-600 sm:mb-8 mb-2">
                <input
                  autoComplete="off"
                  id="list-radio-license26"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="sm:w-4 sm:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                  disabled
                />{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${layout.sectionInfo} sm:mt-[-180px] mt-[100px]`}>
        <h2
          className={`font-inter font-semibold xs:text-[16px] mt-[20px] text-[16px] text-black xs:leading-[40.8px] leading-[40.8px] w-full   `}
        >
          WHO WE ARE <br className="sm:block  hidden" />
          <span className="text-primary text xs:text-[28px] text-[24px] font-normal font-inter block">
            Business & Technology Consulting
          </span>
        </h2>
        <div
          className={`font-Inter font-normal  text-background text-[15px] leading-[25.8px] max-w-[470px]  mt-5 mb-6`}
        >
          <div className="text-dark ">
            We are a leading business and technology consulting organisation,
            with a very strong focus on Customer Experience, Knowledge
            Management, Loyalty and Ticketing solutions.
            <p />
            <br /> Our expert consultants leverage their industry knowledge and
            technological expertise to deliver strategic insights, optimize
            processes, and drive innovation.
          </div>
        </div>
        <Link to="/contacts">
          <button className="bg-secondary text-white flex flex-start font-normal font-inter py-2 px-4 rounded">
            Learn more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Codeit;
