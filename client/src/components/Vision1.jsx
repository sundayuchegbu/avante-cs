import { layout } from "../style";
import vision1 from "../images/vision1.png";
const Vision1 = () => (
  <section className="flex md:flex-row flex-col-reverse sm:py-16 py-6 md:ml-24">
    <div className={`mx-12 ${layout.sectionInfo}`}>
      <h2
        className={`font-Inter font-semibold xs:text-[16px] md:mt-[10px] mt-[20px] text-[16px] text-black   w-full mb-4 `}
      >
        OUR <span className="text-primary">MISSION</span>
      </h2>
      <h1
        className={`font-Inter font-semibold xs:text-[28px] md:mt-[2px] text-[20px] text-black  w-full mb-4 text-primary `}
      >
        Lorem Ipsum consectetur.{" "}
      </h1>
      <div
        className={`font-Inter font-normal text-background md:text-[18px] text-[12px] md:leading-[30.8px] leading-[20.8px] max-w-[470px] md:mt-0 mt-5 mb-6`}
      >
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
    </div>
    <div className={`${layout.sectionImg} md:mx-24 md:px-24 relative`}>
      <img
        src={vision1}
        alt="card"
        className="  md:w-[561px] w-[371.34px]  md:h-[567px] h-[238px] "
      />
      <div className="absolute md:bottom-[24px] bottom-[0%] md:top-[25px] top-[12%] left-1/2 right-[0%] w-4 bg-background"></div>
      <div className="absolute bottom-0 md:top-[20px] top-[-1%] left-1/2 md:right-[13.8%] right-[2.8%] md:h-[13%] h-[16%] bg-background"></div>
      <div className="absolute md:bottom-[20px] bottom-0 md:top-[82%] top-[75%] md:left-[13.9%] left-[3.4%] right-1/2 h-18 bg-background"></div>
    </div>
  </section>
);

export default Vision1;
