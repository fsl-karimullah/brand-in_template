import React from "react";
import BookForm from "./BookForm";

const BookATable = () => {
  return (
    <section className="bg-bgSecondary3 relative">
      <div className="pb-28 text-center md:pb-56 md:pt-8 lg:pb-80 lg:pt-16">
        <h1 className="lg:text-h1Header pb-4 font-playFair text-4xl lg:pb-10">Book A Table</h1>
        <p className="mx-auto max-w-sm text-sm text-[#495460] lg:max-w-lg lg:text-paragraph1">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
      </div>
      <BookForm />
      <div className="h-96 w-full lg:h-[767px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{ border: 0, width: "100%", height: "100%" }} allowfullscreen="" aria-hidden="false" tabindex="0" />
      </div>
    </section>
  );
};

export default BookATable;
