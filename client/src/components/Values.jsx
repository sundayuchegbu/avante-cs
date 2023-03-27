import styles, { layout } from "../style";
import values from "../images/values.png";

const Values = () => (
  <section className={layout.sectionReverse}>
    <div className={` relative ${layout.sectionImgReverse}`}>
      <img src={values} alt="codeit" className="block" />
      <div className="absolute bottom-0 top-0 left-1/2 right-0 w-4 bg-background"></div>
      <div className="absolute bottom-0 top-0 left-1/2 right-12 h-16 bg-background"></div>
      <div className="absolute bottom-0 top-[430px] left-0 right-1/2 h-16 bg-background"></div>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading3} mb-4 `}>
        OUR <span className="text-primary">VALUES</span>{" "}
        <br className="sm:block hidden" />
        <span className="text-primary">Lorem Ipsum consectetur.</span>
      </h2>
      <p className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6`}>
        Our values of honesty, integrity, commitment and delivery are important
        to us. As our business continues to grow we work hard to keep these
        values at the core of our operation. We are a company that values
        individuals and teamwork. We continually strive as a firm to make a
        positive and lasting impact.
      </p>
    </div>
  </section>
);

export default Values;
