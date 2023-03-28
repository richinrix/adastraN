import React from "react";

const ProductsDisplay = ({ products }) => {
  console.log(products);
  // products.map((product) => console.log(product));
  const productsdev = [
    {
      productId: 1234,
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_DC_Box.jpg",
    },
    {
      productId: 1244,
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_DC_Glass.jpg",
    },
    {
      productId: 1254,
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_DC_Ziplock.jpg",
    },
    {
      productId: 1264,
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_Double_BBQ_Box.jpg",
    },
    {
      productId: 1274,
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_Hookah_Cubes.jpg",
    },
    {
      productId: 1284,
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_Two_CocoOil.jpg",
    },
    {
      productId: 1294,
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_Single_BBQ_Box.jpg",
    },
    {
      productId: 1304,
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_Single_BBQ_Box.jpg",
    },
    {
      productId: 1314,
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_Payment_Terms.jpg",
    },
  ];
  return (
    <div className="flex flex-wrap  w-full h-full justify-center md:justify-between items-center py-8 px-5 md:px-0 ">
      {products.length !== 0 &&
        products.map((product) => (
          <a href={`/products/${product.id}`} className="mx-4">
            <img
              src={product.image1.url}
              className="w-full hover:opacity-75 duration-150 ease-linear md:w-auto md:h-[340px] my-8 border-[2px] border-astra-slate "
              alt=""
            />
          </a>
          // <div
          //   class=" h-[288px] min-w-[288px]  max-w-full col-span-1 bg-cover bg-center border-4 border-astra-slate mx-auto my-auto"
          //   style={{
          //     backgroundImage: `url(${product.image})`,
          //   }}
          // />
        ))}
    </div>
  );
};

export default ProductsDisplay;
