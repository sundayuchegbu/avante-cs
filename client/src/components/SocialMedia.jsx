import styles, { layout } from "../style";
import social from "../images/social.png";
import smallmedia from "../images/smallmedia.png";

const SocialMedia = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div className={layout.sectionReverse}>
          <div className={layout.sectionImgReverse}>
            <img src={social} alt="social" className="p-6" />
            <div className="absolute bottom-0 top-0 left-2/3 right-0 w-4 bg-background"></div>
            <div className="absolute bottom-0 top-0 left-1/3 right-0 w-4 bg-background"></div>
            <div className="absolute bottom-0 top-[450px] right-1/3 left-[250px] h-4 bg-background"></div>
            <div className="absolute bottom-0 top-[200px] right-[480px] left-[80px] h-4 bg-background"></div>
          </div>
          <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading3} mb-4 p-6`}>
              Social Media <br className="sm:block hidden" />
              Management <br className="sm:block hidden" />{" "}
              <span className="text-primary">(Falcon.io)</span>
            </h2>
            <div
              className={`${styles.paragraph3} max-w-[470px] sm:p-auto mt-5 mb-6 p-6`}
            >
              Falcon is a Unified Social Media Management Platform which allows
              marketing t eams manage all their social channels, contact and
              customer data with greater ease and impact. You will love the
              intuit interface, backed by our dedication to above and beyond
              support.
            </div>
          </div>
        </div>
      </div>
      <div className=" block md:hidden flex-col flex justify-center item-center bg-background mb-12">
        <img src={smallmedia} alt="smallemedia" />
        <div className="flex-start bg-background mt-12">
          <h1 className=" font-inter font-semibold flex ml-[20px] text-secondary mt-[-23px] mb-4">
            SOCIAL MEDIA MANAGEMENT{" "}
          </h1>
          <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 text-primary">
            (Falcon.io){" "}
          </h1>

          <p className="font-inter font-normal text-[12px] mt-12 ml-4 mr-4 leading-[30.8px]">
            Falcon is a Unifed Social Media Management Platform which allows
            marketing teams manage all their social channels, contact and
            customer data with greater ease and impact. You will love the intuit
            interface, backed by our dedication to above and beyond support.
          </p>
          <button className="flex  items-center text-white text-[14px] ml-4 mt-8 h-[46px] w-[247px] rounded-lg  bg-secondary ">
            <span className="mx-[60px] text-[14px] font-inter font-normal">
              eGain Demo Chat{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
