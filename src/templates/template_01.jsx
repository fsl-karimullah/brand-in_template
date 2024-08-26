import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../page/HomePage";
import ScrollToTopButton from "../components/base/ScrollToTopButton";
import NotFound from "../components/page/NotFound/NotFound";
import AboutPage from "../page/AboutPage";
import MenuPage from "../page/MenuPage";
import BlogPage from "../page/BlogPage";
import ContactPage from "../page/ContactPage";
import BookPage from "../page/BookPage";
import BlogDetailsPage from "../page/BlogDetailsPage";

const Template_01 = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/blog/details" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/book" element={<BookPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ScrollToTopButton />
    </>
  );
};

export default Template_01;
