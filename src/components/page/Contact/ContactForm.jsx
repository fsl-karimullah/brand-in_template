import React from "react";

const ContactForm = () => {
  return (
    <form className="absolute left-1/2 top-36 flex w-10/12 -translate-x-1/2 flex-col gap-2 rounded-xl bg-white p-3 shadow-xl md:gap-4 md:p-6 lg:top-[361px] lg:w-[797px] lg:gap-6 lg:p-10">
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="w-full md:w-1/2">
          <label className="font-bold">Name</label>
          <div className="rounded-full border p-3 lg:px-6 lg:py-4">
            <input type="text" placeholder="Enter your name" className="w-full focus:outline-none" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <label className="font-bold">Email</label>
          <div className="rounded-full border p-3 lg:px-6 lg:py-4">
            <input type="text" placeholder="Enter email address" className="w-full focus:outline-none" />
          </div>
        </div>
      </div>
      <div>
        <label className="font-bold">Subject</label>
        <div className="rounded-full border p-3 lg:px-6 lg:py-4">
          <input type="text" placeholder="Write a subject" className="w-full focus:outline-none" />
        </div>
      </div>
      <div>
        <label className="font-bold">Message</label>
        <div className="rounded-2xl border p-3 lg:h-32 lg:px-6 lg:py-4">
          <textarea placeholder="Write your message" className="w-full resize-none focus:outline-none"></textarea>
        </div>
      </div>
      <button className="w-full rounded-full bg-primary px-3 py-2 text-sm font-bold capitalize text-white md:text-base lg:px-8 lg:py-5">Send</button>
    </form>
  );
};

export default ContactForm;
