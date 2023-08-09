import { layout } from "../style";
import arrow4 from "../images/arrow4.svg";
import productimage1 from "../images/productimage1.png";
import { Link } from "react-router-dom";
const MoloyalDetails = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}>
      <div className={`md:mx-32 px-4 mt-12 ${layout.sectionInfo}`}>
        <h2
          className={`font-inter font-semibold sm:text-[16px] mt-[20px] text-[20px] text-black xs:leading-[60.8px] leading-[66.8px] w-full mb-2 `}
        >
          MOLOYAL <br className="sm:block hidden" />
        </h2>
        <h1
          className={`font-inter font-semibold sm:text-[28px] mt-[10px] text-[20px] text-secondary sm:leading-[30.8px] leading-[20.8px] w-full`}
        >
          {" "}
          Free airtime rewards program.
        </h1>
        <div
          className={`font-inter font-normal text-black2 md:text-[14px] text-[12px] leading-[25.8px] max-w-[470px] mt-5 mb-6 `}
        >
          MoLoyal™ provides an easy to use fintech solution serving customers
          with loyalty points for transaction they normally carry out on day to
          day basis. With MoLoyal, you can start a micro-savings plan, buy
          tickets to upcoming events, and discover discounted items listed on
          the platform.
          <p className="mb-4"></p>The MoLoyal products are namely: MoSave,
          MoTickets, and the Loyalty Ecosystem; dedicated to promoting financial
          inclusion, user engagement, and economic growth in the regions it
          serves.
          <p className="mb-4"></p>
          The product API is available on demand as may be required for your
          project
          <p className="mb-4"></p>
          MoLoyal app is available on playstore.
        </div>
        <Link to="https://www.moloyal.com">
          <button className="font-inter font-semibold text-secondary underline decoration-2 underline-offset-4 decoration-secondary">
            Read more{" "}
          </button>
          <img
            src={arrow4}
            alt="arrow"
            className="-mt-4  ml-[100px] h-[20px]   w-[100px] top-[10px] mb-4"
          />{" "}
        </Link>
      </div>
      <div className={`${layout.sectionImg} sm:mx-24 px-24 relative`}>
        <img
          src={productimage1}
          alt="card"
          className=" block  sm:w-[479px] w-full  sm:h-[485.85px] h-full "
        />
      </div>
    </section>
  );
};

export default MoloyalDetails;
