import styles, { layout } from "../style";
import codeit from "../images/codeit.png";
import { useNavigate } from "react-router-dom";

const Codeit = () => {
  const navigate = useNavigate();
  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <ul className="mt-[400px] mx-12 ">
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 checked:bg-secondary text-red-500 focus:ring-red-500 disabled:bg-secondary"
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

        <img src={codeit} alt="codeit" className="" />
        <div className="absolute top-[100px] bottom-0  left-[420px] right-[67px] h-14 bg-background"></div>
        <div className="absolute top-[420px] bottom-0  left-[420px] right-[67px] h-4 bg-background"></div>
        <div className="absolute top-[580px] bottom-0  right-[440px] left-[93px] h-14 bg-background"></div>
        <div className="absolute top-[300px] bottom-0  right-[440px] left-[93px] h-4 bg-background"></div>
        <div className="absolute top-[100px] bottom-[100px] left-[236px] w-4 bg-background"></div>
        <div className="absolute top-[100px] bottom-[100px] left-[420px] w-4 bg-background"></div>
        <div className="absolute top-[564px] bottom-0 left-[252px] right-[255px]  h-4 bg-background"></div>

        <div className="">
          <ul className=" mx-12">
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 checked:bg-secondary text-red-500 focus:ring-red-500 disabled:bg-secondary"
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
        </div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading3} mb-4  `}>
          WHO WE ARE <br className="sm:block hidden" />
          <span className="text-primary ">
            Business & Technology Consulting
          </span>
        </h2>
        <div className={`${styles.paragraph} max-w-[470px]  mt-5 mb-6`}>
          <p className="text-dark list-disc ">
            We are a leading business and technology consulting organisation,
            with a very strong focus on Customer Experience, Knowledge
            Management, Loyalty and Ticketing solutions. We have our own
            research and development team who develop innovative business and
            mobile solutions. We also provide and support ATM security products
            to banks and financial institutions.
          </p>
        </div>
        <button
          className="bg-secondary text-white flex flex-start font-bold py-2 px-4 rounded"
          onClick={() => navigate("/services/consulting")}
        >
          Read more
        </button>
      </div>
    </section>
  );
};

export default Codeit;
