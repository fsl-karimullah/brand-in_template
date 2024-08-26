import React from "react";
import CtaImg from "../../../assets/Home/ctaImg.png";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../../base/Button";

const CtaAboutUs = () => {
  return (
    <section className="flex flex-col gap-4 bg-bgSecondary px-4 py-8 md:flex-row md:items-center md:px-10 lg:gap-36 lg:px-[120px] lg:py-32">
      <div className="relative md:w-1/2 lg:h-[566px] lg:w-[599px]">
        <img src={CtaImg} alt="cta img" className="rounded-xl md:w-full" />
        <div className="absolute -bottom-12 -right-20 hidden w-[411px] rounded-xl bg-secondary p-4 text-white lg:block lg:p-12">
          <h3 className="mb-11 text-h3">Come and visit us</h3>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-6">
              <FiPhone className="text-2xl" /> <span className="text-paragraph2">(414) 857 - 0107</span>
            </li>
            <li className="flex items-start gap-6">
              <FaRegEnvelope className="text-2xl" /> <span className="text-paragraph2">happytummy@restaurant.com</span>
            </li>
            <li className="flex items-start gap-6">
              <IoLocationOutline className="text-4xl" /> <span className="text-paragraph2">837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 md:w-1/2">
        <h2 className="font-playFair text-2xl font-medium md:text-3xl lg:text-h2">We provide healthy food for your family.</h2>
        <p className="text-sm md:text-paragraph1">Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
        <p className="text-sm md:text-paragraph2">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
        <Button style={"outline"}>More About Us</Button>
      </div>
    </section>
  );
};

export default CtaAboutUs;
