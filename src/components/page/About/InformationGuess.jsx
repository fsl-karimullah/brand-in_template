import React from "react";
import Img from "../../../assets/About/pexels-cottonbro-studio-4252139 1.png";
import { listInformation } from "../../data/About/informationGuess";

const InformationGuess = () => {
  return (
    <section className="flex flex-col gap-4 bg-bgSecondary px-4 py-8 md:flex-row md:items-center md:px-10 lg:gap-36 lg:px-[120px] lg:pb-32 lg:pt-20">
      <div className="w-full md:w-1/2">
        <h2 className="mb-2 font-playFair text-xl font-medium lg:mb-5 lg:text-h2">A little information for our valuable guest</h2>
        <p className="mb-8 text-sm lg:mb-16 lg:text-paragraph2">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {listInformation.map((item) => {
            return (
              <div key={item.id} className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[#DBDFD0] bg-white py-6 font-medium lg:gap-4 lg:pb-10 lg:pt-[30px]">
                <h3 className="font-playFair text-4xl lg:text-h2">{item?.number}</h3>
                <p className="text-sm lg:text-paragraph1">{item?.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={Img} alt="img" className="rounded-xl" />
      </div>
    </section>
  );
};

export default InformationGuess;
