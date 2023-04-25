import egainknowledge from "../images/egainknowledge.png";
import egainself from "../images/egainself.png";
const KnowledgeAndServices = () => {
  return (
    <div className="relative mb-24 mt-24 bg-background">
      <div className="mb-12 mt-8">
        <h1 className="  text-[32px] mb-8 text-primary mx-24">
          KnowledgeAgent and SelfService software solutions.
        </h1>
        <p className=" text-black text-[14px] min-w-[470px] p-4 lg:mx-24 w-[50%] ">
          eGain KnowledgeAgent is highly-rated knowledge management software
          that empowers customer service agents with knowledge, ensuring fast,
          consistent, and accurate answers to increase customer satisfaction.
          eGain SelfService allows organizations to offer productive and
          brand-aligned self-service experiences, with seamless, context-aware
          escalations to live customer service or sales agents."
        </p>
      </div>
      <div className="lg:flex mt-12 mb-8 bg-background ">
        <div className="lg:flex flex-col w-80 h-[400px] min-w-[470px] mx-auto border border-l mb-24 ">
          <div className="relative ">
            <img
              src={egainknowledge}
              alt="Card Image"
              className="h-[40%] w-full object-cover p-2"
            />
            <div className="absolute top-20 bottom-0 left-12 p-4 bg-none text-white">
              <h2 className="text-[18px] font-bold mb-2">
                eGain KnowledgeAgent™
              </h2>
            </div>
            <div className="h-[16px]  flex items-center py-24  ">
              <p className="text-gray-700 p-2 text-[14px]  mb-0">
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

        <div className="lg:flex flex-col w-80 h-[400px] min-w-[470px] mx-auto border border-l   ">
          <div className="relative ">
            <img
              src={egainself}
              alt="Card Image"
              className="h-[40%] w-full object-cover p-2"
            />
            <div className="absolute top-20 bottom-0 left-12 p-4 bg-none text-white">
              <h2 className="text-lg font-bold mb-2">eGain SelfService™</h2>
            </div>
            <div className="h-[16px]  flex items-center py-24   ">
              <p className="text-gray-700 p-2 text-[14px]  mb-0">
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
