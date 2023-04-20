import Ellipse1 from "../images/Ellipse1.png";
import Ellipse2 from "../images/Ellipse1.png";
import Ellipse3 from "../images/Ellipse3.png";

const Feedback = () => (
  <div className="lg:flex justify-between  mx-2 mb-8">
    <div className="lg:w-1/3 lg:h-[300px] lg:w-[350px] p-6 border-2 mb-4 mx-12 border-primary  rounded-lg">
      <div className="flex items-center mb-4 ">
        <div className="h-10 w-10 rounded-full bg-gray-400 -mx-[40px] mt-[-4rem] mr-24">
          <img src={Ellipse1} alt="microsoft" />
        </div>
      </div>
      <h2 className="ml-4 font-bold text-lg mb-8">Business Consulting</h2>

      <p className="text-gray-600">
        We are a leading business and technology consulting organisation, with a
        very strong focus on Customer Experience, Knowledge Management, Loyalty
        and Ticketing solutions.{" "}
      </p>
    </div>

    <div className="lg:w-1/3 lg:h-[300px] lg:w-[350px] p-6 border-2 mb-4 mx-12 border-primary  rounded-lg">
      <div className="flex items-center mb-4 ">
        <div className="h-10 w-10 rounded-full bg-gray-400 -mx-[40px] mt-[-4rem] mr-24">
          <img src={Ellipse2} alt="microsoft" />
        </div>
      </div>
      <h2 className="ml-4 font-bold text-lg mb-8">Technology Services</h2>

      <p className="text-gray-600">
        We are committed to growing our business through embracing technology,
        developing strong partnerships and by placing the emphasis on providing
        high levels of customer satisfaction.{" "}
      </p>
    </div>

    <div className="lg:w-1/3 lg:h-[300px] lg:w-[350px] p-6 border-2 mb-4 mx-12 border-primary  rounded-lg">
      <div className="flex items-center mb-4 ">
        <div className="h-10 w-10 rounded-full bg-gray-400 -mx-[40px] mt-[-4rem] mr-24">
          <img src={Ellipse3} alt="microsoft" />
        </div>
      </div>
      <h2 className="ml-4 font-bold text-lg mb-8">Solutions</h2>

      <p className="text-gray-600">
        In the role of a trusted advisor, Avante consistently delivers solutions
        that are measurable, implementable and customized to your requirements.
      </p>
    </div>
  </div>
);

export default Feedback;
