import { layout } from "../style";
import vision1 from "../images/vision1.png";
const Vision1 = () => (
  <section className="flex md:flex-row flex-col-reverse sm:py-16 py-6 md:ml-24">
    <div className={`mx-12 ${layout.sectionInfo}`}>
      <h2
        className={`font-Inter font-semibold xs:text-[16px] md:mt-[10px] mt-[20px] text-[14px] text-black   w-full mb-4 `}
      >
        OUR <span className="text-primary">MISSION</span>
      </h2>
      <h1
        className={`font-Inter font-semibold xs:text-[28px] md:mt-[2px] text-[20px] text-black  w-full mb-4 text-primary `}
      >
        Delivering Excellence Together.{" "}
      </h1>
      <div
        className={`font-inter font-normal  sm:text-[16px] text-[12px] sm:leading-[25.8px] leading-[20.8px] max-w-[470px] md:mt-0 mt-5 mb-6`}
      >
        <ul className="text-dark list-disc font-inter font-normal">
          <li>
            Our mission statement is to contribute to the success of our clients
            by partnering with them to enhance their business processes and to
            create innovative solutions to their business challenges.
          </li>
          <p></p>
          <li className="mt-4 mt-6">
            We are committed to growing our business through embracing
            technology, developing strong partnerships and by placing the
            emphasis on providing high levels of customer satisfaction.
          </li>
          <p></p>
          <li className="mt-4">
            We strive for excellence and aim to exceed expectations. We work
            hard to achieve our goals and we encourage our staff to be
            ambitious. <p className="mb-2"></p>
            By ensuring we provide the right resources at the right time, we aim
            to maximise the client business potential. <p className="mb-2"></p>
            Retaining our competitive edge through innovation is central to the
            way we operate and we are always looking at ways to improve our
            business processes and services.
          </li>
        </ul>
      </div>
    </div>
    <div className={`${layout.sectionImg} md:mx-24 md:px-24 relative`}>
      <img
        src={vision1}
        alt="vision"
        className="  md:w-[561px] w-[371.34px]  md:h-[567px] h-[238px] "
      />
    </div>
  </section>
);

export default Vision1;
