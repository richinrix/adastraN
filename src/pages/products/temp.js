import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FAQ from "@/components/FAQ";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import QuoteOverlay from "@/components/QuoteOverlay";
import { getProduct } from "@/services";
const product = () => {
  const products = {
    1234: {
      name: "Dessicated Coconut Powder",
      hsn: "  08011100",
      variants: ["variant1", "variant2", "variant3"],
      moisture: ["20%", "10%", "5%"],
      fat: ["20%", "10%", "5%"],
      description:
        "Desiccated coconut is a popular food ingredient made from the dried and grated flesh of mature coconuts. It is widely used in various culinary applications, such as baking, confectionery, and cooking. Desiccated coconut at ADASTRA is available in different forms, including fine or medium shredded, flaked, or even powdered.",
      image: "/assets/products/AdAstra_DC_Box.jpg",
      image2: "/assets/products/AdAstra_DC_Box.jpg",
      image3: "/assets/products/AdAstra_DC_Box.jpg",
      importCountries: ["USA", "UK", "Canada", "Australia", "New Zealand"],
    },
    1244: {
      name: "Dessicated Coconut Powder",
      hsn: "  15131990/15131111",
      variants: ["variant1", "variant2", "variant3"],
      moisture: ["20%", "10%", "5%"],
      fat: ["20%", "10%", "5%"],
      description:
        "Desiccated coconut is a popular food ingredient made from the dried and grated flesh of mature coconuts. It is widely used in various culinary applications, such as baking, confectionery, and cooking. Desiccated coconut at ADASTRA is available in different forms, including fine or medium shredded, flaked, or even powdered.",
      image: "/assets/products/AdAstra_DC_Glass.jpg",
      image2: "/assets/products/AdAstra_DC_Glass.jpg",
      image3: "/assets/products/AdAstra_DC_Glass.jpg",
    },
    1254: {
      name: "Dessicated Coconut Powder",
      hsn: " 44029090/ 44029010 ",

      image: "/assets/products/AdAstra_DC_Ziplock.jpg",
      image2: "/assets/products/AdAstra_DC_Ziplock.jpg",
      image3: "/assets/products/AdAstra_DC_Ziplock.jpg",
      variants: ["variant1", "variant2", "variant3"],
      moisture: ["20%", "10%", "5%"],
      fat: ["20%", "10%", "5%"],
      description:
        "Desiccated coconut is a popular food ingredient made from the dried and grated flesh of mature coconuts. It is widely used in various culinary applications, such as baking, confectionery, and cooking. Desiccated coconut at ADASTRA is available in different forms, including fine or medium shredded, flaked, or even powdered.",
    },
    1264: {
      name: "Dessicated Coconut Powder",
      hsn: " 96149020 ",
      variants: ["variant1", "variant2", "variant3"],
      moisture: ["20%", "10%", "5%"],
      fat: ["20%", "10%", "5%"],
      description:
        "Desiccated coconut is a popular food ingredient made from the dried and grated flesh of mature coconuts. It is widely used in various culinary applications, such as baking, confectionery, and cooking. Desiccated coconut at ADASTRA is available in different forms, including fine or medium shredded, flaked, or even powdered.",
      image: "/assets/products/AdAstra_Double_BBQ_Box.jpg",
      image2: "/assets/products/AdAstra_Double_BBQ_Box.jpg",
      image3: "/assets/products/AdAstra_Double_BBQ_Box.jpg",
    },
    1274: {
      name: "Dessicated Coconut Powder",
      hsn: " 38021000 ",
      variants: ["variant1", "variant2", "variant3"],
      moisture: ["20%", "10%", "5%"],
      fat: ["20%", "10%", "5%"],
      description:
        "Desiccated coconut is a popular food ingredient made from the dried and grated flesh of mature coconuts. It is widely used in various culinary applications, such as baking, confectionery, and cooking. Desiccated coconut at ADASTRA is available in different forms, including fine or medium shredded, flaked, or even powdered.",
      image: "/assets/products/AdAstra_Hookah_Cubes.jpg",
      image2: "/assets/products/AdAstra_Hookah_Cubes.jpg",
      image3: "/assets/products/AdAstra_Hookah_Cubes.jpg",
    },
    1284: {
      name: "Dessicated Coconut Powder",
      hsn: " 53050040 ",

      image: "/assets/products/AdAstra_Two_CocoOil.jpg",
      image2: "/assets/products/AdAstra_Two_CocoOil.jpg",
      image3: "/assets/products/AdAstra_Two_CocoOil.jpg",
      variants: ["variant1", "variant2", "variant3"],
      moisture: ["20%", "10%", "5%"],
      fat: ["20%", "10%", "5%"],
      description:
        "Desiccated coconut is a popular food ingredient made from the dried and grated flesh of mature coconuts. It is widely used in various culinary applications, such as baking, confectionery, and cooking. Desiccated coconut at ADASTRA is available in different forms, including fine or medium shredded, flaked, or even powdered.",
    },
    1294: {
      name: "Dessicated Coconut Powder",
      hsn: " 53050040 ",

      image: "/assets/products/AdAstra_Single_BBQ_Box.jpg",
      image2: "/assets/products/AdAstra_Single_BBQ_Box.jpg",
      image3: "/assets/products/AdAstra_Single_BBQ_Box.jpg",
      variants: ["variant1", "variant2", "variant3"],
      moisture: ["20%", "10%", "5%"],
      fat: ["20%", "10%", "5%"],
      description:
        "Desiccated coconut is a popular food ingredient made from the dried and grated flesh of mature coconuts. It is widely used in various culinary applications, such as baking, confectionery, and cooking. Desiccated coconut at ADASTRA is available in different forms, including fine or medium shredded, flaked, or even powdered.",
    },
    1304: {
      name: "Dessicated Coconut Powder",
      hsn: " 53050040 ",

      image: "/assets/products/AdAstra_HEX_BBQ_Box.jpg",
      image2: "/assets/products/AdAstra_HEX_BBQ_Box.jpg",
      image3: "/assets/products/AdAstra_HEX_BBQ_Box.jpg",
      variants: ["variant1", "variant2", "variant3"],
      moisture: ["20%", "10%", "5%"],
      fat: ["20%", "10%", "5%"],
      description:
        "Desiccated coconut is a popular food ingredient made from the dried and grated flesh of mature coconuts. It is widely used in various culinary applications, such as baking, confectionery, and cooking. Desiccated coconut at ADASTRA is available in different forms, including fine or medium shredded, flaked, or even powdered.",
    },
    1314: {
      name: "Dessicated Coconut Powder",
      hsn: " 53050040 ",

      image: "/assets/products/AdAstra_Payment_Terms.jpg",
      image2: "/assets/products/AdAstra_Payment_Terms.jpg",
      image3: "/assets/products/AdAstra_Payment_Terms.jpg",
      variants: ["variant1", "variant2", "variant3"],
      moisture: ["20%", "10%", "5%"],
      fat: ["20%", "10%", "5%"],
      description:
        "Desiccated coconut is a popular food ingredient made from the dried and grated flesh of mature coconuts. It is widely used in various culinary applications, such as baking, confectionery, and cooking. Desiccated coconut at ADASTRA is available in different forms, including fine or medium shredded, flaked, or even powdered.",
    },
  };

  const [product, setProduct] = useState();
  const fetchProduct = async () => {
    console.log(router.query.id);
    const product = await getProduct(id);
    setProduct(product);
  };

  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    console.log("before timeout", router.isReady);
    setTimeout(() => {
      console.log("after timeout", router.isReady);
    }, 500);
    const queryParameters = new URLSearchParams(window.location.search);
    const test = queryParameters.get("id");
    console.log("window", test);
  }, []);

  // const product = id ? products[id].name : undefined;
  const [showMore, setShowMore] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [variants, setVariants] = useState();
  const [moisture, setMoisture] = useState();
  const [fat, setFat] = useState();
  const [importCountry, setImportCountry] = useState();
  return <div>{router.query.id}</div>;
  <div className=" select-non w-full h-full  ">
    <div class="  w-full h-full flex items-center justify-center">
      {showQuote && <QuoteOverlay setShowQuote={setShowQuote} />}
    </div>
    {product !== undefined ? (
      <div className="text-black px-5 w-full   my-10">
        <div className="md:text-5xl text-2xl text-center md:text-left w-full">
          {products[id].name}
        </div>
        <div class="md:text-2xl text-astra-slate">HSN : {products[id].hsn}</div>
        {/* hero */}
        <div class="flex md:flex-row flex-col w-full items-center my-10 h-auto">
          <div className="w-full">
            <Carousel
              className="w-full md:w-[450px]"
              showStatus={false}
              infiniteLoop
              showArrows={true}
            >
              <div
                class="bg-contain w-full h-[50vh] md:h-[450px] md:w-[450px] bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${products[id].image})`,
                }}
              ></div>
              <div
                class="bg-contain w-full h-[50vh] md:h-[450px] md:w-[450px] bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${products[id].image})`,
                }}
              ></div>
              <div
                class="bg-contain w-full h-[50vh] md:h-[450px] md:w-[450px] bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${products[id].image})`,
                }}
              ></div>
            </Carousel>
          </div>

          <div class="flex flex-col md:px-10 justify-between text-base md:text-xl">
            <div class=" leading-none">{products[id].description.split()}</div>
            {/* variants */}
            <div className="my-1 md:my-4 ">
              <div class="md:text-xl px-2 py-1 w-max bg-gray-100">Variants</div>
              <div class="flex mt-3">
                {products[id].variants.map((variant) => (
                  <div class="px-2 mx-1 border-2 border-astra-slate text-base ">
                    {variant}
                  </div>
                ))}
              </div>
            </div>
            {/* moisture  */}
            <div className="my-1 md:my-4 ">
              <div class="md:text-xl px-2 py-1 w-max bg-gray-100">
                moisture level
              </div>
              <div class="flex mt-3">
                {products[id].moisture.map((moi) => (
                  <div class="px-2 mx-1 border-2 border-astra-slate text-base ">
                    {moi}
                  </div>
                ))}
              </div>
            </div>
            {/* fat content */}
            <div className="my-1 md:mt-4 ">
              <div class="md:text-xl px-2 py-1 w-max bg-gray-100">
                fat content
              </div>
              <div class="flex mt-3">
                {products[id].fat.map((content) => (
                  <div class="px-2 mx-1 border-2 border-astra-slate text-base ">
                    {content}
                  </div>
                ))}
              </div>
              {/* right side importing country */}
            </div>
            {/* get quote */}
            <div
              onClick={() => setShowQuote(true)}
              className="bg-astra-slate text-white font-zuumeB tracking-widest px-3 py-1 cursor-pointer mt-5 w-max hover:bg-black"
            >
              Get Quote
            </div>
          </div>
        </div>
        {/* TODO: SPLIT SCREEN : mood board on right , dessc on left */}
        <div class=" mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="w-full md:w-1/2 text-center px-5 md:px-10 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            necessitatibus temporibus molestiae dolore ullam natus autem
            aspernatur cumque quae, commodi illo doloremque facere quia culpa
            nulla maiores officiis ipsum aperiam sunt minima! Aliquam, provident
            saepe. Et, at. Dolore, autem nulla?
          </div>
          <div class="w-full md:w-1/2 md:pl-10 flex justify-end">
            <div
              className=" bg-contain bg-no-repeat bg-center w-full md:w-[300px] h-[50vh] md:h-[300px]"
              style={{
                backgroundImage: `url(${products[id].image})`,
              }}
            />
          </div>
        </div>
        <div
          class="w-full flex-col flex text-center items-center justify-center cursor-pointer mt-10"
          onClick={(e) => setShowMore(!showMore)}
        >
          <div class="text-sm text-astra-slate">
            Show {showMore ? "Less" : "More"}
          </div>
          {showMore ? (
            <BsChevronDoubleUp className="text-xl my-1" />
          ) : (
            <BsChevronDoubleDown className="text-xl my-1" />
          )}
        </div>
        {/* on showmore show faq */}
        {showMore && (
          <>
            <div className="my-10">
              <FAQ />
            </div>
            <div class="text-2xl">certificates we provide</div>
            <div class="flex flex-wrap items-center  ">
              <div class="bg-gray-100 h-20 w-20 mx-4 my-1"></div>
              <div class="bg-gray-100 h-20 w-20 mx-4 my-1"></div>
              <div class="bg-gray-100 h-20 w-20 mx-4 my-1"></div>
              <div class="bg-gray-100 h-20 w-20 mx-4 my-1"></div>
            </div>
          </>
        )}
        {/* display  certificates provided -
         */}
        {/* faq */}
      </div>
    ) : (
      <div class="w-full text-black text-5xl text-center">
        Product Not Found
      </div>
    )}
  </div>;
};

export default product;

// get quote form
//  name email phone*
//
