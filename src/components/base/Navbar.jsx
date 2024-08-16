import React, { useState, useEffect, useRef } from "react";
import { IoIosMenu } from "react-icons/io";
import Logo from "../../assets/Home/logo.png";
import { NavLink } from "react-router-dom";
import { ButtonSmall } from "./Button";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const menurRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!hamburgerRef.current.contains(event.target) && !menurRef.current.contains(event.target)) {
        setNavbarIsOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="relative flex w-full items-center justify-between border p-4 md:px-10 lg:px-[120px]">
      <div className="flex items-center gap-2 md:w-3/12">
        <img src={Logo} alt="logo" className="size-8" />
        <h3 className="font-bold">Bistro Bliss</h3>
      </div>
      <div className={`fixed top-0 h-screen bg-white p-8 shadow-md transition-all duration-300 md:static md:flex md:h-fit md:w-9/12 md:items-center md:justify-between md:p-0 md:shadow-none ${navbarIsOpen ? "right-0" : "-right-full"}`} ref={menurRef}>
        <div className="text-right" onClick={() => setNavbarIsOpen(false)}>
          <IoIosCloseCircleOutline className="ms-auto md:hidden" />
        </div>
        <ul className="text-paragraph2 flex flex-col gap-4 md:flex-row">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>Menu</NavLink>
          </li>
          <li>
            <NavLink to={"/book"}>Pages</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
        <ButtonSmall style={"outline"}>Book A Table</ButtonSmall>
      </div>
      <div className="md:hidden" onClick={() => setNavbarIsOpen(true)} ref={hamburgerRef}>
        <IoIosMenu className="size-8" />
      </div>
    </nav>
  );
};
export default Navbar;
