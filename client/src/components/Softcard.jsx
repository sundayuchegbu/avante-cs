import React from "react";

const Softcard = () => {
  return (
    <div class=" bg-background p-4 h-[500px] mx-24 w-[700px] mb-8 rounded-lg">
      <h2 class="text-xl font-bold mb-8 text-primary mb-12">
        Custom software <span className="text-dark">improves efficiency.</span>
      </h2>
      <p class="text-gray-600 mb-12">
        Avante develops custom built software in-house to support our
        e-Commerce, Mobile Solutions, Customer Relationship Management and
        Enterprise Resource Management specialisations. We have built custom
        solutions in industries ranging from Finance, Maritime, Entertainment,
        Retail and Government. Our consultants also possess deep technical
        skills in the integration of technologies resulting in increased
        efficiency and productivity. For example we have leveraged
        Service-oriented architecture (SOA) technology to integrate eGain
        Knowledge solutions and 3rd Party Customer Relationship Management
        software to improve productivity in contact centers. Some of the
        technologies used by our consultants in various projects include;
      </p>
      <div class=" text-secondary grid grid-cols-6 gap-4 ">
        <div class="col-span-7 flex mx-56 mb-8">
          <p className="mx-4 font-inter ">java,</p>{" "}
          <p className="mx-12">Microsoft.NET,</p>{" "}
          <p className="mx-12">Python,</p> <p className="mx-12">Ionic,</p>{" "}
          <p className="mx-12">Jquery,</p> <p className="mx-12">Javascript</p>
        </div>
        <div class="col-span-6 flex mx-56 ">
          <p className="ml-32">Web</p>
          <p className="ml-2">Service,</p> <p className="ml-12">XML,</p>{" "}
          <p className="mx-2">SOAP,</p> <p>WSDL</p>{" "}
          <p className="ml-12">CSS/</p> <p>HTML,</p>{" "}
          <p className="ml-12">AngularJs</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Softcard;
