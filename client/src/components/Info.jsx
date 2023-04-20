import info5 from "../images/info5.png";
import arrow4 from "../images/arrow4.svg";
import { features } from "../constants";
import { useNavigate } from "react-router-dom";

import styles, { layout } from "../style";

const InfoCard = ({ icon, index, title, content }) => {
  const navigate = useNavigate();
  return (
    <div
      className={` flex flex-row  rounded-[20px] ${
        index !== features.length - 1 ? "mb-2" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[163px] h-[163px] rounded-full ${styles.flexCenter}  cursor-pointer mt-0 `}
      >
        <img
          src={icon}
          alt="icon"
          onClick={() => navigate("/news")}
          className=""
        />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-inter font-normal text-[16px] leading-[23px]  text-secondary mb-6  ">
          {title}
        </h4>
        <p
          className="font-inter font-semibold text-[20px] leading-[24px]  text-dark2 cursor-pointer "
          onClick={() => navigate("/news")}
        >
          {content}{" "}
        </p>
      </div>
    </div>
  );
};

const Info = () => {
  const navigate = useNavigate();
  return (
    <section id="features" className={` ${layout.section}`}>
      <div className={` ${layout.sectionInfo}`}>
        <h2
          className={`underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 ${styles.heading5}`}
        >
          OUR <span className="text-primary">NEWS</span>
        </h2>
        <h3 className={`${styles.heading4} mb-8`}>
          <span className="text-[56px]">Avante @10!</span>{" "}
          <br className="sm:block hidden" />
          Celebrating 10 years of service and partnership{" "}
        </h3>

        <img src={info5} alt="info5" className="mt-8  " />
        <p className="font-inter mt-2 text-[12px]">
          AVANTE @10! | Thursday, 10 DECEMBER 2022
        </p>

        <h3 className={styles.heading4}>10 Years Avante History</h3>
        <p className={`${styles.paragraph3} max-w-[470px] mt-5 `}>
          2012 – The year we were founded, Signed a Partner Reseller agreement
          with eGain 2013 – Successfully launched digital multichannel customer
          service solutions for a tier one bank and the largest Pensions
          provider in our territory. 2014 – D...
        </p>
        <button
          className="text-secondary ml-[240px]"
          onClick={() => navigate("/news")}
        >
          Read more
        </button>
        <img
          src={arrow4}
          alt="arrow"
          className="-mt-5  ml-[100px] h-[20px]   w-[100px] top-[10px] mb-4 ml-[300px]"
          onClick={() => navigate("/news")}
        />
      </div>
      <div className={`${layout.sectionImg} flex-col mt-72`}>
        {features.map((feature, index) => (
          <InfoCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Info;
