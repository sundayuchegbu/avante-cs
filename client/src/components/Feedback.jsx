import Ellipse1 from "../images/Ellipse1.png";
import Ellipse2 from "../images/Ellipse1.png";
import Ellipse3 from "../images/Ellipse3.png";

const Feedback = () => (
  <div className="lg:flex justify-between  mx-2 mb-8">
    <div className="lg:w-1/3 lg:h-[300px] lg:w-[350px] mb-4 mx-12   p-6 border-2 border-primary rounded-lg ">
      <div className="flex items-center   ">
        <div className="h-10 w-10  rounded-full   ">
          <img src={Ellipse1} alt="microsoft" />
        </div>
        <h2 className="ml-4 font-bold text-lg">Business Consulting</h2>
      </div>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dolor
        elit. Sed vel elit enim. Nullam et nibh in felis bibendum malesuada non
        a massa. Curabitur maximus ultricies ipsum at elementum. Ut nec ipsum
        tincidunt, efficitur mi eu, gravida dolor.{" "}
      </p>
    </div>

    <div className="lg:w-1/3 lg:h-[300px] lg:w-[350px] p-6 border-2 mb-4 mx-12 border-primary  rounded-lg">
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-full bg-gray-400">
          <img src={Ellipse2} alt="microsoft" />
        </div>
        <h2 className="ml-4 font-bold text-lg">Technology Services</h2>
      </div>
      <p className="text-gray-600">
        We are committed to growing our business through embracing technology,
        developing strong partnerships and by placing the emphasis on providing
        high levels of customer satisfaction.{" "}
      </p>
    </div>

    <div className="lg:w-1/3 lg:h-[300px] lg:w-[350px] p-6 border-2 mb-4 mx-12  border-primary rounded-lg">
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-full bg-gray-400">
          <img src={Ellipse3} alt="microsoft" />
        </div>
        <h2 className="ml-4 font-bold text-lg">Solutions</h2>
      </div>
      <p className="text-gray-600">
        In the role of a trusted advisor, Avante consistently delivers solutions
        that are measurable, implementable and customized to your requirements.
        We deliver innovative software solutions and managed service offerings
        to help our clients leverage technology and new sourcing models to
        optimize their businesses.{" "}
      </p>
    </div>
  </div>
);

export default Feedback;
