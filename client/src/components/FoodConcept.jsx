import { layout } from "../style";
import foodconcept from "../images/foodconcept.png";
import { Link } from "react-router-dom";
const FoodConcept = () => {
  return (
    <section className={` mb-24 mt-[-150px] ${layout.sectionReverse}`}>
      <div id="cta9" className={` relative   ${layout.sectionImgReverse1} `}>
        <img
          src={foodconcept}
          alt="foodconcept"
          className="block h-[428.8px]"
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2
          className={`font-Inter font-semibold xs:text-[20px] mt-[10px] text-[40px] text-black xs:leading-[30.8px] leading-[66.8px] w-full mb-2  mt-[150px]`}
        >
          FOOD <span className="text-primary">CONCEPT</span>{" "}
          <br className="sm:block hidden " />
          <span className="text-primary ">Lorem Ipsum consectetur. </span>
        </h2>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
        >
          Food Concepts opened Chicken Republic in 2004 and their other brands
          of focus include Butterfield Bakery, Reeds and Pizza Republic. Apart
          from a poultry farm and bakery plants their multifaceted business also
          comprises an Operational Services Division, Central Processing Plant,
          Supply Chain Division, Trading, a Logistics Division and a lucrative
          Property Division. Avante Consulting were commissioned to build a
          Database Management System using Oracle Database Manager for Food
          Concepts. The plan was that this implementation by Avante would allow
          the organization to keep track of their various brands and all other
          aspects of running a fast growing organization on a daily basis. The
          Database Management System will keep Food Concepts on course as they
          work towards achieving their goal of becoming Africa’s No. 1 Chicken
          Quick Service Restaurant and Nigeria’s No. 1 poultry supplier.
        </p>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FoodConcept;
