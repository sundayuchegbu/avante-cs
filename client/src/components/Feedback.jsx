import Ellipse1 from "../images/Ellipse1.png";
import Ellipse2 from "../images/Ellipse1.png";
import Ellipse3 from "../images/Ellipse3.png";

const Feedback = () => (
  <div className="md:flex justify-between   md:mx-24 mb-12">
    <div className="md:w-1/3 md:h-[274px] h-[190px] md:w-[350px] w-[329px] p-6 border-2 md:mb-4 mb-12 ml-8 border-primary  rounded-lg">
      <div className="flex items-center md:mb-4 ">
        <div className="h-10 w-10 rounded-full bg-gray-400 -mx-[40px] mt-[-4rem] mr-24">
          <img src={Ellipse1} alt="microsoft" />
        </div>
      </div>
      <h2 className="ml-4  md:text-[18px] text-[16px]  mb-4 font-inter font-semibold">
        Business Consulting
      </h2>

      <p className="font-inter font-normal xs:text-[14px] leading-[25.8px] text-[12px] ml-4">
        We are a leading business and technology consulting organisation, with a
        very strong focus on Customer Experience, Knowledge Management, Loyalty
        and Ticketing solutions.{" "}
      </p>
    </div>

    <div className="md:w-1/3 md:h-[274px] h-[190px] md:w-[350px] w-[329px] p-6 border-2 md:mb-4 mb-12 ml-8 border-primary  rounded-lg">
      <div className="flex items-center mb-4 ">
        <div className="h-10 w-10 rounded-full bg-gray-400 -mx-[40px] mt-[-4rem] mr-24">
          <img src={Ellipse2} alt="microsoft" />
        </div>
      </div>
      <h2 className="ml-4 md:text-[18px] text-[16px] text-black2 mb-4 font-inter font-semibold">
        Technology Services
      </h2>

      <p className="font-inter font-normal xs:text-[14px] leading-[25.8px] text-black2 text-[12px] ml-4">
        We are committed to growing our business through embracing technology,
        developing strong partnerships and by placing the emphasis on providing
        high levels of customer satisfaction.{" "}
      </p>
    </div>

    <div className="md:w-1/3 md:h-[274px] h-[190px] md:w-[350px] w-[329px] p-6 border-2 md:mb-4 mb-12 ml-8 border-primary  rounded-lg">
      <div className="flex items-center mb-4 ">
        <div className="h-10 w-10 rounded-full bg-gray-400 -mx-[40px] mt-[-4rem] mr-24">
          <img src={Ellipse3} alt="microsoft" />
        </div>
      </div>
      <h2 className="ml-4 md:text-[18px] text-black2 text-[16px] mb-4 font-inter font-semibold">
        Solutions
      </h2>

      <p className="font-inter font-normal text-black2 leading-[25.8px] xs:text-[14px] text-[12px] ml-4">
        In the role of a trusted advisor, Avante consistently delivers solutions
        that are measurable, implementable and customized to your requirements.
      </p>
    </div>
  </div>
);

export default Feedback;
