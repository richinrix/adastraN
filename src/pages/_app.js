import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white md:px-9 pt-10 md:pt-0">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
