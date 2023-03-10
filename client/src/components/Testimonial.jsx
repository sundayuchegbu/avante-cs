import test from "../images/test.png";
import test1 from "../images/test1.png";

const Testimonial = () => (
  <div class="relative">
    <img src={test1} alt="test1" class="w-full h-394 object-cover" />
    <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
      <div>
        <img src={test} alt="test" className="mb-10" />{" "}
      </div>

      <p class=" font-inter text-lg text-dark mb-8">
        Avante CS Ltd. has a strong longstanding relationship with eGain
        <br className="sm:block hidden" />
        Communications in delivering successful projects across Nigeria.
      </p>
      <p class=" font-inter text-black  font-bold mb-4">Raymond Conoly</p>
      <p class="font-inter text-black text-sm mb-4">Sales Director - EMEA</p>
      <p class="font-inter text-black  text-xs">Egain Communications</p>
    </div>
  </div>
);

export default Testimonial;
