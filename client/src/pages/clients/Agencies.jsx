import React from "react";
import AgencyBanner from "../../components/AgencyBanner";
import NaijaCities from "../../components/NaijaCities";
import NationalInvestiment from "../../components/NationalInvestiment";
import LasgMinistry from "../../components/LasgMinistry";
import LastVeb from "../../components/LastVeb";
import Lagferry from "../../components/Lagferry";

const Agencies = () => {
  return (
    <div>
      <AgencyBanner />
      <NaijaCities />
      <NationalInvestiment />
      <LasgMinistry />
      <LastVeb />
      <Lagferry />
    </div>
  );
};

export default Agencies;
