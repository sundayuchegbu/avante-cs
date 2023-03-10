import styles, { layout } from "../style";
import codeit from "../images/codeit.png";

const Codeit = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={codeit} alt="codeit" className=" z-[5]" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading3} mb-4 `}>
        ABOUT <span className="text-primary">US</span>{" "}
        <br className="sm:block hidden" />
        <span className="text-primary">Lorem Ipsum consectetur.</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-6`}>
        <ul className="text-dark list-disc">
          <li>Lorem ipsum dolor sit amet consectetur. Venenatis nulla</li>
          <li>quisque tincidunt nisi in nunc aenean. Fames semper in</li>
          <li>mattis fermentum vel purus dignissim adipiscing volutpat.</li>
        </ul>
      </p>
      <button className="bg-secondary text-white flex flex-start font-bold py-2 px-4 rounded">
        Read more
      </button>
    </div>
  </section>
);

export default Codeit;
