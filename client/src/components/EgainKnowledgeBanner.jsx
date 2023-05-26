import styles from "../style";
import knowledge from "../images/knowledge.png";
import smallknowledge from "../images/smallknowledge.png";
import { Link } from "react-router-dom";
const EgainKnowledgeBanner = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <div className="relative">
          <div
            id="ctas4"
            className="grid md:grid-cols-2 gap-0 bg-primary h-screen "
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary opacity-75"></div>
              <div className="absolute inset-0 flex items-center sm:p-4 pt-4 justify-center">
                <div className="text-white  max-w-[470px]  ">
                  <h1
                    className={` font-Inter font-semibold xs:text-[40px] mt-[20px] text-[40px] text-white xs:leading-[55.8px] leading-[66.8px]   `}
                  >
                    Lorem ipsum dolor
                    <br className="sm:block hidden " /> sit amet consectetur.
                  </h1>
                  <p
                    className={`${styles.paragraph2} max-w-[336px]  mt-5 leading-[25.8px]   mb-8 `}
                  >
                    Lorem ipsum dolor sit amet consectetur. Proin vel orci
                    tempor velit mattis tempor at nisiLorem ipsum dolor sit amet
                    consectetur. Proin vel orci tempor velit mattis tempor at
                    nisi.
                  </p>
                  <Link to="/contacts">
                    {" "}
                    <button className="bg-secondary font-inter text-white flex  md:flex-center sm:items-center items-center font-bold py-2 px-8 mb-4 rounded">
                      eGain Demo Chat{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full   relative ">
              <img
                src={knowledge}
                alt="banner"
                className="block w-[561px] h-[567px] mt-12  "
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" block md:hidden flex-col flex justify-center item-center bg-background mb-12">
        <img src={smallknowledge} alt="smallknowledge" />
        <div className="flex-start bg-background mt-12">
          <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 ">
            EGAIN
          </h1>
          <h1 className=" font-inter font-semibold flex ml-[70px] text-primary mt-[-23px]">
            KNOWLEDGE
          </h1>
          <p className="font-inter font-normal text-[12px] mt-12 ml-4 mr-4 leading-[25.8px]">
            eGain offers two software solutions - KnowledgeAgent for empowering
            customer service agents with accurate answers and eGain SelfService
            for providing productive self-service experiences with seamless
            escalations to live agents when needed.
          </p>
          <Link to="/contacts">
            <button className="flex  items-center text-white text-[14px] ml-4 mt-8 h-[46px] w-[247px] rounded-lg  bg-secondary ">
              <span className="mx-[60px] text-[14px] font-inter font-normal">
                eGain Demo Chat{" "}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EgainKnowledgeBanner;
