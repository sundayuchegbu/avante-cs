import styles, { layout } from "../style";
import { Link } from "react-router-dom";
import united from "../images/united.png";
const United = () => {
  return (
    <section className={layout.section}>
      <div className={`mx-24 ${layout.sectionInfo}`}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[70px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-4 `}
        >
          UNITED CAPITAL PLC <br className="sm:block hidden" />
          <span className="text-primary">LASTVEB up-skilling youth.</span>
        </h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
          United Capital Plc. is a leading African financial and investment
          services Group providing bespoke value-added services to its clients.
          United Capital play a strategic role in helping African governments
          and citizens (both individual and corporate) achieve their strategic
          objectives through their robust suite of financial and investment
          service offerings. Avante Consulting were engaged to carry out
          Vulnerability Assessment and Penetration testing on UBA Capital Plc’s
          Infoware and InvestNow.ng applications including its organization
          infrastructure so as to strengthen their organizations network and
          protect the sensitive information for their business ventures and
          their employees. The purpose of this engagement was to identify and
          prioritize the security vulnerabilities on the identified systems.
          Once weaknesses in their system were identified, the proposed fixes to
          address critical security risks and recommended timelines were
          documented. Implementation of the recommendations resulted in very
          secure online trading platforms.
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div id="cta10" className={`${layout.sectionImg} mx-24 px-24 relative`}>
        <img
          src={united}
          alt="nsip"
          className=" block -mx-4 w-[100%]  h-[70%] "
        />
      </div>
    </section>
  );
};

export default United;
