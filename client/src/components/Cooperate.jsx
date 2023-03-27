import styles, { layout } from "../style";
import solution from "../images/solution.png";
const Cooperate = () => (
  <section className={layout.sectionReverse}>
    <div className={` relative ${layout.sectionImgReverse}`}>
      <img src={solution} alt="codeit" className="block " />
      <div className="absolute bottom-0 top-0 lg:left-1/2 right-0 w-4 bg-background"></div>
      <div className="absolute bottom-0 top-0 lg:left-1/2 lg:right-12 h-16 bg-background"></div>
      <div className="absolute bottom-0 lg:top-[503px] left-0 lg:right-1/2 h-16 bg-background"></div>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading3} mb-4 `}>
        CORPORATE <span className="text-secondary">PROFILE</span>{" "}
        <br className="sm:block hidden" />
        <span className="text-secondary">Consulting for transformation</span>
        <br className="sm:block hidden" />
        <span className="text-secondary">
          through Business solution provision
        </span>
      </h2>
      <p className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
        Avante Consulting Solutions provides business and technology services
        and solutions to participants in the Financial Services, Public Sector,
        Telecommunications, Energy, Retail, Education and Consumer Goods
        industry. We introduce leading edge practices and offer business
        advisory, business and functional transformation and IT consulting to
        some of Nigeria’s leading organisations, governments and institutions.
        We leverage our deep industry insight and integrated breadth of
        capabilities to enable transformation for our clients and the industry.
      </p>
    </div>
  </section>
);

export default Cooperate;
