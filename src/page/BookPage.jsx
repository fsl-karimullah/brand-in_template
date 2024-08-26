import React from "react";
import Navbar from "../components/base/Navbar";
import Footer from "../components/base/Footer";
import BookATable from "../components/page/Book/BookATable";

const BookPage = () => {
  return (
    <>
      <Navbar />
      <BookATable />
      <Footer />
    </>
  );
};

export default BookPage;
