import React from "react";
import explicit from "../images/explicit.jpg";
import article1 from "../images/article1.png";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSinglePost } from "../services/index/post";

const NewsExplicit = () => {
  const { slug } = useParams();
  console.log(slug);

  const {} = useQuery({
    queryFn: () => getSinglePost({ slug }),
    onSuccess: (data) => {
      console.log(data);
    },
  });
  return (
    <div>
      <div>
        <img
          src={explicit}
          alt="explicit"
          className="sm:w-full w-[414px] sm:h-[500px] h-[282.58px]"
        />
      </div>

      <div className="flex sm:flex-row flex-col sm:mt-20  sm:py-16 py-6 ">
        <div className="  flex-[1.0] flex justify-center items-start flex-col  sm:ml-24 mx-4">
          <div className=" flex items-center justify-center   mb-4  ">
            <h4 className=" font-inter font-normal md:text-[12px] text-[9px]   ">
              AVANTE @10! | Thursday, 15 DECEMBER 2022
            </h4>{" "}
          </div>
          <div className="flex items-center justify-center ">
            <p
              className="block font-inter font-normal sm:text-[14px] text-[12px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] sm:mt-2 sm:mb-8 mb-4
"
            >
              Posted by Admin
            </p>
          </div>
          <div
            className={` font-inter font-normal text-black2 sm:text-[14px] text-[12px] sm:leading-[25.8px] leading-[25.8px] sm:min-w-[470px] min-w-[310px] mt-5 mb-5 sm:w-[773px] w-[200px] `}
          >
            2012 – The year we were founded, Signed a Partner Reseller agreement
            with eGain <p className="mb-4"></p> 2013 – Successfully launched
            digital multichannel customer service solutions for a tier one bank
            and the largest Pensions provider in our territory.
            <p className="mb-4"></p> 2014 – Delivered the first integrated
            Knowledge Management and omnichannel interaction platform for
            Africa’s largest telecommunications provider. Achieved over 400%
            increase in contact centre agent performance within 12 months for a
            financial institution.<p className="mb-4"></p> 2015 – Won the best
            ‘Mobile Customer Engagement’ eGain project award in the EMEA region.
            <p className="mb-4"></p> 2016 – Expanded telecommunications customer
            base and implemented AI driven customer facing self-service portal
            with integrated billing and customer relationship processes.
            <p className="mb-4"></p> 2017 – Launched ‘MoLoyal’, a Fintech and
            software manufacturing division of Avante, with its first product, a
            Loyalty Management solution debuting on Google Play store.
            <p className="mb-4"></p> 2018 – Signed a Partner Reseller Agreement
            with SAS Inc, to provide Customer Intelligence and Advanced Data
            Analytics solutions.<p className="mb-4"></p> 2019 – Increased
            software licencing revenue and expanded technology service offerings
            to government agencies. Achieved staff expansion and capacity
            building in Business Intelligence, Data Science and Full Stack
            Software Development.<p className="mb-4"></p> 2020 – Program Managed
            a consortium of consultants in the deployment of a Marketing
            Campaign Automation solution based on SAS Customer Intelligence and
            Visual Analytics technology. Launched MoLoyal Ecommerce shopping
            platform.<p className="mb-4"></p> 2021 – Launched MoLoyal Tickets an
            integrated online and physical event ticketing, payment & access
            control platform. Achieved SAS Customer Intelligence Specialisation
            certification. Deployed an integrated AI chatbot, social, email and
            knowledge management solution for a financial Institution.
            <p className="mb-4"></p> 2022 - 10 years of continuous improvement
            and growth in business. Launched MoSave, a micro savings service
            driven by mobile technology, and achieved an average of 9X% customer
            retention month on month in first 6 months.
          </div>
        </div>
        <div
          className={`flex-1 flex justify-center items-start flex-col  mt-[-80px] sm:ml-44 `}
        >
          <div className={`rounded-xl overflow-hidden  mt-8`}>
            <p className="text-secondary font-inter font-normal sm:text-[18px] sm:mb-4 mb-4 mt-12 ml-4">
              Latest post
            </p>
            <img
              src={article1}
              alt="article1"
              className="sm:w-[300px] w-[250px] sm:mx-0 mx-4 object-cover object-center h-auto  "
            />
            <div className="p-5 sm:w-[280px] min-w-[300px]">
              <h2 className="font-inter font-semibold  sm:h-[69px] sm:text-[14px] text-[16px] text-black1 w-full">
                Avante 10 Years History
              </h2>
              <p className="font-inter font-normal text-black  sm:h-[69px] sm:-mt-12 sm:text-[12px] text-[10px]">
                Avante 10 years history 10 years of continuous improvement and
                growth in business.
              </p>
            </div>
          </div>{" "}
          <div className={`rounded-xl overflow-hidden `}>
            <h3 className="text-secondary font-inter font-normal sm:text-[18px] sm:mb-4 mb-4 mt-12 ml-4">
              Recommended For You{" "}
            </h3>
            <img
              src={article1}
              alt="article1"
              className="sm:w-[300px] w-[250px] sm:mx-0 mx-4 object-cover object-center h-auto "
            />
            <div className="p-5 sm:w-[280px] min-w-[300px]">
              <h2 className="font-inter font-semibold  sm:h-[69px] sm:text-[14px] text-[16px] text-black1 w-full">
                Avante 10 Years History
              </h2>
              <p className="font-inter font-normal text-black  sm:h-[69px] sm:-mt-12 sm:text-[12px] text-[10px]">
                Avante 10 years history 10 years of continuous improvement and
                growth in business.
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default NewsExplicit;
