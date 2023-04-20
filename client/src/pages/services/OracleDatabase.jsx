import React from "react";
import Caller from "../../components/Caller";
import Clients from "../../components/Clients";
import Oracle2 from "../../components/Oracle2";
import OracleBanner from "../../components/OracleBanner";
import Testimonial from "../../components/Testimonial";

const OracleDatabase = () => {
  return (
    <div>
      <OracleBanner />
      <Oracle2 />
      <Testimonial />
      <Clients />
      <Caller />
    </div>
  );
};

export default OracleDatabase;
