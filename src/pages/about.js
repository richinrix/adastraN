import React from "react";
const image1 = "/assets/images/AdAstra_Container.jpg";
const about = () => {
  return (
    <div class="px-5 md:px-0 mt-20">
      <div class="flex md:flex-row items-center flex-col-reverse w-full">
        <div className=" md:pr-8 ">
          <div class="text-xl md:text-4xl">About us</div>
          <div class="pt-5 md:pt-6 md:text-xl">
            As an export company, we take great pride in our ability to connect
            businesses with new markets around the world. Our team is dedicated
            to providing high-quality products and services that meet the unique
            needs of each client. From sourcing the best materials to ensuring
            timely delivery, we are committed to excellence in every aspect of
            the export process. We work closely with our clients to understand
            their specific requirements and to develop customized solutions that
            meet their needs. Whether you are looking to expand your business
            into new markets or simply seeking to streamline your export
            operations, we are here to help.
            <br />
            <br />
            At AdAstra, we understand the importance of quality and reliability.
            That's why we only work with trusted suppliers and logistics
            partners to ensure that every shipment arrives on time and in
            excellent condition. With years of experience in the export
            industry, we have built a reputation for excellence and are
            committed to maintaining the highest standards of professionalism
            and integrity.
            <br />
            <br />
            Our team is comprised of experts in international trade, logistics,
            and customs regulations, and we are always up-to-date on the latest
            industry developments. We are here to help you navigate the
            complexities of international trade and to provide you with the
            support and guidance you need to succeed in today's global
            marketplace.
            <br />
            <br />
            Whether you are a small business looking to export your products for
            the first time, or a large corporation seeking to optimize your
            export operations, we are here to help you achieve your goals.
            Contact us today to learn more about our export services and how we
            can help you grow your business on a global scale.
          </div>
        </div>
        {/* <div
          class="bg-contain  bg-center bg-no-repeat w-full md:w-[500px]"
          style={{
            backgroundImage: `url(${image1})`,
          }}
        ></div> */}
        <img
          class=" object-contain  object-center object-no-repeat w-full md:h-[400px] md:w-[300px]"
          src={image1}
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default about;
