import React from "react";
import Caller from "../../components/Caller";
import DevBanner from "../../components/DevBanner";
import Projects from "../../components/Projects";

const WebDev = () => {
  return (
    <div>
      <DevBanner />
      <Projects />
      <Caller />
    </div>
  );
};

export default WebDev;
