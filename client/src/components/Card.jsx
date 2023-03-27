import { layout } from "../style";

import vector1 from "../images/vector1.png";
import carbon from "../images/carbon.png";
import vector from "../images/vector.png";
import icon from "../images/icon.png";

export const Card = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
      <div className="relative bg-cover bg-card w-[482px] h-[267px] mb-8 lg:mx-24 bg-center h-64">
        <div className="absolute bg-primary rounded-[50%] left-0 top-0 bottom-0 w-12 h-12 mt-16 -ml-4 flex items-center justify-center">
          <img src={vector1} alt="vector" className="h-8 w-8" />
        </div>
        <div className="relative z-10 p-6 mx-12">
          <h1 className="text-white text-2xl  font-bold">
            Business Consulting{" "}
          </h1>
          <p className="text-white   mt-4">
            Lorem ipsum dolor sit amet consectetur. Proin vel orci temporvelit
            mattis tempor at nisiLorem ipsum dolor sit amet consectetur. Proin
            vel orci tempor velit mattis tempor at nisi.
          </p>
          <button className="mt-4  text-white px-4 py-2 rounded-md">
            Read more
          </button>
        </div>
      </div>

      <div className="relative bg-cover bg-card w-[482px] h-[267px] lg:mx-24  bg-center h-64">
        <div className="absolute bg-primary rounded-[50%] left-0 top-0 bottom-0 w-12 h-12 mt-16 -ml-4 flex items-center justify-center">
          <img src={carbon} alt="carbon" className="h-8 w-8" />
        </div>
        <div className="relative z-10 p-6 mx-12">
          <h1 className="text-white text-2xl  font-bold">SAS Analytics </h1>
          <p className="text-white   mt-4">
            Lorem ipsum dolor sit amet consectetur. Proin vel orci temporvelit
            mattis tempor at nisiLorem ipsum dolor sit amet consectetur. Proin
            vel orci tempor velit mattis tempor at nisi.
          </p>
          <button className="mt-4  text-white px-4 py-2 rounded-md">
            Read more
          </button>
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
      <div className="relative bg-cover bg-card w-[482px] h-[267px] mb-8 bg-center h-64">
        <div className="absolute bg-primary  right-0 top-0 bottom-0  rounded-[50%] w-12 h-12 mt-16 -mr-4 flex items-center justify-center">
          <img src={vector} alt="vector" className="h-8 w-8" />
        </div>
        <div className="relative z-10 p-6 mx-16">
          <h1 className="text-white text-2xl font-bold">
            Software Development
          </h1>
          <p className="text-white mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
          <button className="mt-4  text-white px-4 py-2 rounded-md">
            Read more
          </button>
        </div>
      </div>
      <div className="relative bg-cover bg-card w-[482px] h-[267px] mb-8 bg-center h-64">
        <div className="absolute bg-primary  right-0 top-0 bottom-0  rounded-[50%] w-12 h-12 mt-16 -mr-4 flex items-center justify-center">
          <img src={icon} alt="vector" className="h-8 w-8" />
        </div>
        <div className="relative z-10 p-6 mx-16">
          <h1 className="text-white text-2xl font-bold">Web Development</h1>
          <p className="text-white mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
          <button className="mt-4  text-white px-4 py-2 rounded-md">
            Read more
          </button>
        </div>
      </div>
    </div>
  </section>
);
export default Card;
