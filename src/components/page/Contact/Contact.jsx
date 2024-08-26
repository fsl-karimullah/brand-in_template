import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="relative">
      <div className="bg-bgSecondary p-4 pb-48 text-center md:px-10 lg:px-[120px] lg:pb-[361px] lg:pt-20">
        <h1 className="lg:text-h1Header pb-4 font-playFair text-4xl lg:pb-10">Contact Us</h1>
        <p className="mx-auto max-w-sm text-sm text-[#495460] lg:max-w-lg lg:text-paragraph1">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
      </div>
      <ContactForm />
      <div className="flex w-full flex-col gap-4 bg-white p-4 pt-64 md:flex-row md:justify-center md:gap-6 md:px-10 lg:gap-20 lg:px-[120px] lg:pb-20 lg:pt-[300px]">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold lg:text-xl">Call Us:</h3>
          <p className="font-bold text-primary lg:text-h3">+1-234-567-8900</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold lg:text-xl">Hours:</h3>
          <div className="text-tertary lg:text-paragraph1">
            <p>Mon-Fri: 11am - 8pm </p>
            <p>Sat, Sun: 9am - 10pm</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold lg:text-xl">Our Location:</h3>
          <div className="text-tertary lg:text-paragraph1">
            <p>Nowhere Land, LA 12345 </p>
            <p>United States</p>
            <p>123 Bridge Street </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
