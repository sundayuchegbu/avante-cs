import styles, { layout } from "../style";
import values from "../images/values.png";

const Values = () => (
  <section className="flex md:flex-row flex-col sm:py-16 py-6">
    <div className={`p-4 relative ${layout.sectionImgReverse}`}>
      <img src={values} alt="codeit" className="block " />
      <div className="absolute md:bottom-[16px] bottom-[16px] md:top-[16px] top-[16px] left-1/2 right-0 w-4 bg-background"></div>
      <div className="absolute bottom-0  md:top-[16px] top-[16px] left-1/2 md:right-[98.4px] right-[16px] h-16 bg-background"></div>
      <div className="absolute bottom-0 md:top-[430px] top-[266px] md:left-[98px] left-[16px] md:right-1/2 right-[198px] h-16 bg-background"></div>
    </div>
    <div className={layout.sectionInfo}>
      <h2
        className={`text-black font-Inter font-semibold xs:text-[16px] md:mt-[-200px] mt-[10px]  text-[16px]  xs:leading-[60.8px] leading-[66.8px] w-full md:mb-0 mb-0 md:p-0 p-4`}
      >
        OUR <span className="text-primary">VALUES</span>{" "}
      </h2>
      <h2 className="text-primary font-Inter font-semibold xs:text-[28px] md:mt-[0px] mt-[-60px] text-[20px]  xs:leading-[60.8px] leading-[66.8px] w-full md:p-0 p-4">
        Lorem Ipsum consectetur.
      </h2>

      <p
        className={`${styles.paragraph3} max-w-[470px] md:mt-0 mt-0 md:mb-2 mb-0 md:p-0 p-4`}
      >
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
