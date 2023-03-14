import styles from "../style";
import Banner from "./Banner";
import Codeit from "./Codeit";
import Caller from "./Caller";
import Clients from "./Clients";
import Testimonial from "./Testimonial";
import Info from "./Info";
import Stats from "./Stats";
import ProductSample from "./ProductSample";
import Card from "./Card";

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
        <Card />
        <ProductSample />
        <Stats />
        <Info />
      </div>
    </div>

    <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}></div>
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
