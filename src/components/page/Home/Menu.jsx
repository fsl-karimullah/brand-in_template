import React from "react";
import { listMenu } from "../../data/Home/menu";
import { LuCupSoda } from "react-icons/lu";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section className="p-8 md:px-10 lg:px-[120px] lg:py-14">
      <h2 className="mb-8 text-center text-2xl font-medium lg:text-5xl">Browse Our Menu</h2>
      <div className="grid grid-cols-1 gap-4 px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {listMenu.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="flex flex-col items-center justify-center gap-4 rounded-xl border-[1.5px] border-[#DBDFD0] p-4 lg:px-8 lg:py-10">
              <div className="flex size-14 items-center justify-center rounded-full bg-[#DBDFD0] lg:size-[100px]">
                <Icon className="text-2xl text-secondary lg:text-5xl" />
              </div>
              <h3 className="text-lg font-bold text-tertary lg:text-2xl">{item.title}</h3>
              <p className="text-center text-sm lg:text-base">{item.desc}</p>
              <Link to={"/"} className="text-base font-bold text-primary">
                Explore Menu
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
