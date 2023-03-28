import React, { useState } from "react";
import { useRouter } from "next/router";
import $ from "jquery";
import { HiMenuAlt1, HiMenu } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import Switcher from "./Switcher";
// logo
const Logo1 = "/assets/LOGOS/logow-wbg.jpg";
const Nav = () => {
  const router = useRouter();
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
  // Functions for mobile navbar slider button
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    $("#sideMenu").toggleClass("translate-x-full");
    $("#sideButton").toggleClass("active");
    setIsOpen(!isOpen);
  };
  const resize = () => {
    $("#sideMenu").addClass("translate-x-full");
  };
  return (
    <div>
      {/* desktop nav */}
      <div className="hidden md:flex items-center justify-between py-4 ">
        <a href="/" className="">
          <div
            className=" w-16 h-10 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${Logo1}')`,
            }}
          />
        </a>
        <div class="flex text-black">
          <div class="flex text-xl">
            {navOptions.map((option) => (
              <a
                className={`mx-5 border-b-2  hover:border-astra-slate py-1 hover:text-black ${
                  router.asPath == option.link
                    ? " border-black"
                    : "border-white"
                }`}
                href={`${option.link}`}
              >
                {option.name}
                {/* {console.log(
                  option.link,
                  router.asPath,
                  router.asPath == option.link
                )} */}
              </a>
            ))}
          </div>
          {/* socials */}
          <div className="flex items-center text-2xl ml-2">
            <a href="">
              <BsWhatsapp className="text-xl text-astra-slate hover:text-black mx-2" />
            </a>
            <a href="">
              <AiOutlineInstagram className="text-astra-slate hover:text-black mx-2" />
            </a>
            <a href="">
              <HiOutlineMail className="text-astra-slate hover:text-black mx-2" />
            </a>
          </div>
        </div>
        {/* <div class="px-3">
          <Switcher />
        </div> */}
      </div>
      {/* mobile navbar */}
      <div className="md:hidden   overflow-hidden p-3 top-0 fixed z-50 w-full flex justify-between items-center h-auto text-black bg-white">
        <a href="/" className="ml-2">
          <div
            className=" w-16 h-10 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${Logo1}')`,
            }}
          />
        </a>
        <nav
          id="sideMenu"
          className="text-xl sideMenu fixed p-36 text-center bg-white inset-y-0 right-0 transform transition items-center translate-x-full duration-500 ease-in-out uppercase min-h-screen w-full flex z-10 flex-col justify-around min-w-screen "
        >
          {navOptions.map((value, key) => (
            <div key={key} className=" text-center w-96" onClick={resize}>
              <a href={value.link}>{value.name}</a>
            </div>
          ))}
          <div className="flex items-center text-4xl ml-2">
            <a href="">
              <BsWhatsapp className="text-3xl text-astra-slate hover:text-black mx-5" />
            </a>
            <a href="">
              <AiOutlineInstagram className="text-astra-slate hover:text-black mx-5" />
            </a>
            <a href="">
              <HiOutlineMail className="text-astra-slate hover:text-black mx-5" />
            </a>
            {/* linkedIN */}
          </div>
        </nav>
        <button onClick={handleToggle} className="z-50 flex " id="sideButton">
          {!isOpen ? (
            <HiMenuAlt1 className="w-10 h-10" />
          ) : (
            <HiMenu className="w-10 h-10 " />
          )}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 200 200"
          >
            <g stroke-width="6.5" stroke-linecap="round">
              <path
                d="M72 82.286h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="#fff"
              />
              <path
                d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                fill="none"
                stroke="#ffffff"
              />
              <path
                d="M72 125.143h28.75"
                fill="#ffffff"
                fill-rule="evenodd"
                stroke="#fff"
              />
              <path
                d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                fill="none"
                stroke="#fff"
              />
              <path
                d="M100.75 82.286h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="#fff"
              />
              <path
                d="M100.75 125.143h28.75"
                fill="#ff0"
                fill-rule="evenodd"
                stroke="#fff"
              />
            </g>
          </svg> */}
        </button>
      </div>
    </div>
  );
};

export default Nav;
