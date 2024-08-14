import React from "react";
import Navbar from "../components/base/Navbar";
import Hero from "../components/page/Home/Hero";
import Footer from "../components/base/Footer";
import Menu from "../components/page/Home/Menu";
import CtaAboutUs from "../components/page/Home/CtaAboutUs";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <CtaAboutUs />
      <Footer />
    </>
  );
};

export default HomePage;
