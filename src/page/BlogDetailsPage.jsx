import React from "react";
import Navbar from "../components/base/Navbar";
import Footer from "../components/base/Footer";
import BlogDetails from "../components/page/BlogDetails/BlogDetails";

const BlogDetailsPage = () => {
  return (
    <>
      <Navbar />
      <BlogDetails />
      <Footer />
    </>
  );
};

export default BlogDetailsPage;
