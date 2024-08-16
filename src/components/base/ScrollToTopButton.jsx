import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={toTop} className="fixed bottom-8 right-3 z-[2] cursor-pointer rounded-full border-2 border-black bg-primary p-3 lg:right-6">
      <FaArrowUp />
    </div>
  );
};

export default ScrollToTopButton;
