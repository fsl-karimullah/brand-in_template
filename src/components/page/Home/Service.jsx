import React from "react";
import { listService } from "../../data/Home/service";

const Service = () => {
  return (
    <section className="px-4 py-8 md:px-10 lg:px-[120px] lg:py-32">
      <h2 className="mb-8 font-playFair text-2xl font-medium md:max-w-72 lg:mb-16 lg:max-w-2xl lg:text-h2">We also offer unique services for your events</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {listService.map((item) => {
          return (
            <div key={item.id}>
              <div className="w-full">
                <img src={item.img} alt="service" className="w-full rounded-xl" />
              </div>
              <h3 className="pb-1 pt-3 text-lg font-bold text-tertary lg:text-h3">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
