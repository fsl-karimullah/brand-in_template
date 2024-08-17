import React from "react";
import { listTestimonial } from "../../data/Home/testimonial";
import Image from "../../../assets/Home/testi1.png";

const Testimonial = () => {
  return (
    <section className="p-8 md:px-10 lg:px-[120px] lg:py-32">
      <h2 className="mb-8 text-center font-playFair text-2xl font-medium lg:text-h2">What Our Customers Say</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {listTestimonial.map((item) => {
          return (
            <div key={item.id} className="flex flex-col justify-between rounded-xl bg-bgSecondary p-4">
              <div className="flex flex-col gap-4 pb-4">
                <h3 className="text-lg font-bold text-primary lg:text-h3">{item.title}</h3>
                <p className="text-sm md:text-paragraph1">{item.desc}</p>
              </div>
              <div className="flex items-center gap-3 border-t pt-4">
                <div className="size-12 lg:size-[70px]">
                  <img src={item.img} alt={item.name} />
                </div>
                <div>
                  <h4 className="text-base font-bold md:text-h3">{item.name}</h4>
                  <p className="text-sm md:text-paragraph2">{item.city}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
