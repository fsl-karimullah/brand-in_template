import React from "react";
import Navbar from "../components/base/Navbar";
import Footer from "../components/base/Footer";
import OurMenu from "../components/page/Menu/OurMenu";
import App from "../components/page/Menu/App";

const MenuPage = () => {
  return (
    <>
      <Navbar />
      <OurMenu />
      <App />
      <Footer />
    </>
  );
};

export default MenuPage;
