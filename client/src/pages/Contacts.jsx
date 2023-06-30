import styles from "../style";
import fone from "../images/fone.png";
import email from "../images/email.png";
import smallcontact from "../images/smallcontact.png";
import redphone from "../images/redphone.png";
import redmail from "../images/redmail.png";
import React, { useState } from "react";
import { Axios } from "axios";

const Contacts = () => {
  const url = "http://localhost:5000/feeback";
  const [data, setData] = useState({
    name: "",
    email: "",
    reason: "",
    msg: "",
  });
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      email: data.email,
      reason: data.reason,
      msg: data.msg,
    });
  }
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  return (
    <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="ml-44 grid mb-12 mt-12 place-items-center hidden md:block relative">
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
                    Penthouse 11B, Kayode Otitoju Street, Off Admiralty <br />{" "}
                    Road, Lekki Phase 1, Lagos
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
                      <p className="text-white text-[10px]  ">
                        info@avante-cs.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => submit(e)}>
              <div className=" mx-12">
                <div>
                  <input
                    onChange={(e) => handle(e)}
                    id="name"
                    value={data.name}
                    type="text"
                    placeholder="Your full name"
                    className="w-full mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2"
                  />
                </div>{" "}
                <input
                  onChange={(e) => handle(e)}
                  id="email"
                  value={data.email}
                  type="text"
                  placeholder="Your e-mail address"
                  className="w-full mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2"
                />
                <input
                  onChange={(e) => handle(e)}
                  id="reason"
                  value={data.reason}
                  type="text"
                  placeholder="Your reason"
                  className="w-full mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2"
                />
                <textarea
                  onChange={(e) => handle(e)}
                  id="msg"
                  value={data.msg}
                  type="text"
                  placeholder="drop a message here..."
                  className="w-full mt-12 px-3 h-24 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2"
                />
                <button
                  onClick={submit}
                  value="submit"
                  type="submit"
                  className="bg-secondary text-white flex flex-start font-bold py-2 px-12 rounded ml-[450px] mt-6"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="block md:hidden flex-col flex justify-center item-center bg-background mb-12">
          <div>
            {" "}
            <img src={smallcontact} alt="smallcontact" />
          </div>
          <div className="flex-center bg-background mt-12  ">
            <h1 className="font-inter font-semibold text-[48px] text-secondary  mb-8">
              Start a new{" "}
              <span className="underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px]">
                project!
              </span>
            </h1>
            <h3 className="font-inter font-semibold ">
              Avante Consulting{" "}
              <span className="text-secondary">Solutions</span>{" "}
            </h3>

            <p className="font-inter font-normal text-[12px] mt-8 w-[353px] max-w-[300px]  leading-[25.8px]">
              We have four growth pillars namely, Consulting, Avantesoft,
              Technology & Social Media Management.
            </p>
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-[280px] mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 text-[10px] block"
                />
              </div>{" "}
              <input
                type="text"
                placeholder="Your e-mail address"
                className="w-[280px] mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 block text-[10px]"
              />
              <input
                type="text"
                placeholder="Your reason"
                className="w-[280px] mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 block text-[10px]"
              />
              <input
                type="text"
                placeholder="drop a message here..."
                className="w-[280px] mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 block text-[10px]"
              />
              <button className="bg-secondary text-white flex flex-start font-bold py-2 px-12 rounded ml-24 mb-12 mt-6">
                Submit
              </button>
            </div>
            <div className="w-[349px] h-[42px] mb-8  ">
              {" "}
              <p className=" font-inter font-normal text-[16px] max-w-[300px] text-secondary ">
                Talk to us on any of these and we will be here to help.
              </p>
            </div>
            <div className="w-[279px] h-[59px] leading-[20.8px]  ">
              <h1 className="font-inter font-semibold text-[16px] text-primary">
                CONTACT INFO
              </h1>
              <p className="font-inter font-normal text-[12px] text-black1 ">
                Penthouse 11B, Kayode Otitoju Street, Off Admiralty Road, Lekki
                Phase 1, Lagos
              </p>
            </div>
            <div className="overflow-auto ml-4  flex items-center mt-4 mb-2">
              <img
                src={redmail}
                alt="mail"
                className="w-[14px] h-[14px] mr-4 object-contain"
              />
              <p className="text-[16px] text-black1 font-inter">
                info@avante-cs.com
              </p>
            </div>
            <div className="overflow-auto ml-4  flex items-center ">
              <img
                src={redphone}
                alt="phone"
                className="w-[14px] h-[14px] mr-4  object-contain"
              />
              <p className="text-[16px] text-black1 font-inter text-[12px] underline decoration-1 underline-offset-4 decoration-black1 decoration:w-4 underline-offset-[20px">
                +234 -1-2953541
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Contacts;
