import styles, { layout } from "../style";
import consulting from "../images/consulting.png";

const BusinessConsulting = () => {
  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={consulting} alt="codeit" />
        <div className="absolute bottom-0 top-0 left-2/3 right-0 w-4 bg-background"></div>
        <div className="absolute bottom-0 top-0 left-1/3 right-0 w-4 bg-background"></div>
        <div className="absolute bottom-0 top-[221px] left-2/3 right-12 h-12 bg-background"></div>
        <div className="absolute bottom-0 top-[600px] left-2/3 right-12 h-4 bg-background"></div>
        <div className="absolute bottom-0 top-[680px] right-2/3 left-12 h-15 bg-background"></div>
        <div className="absolute bottom-0 top-[450px] right-2/3 left-12 h-4 bg-background"></div>
        <div className="absolute bottom-0 top-[680px] right-1/3 left-12 h-4 bg-background"></div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading3} mb-4 `}>
          BUSINESS <span className="text-primary">CONSULTING</span>{" "}
          <br className="sm:block hidden" />
          <span className="text-primary">Lorem Ipsum consectetur.</span>
        </h2>
        <div
          className={`${styles.paragraph} max-w-[470px] sm:p-auto mt-5 mb-6`}
        >
          <p className="text-dark list-disc leading-24">
            Avante Consulting provides implementation solutions for our
            customers from pre-sales assistance through to “go-live” events.
            These solutions are based on a proven implementation methodologies
            developed over the years and are continually enhanced to address new
            technology developments and evolving market-driven business needs.
            Our comprehensive implementation team includes dedicated
            professionals who are experienced project managers, business
            analysts, developers, technologists and trainers with in-depth
            industry-specific business expertise. Our implementation support
            services include, but are not limited to:
          </p>
          <ul className="text-dark list-disc ml-12">
            <li>
              Complete product implementations, encompassing all implementation
              phases from project definition to the final production “go-live”.
            </li>
            <li>
              {" "}
              Business and functional design, gap analysis, and transition
              planning
            </li>
            <li>Development, testing and deployment</li>
            <li>System upgrades and regression testing services</li>
            <li>
              Assistance in deploying add-on modules and new business solutions
            </li>
            <li>Functional and technical operational support.</li>
          </ul>
          <p className="text-dark list-disc mt-2">
            Our professionals share a vision and are selected based on quality,
            like-mindedness, and commitment to client service. Outstanding
            client service continues to be our top priority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessConsulting;
