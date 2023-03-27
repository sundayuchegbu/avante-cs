import styles, { layout } from "../style";
import vision from "../images/vision.png";

const Vision = () => (
  <section className={layout.sectionReverse}>
    <div className={` relative ${layout.sectionImgReverse}`}>
      <img src={vision} alt="codeit" className="block" />
      <div className="absolute bottom-0 top-0 left-1/2 right-0 w-4 bg-background"></div>
      <div className="absolute bottom-0 top-0 left-0 right-1/2 h-12 bg-background"></div>
      <div className="absolute bottom-0 top-[430px] left-1/2 right-12 h-12 bg-background"></div>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading3} mb-4 `}>
        OUR <span className="text-primary">VISION</span>{" "}
        <br className="sm:block hidden" />
        <span className="text-primary">Lorem Ipsum consectetur.</span>
      </h2>
      <div className={`${styles.paragraph} max-w-[470px] mt-5 mb-6`}>
        <ul className="text-dark list-disc">
          <li>Lorem ipsum dolor sit amet consectetur. Venenatis nulla</li>
          <li>quisque tincidunt nisi in nunc aenean. Fames semper in</li>
          <li>mattis fermentum vel purus dignissim adipiscing volutpat.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Vision;
