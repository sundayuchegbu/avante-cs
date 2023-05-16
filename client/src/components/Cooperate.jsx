import styles, { layout } from "../style";
import solution from "../images/solution.png";
const Cooperate = () => (
  <section className={`flex md:flex-row flex-col sm:py-16 py-6 px-4`}>
    <div className={` relative ${layout.sectionImgReverse}`}>
      <div className="flex">
        <ul className=" md:mr-24 mr-4  md:mt-[200px] mt-[110px]">
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
          src={solution}
          alt="codeit"
          className="block md:w-[561px] w-[336.6px] md:h-[567px] h-[238px] "
        />
      </div>
      <div className="absolute md:bottom-[0px] bottom-[0px] md:top-[0px] top-[0px] md:left-[58%] left-[50%] right-0 w-4 bg-background"></div>
      <div className="absolute md:bottom-0 bottom-[180px]  md:top-[0px] top-[0px] md:left-[420px] left-[50%] md:right-[25px] right-[3px] md:h-[15%] bg-background"></div>
      <div className="absolute bottom-0 md:top-[482px] top-[180px] md:left-[137px] left-[26px] md:right-[300px] right-[183px] md:h-[15%] bg-background"></div>
    </div>
    <div className={layout.sectionInfo}>
      <h2
        className={`font-Inter font-semibold xs:text-[16px] mt-[20px] text-[16px] text-black xs:leading-[60.8px] leading-[66.8px] w-full  `}
      >
        CORPORATE <span className="text-secondary ">PROFILE</span> <br />
      </h2>
      <h3 className="text-secondary font-Inter font-semibold xs:text-[28px] mt-[10px] text-[20px] text-black xs:leading-[40.8px] leading-[30.8px] w-full">
        {" "}
        Consulting for transformation <br />
        through Business solution provision
      </h3>
      <p className={`${styles.paragraph3} max-w-[470px] mt-4 mb-6`}>
        Avante Consulting Solutions provides business and technology services
        and solutions to participants in the Financial Services, Public Sector,
        Telecommunications, Energy, Retail, Education and Consumer Goods
        industry. We introduce leading edge practices and offer business
        advisory, business and functional transformation and IT consulting to
        some of Nigeria’s leading organisations, governments and institutions.
        We leverage our deep industry insight and integrated breadth of
        capabilities to enable transformation for our clients and the industry.
      </p>
    </div>
  </section>
);

export default Cooperate;
