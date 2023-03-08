import banner from "../images/banner.png";
import base from "../images/base.png";
import styles from "../style";

const Banner = () => (
  <div className="relative">
    <div className="grid grid-cols-2 gap-0">
      <div className="relative">
        <img src={base} alt="base" className="w-full h-[500px] object-cover" />
        <div className="absolute inset-0 bg-primary opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className={` ${styles.heading2}`}>
              Lorem ipsum dolor
              <br className="sm:block hidden " /> sit amet consectetur.
            </h1>
            <p className={`${styles.paragraph2} max-w-[470px] mt-5 mb-8`}>
              Lorem ipsum dolor sit amet consectetur. Proin vel orci tempor
              velit mattis tempor at nisiLorem ipsum dolor sit amet consectetur.
              Proin vel orci tempor velit mattis tempor at nisi.
            </p>
            <button className="bg-secondary text-white flex flex-start font-bold py-2 px-4 rounded">
              Read more
            </button>
          </div>
        </div>
      </div>

      <img
        src={banner}
        alt="banner"
        className="w-full h-[500px] object-cover"
      />
    </div>
  </div>
);

export default Banner;
