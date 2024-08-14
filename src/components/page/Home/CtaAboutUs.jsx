import React from "react";
import CtaImg from "../../../assets/Home/ctaImg.png";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../../base/Button";

const CtaAboutUs = () => {
  return (
    <section className="bg-bgSecondary p-8 md:px-10 lg:px-[120px] lg:py-14">
      <div className="relative">
        <img src={CtaImg} alt="cta img" className="rounded-xl" />
        <div className="absolute right-0 hidden rounded-xl bg-secondary p-4 text-white md:block">
          <h3>Come and visit us</h3>
          <ul>
            <li className="flex items-start gap-2">
              <FiPhone /> <span>(414) 857 - 0107</span>
            </li>
            <li className="flex items-start gap-2">
              <FiPhone /> <span>happytummy@restaurant.com</span>
            </li>
            <li className="flex items-start gap-2">
              <FiPhone /> <span>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2></h2>
        <p></p>
        <p></p>
        <Button style={"outline"}>More About Us</Button>
      </div>
    </section>
  );
};

export default CtaAboutUs;
