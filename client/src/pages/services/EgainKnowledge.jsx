import React from "react";
import Caller from "../../components/Caller";
import Clients from "../../components/Clients";
import EgainKnowledgeBanner from "../../components/EgainKnowledgeBanner";
import KnowledgeAndServices from "../../components/KnowledgeAndServices";
import Testimonial from "../../components/Testimonial";

const EgainKnowledge = () => {
  return (
    <div>
      <EgainKnowledgeBanner />
      <KnowledgeAndServices />
      <Testimonial />
      <Clients />
      <Caller />
    </div>
  );
};

export default EgainKnowledge;
