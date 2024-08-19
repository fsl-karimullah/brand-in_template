import React from "react";
import Navbar from "../components/base/Navbar";
import Footer from "../components/base/Footer";
import Hero from "../components/page/About/Hero";
import Video from "../components/page/About/Video";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Video />
      <Footer />
    </>
  );
};

export default AboutPage;
