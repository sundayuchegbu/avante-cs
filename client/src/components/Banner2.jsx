import base from "../images/base.png";
import banner from "../images/banner.png";
import banner2 from "../images/banner2.png";
import styles from "../style";

const Banner2 = () => (
  <div className="relative">
    <div className="grid lg:grid-cols-2 gap-0 bg-primary ">
      <div className="relative">
        <img
          src={base}
          alt="base"
          className="w-full lg:h-[721px] object-cover "
        />
        <div className="absolute inset-0 bg-primary opacity-75"></div>
        <div className="absolute inset-0 flex items-center  justify-center">
          <div className="text-center items-center text-white px-4  ">
            <h1 className={` ${styles.heading6}  py-2 px-4`}>
              Lorem ipsum dolor
              <br className="sm:block hidden " /> sit amet consectetur.
            </h1>
            <p className={`${styles.paragraph2} max-w-[470px] mt-5 mb-8`}>
              Lorem ipsum dolor sit amet consectetur. Proin vel orci tempor
              velit mattis tempor at nisiLorem ipsum dolor sit amet consectetur.
              Proin vel orci tempor velit mattis tempor at nisi.
            </p>
            <button className="bg-secondary font-inter text-white flex  lg:flex-center sm:items-center items-center font-bold py-2 px-8 mb-4 rounded">
              Read more
            </button>
          </div>
        </div>
      </div>

      <div className="w-full   relative ">
        <img
          src={banner2}
          alt="banner"
          className="block w-[557.88px] h-[568.46px] mt-12  "
        />
        <div className="absolute top-[49px] bottom-0  left-[400px] -right-0 h-12 bg-primary"></div>
        <div className="absolute top-[390px] bottom-0  left-[400px] -right-0 h-4 bg-primary"></div>
        <div className="absolute top-[560px] bottom-0  right-[600px] left-0 h-14 bg-primary"></div>
        <div className="absolute top-[280px] bottom-0  right-[600px] left-0 h-4 bg-primary"></div>
        <div className="absolute top-[520px] bottom-0 left-[79px] right-1/3 mx-24 h-4 bg-primary"></div>
        <div className="absolute top-0 bottom-0 left-[159px] w-4 bg-primary"></div>
        <div className="absolute top-0 bottom-0 left-[400px] w-4 bg-primary"></div>
      </div>
    </div>
  </div>
);

export default Banner2;

{
  /* <div className="bg-primary py-8 h-[781px] relative">
  {" "}
  <div class="container mx-auto flex   items-center ">
    <div class=" sm:block w-1/2 mt-18 ">
      <h1 class="text-white font-bold text-4xl mb-4">
        Lorem ipsum dolor
        <br className="sm:block hidden" />
        sit amet consectetur.
      </h1>{" "}
      <p class="text-white mb-4 mr-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
        tortor augue, quis bibendum nisi imperdiet non. Sed quis magna at eros
        sagittis ultricies.
      </p>
      <button className="bg-secondary text-white font-bold py-2 px-4 rounded">
        Read more
      </button>
    </div>
    <div className=" w-1/2 mt-24 relative ">
      <img
        className=" block w-[557.88px] h-[568.46px]   object-cover "
        src={banner2}
        alt="Banner2"
      />
      <div className="absolute bottom-0 left-0 right-2/3 h-12 bg-primary"></div>
      <div className="absolute top-60 left-0 right-2/3 h-6 bg-primary"></div>
      <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-primary"></div>
      <div className="absolute top-0 bottom-0 right-1/3 w-6 bg-primary"></div>
      <div className="absolute bottom-56 right-0 left-2/3 h-6 bg-primary"></div>
      <div className="absolute bottom-24 right-1/3 left-56 h-6 bg-primary"></div>
      <div className="absolute top-0 right-0 left-2/3 h-12 bg-primary"></div>
    </div>
  </div>
</div>; */
}
