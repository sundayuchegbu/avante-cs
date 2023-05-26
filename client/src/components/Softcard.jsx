import React from "react";

const Softcard = () => {
  return (
    <div class=" bg-background md:p-4 h-[500px] md:mx-[170px] md:w-[700px] md:mb-56 ">
      <h2 class="font-inter text-xl font-semibold md:mb-8 mb-4 text-primary  md:text-[28px] text-[20px] md:p-0 p-4">
        Custom software <span className="text-dark">improves efficiency.</span>
      </h2>
      <p class="font-inter font-normal md:mt-0 mt-[-10px] text-black1 md:mb-4 md:text-[14px] leading-[25.8px] text-[12px] md:p-0 p-4">
        Avante develops custom built software in-house to support our
        e-Commerce, Mobile Solutions, Customer Relationship Management and
        Enterprise Resource Management specialisations. We have built custom
        solutions in industries ranging from Finance, Maritime, Entertainment,
        Retail and Government. Our consultants also possess deep technical
        skills in the integration of technologies resulting in increased
        efficiency and productivity. For example we have leveraged
        Service-oriented architecture (SOA) technology to integrate eGain
        Knowledge solutions and 3rd Party Customer Relationship Management
        software to improve productivity in contact centers.
      </p>
      <p class="font-inter text-normal text-black md:text-[14px] text-[12px] md:mb-32 mb-12  md:mt-8 px-4 leading-[25.8px]">
        Some of the technologies used by our consultants in various projects
        include;
      </p>
      <div class=" text-red-500/50  grid grid-cols-6 gap-4  ">
        <div class="col-span-7 flex md:mx-32 md:mb-8 mb-4">
          <p className="md:mx-4 mx-2 font-inter font-semibold md:text-[24px] text-[7.74px] ">
            Java,
          </p>{" "}
          <p className="md:mx-8 mx-4 font-inter font-semibold md:text-[24px] text-[7.74px]">
            Microsoft.NET,
          </p>{" "}
          <p className="md:mx-8 mx-4 font-inter font-semibold md:text-[24px] text-[7.74px]">
            Python,
          </p>{" "}
          <p className="md:mx-8 mx-4 font-inter font-semibold md:text-[24px] text-[7.74px]">
            Ionic,
          </p>{" "}
          <p className="md:mx-12 mx-6 font-inter font-semibold md:text-[24px] text-[7.74px]">
            Jquery,
          </p>{" "}
          <p className="md:mx-12 mx-6 font-inter font-semibold md:text-[24px] text-[7.74px]">
            Javascript
          </p>
        </div>
        <div class="col-span-6 flex md:mx-32 mx-16 ">
          <p className="md:ml-32 font-inter font-semibold md:text-[24px] text-[7.74px]">
            Web
          </p>
          <p className="ml-2  font-inter font-semibold md:text-[24px] text-[7.74px]">
            Service,
          </p>{" "}
          <p className="md:ml-12 ml-6 font-inter font-semibold md:text-[24px] text-[7.74px]">
            XML,
          </p>{" "}
          <p className="mx-2 font-inter font-semibold md:text-[24px] text-[7.74px]">
            SOAP,
          </p>{" "}
          <p className="font-inter font-semibold md:text-[24px] text-[7.74px]">
            WSDL
          </p>{" "}
          <p className="md:ml-12 ml-6 font-inter font-semibold md:text-[24px] text-[7.74px]">
            CSS/
          </p>{" "}
          <p className="font-inter font-semibold md:text-[24px] text-[7.74px]">
            HTML,
          </p>{" "}
          <p className="md:ml-12 ml-6 font-inter font-semibold md:text-[24px] text-[7.74px]">
            AngularJs
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Softcard;
