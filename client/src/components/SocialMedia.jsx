import styles, { layout } from "../style";
import social from "../images/social.png";
import smallmedia from "../images/smallmedia.png";

const SocialMedia = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div className={layout.sectionReverse}>
          <div className={layout.sectionImgReverse}>
            <img
              src={social}
              alt="social"
              className="w-[572.04px] h-[551.26px]"
            />
          </div>
          <div className={layout.sectionInfo}>
            <h2
              className={`${styles.heading3} sm:-mt-8 mb-4 p-6 text-secondary`}
            >
              Harness the Power of Social <br className="sm:block hidden" />
              Media for Business Success <br className="sm:block hidden" />{" "}
            </h2>
            <div
              className={`font-inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] sm:p-auto sm:-mt-5 mb-6 p-6`}
            >
              In the ever-evolving world of social media, effectively managing
              your online presence is essential for staying ahead of the
              competition. At Avante Consulting, we specialize in providing
              comprehensive social media management services that are tailored
              to meet the unique needs of your business.
            </div>
          </div>
        </div>
      </div>
      <div className=" block md:hidden flex-col flex justify-center item-center bg-background mb-12">
        <img src={smallmedia} alt="smallemedia" />
        <div className="flex-start bg-background mt-12">
          <h1 className=" font-inter font-semibold flex ml-[20px] text-secondary mt-[-23px] mb-4">
            Harness the Power of Social Media for Business Success{" "}
          </h1>

          <p className="font-inter font-normal text-[12px] mt-12 ml-4 mr-4 leading-[30.8px]">
            In the ever-evolving world of social media, effectively managing
            your online presence is essential for staying ahead of the
            competition. At Avante Consulting, we specialize in providing
            comprehensive social media management services that are tailored to
            meet the unique needs of your business.
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
