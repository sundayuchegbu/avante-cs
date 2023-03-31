import banner from "../images/banner.png";
import base from "../images/base.png";
import styles from "../style";

const Banner = () => (
  <section className="bg-primary overflow w-full lg:grid lg:grid-cols-2 gap-0 ">
    <div className="relative">
      <img
        src={base}
        alt="base"
        className="w-full lg:h-[721px] object-cover "
      />
      <div className="absolute inset-0 bg-primary opacity-75"></div>
      <div className="absolute inset-0 flex items-center pt-4 justify-center">
        <div className="text-center items-center text-white px-4  ">
          <h1 className={` ${styles.heading6}  py-2 px-4`}>
            Lorem ipsum dolor
            <br className="sm:block hidden " /> sit amet consectetur.
          </h1>
          <p className={`${styles.paragraph2} max-w-[470px] mt-5  mb-8`}>
            Lorem ipsum dolor sit amet consectetur. Proin vel orci tempor velit
            mattis tempor at nisiLorem ipsum dolor sit amet consectetur. Proin
            vel orci tempor velit mattis tempor at nisi.
          </p>
          <button className="bg-secondary font-inter text-white flex  lg:flex-center sm:items-center items-center font-bold py-2 px-8 mb-4 rounded mx-24">
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
