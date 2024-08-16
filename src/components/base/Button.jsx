import React from "react";

export const ButtonSmall = ({ children, style }) => {
  return <button className={`rounded-full px-3 py-2 text-sm font-bold capitalize md:text-base lg:px-6 lg:py-3 ${style === "outline" ? "border-[1.5px] border-black text-black" : "bg-primary text-white"}`}>{children}</button>;
};

const Button = ({ children, style }) => {
  return <button className={`rounded-full px-3 py-2 text-sm font-bold capitalize md:text-base lg:px-8 lg:py-5 ${style === "outline" ? "border-[1.5px] border-black text-black" : "bg-primary text-white"}`}>{children}</button>;
};

export default Button;
