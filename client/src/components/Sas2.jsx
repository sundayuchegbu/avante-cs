import styles, { layout } from "../style";
import rec from "../images/rec.png";
import rec1 from "../images/rec1.png";

const Sas2 = () => {
  return (
    <section className={` ${layout.section}`}>
      <div id="cta3" className={` mr-56 mt-[400px] ${layout.sectionInfo}`}>
        <ul className="relative ml-[100px] mt-[-900px]">
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
        <img src={rec1} alt="rec" className="mt-[300px] mr-[180px] " />
        <img src={rec} alt="rec" className=" mt-[730px] mr-[180px]" />
      </div>
      <div id="cta4" className={`${layout.sectionInfo} px-6 mt-0]`}>
        <h2 className={`${styles.heading3} mb-8 `}>
          SAS <span className="text-primary ">ANALYTICS</span>{" "}
          <br className="sm:block hidden " />
          <span className="text-primary text-[28px]">
            SAS Analytics SAS Partner, Solutions, Expertise.
          </span>
        </h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6 px-6`}>
          Avante is a silver partner of SAS and a solution partner within the
          Customer Intelligence practice. Avante has extensive experience in the
          design, development, implementation and support of various SAS
          solutions and products as well as working in customer life cycle
          environments. Our expertise in Customer Relationship Management and
          Knowledge Management business processes as well as implementation
          experience gives us a unique advantage in delivering end to end SAS
          Customer or Citizen Intelligence solutions. SAS Services we offer
          include the following;
          <ul className="text-dark list-disc ml-12">
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
          analysis to drive value from your business data. Our analysts possess
          world class quantitative analysis and interpretation skills that
          enable organisations gain a competitive advantage by making the right
          decisions based on data driven insight.
        </div>
      </div>
    </section>
  );
};

export default Sas2;
