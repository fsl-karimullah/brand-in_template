import React from "react";
import { FaRegClock, FaShoppingCart, FaRegBookmark } from "react-icons/fa";
import Delivery1 from "../../../assets/Home/delivery1.png";
import Delivery2 from "../../../assets/Home/delivery2.png";
import Delivery3 from "../../../assets/Home/delivery3.png";

const Delivery = () => {
  return (
    <section className="flex flex-col gap-8 bg-bgSecondary px-4 py-8 md:flex-row md:px-10 lg:items-center lg:justify-center lg:px-[120px] lg:py-32">
      <div className="flex w-full gap-2 lg:gap-6">
        <div>
          <img src={Delivery1} alt="delivery img" />
        </div>
        <div className="mt-8 flex flex-col gap-2 lg:gap-6">
          <img src={Delivery2} alt="delivery img" />
          <img src={Delivery3} alt="delivery img" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-playFair text-2xl font-medium lg:text-h2">Fastest Food Delivery in City</h2>
        <p className="text-sm md:text-paragraph2 lg:mb-[30px]">Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-2 text-white">
              <FaRegClock className="text-sm md:text-base" />
            </div>
            <span className="text-base font-medium md:text-paragraph3">Delivery within 30 minutes</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-2 text-white">
              <FaRegBookmark className="text-sm md:text-base" />
            </div>
            <span className="text-base font-medium md:text-paragraph3">Best Offer & Prices</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-2 text-white">
              <FaShoppingCart className="text-sm md:text-base" />
            </div>
            <span className="text-base font-medium md:text-paragraph3">Online Services Available</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Delivery;
