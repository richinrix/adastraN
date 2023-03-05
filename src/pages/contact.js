import React from "react";

const Contact = () => {
  return (
    <div class="px-5 md:px-0 flex pt-10 flex-col md:flex-row justify-between w-full text-black">
      <div class="w-full md:w-3/5">
        <div class="text-xl">About</div>
        <div class="pt-5 md:pt-6 md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
          mattis enim ut tellus elementum sagittis vitae et. Vestibulum rhoncus
          est pellentesque elit ullamcorper dignissim cras. Et tortor at risus
          viverra adipiscing at in tellus integer. Integer vitae justo eget
          magna. Elit duis tristique sollicitudin nibh sit amet commodo. Nunc
          scelerisque viverra mauris in aliquam sem fringilla.
          <br />
          <br />
          Et pharetra pharetra massa massa ultricies mi quis hendrerit. Nisi
          porta lorem mollis aliquam ut porttitor leo a. Euismod elementum nisi
          quis eleifend quam adipiscing vitae proin. Sed libero enim sed
          faucibus turpis. Penatibus et magnis dis parturient montes nascetur
          ridiculus mus mauris. Vestibulum morbi blandit cursus risus at
          ultrices. Tristique magna sit amet purus gravida quis.
        </div>
      </div>
      <div class="w-full flex md:text-xl flex-col md:w-1/4 mt-10 md:mt-0">
        <div className="mb-3 md:mb-6">Contact</div>
        <a href="mailto:adastraexim@gmail.com">adastraexim@gmail.com</a>
        <a href="tel:+917975003221">+91 79755003221</a>

        <div className="mt-5 md:mt-20 mb-3 md:mb-6">Follow</div>
        <a href="" className="underline">
          Instagram
        </a>
        <a href="" className="underline">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
