import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <div
    className={`w-full bg-dark sm:px-16 px-6 flex justify-center items-start`}
  >
    <div className="xl:max-w-[1280px] ">
      <div
        className={`${styles.flexCenter} w-full  flex-row flex-wrap sm:mb-10 mb-6`}
      >
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={` justify-start items-center p-6 flex-row m-3  hover:bg-red-700 hover:object-center hover:w-40 hover:h-40 `}
          >
            <h4 className="font-inter font-semibold mb-4 text-[30px] xs:leading-[53px] leading-[43px] text-primary ">
              {stat.value}{" "}
            </h4>
            <p className="font-inter font-normal xs:text-[20px]  text-[12px] xs:leading-[26px] leading-[21px] text-white">
              {stat.title}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Stats;
