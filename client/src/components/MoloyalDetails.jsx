import styles, { layout } from "../style";
import arrow4 from "../images/arrow4.svg";
import loyalty from "../images/loyalty.png";
import { Link } from "react-router-dom";
const MoloyalDetails = () => {
  return (
    <section className={layout.section}>
      <div className={`mx-24 mt-24 ${layout.sectionInfo}`}>
        <h2 className={`${styles.heading3} mb-2 `}>
          MOLOYAL <br className="sm:block hidden" />
        </h2>
        <h1
          className={`font-Inter font-semibold xs:text-[35px] mt-[10px] text-[20px] text-secondary xs:leading-[60.8px] leading-[66.8px] w-full`}
        >
          {" "}
          Free airtime rewards program.
        </h1>
        <div className={`${styles.paragraph3} max-w-[470px] mt-5 mb-6 `}>
          MoLoyal™, the unique customer rewards programme, which helps
          businesses improve customer retention by rewarding customers with free
          airtime for every transaction made. Active members of MoLoyal can earn
          free airtime rewards while making transactions in various industries
          including; - Retail - Concerts, Festivals, Sports and Event Ticketing
          Systems - Buses, Ferry Services, Trains or other transportation -
          Tolling Systems for public and convenience services - Contribution and
          payment collection systems. MoLoyal is also a digital airtime retail
          and distribution platform where airtime from all major networks will
          be electronically sold with flexible payment channels including Debit
          or Credit Cards, Reward Wallet, Mobile Money, Shortcodes and Bank
          deposits.
        </div>
        <Link to="https://www.moloyal.com">
          <button className="text-secondary underline decoration-1 underline-offset-4 decoration-secondary">
            Read more{" "}
          </button>
          <img
            src={arrow4}
            alt="arrow"
            className="-mt-4  ml-[100px] h-[20px]   w-[100px] top-[10px] mb-4"
          />{" "}
        </Link>
      </div>
      <div className={`${layout.sectionImg} mx-24 px-24 relative`}>
        <img
          src={loyalty}
          alt="card"
          className=" block -mx-4 w-[100%]  h-[70%] "
        />
      </div>
    </section>
  );
};

export default MoloyalDetails;
