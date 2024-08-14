import React from "react";
import FooterLogo from "../../assets/Footer/footerLogo.png";
import { Link } from "react-router-dom";
import { footerIcon, footerPages, footerUtilityPages, footerImg } from "../data/footer";

const Footer = () => {
  return (
    <footer className="bg-secondary p-3 text-white md:py-8 lg:px-36 lg:py-32">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-start justify-start gap-3 md:gap-8">
          <div className="flex items-center gap-3">
            <img src={FooterLogo} alt="footer logo" className="size-5 lg:size-[55px]" />
            <h5 className="text-xl font-bold italic lg:text-3xl">Bistro Bliss</h5>
          </div>
          <p className="max-w-60 text-sm text-[#ADB29E] lg:text-base">In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
          <div className="flex gap-3">
            {footerIcon.map((item) => {
              const Icon = item.icon;
              return (
                <Link to={"/"} key={item.id} className="flex size-9 items-center justify-center rounded-full bg-primary">
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex gap-[100px] text-base md:gap-[50px] lg:gap-[120px]">
          <div>
            <h6 className="mb-4 font-bold">Pages</h6>
            <div className="flex flex-col gap-2">
              {footerPages.map((item) => {
                return (
                  <Link to={"/"} key={item.id} className="text-[#DBDFD0]">
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h6 className="mb-4 font-bold">Utility Pages</h6>
            <div className="flex flex-col gap-2">
              {footerUtilityPages.map((item) => {
                return (
                  <Link to={"/"} key={item.id} className="text-[#DBDFD0]">
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <h6 className="mb-2 font-bold md:mb-4">Follow Us On Instagram</h6>
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            {footerImg.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.img} alt="footer img" className="rounded-xl" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-[#ADB29E] md:mt-20 md:text-sm lg:mt-32 lg:text-base">Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
