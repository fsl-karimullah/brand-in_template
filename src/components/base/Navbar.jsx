import React, { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import Logo from "../../assets/Home/logo.png";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border p-4">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="logo" className="size-8" />
        <h3 className="font-bold">Bistro Bliss</h3>
      </div>
      <div>
        <IoIosMenu className="size-8" />
      </div>
    </nav>
  );
};
export default Navbar;
