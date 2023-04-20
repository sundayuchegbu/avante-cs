import styles from "../style";
import knowledge from "../images/knowledge.png";
import base from "../images/base.png";
const EgainKnowledgeBanner = () => {
  return (
    <div className="relative">
      <div className="grid lg:grid-cols-2 gap-0 bg-primary ">
        <div className="relative">
          <img
            src={base}
            alt="base"
            className="w-full lg:h-[721px] object-cover "
          />
          <div className="absolute inset-0 bg-primary opacity-75"></div>
          <div className="absolute inset-0 flex items-center  justify-center">
            <div className="text-center items-center text-white px-4  ">
              <h1
                className={` font-Inter font-semibold xs:text-[40px] mt-[20px] text-[40px] text-white xs:leading-[60.8px] leading-[66.8px]   `}
              >
                Lorem ipsum dolor
                <br className="sm:block hidden " /> sit amet consectetur.
              </h1>
              <p className={`${styles.paragraph2} max-w-[336px]  mt-5   mb-8 `}>
                Lorem ipsum dolor sit amet consectetur. Proin vel orci tempor
                velit mattis tempor at nisiLorem ipsum dolor sit amet
                consectetur. Proin vel orci tempor velit mattis tempor at nisi.
              </p>
              <button className="bg-secondary font-inter text-white flex  lg:flex-center sm:items-center items-center font-bold py-2 px-8 mb-4 rounded">
                eGain Demo Chat{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full   relative ">
          <img
            src={knowledge}
            alt="banner"
            className="block w-[557.88px] h-[568.46px] mt-12  "
          />
          <div className="absolute top-[48px] bottom-0  left-[270px] -right-0 h-24 bg-primary"></div>
          <div className="absolute top-[530px] bottom-0  right-[490px] left-0 h-32 bg-primary"></div>
          <div className="absolute top-0 bottom-0 left-[270px] w-4 bg-primary"></div>
        </div>
      </div>
    </div>
  );
};

export default EgainKnowledgeBanner;
