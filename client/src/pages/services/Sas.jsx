import React from "react";
import Caller from "../../components/Caller";
import Clients from "../../components/Clients";
import Hero from "../../components/Hero";
import Sas2 from "../../components/Sas2";
import Testimonial from "../../components/Testimonial";

const Sas = () => {
  return (
    <div>
      <Hero />
      <Sas2 />

      <Testimonial />
      <Clients />
      <Caller />
    </div>
  );
};

export default Sas;
