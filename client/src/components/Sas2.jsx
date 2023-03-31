import styles, { layout } from "../style";
import rec from "../images/rec.png";
import rec1 from "../images/rec1.png";

const Sas2 = () => {
  return (
    <section className={layout.section}>
      <div className={` mx-24 ${layout.sectionInfo}`}>
        <img src={rec1} alt="rec" className="block mb-8" />
        <img src={rec} alt="rec" className="block" />
      </div>
      <div className={`${layout.sectionInfo} px-6`}>
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
          <ul className="text-dark list-disc">
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
