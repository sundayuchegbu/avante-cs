import { layout } from "../style";
import rec from "../images/rec.png";
import rec1 from "../images/rec1.png";

const Sas2 = () => {
  return (
    <section className={` ${layout.section}`}>
      <div id="cta3" className={` mr-[400px] mt-[400px] ${layout.sectionInfo}`}>
        <ul className="relative ml-[100px] mt-[-900px] hidden md:block">
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license51"
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
              id="list-radio-license52"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 dark:bg-grey"
              disabled
            />{" "}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license53"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
              disabled
            />{" "}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license54"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey "
              disabled
            />{" "}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license55"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
              disabled
            />{" "}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license56"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
              disabled
            />{" "}
          </li>
        </ul>
        <img
          src={rec1}
          alt="rec"
          className="mt-[300px] mr-[180px] md:block hidden "
        />
        <img
          src={rec}
          alt="rec"
          className=" mt-[730px] mr-[180px] md:block hidden"
        />
      </div>
      <div>
        <div
          id="cta4"
          className={`${layout.sectionInfo} px-6 md:mt-0 mt-[-430px] md:ml-[-40px]`}
        >
          <h2
            className={`font-inter font-semibold xs:text-[28px] mt-[20px] text-[16px] text-black sm:leading-[45.8px] leading-[30.8px] w-full mb-8 px-2`}
          >
            SAS <span className="text-primary ">ANALYTICS</span> <br />
            <span className="text-primary md:text-[28px] text-[20px]">
              SAS Partner, Solutions, Expertise.
            </span>
          </h2>
          <div
            className={`font-inter font-normal text-black2 md:text-[14px] text-[12px] leading-[25.8px] max-w-[470px] md:mt-5 mt-[-10px] mb-6 px-2`}
          >
            Avante is a silver partner of SAS and a solution partner within the
            Customer Intelligence practice. Avante has extensive experience in
            the design, development, implementation and support of various SAS
            solutions and products as well as working in customer life cycle
            environments. Our expertise in Customer Relationship Management and
            Knowledge Management business processes as well as implementation
            experience gives us a unique advantage in delivering end to end SAS
            Customer or Citizen Intelligence solutions. SAS Services we offer
            include the following;
            <ul className="text-dark list-disc ml-8">
              <li>Advanced Analytics</li>
              <li>Business Intelligence & Analytics</li>
              <li>Customer Intelligence</li>
              <li>Data Management</li>
              <li>Decision Management</li>
              <li>Fraud, AML & Security Intelligence</li>
              <li>Solutions for Hadoop</li>
              <li>Performance Management</li>
              <li>Personal Data Protection</li>
              <li>Risk Management</li>
              <li>Supply Chain Intelligence</li>
            </ul>
            Our consultants are positioned to add value throughout the Analytics
            lifecycle from Data Management to Analytics Discovery and Deployment
            using the appropriate tools for each client’s requirements, size and
            maturity level in the usage of data driven analytics. Avante has the
            ability to tailor specific data solutions allowing our experts to
            customize analytics according to your organisation's needs,
            irrespective of the industry. We use data management and advanced
            analysis to drive value from your business data. Our analysts
            possess world class quantitative analysis and interpretation skills
            that enable organisations gain a competitive advantage by making the
            right decisions based on data driven insight.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sas2;
