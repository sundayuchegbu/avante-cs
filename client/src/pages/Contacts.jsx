import styles from "../style";
import fone from "../images/fone.png";
import email from "../images/email.png";

const Contacts = () => {
  return (
    <div
      className="h-screen w-full grid place-items-center bg-slate-100 relative"
      id=""
    >
      <div className="bg-white rounded-md shadow-md flex flex-row">
        <div
          className="bg-black p-8 md-hover:scale-y-110 rounded-md transition md:block"
          id="contact_info"
        >
          <div className="flex justify-between">
            <h1 className={`${styles.heading2}`}>Start a new project!</h1>
          </div>
          <div className="mt-6 flex flex-row">
            <div className=""></div>
            <div className="">
              <h3 className="text-white">
                Avante Consulting{" "}
                <span className="text-secondary">Solutions</span>{" "}
              </h3>
              <p className="font-Inter font-normal text-dimWhite text-[12px] leading-[20.8px] mb-8">
                We have four growth pillars namely, Consulting, <br />{" "}
                Avantesoft, Technology & Social Media <br /> Management.
              </p>
              <p className="font-Inter font-normal text-dimWhite text-[10px] leading-[20.8px] mb-8">
                Talk to us on any of these and we will be here to help.
              </p>
              <h3 className="text-primary">CONTACT INFO</h3>
              <p className="font-Inter font-normal text-dimWhite text-[10px] leading-[20.8px] mb-8">
                Penthouse 11B, Kayode Otitoju Street, Off Admiralty <br /> Road,
                Lekki Phase 1, Lagos
              </p>{" "}
              <div className="flex flex-row">
                <div>
                  <img src={fone} alt="fone" className="h-3 w-3 mr-2" />
                </div>

                <div>
                  <p className="text-white text-[10px] ">+234 -1-2953541</p>
                </div>
              </div>
              <div className="flex flex-row mt-4">
                <div>
                  <img src={email} alt="email" className="h-3 w-3 mr-2" />
                </div>

                <div>
                  <p className="text-white text-[10px]  ">info@avante-cs.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-12" id="contact_us">
          <input
            type="text"
            placeholder="Your full name"
            className="w-full mt-12 px-3 h-10 my-2 outline-none border-r-white border-l-white border-t-white focus:outline-none focus:border-primary "
          />
          <input
            type="text"
            placeholder="Your e-mail address"
            className="w-full mt-12 px-3 h-10 my-2 outline-none border-r-white border-l-white border-t-white focus:border-t-white "
          />
          <input
            type="text"
            placeholder="Your reason"
            className="w-full mt-12 px-3 h-10 my-2 outline-none border-r-white border-l-white border-t-white  "
          />
          <input
            type="text"
            placeholder="drop a message here..."
            className="w-full mt-12 px-3 h-24 my-2  border-r-white border-l-white border-t-white"
          />
          <button className="bg-secondary text-white flex flex-start font-bold py-2 px-12 rounded ml-[450px] mt-6">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
