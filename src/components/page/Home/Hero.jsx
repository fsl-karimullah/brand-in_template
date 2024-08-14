import React from "react";
import BgHero from "../../../assets/Home/bgHero.png";
import Button from "../../base/Button";
const Hero = () => {
  return (
    <section className="flex h-[300px] w-full flex-col items-center justify-center gap-3 bg-cover bg-center text-center md:h-[500px] lg:h-[802px] lg:gap-8" style={{ backgroundImage: `url(${BgHero})` }}>
      <h1 className="text-4xl font-bold lg:max-w-[667px] lg:text-[100px] lg:leading-[96px]">Best food for your taste</h1>
      <p className="mx-auto max-w-xs text-[10px] lg:max-w-lg lg:text-xl">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
      <div className="flex gap-1 md:gap-4">
        <Button>Book A Table</Button>
        <Button style={"outline"}>explore menu</Button>
      </div>
    </section>
  );
};

export default Hero;
