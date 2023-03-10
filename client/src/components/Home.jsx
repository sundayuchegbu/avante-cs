import styles from "../style";
import Banner from "./Banner";
import Codeit from "./Codeit";
import Caller from "./Caller";
import Clients from "./Clients";
import Testimonial from "./Testimonial";
import Info from "./Info";
import Stats from "./Stats";

const Home = () => (
  <div>
    <div className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Banner />
      </div>
    </div>
    <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Codeit />
      </div>
    </div>

    <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Info />
      </div>
    </div>
    <Testimonial />
    <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Clients />
        <Caller />
      </div>
    </div>
  </div>
);

export default Home;
