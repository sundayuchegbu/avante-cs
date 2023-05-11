import banner from "../images/banner.png";

const Banner = () => (
  <div className="flex flex-col md:flex-row h-screen">
    <div className="md:w-1/2 h-screen bg-primary flex flex-col justify-center items-center md:items-start p-8 hidden md:block">
      <h2 className="font-inter font-semibold text-[50px] text-white font-bold mb-4 ml-[100px] mt-[100px]">
        Lorem ipsum dolor <br />
        sit amet consectetur.
      </h2>
      <p className=" font-inter text-[16px] text-white mb-6 ml-[100px]">
        Lorem ipsum dolor sit amet consectetur. Proin vel orci tempor
        <br /> velit mattis tempor at nisiLorem ipsum dolor sit amet
        consectetur.
        <br /> Proin vel orci tempor velit mattis tempor at nisi.
      </p>
      <button className="bg-secondary font-inter text-white  py-2 px-4 rounded ml-[100px] w-[148px] h-[46.36px]">
        Read more{" "}
      </button>
    </div>

    <div className="md:w-1/2  h-screen bg-cover bg-center ">
      <img src={banner} alt="banner" className="w-full sm:h-screen " />
    </div>
  </div>
);

export default Banner;
