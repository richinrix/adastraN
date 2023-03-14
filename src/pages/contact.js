import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    productDetails: "",
  });
  const [phno, setPhno] = useState();
  return (
    <div class="px-5 md:px-5 flex pt-10 flex-col md:flex-row justify-between w-full text-black">
      <div class="w-full md:w-3/5">
        <form class=" w-full md:w-auto h-auto md:py-20">
          {/* names */}
          <div className="md:flex-row flex flex-col items-center ">
            <div className=" items-center w-full">
              <div class=" md:text-2xl md:mr-4">First Name</div>
              <input
                type="text"
                class="px-2 outline-none py-2 w-full md:w-[300px] text-astra-powder bg-astra-slate"
              />
            </div>
            <div className=" items-center md:ml-10 mt-8 md:mt-0 w-full ">
              <div class=" md:text-2xl md:mr-4">Last Name</div>
              <input
                type="text"
                class="px-2 outline-none py-2 w-full md:w-[300px] text-astra-powder bg-astra-slate"
              />
            </div>
          </div>
          {/* phone number */}
          <div class="md:flex-row flex flex-col items-center mt-8">
            <div className=" items-center w-full ">
              <div class=" md:text-2xl mb-1 md:mr-4 flex items-end">
                <div>Phone Number</div>
                <div class="text-xs"> (optional)</div>
              </div>
              <PhoneInput
                placeholder=" "
                defaultCountry="US"
                className="w-full outline-none  md:w-[300px] contact-page-phoneinput  "
                value={phno}
                onChange={setPhno}
              />
            </div>
            <div className=" items-center md:ml-10 mt-8 md:mt-0 w-full ">
              <div class=" md:text-2xl md:mr-4">Email</div>
              <input
                type="text"
                class="px-2 outline-none py-2 w-full md:w-[300px] bg-astra-slate text-astra-powder"
              />
            </div>
          </div>
          <div
            // onClick={() =>() }
            className="  mt-8 cursor-pointer hover:bg-black border-2 border-astra-slate hover:text-astra-powder  px-4 py-1 text-2xl bg-astra-powder text-astra-slate tracking-widest max-w-max"
          >
            Submit
          </div>
          <div class="text-sm mt-2">[ We will get in touch with you ]</div>
        </form>
      </div>
      <div class="w-full flex md:text-xl flex-col md:w-1/4 mt-10 md:mt-0">
        <div className="mb-3 md:mb-6">Contact</div>
        <a href="mailto:SUPPORT@ADASTRAEXIM.COM">SUPPORT@ADASTRAEXIM.COM</a>
        <a href="mailto:adastraexim@gmail.com">CONTACT@ADASTRAEXIM.COM</a>
        <a href="mailto:ronak@ADASTRAEXIM.COM">ronak@ADASTRAEXIM.COM</a>

        <a href="tel:+917975003221">+91 79755003221</a>

        <div className="mt-5 md:mt-20 mb-3 md:mb-6">Follow</div>
        <a href="" className="underline">
          Instagram
        </a>
        <a href="" className="underline">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
