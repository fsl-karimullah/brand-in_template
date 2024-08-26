import React, { useState } from "react";
import { listMenu, tabsList } from "../../data/Menu/ourMenu";
import Img1 from "../../../assets/Menu/1.png";
import { list } from "postcss";

const OurMenu = () => {
  const [tabs, setTabs] = useState("All");

  return (
    <section className="p-4 md:px-10 lg:px-[120px] lg:pb-32 lg:pt-20">
      <div className="text-center">
        <h1 className="lg:text-h1Header pb-4 font-playFair text-4xl lg:pb-10">Our Menu</h1>
        <p className="mx-auto max-w-sm text-sm text-[#495460] lg:max-w-lg lg:text-paragraph1">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
      </div>
      <div className="flex items-center justify-center gap-2 py-8 text-xs lg:gap-4 lg:pb-20 lg:pt-14">
        {tabsList.map((item) => {
          return (
            <button key={item.id} onClick={() => setTabs(item.title)} className={`${tabs === item.title ? "bg-primary text-white" : ""} rounded-full border px-2 py-1 font-bold lg:px-8 lg:py-3 lg:text-base`}>
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {listMenu.map((item) => {
          return (
            <div key={item.id}>
              <div className="w-full">
                <img src={item.img} alt={item.title} className="w-full rounded-t-xl object-cover" />
              </div>
              <div className="flex flex-col gap-2 rounded-b-xl border p-4 text-center">
                <p className="text-lg font-bold text-primary">$ {item.price}</p>
                <p className="text-base font-bold text-tertary">{item.title}</p>
                <p className="text-sm text-secondary100">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurMenu;
