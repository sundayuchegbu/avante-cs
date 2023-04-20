import { layout } from "../style";

import vector1 from "../images/vector1.png";
import whitearrow from "../images/whitearrow.png";
import carbon from "../images/carbon.png";
import vector from "../images/vector.png";
import icon from "../images/icon.png";
import { useNavigate } from "react-router-dom";

export const Card = () => {
  const navigate = useNavigate();
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionInfo}>
        <div className="relative bg-cover bg-card w-[482px] h-[280px] mb-8 lg:mx-24 bg-center h-64">
          <div className="absolute bg-primary rounded-[50%] left-0 top-0 bottom-0 w-12 h-12 mt-16 -ml-4 flex items-center justify-center">
            <img src={vector1} alt="vector" className="h-8 w-8" />
          </div>
          <div className="relative z-10 p-6 mx-12">
            <h1 className="text-white text-2xl  font-bold">
              Business Consulting{" "}
            </h1>
            <p className="text-white   mt-4">
              Avante Consulting provides implementation solutions for our
              customers from pre-sales assistance through to “go-live” events.
              These solutions are based on a proven implementation methodologies
              developed over the years and are...
            </p>
            <button
              className="mt-4 text-[18px] text-white px-4 py-2 rounded-md"
              onClick={() => navigate("/services/consulting")}
            >
              Read more
            </button>
            <img
              src={whitearrow}
              alt="arrow"
              className="-mt-5 ml-[130px] h-[8px]   w-[50px]  mb-4 cursor-pointer"
              onClick={() => navigate("/services/consulting")}
            />{" "}
          </div>
        </div>

        <div className="relative bg-cover bg-card w-[482px] h-[267px] lg:mx-24  bg-center h-64">
          <div className="absolute bg-primary rounded-[50%] left-0 top-0 bottom-0 w-12 h-12 mt-16 -ml-4 flex items-center justify-center">
            <img src={carbon} alt="carbon" className="h-8 w-8" />
          </div>
          <div className="relative z-10 p-6 mx-12">
            <h1 className="text-white text-2xl  font-bold">SAS Analytics </h1>
            <p className="text-white   mt-4">
              Our partnership with eGain strengthens our commitment to the
              industry's most innovative omni-channel customer service and
              knowledge management solutions. Avante is the number one eGain
              partner in Nigeria based on successful...
            </p>
            <button
              className="mt-4 text-[18px]  text-white px-4  rounded-md"
              onClick={() => navigate("/services/sas")}
            >
              Read more
            </button>
            <img
              src={whitearrow}
              alt="arrow"
              className="-mt-4 ml-[130px] h-[8px]   w-[50px]  mb-4 cursor-pointer"
              onClick={() => navigate("/services/sas")}
            />{" "}
          </div>
        </div>
      </div>

      <div className={layout.sectionInfo}>
        <div className="mb-16 mx-24">
          <h1 className="mb-8  text-[18px] mx-24 ">
            OUR <span className="text-primary ">SERVICES</span>{" "}
          </h1>{" "}
          <h1 className="mb-8 font-semibold text-[24px] ">
            {" "}
            Lorem Ipsum consectetur.
          </h1>{" "}
        </div>
        <div className="relative bg-cover bg-card w-[482px] h-[267px] mb-8 bg-center h-64 ">
          <div className="absolute bg-primary  right-0 top-0 bottom-0  rounded-[50%] w-12 h-12 mt-16 -mr-4 flex items-center justify-center">
            <img src={vector} alt="vector" className="h-8 w-8" />
          </div>
          <div className="relative z-10 p-6 mx-16 ">
            <h1 className="text-white text-2xl font-bold">
              Software Development
            </h1>
            <p className="text-white mt-4">
              Avante is a software development company that specializes in
              e-commerce, mobile solutions, customer relationship management,
              and enterprise resourcemanagement. They have experience ...
            </p>
            <button
              className="mt-4 text-[18px]  text-white px-4  rounded-md"
              onClick={() => navigate("/services/software")}
            >
              Read more
            </button>
            <img
              src={whitearrow}
              alt="arrow"
              className="-mt-4 ml-[130px] h-[8px]   w-[50px]  mb-4 cursor-pointer"
              onClick={() => navigate("/services/software")}
            />{" "}
          </div>
        </div>
        <div className="relative bg-cover bg-card w-[482px] h-[267px] mb-8 bg-center h-64">
          <div className="absolute bg-primary  right-0 top-0 bottom-0  rounded-[50%] w-12 h-12 mt-16 -mr-4 flex items-center justify-center">
            <img src={icon} alt="vector" className="h-8 w-8" />
          </div>
          <div className="relative z-10 p-6 mx-16">
            <h1 className="text-white text-2xl font-bold">Web Development</h1>
            <p className="text-white mt-4">
              View our projects below to see a lists of our clients and how we
              have helped them to take their business to the next level.
            </p>
            <button
              className="mt-8 text-[18px]  text-white px-4  rounded-md"
              onClick={() => navigate("/services/web/development")}
            >
              Read more
            </button>
            <img
              src={whitearrow}
              alt="arrow"
              className="-mt-4 ml-[130px] h-[8px]   w-[50px]  mb-4 cursor-pointer"
              onClick={() => navigate("/services/web/development")}
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Card;
