import banner from "../images/banner.png";
import base from "../images/base.png";
import styles from "../style";

const Banner = () => (
  <section className="bg-primary overflow w-full lg:grid lg:grid-cols-2 gap-0 p-0 ">
    <div className="relative">
      <img
        src={base}
        alt="base"
        className="w-full lg:h-[721px] h-[500px] object-cover  "
      />
      <div className="absolute inset-0 bg-primary opacity-75"></div>
      <div className="absolute inset-0 flex items-center sx:p-4 pt-4 justify-center">
        <div className=" text-white  max-w-[470px] ">
          <h1
            className={` font-Inter font-semibold xs:text-[40px] mt-[20px] text-[40px] text-white xs:leading-[60.8px] leading-[66.8px]   `}
          >
            Lorem ipsum dolor
            <br className="sm:block hidden" /> sit amet consectetur.
          </h1>
          <p className={`${styles.paragraph2}  mt-5   mb-8 `}>
            Lorem ipsum dolor sit amet consectetur. Proin vel orci tempor velit
            mattis tempor at nisiLorem ipsum dolor sit amet consectetur. Proin
            vel orci tempor velit mattis tempor at nisi.
          </p>
          <button className="bg-secondary font-inter text-white lg:mr-24   sm:items-center font-bold py-2 px-8 mb-24 rounded ">
            Read more
          </button>
        </div>
      </div>
    </div>

    <img
      src={banner}
      alt="banner"
      className="w-full lg:h-[721px] object-cover"
    />
  </section>
);

export default Banner;
