import React, { useState } from "react";
import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import { IoChatbubblesOutline } from "react-icons/io5";
import { ImWhatsapp, ImLinkedin } from "react-icons/im";
import { BiPhoneCall } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { createContact } from "@/services";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    mail: "",
    helpOptions: "",
  });
  const [helpOption, setHelpOption] = useState(" ");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ ...form, helpOptions: helpOption });
    // console.log("clicked", form, helpOption);
    createContact(form);
  };

  return (
    <div class="px-5 md:px-12 flex pt-10 flex-col-reverse md:flex-row justify-between w-full text-black">
      <div className="w-full md:w-2/6 md:pr-4 flex flex-col justify-between md:py-8 md:mb-0 mb-12 ">
        <div>
          <div class="flex">
            <IoChatbubblesOutline className="text-2xl text-black  mr-4" />
            <div className="flex flex-col">
              <div class="text-xl font-bold">Chat to us</div>
              <div class="text-base">Our friendly team is here to help.</div>
              <a
                href="mailto:SUPPORT@ADASTRAEXIM.COM"
                className=" text-sm font-bold lowercase"
              >
                SUPPORT@ADASTRAEXIM.COM
              </a>
              <a
                href="mailto:CONTACT@ADASTRAEXIM.COM"
                className=" text-sm font-bold lowercase"
              >
                CONTACT@ADASTRAEXIM.COM
              </a>
              {/* <a
                href="mailto:ronak@ADASTRAEXIM.COM"
                className=" text-sm font-bold lowercase"
              >
                ronak@ADASTRAEXIM.COM
              </a> */}
            </div>
          </div>
          <div class=" mt-8 flex">
            <BiPhoneCall className="text-2xl   mr-4" />
            <div>
              <div>
                <div class="text-xl font-bold">Call us</div>
                <div class="text-base">We're available 24/7 </div>
              </div>
              <a
                href="tel:+917975003221"
                className="lowercase text-sm font-bold"
              >
                +91 79750 03221
              </a>
            </div>
          </div>
        </div>
        {/* socials */}
        <div className="hidden md:flex items-center text-astra-darkBeige ">
          <a
            className=" rounded-md border-2 hover:border-black hover:text-black border-astra-darkBeige p-2 text-center mr-4 "
            href="https://instagram.com/adastra_exim?igshid=ZDdkNTZiNTM="
            target="_blank"
          >
            <AiFillInstagram className="text-2xl " />
          </a>
          <a
            className=" rounded-md border-2 hover:border-black hover:text-black border-astra-darkBeige p-2 text-center mr-4 "
            href="https://wa.me/message/MO52YNXKGYKUO1"
            target="_blank"
          >
            <ImWhatsapp className="text-xl " />
          </a>
          <a
            className=" rounded-md border-2 hover:border-black hover:text-black border-astra-darkBeige p-2 text-center mr-4 "
            href="www.linkedin.com/company/adastraexim/"
            target="_blank"
          >
            <ImLinkedin className="text-xl " />
          </a>
        </div>
      </div>
      <form
        id="contact-form"
        class="w-full md:w-4/6  bg-astra-darkBeige text-white p-5 mb-10 md:mb-10 md:py-12 md:px-12 rounded-xl"
      >
        <div class="text-4xl font-bold">
          Got a question? We'd love to hear from you.
        </div>
        <div className="mt-3">
          Send us a message and we'll get back to you as soon as possible.
        </div>

        <input
          type="text"
          placeholder="Your name"
          onChange={handleChange}
          name="name"
          className="py-3 my-4 w-full outline-none border-b-2 border-black bg-transparent placeholder:text-white"
        />
        <input
          type="mail"
          placeholder="you@email.com"
          onChange={handleChange}
          name="mail"
          className="py-3 my-4 w-full outline-none border-b-2 border-black bg-transparent placeholder:text-white"
        />
        <input
          type="text"
          placeholder="Phone number"
          onChange={handleChange}
          name="phoneNumber"
          className="py-3 my-4 w-full outline-none border-b-2 border-black bg-transparent placeholder:text-black"
        />

        <div className="my-4">
          <div>How can we help?</div>
          {/* checkboxes */}
          <div class="md:flex text-sm font-bold tracking-tight">
            {" "}
            <div class="flex">
              <input
                type="checkbox"
                onChange={(e) => setHelpOption(helpOption + " place order ")}
                name="helpOptions"
                className="mr-2  checked:bg-black  focus:bg-black  "
              />
              <div class="text-xl md:mr-4">Place Order</div>
            </div>
            <div class="flex">
              <input
                type="checkbox"
                onChange={(e) => setHelpOption(helpOption + " enquire ")}
                className="mr-2  checked:bg-black  focus:bg-black  "
              />
              <div class="text-xl md:mr-4">Enquire</div>
            </div>
            <div class="flex">
              <input
                type="checkbox"
                onChange={(e) => setHelpOption(helpOption + " import ")}
                className="mr-2  checked:bg-black  focus:bg-black  "
              />
              <div class="text-xl md:mr-4">Import </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          class=" cursor-pointer w-full bg-black text-white text-center py-2 rounded-md mt-12"
        >
          Let's get started
        </button>
      </form>
    </div>
  );
};

export default Contact;
// check whatsapp for contact page
