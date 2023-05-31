import React from "react";
import Caller from "../../components/Caller";
import SocialCard from "../../components/SocialCard";
import SocialMedia from "../../components/SocialMedia";
import Testimonial from "../../components/Testimonial";
import styles from "../../style";
import SocialInfo from "../../components/SocialInfo";

const SocialMediaMgt = () => {
  return (
    <div>
      <SocialMedia />
      <SocialInfo />
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
