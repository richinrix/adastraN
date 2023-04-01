import React from "react";
// import { useRouter } from "next/router";

const prod = () => {
  // const router = useRouter();
  // console.log(router.pathname, router.query);
  return (
    <div className="md:py-0 pt-8">
      <img
        src={image}
        className="w-full md:w-[800px] mx-auto"
        alt="product page"
      />
    </div>
  );
};

export default prod;
