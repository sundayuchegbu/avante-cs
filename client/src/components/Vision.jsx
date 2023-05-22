import { layout } from "../style";
import vision from "../images/vision.png";

const Vision = () => (
  <section className="flex md:flex-row flex-col sm:py-16 py-6 ">
    <div className={` relative ${layout.sectionImgReverse}`}>
      <img
        src={vision}
        alt="codeit"
        className="md:p-0 p-2 md:w-[559px] w-[371.34px] md:h-[478px] h-[238px]"
      />
      {/* <div className="absolute bottom-0 md:top-0 top-[2%] left-1/2 right-0 w-4 bg-background"></div> */}
      {/* <div className="absolute bottom-0 md:top-[0%] top-[2%] md:left-[12.1%] left-[1.9%] md:right-[50%] right-[50%] h-[15%] bg-background"></div> */}
      {/* <div className="absolute bottom-0 md:top-[85%] top[100%] md:left-1/2 left-[53%] md:right-[12.2%] right-[2%] h-[15%] bg-background"></div> */}
    </div>
    <div className={layout.sectionInfo}>
      <h2
        className={`font-Inter font-semibold xs:text-[40px] mt-[20px] text-[20px] text-black xs:leading-[60.8px] leading-[40.8px] w-full mb-4 ml-4`}
      >
        OUR <span className="text-primary">VISION</span> <br className="" />
        <span className="text-primary">Lorem Ipsum consectetur.</span>
      </h2>
      <div
        className={`font-Inter font-normal text-background md:text-[14px] text-[12px] leading-[30.8px] max-w-[470px] mt-5 mb-6 `}
      >
        <p className="text-dark list-disc ml-4">
          Our vision is to be the most respected and trusted IT professional
          services firm recognized by our clients for delivering excellence.
        </p>
      </div>
    </div>
  </section>
);

export default Vision;
