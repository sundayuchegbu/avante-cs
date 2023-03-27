import Caller from "../../components/Caller";
import Softcard from "../../components/Softcard";
import Softwarebanner from "../../components/Sofwarebanner";
import Testimonial from "../../components/Testimonial";
import Clients from "../../components/Clients";

const Software = () => {
  return (
    <div>
      <Softwarebanner />
      <Softcard />
      <Testimonial />
      <Clients />
      <Caller />
    </div>
  );
};

export default Software;
