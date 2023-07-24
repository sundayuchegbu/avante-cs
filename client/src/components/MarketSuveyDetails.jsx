import React from "react";
import { layout } from "../style";
import market from "../images/market.jpg";

const MarketSuveyDetails = () => {
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6 md:ml-24">
      <div className={`mx-12 ${layout.sectionInfo}`}>
        <h1
          className={`font-Inter font-semibold xs:text-[28px] md:mt-[2px] text-[20px] text-black  w-full mb-4 text-primary `}
        >
          Market Surveys:{" "}
        </h1>
        <div
          className={`font-inter font-normal  sm:text-[16px] text-[12px] sm:leading-[25.8px] leading-[25.8px] max-w-[400px] md:mt-0 mt-5 mb-6`}
        >
          In a rapidly changing business landscape, staying ahead of the
          competition requires a keen understanding of market trends and
          customer preferences. Our Market Surveys provide you with valuable
          data and strategic intelligence that empowers you to make
          well-informed decisions. We design comprehensive survey methodologies
          to gather relevant market information and industry insights.
          <p className="mb-4" />
          Our team of skilled analysts interprets survey data to identify
          emerging trends, customer sentiment, and potential opportunities for
          growth. From market sizing and segmentation to competitor analysis,
          our Market Surveys offer a comprehensive view of the market dynamics,
          helping you align your business strategies to maximize profitability
          and competitive advantage.
        </div>
      </div>
      <div className={`${layout.sectionImg} md:mx-24 md:px-24 relative`}>
        <img
          src={market}
          alt="vision"
          className="  md:w-[561px] w-[371.34px]  md:h-[567px] h-[238px] "
        />
      </div>
    </section>
  );
};

export default MarketSuveyDetails;
