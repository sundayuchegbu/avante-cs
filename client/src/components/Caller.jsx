import React from "react";
import caller from "../images/caller.png";
import { useNavigate } from "react-router-dom";

const Caller = () => {
  const navigate = useNavigate();
  return (
    <div className="relative py-[200px] mb-12 w-full h-64">
      <img
        src={caller}
        alt="caller"
        className="absolute inset-0 w-full h-full object-cover object-cover"
      />
      <div className="absolute inset-0 h-full w-1/2 bg-gray-500  bg-opacity-50 backdrop-filter backdrop-blur-md"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white mx-auto px-20 ">
        <h1 className="text-4xl font-inter font-semibold  mb-2">Contact Us</h1>
        <p className="font-inter text-lg mb-4">
          Have any questions or enquiry about our services ?
        </p>
        <button
          className="bg-secondary text-white flex flex-start font-bold py-2 px-4 rounded"
          onClick={() => navigate("/contacts")}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default Caller;
