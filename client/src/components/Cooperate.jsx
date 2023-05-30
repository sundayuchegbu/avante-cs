import { layout } from "../style";
import solution from "../images/solution.png";
const Cooperate = () => (
  <section className={`flex md:flex-row flex-col sm:py-16 py-6 px-4`}>
    <div className={` relative ${layout.sectionImgReverse}`}>
      <div className="flex">
        <ul className=" md:mr-24 mr-4  md:mt-[200px] mt-[110px]">
          <li className=" w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-12 mb-2">
            <input
              id="list-radio-license17"
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
              id="list-radio-license18"
              type="radio"
              value=""
              name="list-radio"
              className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 dark:bg-grey"
              disabled
            />{" "}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-0">
            <input
              id="list-radio-license19"
              type="radio"
              value=""
              name="list-radio"
              className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
              disabled
            />{" "}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-0">
            <input
              id="list-radio-license20"
              type="radio"
              value=""
              name="list-radio"
              className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey "
              disabled
            />{" "}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-0">
            <input
              id="list-radio-license21"
              type="radio"
              value=""
              name="list-radio"
              className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
              disabled
            />{" "}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-0">
            <input
              id="list-radio-license22"
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
    </div>
    <div className={layout.sectionInfo}>
      <h2
        className={`font-inter font-semibold xs:text-[16px] mt-[20px] text-[16px] text-black xs:leading-[30.8px] leading-[66.8px] w-full  `}
      >
        CORPORATE <span className="text-secondary ">PROFILE</span> <br />
      </h2>
      <h3 className="text-secondary font-inter font-semibold xs:text-[16px] mt-[10px] text-[20px] text-black xs:leading-[30.8px] leading-[30.8px] w-full">
        {" "}
        Consulting for transformation <br />
        by providing Business Tools
      </h3>
      <p
        className={`font-inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-4 mb-6`}
      >
        Avante Consulting Solutions provides business and technology services
        and solutions to participants in the Financial Services, Public Sector,
        Telecommunications, Energy, Retail, Education and Consumer Goods
        industry.<p className="mb-2"></p> We introduce leading edge practices
        and offer business advisory, business and functional transformation and
        IT consulting to some of Nigeria’s leading organisations, governments
        and institutions.<p className="mb-2"></p> We leverage our deep industry
        insight and integrated breadth of capabilities to enable transformation
        for our clients and the industry.
      </p>
    </div>
  </section>
);

export default Cooperate;
