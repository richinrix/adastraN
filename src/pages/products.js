import React from "react";
const image = "/assets/images/productpage.png";
const product = () => {
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

export default product;
