import React from "react";
import Faq from "react-faq-component";

const FAQ = () => {
  const data = {
    title: "FAQ",
    rows: [
      {
        title: "1. What are the benefits of exporting",
        content:
          "Exporting can bring several benefits to a company, such as expanding the customer base, increasing revenue and profits, diversifying the market, gaining access to new technologies, and spreading business risks across multiple markets.",
      },
      {
        title: "2. What are the common challenges faced by export companies?",
        content:
          "Exporting can bring several benefits to a company, such as expanding the customer base, increasing revenue and profits, diversifying the market, gaining access to new technologies, and spreading business risks across multiple markets.",
      },
      {
        title: "3. How do I identify potential export markets?",
        content:
          "Exporting can bring several benefits to a company, such as expanding the customer base, increasing revenue and profits, diversifying the market, gaining access to new technologies, and spreading business risks across multiple markets.",
      },
      {
        title:
          "4.How do I choose the right mode of transportation for my exports?        ",
        content:
          "Exporting can bring several benefits to a company, such as expanding the customer base, increasing revenue and profits, diversifying the market, gaining access to new technologies, and spreading business risks across multiple markets.",
      },
    ],
  };
  return (
    <div id="faq" className="   w-full h-full ">
      <Faq row rowTitleColor={"#f5f1ee"} data={data} />
    </div>
  );
};

export default FAQ;
