import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section
    className={`${styles.flexCenter} bg-dark w-full  flex-row flex-wrap sm:mb-10 mb-6`}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={` justify-start items-center p-6 flex-row m-3 h-[200px] w-[200px] bg-dark`}
      >
        <h4 className="font-inter font-semibold mb-8 text-[30px] xs:leading-[53px] leading-[43px] text-primary ">
          {stat.value}{" "}
        </h4>
        <p className="font-inter font-normal xs:text-[20px]  text-[15px] xs:leading-[26px] leading-[21px] text-white">
          {stat.title}{" "}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
