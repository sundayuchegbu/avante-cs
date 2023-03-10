import React from "react";
import caller from "../images/caller.png";

const Caller = () => (
  <div class="relative py-[200px] mb-12 w-full h-64">
    <img
      src={caller}
      alt="caller"
      class="absolute inset-0 w-full h-full object-cover object-cover"
    />
    <div class="absolute inset-0 h-full w-1/2 bg-gray-500  bg-opacity-50 backdrop-filter backdrop-blur-md"></div>
    <div class="absolute inset-0 flex flex-col justify-center items-start text-white mx-auto px-20 ">
      <h1 class="text-4xl font-semibold  mb-2">Contact Us</h1>
      <p class="text-lg mb-4">
        Have any questions or enquiry about our services ?
      </p>
      <button className="bg-secondary text-white flex flex-start font-bold py-2 px-4 rounded">
        Read more
      </button>
    </div>
  </div>
);

export default Caller;
