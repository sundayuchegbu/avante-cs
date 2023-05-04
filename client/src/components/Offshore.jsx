import { layout } from "../style";
import offshore1 from "../images/offshore1.png";
import { Link } from "react-router-dom";

const Offshore = () => {
  return (
    <section className={` mt-[-150px] ${layout.sectionReverse}`}>
      <div id="cta9" className={` relative   ${layout.sectionImgReverse1} `}>
        <img src={offshore1} alt="offshore1" className="block h-[428.8px]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[10px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-2  mt-[150px]`}
        >
          4H OFFSHORE <br className="sm:block hidden " />
          <span className="text-primary ">Campaign Management Automation</span>
        </h2>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
        >
          4H Offshore provides optimal, timely, and quality goods and services
          in a safe and environmentally friendly manner to the Oil and Gas,
          power, and petrochemical industries. The mission at 4H Offshore is to
          contribute to the development of the Nigerian Oil and Gas Industry
          with a view to enhancing the development of local skill and expertise
          within the industry in Nigeria while ensuring customer satisfaction
          and continual improvement on our processes and services. Avante was
          selected to build a website that helps 4H deliver it’s message to
          clients.
        </p>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Offshore;
