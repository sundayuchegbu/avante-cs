import React from "react";

const Softcard = () => {
  return (
    <div class=" bg-background p-4 h-[500px] mx-[170px] w-[700px] mb-56 rounded-lg">
      <h2 class="font-inter text-xl font-bold mb-8 text-primary mb-12">
        Custom software <span className="text-dark">improves efficiency.</span>
      </h2>
      <p class="font-inter text-gray-600 mb-4">
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
      <p class="font-inter text-gray-600 mb-32 mt-8">
        Some of the technologies used by our consultants in various projects
        include;
      </p>
      <div class=" text-red-500/50  grid grid-cols-6 gap-4  ">
        <div class="col-span-7 flex mx-32 mb-8">
          <p className="mx-4 font-inter font-semibold text-[24px] ">Java,</p>{" "}
          <p className="mx-8 font-inter font-semibold text-[24px]">
            Microsoft.NET,
          </p>{" "}
          <p className="mx-8 font-inter font-semibold text-[24px]">Python,</p>{" "}
          <p className="mx-8 font-inter font-semibold text-[24px]">Ionic,</p>{" "}
          <p className="mx-12 font-inter font-semibold text-[24px]">Jquery,</p>{" "}
          <p className="mx-12 font-inter font-semibold text-[24px]">
            Javascript
          </p>
        </div>
        <div class="col-span-6 flex mx-32 ">
          <p className="ml-32 font-inter font-semibold text-[24px]">Web</p>
          <p className="ml-2 font-inter font-semibold text-[24px]">
            Service,
          </p>{" "}
          <p className="ml-12 font-inter font-semibold text-[24px]">XML,</p>{" "}
          <p className="mx-2 font-inter font-semibold text-[24px]">SOAP,</p>{" "}
          <p className="font-inter font-semibold text-[24px]">WSDL</p>{" "}
          <p className="ml-12 font-inter font-semibold text-[24px]">CSS/</p>{" "}
          <p className="font-inter font-semibold text-[24px]">HTML,</p>{" "}
          <p className="ml-12 font-inter font-semibold text-[24px]">
            AngularJs
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Softcard;
