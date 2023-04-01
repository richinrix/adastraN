import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <div className="dark:bg-astra-slate min-h-screen flex flex-col justify-between dark:text-astra-powder bg-astra-lightBeige pt-10 md:pt-0 font-zuume text-astra-slate tracking-wider ">
      <div className=" ">
        <Nav />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
