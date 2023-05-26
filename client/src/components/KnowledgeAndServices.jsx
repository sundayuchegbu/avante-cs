import egainknowledge from "../images/egainknowledge.png";
import egainself from "../images/egainself.png";
const KnowledgeAndServices = () => {
  return (
    <div className="relative mb-8 mt-24 bg-background">
      <div className="mb-12 mt-8">
        <h1 className="font-inter font-normal  md:text-[28px] text-[20px] mb-8 text-primary md:mx-24 px-4">
          KnowledgeAgent and SelfService software solutions.
        </h1>
        <p className="font-inter font-normal  xs:text-[14px] leading-[25.8px] text-[12px] mb-8 text-black1 md:mx-24 px-4 md:w-[730px]">
          eGain KnowledgeAgent is highly-rated knowledge management software
          that empowers customer service agents with knowledge, ensuring fast,
          consistent, and accurate answers to increase customer satisfaction.
          eGain SelfService allows organizations to offer productive and
          brand-aligned self-service experiences, with seamless, context-aware
          escalations to live customer service or sales agents."
        </p>
      </div>
      <div className="md:flex mt-12 mb-8 bg-background ">
        <div className="md:flex flex-col  h-[400px] min-w-[470px] mx-auto border border-l mb-24 ">
          <div className="relative ">
            <img
              src={egainknowledge}
              alt="egainknowledge"
              className="sm:h-[153px] h-[131.42px] sm:w-[500px] w-[350px] object-cover p-2"
            />
            <div className="absolute md:top-20 top-16 bottom-0 left-12 p-4 bg-none text-white">
              <h2 className="text-[18px] font-inter font-semobold font-semibold md:mb-2">
                eGain KnowledgeAgent™
              </h2>
            </div>
            <div className="h-[16px]  flex items-center sm:pb-44 pb-32   sm:w-[543px] w-[366px] sm:h-[329px] h-[310px] ">
              <p className="font-inter font-normal leading-[25.8px] xs:text-[14px] text-[12px] text-black1 px-4  md:w-[500px] md:h-[114px] ">
                {" "}
                The top-rated knowledge management software, guarantees
                high-quality customer service by infusing your customer service
                agents with knowledge, making them as productive and educated as
                your best agents. It ensures fast, consistent and accurate
                answers to increase customer satisfaction by providing agents
                and other users a range of ways to get to information in the
                common knowledge base.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex flex-col  h-[400px] min-w-[470px] mx-auto border border-l   ">
          <div className="relative ">
            <img
              src={egainself}
              alt="egainself"
              className="md:h-[153px] h-[131.42px] md:w-[500px] w-[350px] object-cover p-2"
            />
            <div className="absolute md:top-20 top-16 bottom-0 left-12 p-4 bg-none text-white">
              <h2 className="text-[18px] font-inter font-semobold font-semibold md:mb-2">
                eGain SelfService™
              </h2>
            </div>
            <div className="h-[16px]  flex items-center  md:pb-44 pb-32   md:w-[543px] w-[366px] md:h-[329px] h-[310px]  ">
              <p className="font-inter font-normal  xs:text-[14px] leading-[25.8px] text-[12px] text-black1 px-4  mb-0">
                {" "}
                Enables organizations to provide distinctive, productive, and
                brand-aligned self-service experiences that enable breakthrough
                improvements in customer self-service effectiveness and
                adoption, while allowing seamless, context-aware escalations to
                live customer service or sales agents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeAndServices;
