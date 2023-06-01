import { layout } from "../style";
import vision from "../images/vision.png";

const Vision = () => (
  <section className="flex md:flex-row flex-col sm:py-16 py-6 sm:mt-[100px]">
    <div className={` relative ${layout.sectionImgReverse}`}>
      <img
        src={vision}
        alt="codeit"
        className="md:p-0 p-2 md:w-[559px] w-[371.34px] md:h-[478px] h-[238px]"
      />
    </div>
    <div className={layout.sectionInfo}>
      <h2
        className={`font-Inter font-semibold xs:text-[16px] sm:mt-[-70px] text-[20px] text-black xs:leading-[30.8px] leading-[40.8px] w-full mb-4 ml-4`}
      >
        OUR <span className="text-primary">VISION</span> <br className="" />
        <span className="text-primary xs:text-[28px] mt-[10px]">
          Envisioning Tomorrow's Possibilities.{" "}
        </span>
      </h2>
      <div
        className={`font-inter font-normal text-background sm:text-[14px] text-[12px] leading-[25.8px]  mt-5 mb-6 `}
      >
        <ul className="">
          <li className="text-dark list-disc ml-10">
            Our vision is to be the most respected and trusted IT{" "}
            <p className="mb-2"></p> professional services firm recognized by
            our clients for<p className="mb-2"></p> delivering excellence.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Vision;
