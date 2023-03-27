import microsoft from "../images/microsoft.png";
import egain from "../images/egain.png";
import oracle from "../images/oracle.png";
import sas from "../images/sas.png";
import { layout } from "../style";

const Cards2 = () => (
  <section id="product" className={layout.sectionReverse}>
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
      <div className="relative bg-cover bg-card w-[482px] h-[267px] mb-8 lg:mx-24 bg-center h-64">
        <div className="absolute bg-primary rounded-[50%] left-0 top-0 bottom-0 w-12 h-12 mt-16 -ml-4 flex items-center justify-center">
          <img src={microsoft} alt="vector" className="h-12 w-12" />
        </div>
        <div className="relative z-10 p-6 mx-12">
          <h1 className="text-white text-2xl  font-bold">eGain </h1>
          <p className="text-white   mt-4">
            Our partnership with eGain strengthens our commitment to the
            industry's most innovative omni-channel customer service and
            knowledge management solutions. Avante is the number one eGain
            partner in Nigeria based on successful implementations in the
            finance and telecoms sectors.
          </p>
          <button className="mt-4  text-white px-4 py-2 rounded-md">
            Read more
          </button>
        </div>
      </div>

      <div className="relative bg-cover bg-card w-[482px] h-[267px] lg:mx-24  bg-center h-64">
        <div className="absolute bg-primary rounded-[50%] left-0 top-0 bottom-0 w-12 h-12 mt-16 -ml-4 flex items-center justify-center">
          <img src={oracle} alt="carbon" className="h-12 w-12" />
        </div>
        <div className="relative z-10 p-6 mx-12">
          <h1 className="text-white text-2xl  font-bold">ORACLE </h1>
          <p className="text-white   mt-4">
            Our partnership with eGain strengthens our commitment to the
            industry's most innovative omni-channel customer service and
            knowledge management solutions. Avante is the number one eGain
            partner in Nigeria based on successful implementations in the
            finance and telecoms sectors.
          </p>
          <button className="mt-4  text-white px-4 py-2 rounded-md">
            Read more
          </button>
        </div>
      </div>
    </div>

    <div className={layout.sectionInfo}>
      <div className="relative bg-cover bg-card w-[482px] h-[267px] mb-8 bg-center h-64">
        <div className="absolute bg-primary  right-0 top-0 bottom-0  rounded-[50%] w-12 h-12 mt-16 -mr-4 flex items-center justify-center">
          <img src={sas} alt="vector" className="h-12 w-12" />
        </div>
        <div className="relative z-10 p-6 mx-16">
          <h1 className="text-white text-2xl font-bold">SAS</h1>
          <p className="text-white mt-4">
            Our partnership with eGain strengthens our commitment to the
            industry's most innovative omni-channel customer service and
            knowledge management solutions. Avante is the number one eGain
            partner in Nigeria based on successful implementations in the
            finance and telecoms sectors.
          </p>
          <button className="mt-4  text-white px-4 py-2 rounded-md">
            Read more
          </button>
        </div>
      </div>
      <div className="relative bg-cover bg-card w-[482px] h-[267px] mb-8 bg-center h-64">
        <div className="absolute bg-primary  right-0 top-0 bottom-0  rounded-[50%] w-12 h-12 mt-16 -mr-4 flex items-center justify-center">
          <img src={egain} alt="vector" className="h-12 w-12" />
        </div>
        <div className="relative z-10 p-6 mx-16">
          <h1 className="text-white text-2xl font-bold">Microsoft</h1>
          <p className="text-white mt-4">
            Our partnership with eGain strengthens our commitment to the
            industry's most innovative omni-channel customer service and
            knowledge management solutions. Avante is the number one eGain
            partner in Nigeria based on successful implementations in the
            finance and telecoms sectors.
          </p>
          <button className="mt-4  text-white px-4 py-2 rounded-md">
            Read more
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Cards2;
