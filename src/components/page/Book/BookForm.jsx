import React from "react";
import { CiCalendar } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";

const BookForm = () => {
  return (
    <form className="absolute bottom-10 left-1/2 flex w-10/12 -translate-x-1/2 transform flex-col gap-2 rounded-xl bg-white p-4 shadow-md md:bottom-56 md:gap-4 lg:bottom-[570px] lg:w-[812px] lg:gap-6 lg:p-10">
      <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-4 lg:gap-6">
        <div className="flex w-full flex-col gap-1 md:w-1/2 lg:gap-2">
          <label className="font-bold">Date</label>
          <div className="flex items-center justify-between rounded-full border px-4 py-2 lg:px-6 lg:py-4">
            <input type="text" placeholder="04/01/2021" className="w-full focus:outline-none" />
            <CiCalendar />
          </div>
        </div>
        <div className="flex w-full flex-col gap-1 md:w-1/2 lg:gap-2">
          <label className="font-bold">Time</label>
          <div className="flex items-center justify-between rounded-full border px-4 py-2 lg:px-6 lg:py-4">
            <input type="text" placeholder="06:30 PM" className="w-full focus:outline-none" />
            <IoChevronDown />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-4 lg:gap-6">
        <div className="flex w-full flex-col gap-1 md:w-1/2 lg:gap-2">
          <label className="font-bold">Name</label>
          <div className="flex items-center justify-between rounded-full border px-4 py-2 lg:px-6 lg:py-4">
            <input type="text" placeholder="Enter your name" className="w-full focus:outline-none" />
          </div>
        </div>
        <div className="flex w-full flex-col gap-1 md:w-1/2 lg:gap-2">
          <label className="font-bold">Phone</label>
          <div className="flex items-center justify-between rounded-full border px-4 py-2 lg:px-6 lg:py-4">
            <input type="text" placeholder="x-xxx-xxx-xxxx" className="w-full focus:outline-none" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-1 lg:gap-2">
          <label className="font-bold">Total Person</label>
          <div className="flex items-center justify-between rounded-full border px-4 py-2 lg:px-6 lg:py-4">
            <input type="text" placeholder="1 Person" className="w-full focus:outline-none" />
            <IoChevronDown />
          </div>
        </div>
      </div>
      <button className="w-full rounded-full bg-primary px-3 py-2 text-sm font-bold capitalize text-white md:text-base lg:px-8 lg:py-5">Book A Table</button>
    </form>
  );
};

export default BookForm;
