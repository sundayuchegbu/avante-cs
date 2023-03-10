import info5 from "../images/info5.png";
import { features } from "../constants";

import styles, { layout } from "../style";

const InfoCard = ({ icon, index, title, content }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[163px] h-[163px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-inter font-normal text-[16px] leading-[23px] mb-6 text-secondary ">
        {title}
      </h4>
      <p className="font-inter font-semibold text-[20px] leading-[24px] mb-1 text-dark2">
        {content}{" "}
      </p>
    </div>
  </div>
);

const Info = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading5}>
        OUR <span className="text-primary">NEWS</span>
      </h2>
      <h3 className={`${styles.heading4} mb-8`}>
        Lorem Ipsum consecteturpsu <br className="sm:block hidden" />
        Lorem Ipsum consectetur.{" "}
      </h3>

      <img src={info5} alt="info5" className="mt-8" />
      <h3 className={styles.heading4}>
        Lorem Ipsum consecte Lorem Ipsum isum
        <br className="sm:block hidden" />
        consecteturpsum consecte Lorem.
      </h3>
      <p className={`${styles.paragraph3} max-w-[470px] mt-5 `}>
        Lorem ipsum dolor sit amet consectetur. Proin vel orci temporvelit
        mattis tempor at nisiLorem ipsum dolor sit amet consectetur. Proin vel
        orci tempor velit mattis tempor at nisi.Lorem ipsum dolor sit amet
        consectetur. Proin vel orci temporvelit mattis tempor at nisiLorem ipsum
        dolor sit amet consectetur. Proin vel orci tempor velit mattis tempor at
        nisi.
      </p>
      <button className="text-secondary">Read more</button>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <InfoCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Info;
