import Head from "next/head";
import React, { useState, useEffect } from "react";
import ProductsDisplay from "@/components/ProductsDisplay";
import { getProducts } from "@/services";
import { useRouter } from "next/router";

const bannerImage = "/assets/images/home_banner.jpg";
const image2 = "/assets/images/AdAstra_Outdoor_Billboard.jpg";

export default function Home() {
  const [products, setProducts] = useState([]);
  // const fetchProducts = async () => {
  //   const products = await getProducts();
  //   setProducts(products);
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  // const router = useRouter();
  // const { id } = router.query;
  // useEffect(() => {
  //   console.log(router.isReady);

  //   if (router.isReady) console.log(router.query.id);
  // }, []);
  return (
    <div className=" min-h-full  ">
      <Head>
        <title>ADASTRA</title>
        <meta
          name="description"
          content="AdAstra Exports and Imports. Imports and exports made affordable"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* banner with cta */}
      <div class="w-full flex items-center justify-center mt-6 md:mt-0 ">
        <img
          src="/assets/images/home_banner.jpg"
          className="flex flex-col items-center justify-center bg-astra-slate  w-full bg-contain bg-center bg-no-repeat text-astra-powder "
          // style={{
          //   backgroundImage: `url('${bannerImage}')`,
          // }}
        >
          {/* <h1 className="text-4xl font-bold">Astra</h1>
        <p className="text-xl">Astra is a brand of premium quality products</p>
        <button className="bg-astra-darkBeige text-black font-bold py-2 px-4 rounded-lg mt-4">
          Shop Now
        </button> */}
        </img>
      </div>
      <ProductsDisplay products={products} />
    </div>
  );
}
