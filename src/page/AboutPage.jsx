import React from "react";
import Navbar from "../components/base/Navbar";
import Footer from "../components/base/Footer";
import Hero from "../components/page/About/Hero";
import Video from "../components/page/About/Video";
import InformationGuess from "../components/page/About/InformationGuess";
import Testimonial from "../components/page/Home/Testimonial";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Video />
      <InformationGuess />
      <Testimonial />
      <Footer />
    </>
  );
};

export default AboutPage;
