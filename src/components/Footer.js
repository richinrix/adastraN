import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp, BsSignal } from "react-icons/bs";

const Footer = () => {
  const navOptions = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact ",
      link: "/contact",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
  ];
  return (
    <div className="py-10 text-black px-5">
      <div class="hidden  md:flex justify-between ">
        <img src="/assets/LOGOS/logo2.jpg" class="   md:w-56   md:h-56" />
        <div class="flex flex-col justify-center items-center">
          <div class="h-[4px] md:w-[600px] bg-astra-slate my-8 rounded-r-full rounded-l-full" />
          <div className="flex items-center text-3xl mb-8">
            <a href="">
              <BsWhatsapp className="text-astra-slate text-2xl hover:text-black mx-3" />
            </a>
            <a href="">
              <AiOutlineInstagram className="text-astra-slate hover:text-black mx-3" />
            </a>
            <a href="">
              <HiOutlineMail className="text-astra-slate hover:text-black mx-3" />
            </a>
          </div>
          <div className="flex items-center text-xl">
            {navOptions.map((value, key) => (
              <div
                key={key}
                className=" text-center mx-6 border-b-2 border-white hover:border-astra-slate duration-200 ease-in-out "
              >
                <a href={value.link}>{value.name}</a>
              </div>
            ))}
          </div>
        </div>
        <div class="hidden md:block w-56 h-56" />
      </div>

      <div class="h-[2px] w-full md:hidden bg-astra-slate my-2 rounded-r-full rounded-l-full" />
      <img
        src="/assets/LOGOS/logo2.jpg"
        class=" md:hidden w-24  h-24 mx-auto"
      />
      <div class="  text-black text-center w-full my-5 md:my-0 text-xs md:text-base">
        Copyrights © {new Date().getFullYear()} All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
