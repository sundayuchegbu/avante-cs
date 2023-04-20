import styles, { layout } from "../style";
import bup from "../images/bup.png";
import bdown from "../images/bdown.png";
const Oracle2 = () => {
  return (
    <section className={layout.section}>
      <div className={` mx-24 ${layout.sectionInfo}`}>
        <img src={bup} alt="rec" className="block mb-8" />
        <img src={bdown} alt="rec" className="block" />
      </div>
      <div className={`${layout.sectionInfo} px-6`}>
        <h2 className={`${styles.heading3} mb-8 `}>
          ORACLE <span className="text-primary ">DATABASE</span>{" "}
          <br className="sm:block hidden " />
          <span className="text-primary text-[28px]">
            Lorem Ipsum consectetur.{" "}
          </span>
        </h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6 px-6`}>
          Avante is a silver partner of SAS and a solution partner within the
          Customer Intelligence practice. Our Oracle Consultancy Practice is
          focused on helping organisations optimize and modernize their Oracle
          environments. We offer implementation expertise as well as on-going
          support services tailored to meet your needs. Our qualified
          consultants, highly skilled DBAs and Oracle Solutions Architects have
          hands-on experience across the entire Oracle Database technology
          stack.
          <br className="sm:block hidden " />
          Our services include;
          <br className="sm:block hidden " />
          Our knowledge and expertise extends far beyond systems
          implementations, we also deliver:
          <ul className="text-dark list-disc mx-8">
            <li>
              Oracle Database Implementation (on-site, hybrid and in Oracle
              Cloud).
            </li>
            <li>Oracle Database Upgrades</li>
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
