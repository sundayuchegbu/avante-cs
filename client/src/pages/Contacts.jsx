import styles from "../style";
import fone from "../images/fone.png";
import email1 from "../images/email1.png";
import smallcontact from "../images/smallcontact.png";
import redphone from "../images/redphone.png";
import redmail from "../images/redmail.png";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");

  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const commentData = {
      name,
      email,
      reason,
      details,
    };

    fetch("https://avante-cs-backend.onrender.com/api/v1/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Comment submitted successfully:", data);
        toast.success("Message Submitted Successfully...");
        // sendEmail();
        resetFormFields();
      })
      .catch((error) => {
        console.error("Error submitting comment:", error);
        // Handle any error or show error message to the user
      });
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_qfj2jep",
        "template_ju94j9v",
        form.current,
        "gD3c3lQwYVvx8AiBM"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message was sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const resetFormFields = () => {
    setName("");
    setEmail("");
    setReason("");
    setDetails("");
  };

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
                    66 Bode Thomas, Surulere, Lagos.{" "}
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
                      <img src={email1} alt="email" className="h-3 w-3 mr-2" />
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

            <form ref={form} onSubmit={handleSubmit}>
              <div className=" mx-12">
                <div>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    value={name}
                    name="from_name"
                    type="text"
                    placeholder="Full Name"
                    className="w-full mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2"
                  />
                </div>{" "}
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  value={email}
                  type="text"
                  name="from_email"
                  placeholder="Email Address"
                  className="w-full mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2"
                />
                <input
                  onChange={(e) => setReason(e.target.value)}
                  id="subject"
                  value={reason}
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full mt-12 px-3 h-8  outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 mb-16"
                />
                <textarea
                  onChange={(e) => setDetails(e.target.value)}
                  id="details"
                  value={details}
                  type="text"
                  name="message"
                  placeholder="Type a message here..."
                  className="w-full mt-8 px-3 h-12 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2"
                />
                <button
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
            <form ref={form} onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  value={name}
                  name="from_name"
                  type="text"
                  placeholder="Your full name"
                  className="w-[280px] mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 text-[10px] block"
                />
              </div>{" "}
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                value={email}
                type="text"
                name="from_email"
                placeholder="Your e-mail address"
                className="w-[280px] mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 block text-[10px]"
              />
              <input
                onChange={(e) => setReason(e.target.value)}
                id="subject"
                value={reason}
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-[280px] mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 block text-[10px]"
              />
              <input
                onChange={(e) => setDetails(e.target.value)}
                id="details"
                value={details}
                type="text"
                name="message"
                placeholder="drop a message here..."
                className="w-[280px] mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 block text-[10px]"
              />
              <button className="bg-secondary text-white flex flex-start font-bold py-2 px-12 rounded ml-24 mb-12 mt-6">
                Submit
              </button>
            </form>
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
                66 Bode Thomas, Surulere, Lagos.{" "}
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
