import React from "react";
import Navbar from "../components/base/Navbar";
import Hero from "../components/page/Home/Hero";
import Footer from "../components/base/Footer";
import Menu from "../components/page/Home/Menu";
import CtaAboutUs from "../components/page/Home/CtaAboutUs";
import Service from "../components/page/Home/Service";
import Delivery from "../components/page/Home/Delivery";
import Testimonial from "../components/page/Home/Testimonial";
import BlogAndArticle from "../components/page/Home/BlogAndArticle";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <CtaAboutUs />
      <Service />
      <Delivery />
      <Testimonial />
      <BlogAndArticle />
      <Footer />
    </>
  );
};

export default HomePage;
