import styles, { layout } from "../style";
import vision1 from "../images/vision1.png";
const Vision1 = () => (
  <section className={layout.section}>
    <div className={`mx-24 ${layout.sectionInfo}`}>
      <h2 className={`${styles.heading3} mb-4 `}>
        OUR <span className="text-primary">MISSION</span>{" "}
        <br className="sm:block hidden" />
        <span className="text-primary">Lorem Ipsum consectetur.</span>
      </h2>
      <div className={`${styles.paragraph} max-w-[470px] mt-5 mb-6`}>
        <ul className="text-dark list-disc">
          <li>
            Our mission statement is to contribute to the success of our clients
            by partnering with them to enhance their business processes and to
            create innovative solutions to their business challenges.
          </li>
          <li>
            We are committed to growing our business through embracing
            technology, developing strong partnerships and by placing the
            emphasis on providing high levels of customer satisfaction.
          </li>
          <li>
            We strive for excellence and aim to exceed expectations. We work
            hard to achieve our goals and we encourage our staff to be
            ambitious. By ensuring we provide the right resources at the right
            time, we aim to maximise the client business potential. Retaining
            our competitive edge through innovation is central to the way we
            operate and we are always looking at ways to improve our business
            processes and services.
          </li>
        </ul>
      </div>
      <button className="bg-secondary text-white flex flex-start font-bold py-2 px-4 rounded">
        Read more
      </button>
    </div>
    <div className={`${layout.sectionImg} mx-24 px-24 relative`}>
      <img
        src={vision1}
        alt="card"
        className=" block -mx-4 w-[100%]  h-[70%] "
      />
      <div className="absolute bottom-0 top-0 left-1/2 right-0 w-4 bg-background"></div>
      <div className="absolute bottom-0 top-24 left-1/2 right-16 h-12 bg-background"></div>
      <div className="absolute bottom-0 top-[560px] left-0 right-1/2 h-18 bg-background"></div>
    </div>
  </section>
);

export default Vision1;
