import test from "../images/test.png";
import test1 from "../images/test1.png";

const Testimonial = () => (
  <div className=" h-[400px] w-full">
    <div className="relative ">
      <img src={test1} alt="test1" className="w-full h-[394px] object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
        <div>
          <img src={test} alt="test" className="mb-10" />{" "}
        </div>

        <p className=" font-inter text-[16px] text-dark text-center mb-8">
          Avante CS Ltd. has a strong longstanding relationship with eGain
          <br className="sm:block hidden" />
          Communications in delivering successful projects across Nigeria.
        </p>
        <p className=" font-inter text-[24px] text-black  font-bold mb-4">
          Raymond Conoly
        </p>
        <p className="font-inter text-black text-[14px] mb-4">
          Sales Director - EMEA
        </p>
        <p className="font-inter text-black  text-[10px]">
          eGain Communications
        </p>
      </div>
    </div>
  </div>
);

export default Testimonial;
