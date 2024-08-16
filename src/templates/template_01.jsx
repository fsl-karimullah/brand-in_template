import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../page/HomePage";
import ScrollToTopButton from "../components/base/ScrollToTopButton";
import NotFound from "../components/page/NotFound/NotFound";

const Template_01 = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ScrollToTopButton />
    </>
  );
};

export default Template_01;
