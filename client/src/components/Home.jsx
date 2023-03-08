import styles from "../style";
import Banner from "./Banner";
import Codeit from "./Codeit";

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
  </div>
);

export default Home;
