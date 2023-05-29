import React from "react";
import article1 from "../images/article1.png";
import arrow4 from "../images/arrow4.png";
import { Link } from "react-router-dom";

const ArticleCard = ({ className }) => {
  return (
    <div className={`rounded-xl overflow-hidden ${className}`}>
      <img
        src={article1}
        alt="article1"
        className="w-full object-cover object-center h-auto  "
      />
      <div className="p-5">
        <p className="font-inter font-normal text-primary sm:text-[12px] text-[9px]">
          Posted by Admin | Thursday, 17 SEPTEMBER 2022
        </p>
        <h2 className="font-inter font-semibold sm:w-[334px] sm:h-[69px] sm:text-[24px] text-[16px] text-black1">
          Avante partners sas for Customer Intelligence event
        </h2>
        <p className="font-inter font-normal text-black sm:w-[334px] sm:h-[69px] sm:text-[14px] text-[10px]">
          The import of data and analytics in shaping consumers’ decisions will
          be the focus of discussion at the SAS -Global Leaders in Analytics
          Summit holding in Lagos. Expected at the summit are key players,
          influencers and stakeholders across the fin...
        </p>
        <Link to="">
          <button className="text-secondary sm:-ml-2 ml-[8px] w-[84.96px] h-[22px] sm:mt-12 mt-4 ">
            Read more
          </button>
          <img
            src={arrow4}
            alt="arrow"
            className="sm:-mt-6 -mt-7  md:h-[20px]   md:w-[43.2px] w-[44.74px] top-[10px] mb-4 sm:ml-[100px] ml-[120px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
