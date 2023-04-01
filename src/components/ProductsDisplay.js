import React from "react";

const ProductsDisplay = ({ products }) => {
  // console.log({ products });
  // products.map((product) => console.log(product));
  const productsdev = [
    {
      image1: { url: "https://media.graphassets.com/NCACXzphQHyPy4bQpbd0" },
      image2: { url: "https://media.graphassets.com/sCDTkw62QMKfhS8Qob8P" },
      image3: { url: "https://media.graphassets.com/sNCP0UPIQqqFAYUIQCdW" },
      id: "clfiljsgt120e0bpnq5v7x35v",
      productName: "Desiccated Coconut Powder",
    },
    {
      image1: { url: "https://media.graphassets.com/uEMwD7HfRzcX0k3UW1bf" },
      image2: { url: "https://media.graphassets.com/ptsojjvHT2qTGSkaEeqJ" },
      image3: { url: "https://media.graphassets.com/82P6Y2VQlyyK1sHEQLAe" },
      id: "clfimkpbe133r0bpez3iw3egp",
      productName: "Coconut Shell Charcoal Briquette",
    },
    {
      image1: { url: "https://media.graphassets.com/qhVcihxoReq457u5gUty" },
      image2: { url: "https://media.graphassets.com/ATU2LUklT8zZh8jFbaus" },
      image3: null,
      id: "clfin8lhy13h00bpnwk3351k7",
      productName: "Virgin Coconut Oil",
    },
    {
      image1: { url: "https://media.graphassets.com/yHctN6WbTgOgeiRaeldF" },
      image2: null,
      image3: null,
      id: "clfkzxtwr00ak0bponw2uv9yj",
      productName: "Coconut Shell Activated Carbon",
    },
    {
      image1: { url: "https://media.graphassets.com/Vc0DEzEhQaunb8AhDIfs" },
      image2: null,
      image3: null,
      id: "clfl6ex6t00dy0bpm5vn9mx6n",
      productName: "Coconut Shell Hookah Cubes",
    },
    {
      image1: { url: "https://media.graphassets.com/jos9AHAtSM6kEVKOFVnr" },
      image2: { url: "https://media.graphassets.com/7bxx5ha4S7anCIE7TvGW" },
      image3: null,
      id: "clfl7433i00zv0bpmsnb1dx5r",
      productName: "Coconut Fiber Cocopeat",
    },
  ];
  return (
    <div className="md:px-9 ">
      {products ? (
        <div className="flex flex-wrap  w-full h-full justify-center md:justify-between items-center py-8 px-5 md:px-0 ">
          {productsdev.length !== 0 &&
            productsdev.map((product) => (
              <>
                {product.image1 && (
                  <a href={`/products`} className="mx-4">
                    <img
                      src={product.image1 && product.image1.url}
                      className="w-full hover:opacity-75 duration-150 ease-linear md:w-auto md:h-[340px] my-8 border-[2px] border-astra-slate "
                      alt=""
                    />
                  </a>
                )}

                {product.image2 && (
                  <a href={`/products`} className="mx-4">
                    <img
                      src={product.image2 && product.image2.url}
                      className="w-full hover:opacity-75 duration-150 ease-linear md:w-auto md:h-[340px] my-8 border-[2px] border-astra-slate "
                      alt=""
                    />
                  </a>
                )}
                {product.image3 && (
                  <a href={`/products`} className="mx-4">
                    <img
                      src={product.image3 && product.image3.url}
                      className="w-full hover:opacity-75 duration-150 ease-linear md:w-auto md:h-[340px] my-8 border-[2px] border-astra-slate "
                      alt=""
                    />
                  </a>
                )}
              </>
            ))}
          {/* {productsdev.length !== 0 &&
            productsdev.map((product) => (
              <a href={`/products`} className="mx-4">
                <img
                  src={product.image2 && product.image2.url}
                  className="w-full hover:opacity-75 duration-150 ease-linear md:w-auto md:h-[340px] my-8 border-[2px] border-astra-slate "
                  alt=""
                />
              </a>
            ))}
          {productsdev.length !== 0 &&
            productsdev.map((product) => (
              <a href={`/products`} className="mx-4">
                <img
                  src={product.image3 && product.image3.url}
                  className="w-full hover:opacity-75 duration-150 ease-linear md:w-auto md:h-[340px] my-8 border-[2px] border-astra-slate "
                  alt=""
                />
              </a>
            ))} */}
        </div>
      ) : (
        <div>no products</div>
      )}
    </div>
  );
};

export default ProductsDisplay;
