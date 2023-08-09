import styles from "../style";
import fone from "../images/fone.png";
import email1 from "../images/email1.png";
import smallcontact from "../images/smallcontact.png";
import redphone from "../images/redphone.png";
import redmail from "../images/redmail.png";
import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [employment, setEmployment] = useState("");

  const [country, setCountry] = useState();
  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
  });

  const form = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCountryState({
          ...countryState,
          loading: true,
        });
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get(dataUrl);
        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false,
        });
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,
          errorMessage: "Something went wrong",
        });
      }
    };
    fetchData();
  }, [countryState]);

  const { countries } = countryState;

  const handleSubmit = (event) => {
    event.preventDefault();

    const commentData = {
      name,
      email,
      reason,
      employment,
      country,
      details,
    };
    // https://avante-css.onrender.com/api/v1/comment
    fetch("http://localhost:5000/api/v1/comment", {
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
        sendEmail();
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
        "service_p6mfgac",
        "template_cbxm7h3",
        form.current,
        "ECfFboSu0y_L9md9N"
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
    setEmployment("");
    setCountry();
    setDetails("");
  };

  return (
    <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="ml-32  mb-12 mt-12 place-items-center hidden md:block relative">
          <div className="bg-white rounded-md  flex flex-row">
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
                    We have four growth pillars namely, <br />
                    Business Consulting, Software Development, SAS Analytics &
                    eGain Collaboration
                  </p>
                  <p className="font-inter font-normal -mt-8 text-dimWhite text-[10px] leading-[20.8px] mb-8">
                    Talk to us on any of these and we will be here to help.
                  </p>
                  <h3 className="text-secondary -mt-4">CONTACT INFO</h3>
                  <p className="font-Inter font-normal text-dimWhite text-[10px] leading-[20.8px] mb-8">
                    66 Bode Thomas, Surulere, Lagos.{" "}
                  </p>{" "}
                  <div className="flex flex-row -mt-4">
                    <div>
                      <img src={fone} alt="fone" className="h-3 w-3 mr-2" />
                    </div>

                    <div>
                      <p className="text-white text-[10px] ">+234 -1-2953541</p>
                    </div>
                  </div>
                  <div className="flex flex-row py-4 ">
                    <div>
                      <img src={email1} alt="email" className="h-3 w-3 mr-2 " />
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
                    className="w-full  px-3 h-4 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2"
                    required
                  />
                </div>{" "}
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  value={email}
                  type="text"
                  name="from_email"
                  placeholder="Email Address"
                  className="w-full mt-12 px-3 h-4 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2"
                  required
                />
                {/* <input
                  onChange={(e) => setReason(e.target.value)}
                  id="subject"
                  value={reason}
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full mt-12 px-3 h-8  outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 mb-16"
                /> */}
                <select
                  onChange={(e) => setReason(e.target.value)}
                  id="subject"
                  value={reason}
                  type="text"
                  name="subject"
                  placeholder="services"
                  data-te-select-init
                  className="w-full mt-12 px-3 h-12  outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 mb-16"
                  required
                >
                  <option
                    hidden
                    selected
                    className="font-inter font-normal text-[14px] text-gray5"
                  >
                    -- Select Services --
                  </option>
                  <option>Business Consulting</option>
                  <option>Software Development</option>
                  <option>SAS Analytics</option>
                  <option>eGain Collaboration</option>
                  <option>eGain Knowledge</option>
                  <option>Social Media Management</option>
                  <option>Web Development</option>
                </select>
                <select
                  name="from_country"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  data-te-select-init
                  className="w-full  px-3 h-12  outline-none border  border-r-white border-l-white border-t-white   focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 mb-16"
                  required
                >
                  <option
                    hidden
                    selected
                    className="font-inter font-normal text-[14px] text-gray5"
                  >
                    -- Select country --
                  </option>
                  {countries.map((item) => {
                    return <option key={uuidv4()}>{item.name.common}</option>;
                  })}
                </select>
                <select
                  onChange={(e) => setEmployment(e.target.value)}
                  id="employment"
                  value={employment}
                  type="Number"
                  name="from_employment"
                  placeholder="Select Employment"
                  data-te-select-init
                  className="w-full  px-3   outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 mb-16"
                  required
                >
                  <option
                    hidden
                    selected
                    className="font-inter font-normal text-[14px] text-gray5"
                  >
                    -- Employment Size --
                  </option>
                  <option>1 - 10</option>
                  <option>11 - 25</option>
                  <option>26 - 100</option>
                  <option>Over 100</option>
                </select>
                <textarea
                  onChange={(e) => setDetails(e.target.value)}
                  id="details"
                  value={details}
                  type="text"
                  name="message"
                  placeholder="Type a message here..."
                  className="w-full -mt-4  outline-none border  border-r-white border-l-white border-t-white  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2"
                  required
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
        <div className="block md:hidden flex-col  justify-center item-center bg-background mb-12">
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
              <select
                onChange={(e) => setReason(e.target.value)}
                id="subject"
                value={reason}
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-[280px] mt-12 px-3  outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 block text-[10px]"
              >
                <option
                  hidden
                  selected
                  className="font-inter font-normal text-[14px] text-gray5 mb-4"
                >
                  -- Select Services --
                </option>
                <option>Business Consulting</option>
                <option>Software Development</option>
                <option>SAS Analytics</option>
                <option>eGain Collaboration</option>
                <option>eGain Knowledge</option>
                <option>Social Media Management</option>
                <option>Web Development</option>
              </select>
              <select
                onChange={(e) => setCountry(e.target.value)}
                id="country"
                value={country}
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-[280px] mt-12 px-3  outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 block text-[10px]"
              >
                <option
                  hidden
                  selected
                  className="font-inter font-normal text-[14px] text-gray5 mb-4"
                >
                  -- Select Country --
                </option>
                {countries.map((item) => {
                  return <option key={uuidv4()}>{item.name.common}</option>;
                })}
              </select>
              <select
                onChange={(e) => setReason(e.target.value)}
                id="employment"
                value={employment}
                type="Number"
                name="from_employment"
                className="w-[280px] mt-12 px-3  outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 block text-[10px]"
              >
                <option
                  hidden
                  selected
                  className="font-inter font-normal text-[14px] text-gray5 mb-4"
                >
                  -- Employment Size --
                </option>
                <option>1 - 10</option>
                <option>11 - 25</option>
                <option>26 - 100</option>
                <option>Over 100</option>
              </select>
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
              <p className=" text-black1 font-inter text-[12px] underline decoration-1 underline-offset-4 decoration-black1 decoration:w-4 underline-offset-[20px">
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
