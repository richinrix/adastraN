import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { BsTelephoneFill } from "react-icons/bs";

const QuoteOverlay = ({ setShowQuote }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    productDetails: "",
  });
  const [phno, setPhno] = useState();
  return (
    <div class="w-full px-5  h-full fixed top-5 md:top-20 flex items-center justify-center md:px-10  z-20  ">
      {/* <div class="w-full h-full bg-gray-500 blur-sm opacity-50"></div> */}
      <div class=" w-full md:w-auto h-auto bg-astra-slate px-5 md:px-10 p-5 md:py-20">
        {/* names */}
        <div className="md:flex-row flex flex-col items-center ">
          <div className=" items-center w-full">
            <div class="text-white md:text-2xl md:mr-4">First Name</div>
            <input
              type="text"
              class="px-2 outline-none py-2 w-full md:w-[300px] bg-astra-powder"
            />
          </div>
          <div className=" items-center md:ml-10 mt-8 md:mt-0 w-full ">
            <div class="text-white md:text-2xl md:mr-4">Last Name</div>
            <input
              type="text"
              class="px-2 outline-none py-2 w-full md:w-[300px] bg-astra-powder"
            />
          </div>
        </div>
        {/* phone number */}
        <div class="md:flex-row flex flex-col items-center mt-8">
          <div className=" items-center w-full ">
            <div class="text-white md:text-2xl mb-1 md:mr-4 flex items-end">
              <div>Phone Number</div>
              <div class="text-xs"> (optional)</div>
            </div>
            <PhoneInput
              placeholder=" "
              defaultCountry="US"
              className="w-full outline-none  md:w-[300px] bg-transparent "
              value={phno}
              onChange={setPhno}
            />
          </div>
          <div className=" items-center md:ml-10 mt-8 md:mt-0 w-full ">
            <div class="text-white md:text-2xl md:mr-4">Email</div>
            <input
              type="text"
              class="px-2 outline-none py-2 w-full md:w-[300px] bg-astra-powder"
            />
          </div>
        </div>
        <div
          onClick={() => setShowQuote(false)}
          className=" mx-auto mt-8 cursor-pointer hover:bg-black hover:text-astra-powder  px-4 py-2 text-2xl bg-astra-powder text-astra-slate tracking-widest max-w-max"
        >
          Get Quote
        </div>
      </div>
    </div>
  );
};

export default QuoteOverlay;
