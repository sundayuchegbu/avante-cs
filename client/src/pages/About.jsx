import Banner2 from "../components/Banner2";
import Cards2 from "../components/Cards2";
import Cooperate from "../components/Cooperate";
import Values from "../components/Values";
import Vision from "../components/Vision";
import Vision1 from "../components/Vision1";
import Caller from "../components/Caller";
import Feedback from "../components/Feedback";
import styles from "../style";

const About = () => (
  <div>
    <Banner2 />
    <Vision />
    <Vision1 />
    <Values />
    <Cooperate />
    <Feedback />
    <Cards2 />
    <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Caller />
      </div>{" "}
    </div>
  </div>
);

export default About;
