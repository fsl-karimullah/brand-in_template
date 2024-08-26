import React from "react";
import bgVideo from "../../../assets/About/bgVideo.png";
import { IoMdPlayCircle } from "react-icons/io";
import Icon1 from "../../../assets/About/restaurant-menu 1.svg";
import { listVideo } from "../../data/About/video";

const Video = () => {
  return (
    <section>
      <div className="flex h-52 w-full flex-col items-center justify-center gap-4 bg-cover bg-center text-white md:h-72 lg:h-[690px]" style={{ backgroundImage: `url(${bgVideo})` }}>
        <IoMdPlayCircle className="text-4xl md:text-[108px]" />
        <h2 className="max-w-64 text-center font-[playFair] text-xl font-medium md:max-w-96 md:text-4xl lg:max-w-xl lg:text-h2">Feel the authentic & original taste from us</h2>
      </div>
      <div className="mt-6 flex flex-col justify-between gap-4 bg-white px-4 md:mt-0 md:flex-row md:px-4 md:py-12 lg:px-[120px] lg:py-20">
        {listVideo.map((item) => {
          return (
            <div key={item.id} className="flex items-start gap-2 lg:gap-6">
              <div>
                <img src={item.icon} alt={item.title} className="size-8 lg:size-12" />
              </div>
              <div>
                <h3 className="mb-2 text-sm font-bold lg:mb-4 lg:text-paragraph3">{item.title}</h3>
                <p className="max-w-64 text-sm lg:text-paragraph2">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Video;
