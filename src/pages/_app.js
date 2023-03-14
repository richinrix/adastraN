import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <div className="dark:bg-astra-slate dark:text-astra-powder bg-white md:px-9 pt-10 md:pt-0 font-zuume text-astra-slate tracking-wider ">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
