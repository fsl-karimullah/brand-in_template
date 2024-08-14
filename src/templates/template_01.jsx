import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../page/HomePage";

const Template_01 = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
};

export default Template_01;
