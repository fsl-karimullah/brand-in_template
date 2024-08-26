import React from "react";
import Navbar from "../components/base/Navbar";
import Footer from "../components/base/Footer";
import BlogAndArticle from "../components/page/Blog/BlogAndArticle.jsx";

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <BlogAndArticle />
      <Footer />
    </>
  );
};

export default BlogPage;
