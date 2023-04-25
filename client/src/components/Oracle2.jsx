import styles, { layout } from "../style";
import bup from "../images/bup.png";
import bdown from "../images/bdown.png";
const Oracle2 = () => {
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
        <img src={bup} alt="bup" className="mt-[300px] mr-[180px] " />
        <img src={bdown} alt="bdown" className=" mt-[730px] mr-[180px]" />
      </div>
      <div id="cta4" className={`${layout.sectionInfo} px-6 mt-0]`}>
        <h2 className={`${styles.heading3} mb-8 `}>
          ORACLE <span className="text-primary ">DATABASE</span>{" "}
          <br className="sm:block hidden " />
          <span className="text-primary text-[28px]">
            Lorem Ipsum consectetur.{" "}
          </span>
        </h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6 `}>
          Avante is a silver partner of SAS and a solution partner within the
          Customer Intelligence practice. Our Oracle Consultancy Practice is
          focused on helping organisations optimize and modernize their Oracle
          environments. We offer implementation expertise as well as on-going
          support services tailored to meet your needs. Our qualified
          consultants, highly skilled DBAs and Oracle Solutions Architects have
          hands-on experience across the entire Oracle Database technology
          stack.
          <p>Our services include;</p>
          <p>
            Our knowledge and expertise extends far beyond systems
            implementations, we also deliver:
          </p>
          <ul className="text-dark list-disc ml-8">
            <li>
              Oracle Database Implementation (on-site, hybrid and in Oracle
              Cloud).
            </li>
            <li>Oracle Database Upgrades </li>
            <li>Oracle Cloud Migrations</li>
            <li>Oracle Database Performance Tuning</li>
            <li>Oracle health checks</li>
            <li>Application benchmarking</li>
            <li>Change management and documentation</li>
            <li>Oracle Database hosting</li>
            <li>Automated and manual Oracle patching</li>
            <li>Oracle DBA support</li>
            <li>
              Database Backup and Disaster Recovery Security and Patch
              Management
            </li>
            <li>Oracle Real Application Cluster and High Availability.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Oracle2;
