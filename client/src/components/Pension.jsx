import styles, { layout } from "../style";
import pension from "../images/pension.png";
import { Link } from "react-router-dom";
const Pension = () => {
  return (
    <section className={layout.section}>
      <div className={`mx-24 ${layout.sectionInfo}`}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[70px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-4 `}
        >
          STANBICIBTC PENSION <br className="sm:block hidden" />
          <span className="text-primary">LASTVEB up-skilling youth.</span>
        </h2>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
          StanbicIBTC Pension is the leading and largest private pension company
          in Nigeria. In order to service their large customer base efficiently
          and provide a better customer experience they engaged with Avante
          Consulting. Avante partnered with eGain to deliver a strong
          multichannel and knowledge management solution. This included the use
          of online chat to help increase web customer engagement and reduce
          customer effort. Coupled with email management to provide automation
          and increase efficiency. These channels are supported by a Knowledge
          Base which ensures the consistency and quality of information provided
          to customers.The results have shown much lower agent effort and
          customer effort required in carrying out a transaction.
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div id="cta10" className={`${layout.sectionImg} mx-24 px-24 relative`}>
        <img
          src={pension}
          alt="pension"
          className=" block -mx-4 w-[100%]  h-[70%] "
        />
      </div>
    </section>
  );
};

export default Pension;
