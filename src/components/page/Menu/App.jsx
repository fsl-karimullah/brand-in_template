import React from "react";
import App1 from "../../../assets/Menu/app1.png";
import { listApp } from "../../data/Menu/ourMenu";

const App = () => {
  return (
    <section className="flex flex-col gap-4 bg-bgSecondary px-4 py-8 md:flex-row md:items-center md:px-10 lg:gap-36 lg:px-[120px] lg:py-32">
      <div>
        <h2 className="mb-2 font-playFair text-2xl font-medium text-secondary100 lg:mb-5 lg:text-h2">You can order through apps</h2>
        <p className="max-w-[448px] text-sm text-secondary lg:text-paragraph2">Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-2">
        {listApp.map((item) => {
          return (
            <div key={item.id} className="flex w-10/12 items-center justify-center rounded-xl bg-white p-4 shadow-lg">
              <img src={item.img} alt="app" className="w-full object-cover md:object-contain" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default App;
