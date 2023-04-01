import React from "react";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp, BsSignal } from "react-icons/bs";
import { ImWhatsapp, ImLinkedin } from "react-icons/im";
import { CiLinkedin } from "react-icons/ci";

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
    <div className="py-10 md:px-10 text-white px-5 bg-astra-darkBeige  ">
      <div class="hidden  md:flex justify-between ">
        <img
          src="/assets/LOGOS/logo-darkbeige.png"
          class="   md:w-56   md:h-56"
        />
        <div class="flex flex-col justify-center items-center">
          <div class="h-[4px] md:w-[600px] bg-astra-lightBeige my-8 rounded-r-full rounded-l-full" />
          <div className="flex items-center text-3xl mb-8">
            <a href="https://wa.me/message/MO52YNXKGYKUO1" target="_blank">
              <BsWhatsapp className="text-astra-lightBeige hover:text-white text-2xl   mx-3" />
            </a>
            <a href="https://instagram.com/adastra_exim?igshid=ZDdkNTZiNTM=">
              <AiOutlineInstagram className="text-astra-lightBeige hover:text-white mx-3" />
            </a>
            <a href="www.linkedin.com/company/adastraexim/" target="_blank">
              <CiLinkedin className="text-astra-lightBeige hover:text-white mx-3" />
            </a>
            <a href="mailto:support@adastraexim.com">
              <HiOutlineMail className="text-astra-lightBeige hover:text-white mx-3" />
            </a>
          </div>
          <div className="flex items-center text-xl">
            {navOptions.map((value, key) => (
              <div
                key={key}
                className=" text-center mx-6 text-astra-lightBeige hover:text-white duration-200 ease-in-out "
              >
                <a href={value.link}>{value.name}</a>
              </div>
            ))}
          </div>
        </div>
        <div class="hidden md:block w-56 h-56" />
      </div>

      <div class="h-[2px] w-full md:hidden bg-astra-lightBeige my-2 rounded-r-full rounded-l-full" />
      <img
        src="/assets/LOGOS/logo-darkbeige.png"
        class=" md:hidden w-24  h-24 mx-auto"
      />
      <div class="  text-astra-lightBeige text-center w-full my-5 md:my-0 text-xs md:text-sm">
        Copyrights © {new Date().getFullYear()} All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
