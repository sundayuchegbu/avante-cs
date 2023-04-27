import access2 from "../images/access2.png";
import { layout } from "../style";
import { Link } from "react-router-dom";
const Access = () => {
  return (
    <section className={` mt-[-150px] ${layout.sectionReverse} mb-24`}>
      <div id="cta9" className={` relative   ${layout.sectionImgReverse1} `}>
        <img src={access2} alt="access2" className="block h-[428.8px]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[10px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-2  mt-[150px]`}
        >
          ACCESS BANK PLC <br className="sm:block hidden " />
          <span className="text-primary ">Water transport infrastructure</span>
        </h2>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
        >
          Access Bank is one of Nigeria’s leading banks with a very strong
          customer focus on customer service. They were looking for a true
          multichannel solution to support in executing their Digital strategy.
          2 years after implementation, analysis has shown that Chat and Mail
          interactions have increased by 400% and they have not increased
          staffing. This has led to huge cost savings through increased
          efficiency. They now use eGain to support both web and mobile
          including SMS. There has been a huge focus on building a knowledge
          management culture to support agents and customers this has been the
          main efficiency and quality drivers. Avante Consulting Solutions in
          partnership with eGain has driven and managed the digital strategy and
          transformation. We have seen a rise in first contact resolution, huge
          increase in customer adoption of digital communication as the
          preferred means of contact and better customer satisfaction numbers.
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

export default Access;
