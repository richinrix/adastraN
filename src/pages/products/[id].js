import React from "react";
import { useRouter } from "next/router";

const product = () => {
  const products = {
    1234: {
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_DC_Box.jpg",
      image2: "/assets/products/AdAstra_DC_Box.jpg",
      image3: "/assets/products/AdAstra_DC_Box.jpg",
    },
    1244: {
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_DC_Glass.jpg",
      image2: "/assets/products/AdAstra_DC_Glass.jpg",
      image3: "/assets/products/AdAstra_DC_Glass.jpg",
    },
    1254: {
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_DC_Ziplock.jpg",
      image2: "/assets/products/AdAstra_DC_Ziplock.jpg",
      image3: "/assets/products/AdAstra_DC_Ziplock.jpg",
    },
    1264: {
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_Double_BBQ_Box.jpg",
      image2: "/assets/products/AdAstra_Double_BBQ_Box.jpg",
      image3: "/assets/products/AdAstra_Double_BBQ_Box.jpg",
    },
    1274: {
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_Hookah_Cubes.jpg",
      image2: "/assets/products/AdAstra_Hookah_Cubes.jpg",
      image3: "/assets/products/AdAstra_Hookah_Cubes.jpg",
    },
    1284: {
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_Two_CocoOil.jpg",
      image2: "/assets/products/AdAstra_Two_CocoOil.jpg",
      image3: "/assets/products/AdAstra_Two_CocoOil.jpg",
    },
    1294: {
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_Single_BBQ_Box.jpg",
      image2: "/assets/products/AdAstra_Single_BBQ_Box.jpg",
      image3: "/assets/products/AdAstra_Single_BBQ_Box.jpg",
    },
    1304: {
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_HEX_BBQ_Box.jpg",
      image2: "/assets/products/AdAstra_HEX_BBQ_Box.jpg",
      image3: "/assets/products/AdAstra_HEX_BBQ_Box.jpg",
    },
    1314: {
      name: "Dessicated Coconut Powder",
      description: " Description",
      image: "/assets/products/AdAstra_Payment_Terms.jpg",
      image2: "/assets/products/AdAstra_Payment_Terms.jpg",
      image3: "/assets/products/AdAstra_Payment_Terms.jpg",
    },
  };

  const router = useRouter();
  const { id } = router.query;
  const product = id ? products[id].name : undefined;
  return (
    <div className="">
      {product !== undefined ? (
        <div className="text-black px-5 md:px-0  my-10">
          <div className="md:text-3xl text-xl text-center md:text-left w-full">
            {products[id].name}
          </div>
          <div class="md:h-30vh flex items-center">
            <div class="text-base md:text-xl text-left text-justify leading-tight md:leading-normal md:text-center px-10 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              perspiciatis illo optio, temporibus voluptatum ut ex soluta!
              Veritatis reiciendis atque quidem! Molestiae dolor, provident
              pariatur facere tempore accusantium vero laboriosam aperiam
              commodi doloremque nam exercitationem quo, aut voluptatum enim
              alias.
            </div>
          </div>
          <div class="flex flex-col md:flex-row w-full  justify-between">
            <div class="my-4 md:my-0 w-full md:w-1/3 h-[250px] md:h-[300px] md:pr-10">
              <div
                class="w-full h-full bg-no-repeat md:bg-cover bg-contain bg-center"
                style={{
                  backgroundImage: `url(${products[id].image})`,
                }}
              />
            </div>
            <div class="my-4 md:my-0 w-full md:w-1/3 h-[250px] md:h-[300px]">
              <div
                class="w-full h-full bg-no-repeat md:bg-cover bg-contain bg-center"
                style={{
                  backgroundImage: `url(${products[id].image2})`,
                }}
              />
            </div>
            <div class="my-4 md:my-0 w-full md:w-1/3 h-[250px] md:h-[300px] md:pl-10">
              <div
                class="w-full h-full bg-no-repeat md:bg-cover bg-contain bg-center"
                style={{
                  backgroundImage: `url(${products[id].image3})`,
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div class="w-full text-black text-5xl text-center">
          Product Not Found
        </div>
      )}
    </div>
  );
};

export default product;
