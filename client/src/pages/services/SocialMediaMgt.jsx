import React from "react";
import Caller from "../../components/Caller";
import SocialCard from "../../components/SocialCard";
import SocialMedia from "../../components/SocialMedia";
import Testimonial from "../../components/Testimonial";
import styles from "../../style";

const SocialMediaMgt = () => {
  return (
    <div>
      <SocialMedia />
      <SocialCard />
      <Testimonial />
      <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {" "}
          <Caller />
        </div>{" "}
      </div>
    </div>
  );
};

export default SocialMediaMgt;
