import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  // Function to toggle the menu
  const handleChange = () => {
    setMenuToggle(!menuToggle);
    console.log("Hello World");
  };

  // Function to close the menu
  const handleClose = () => {
    setMenuToggle(false);
    console.log("Menu closed");
  };

  return (
    <>
      <header className="header bg-slate-300">
        <div className="container mx-auto h-14 flex justify-between items-center px-3">
          <div className="logo">
            <NavLink to="/">BigDealCreation</NavLink>
          </div>
          <nav className={menuToggle ? "navbar active" : "navbar"}>
            <ul className="nav-list flex gap-1 md:gap-5 p-5 md:p-0">
              <li className="nav-item">
                <NavLink to="/" onClick={handleClose}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="About" onClick={handleClose}>About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="Categories" onClick={handleClose}>Categories</NavLink>
              </li>
            </ul>
          </nav>
          <div
            onClick={handleChange}
            className={menuToggle ? "active" : "mobile-icons"}
          >
            <FaAlignRight className="menu-btn cursor-pointer" />
            <FaTimes className="close-btn cursor-pointer" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
