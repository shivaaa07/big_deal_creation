import React from "react";
import { NavLink } from "react-router-dom";
import { FaPhone, FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-800 p-4 lg:py-8">
        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <div className="foote-navbar">
            <h3 className="text-white text-4xl md:text-2xl font-semibold my-2 font-poppins">
              Quick Links
            </h3>
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/" className="text-white text-2xl lg:text-base font-poppins">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="About" className="text-white text-2xl lg:text-base font-poppins">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="condition-wrapper">
            <h3 className="text-white text-4xl md:text-2xl font-semibold my-2 font-poppins">
              Usefull Links
            </h3>
            <ul className="condition-list">
              <li className="condition-item">
                <NavLink to="#" className="text-white text-2xl lg:text-base font-poppins">
                  Terms & Condition
                </NavLink>
              </li>
              <li className="condition-item">
                <NavLink to="#" className="text-white text-2xl lg:text-base font-poppins">
                  Privacy & Policy
                </NavLink>
              </li>
              <li className="condition-item">
                <NavLink to="#" className="text-white text-2xl lg:text-base font-poppins">
                  FAQ's
                </NavLink>
              </li>
              <li className="condition-item">
                <NavLink to="#" className="text-white text-2xl lg:text-base font-poppins">
                  Sitemap
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="contact-info mt-8 lg:mt-0">
            <h3 className="text-white text-4xl md:text-2xl font-semibold my-2 font-poppins">
              Contact Info
            </h3>
            <ul>
              <li className="text-white leading-10 text-2xl lg:text-base font-poppins">
                <FaPhone className="text-white inline" /> : +91 00000 00000
              </li>
              <li className="text-white text-2xl lg:text-base leading-10 font-poppins">
                <SiMinutemailer className="text-white inline" /> :
                enquiry@bigdealcreation.in
              </li>
              <li className="text-white leading-10 max-w-80 text-2xl lg:text-base font-poppins">
                <IoLocationSharp className="text-white inline" /> : V Work
                Business Park, Near Mulund Check Naka - 400080
              </li>
            </ul>
          </div>
          <div className="social-wrapper mt-8 lg:mt-0">
            <h3 className="text-white text-4xl md:text-2xl font-semibold my-2 font-poppins">
              Instagram
            </h3>
            <div className="grid gap-2 grid-cols-4 my-2">
                <img src="https://www.brandedcorporategift.com/content/images/instagram/01.jpg" alt="Joining Kit" />
                <img src="https://www.brandedcorporategift.com/content/images/instagram/02.jpg" alt="Water Bottle" />
                <img src="https://www.brandedcorporategift.com/content/images/instagram/03.jpg" alt="T-Shirt" />
                <img src="https://www.brandedcorporategift.com/content/images/instagram/04.jpg" alt="Gift" />
                <img src="https://www.brandedcorporategift.com/content/images/instagram/05.jpg" alt="" />
                <img src="https://www.brandedcorporategift.com/content/images/instagram/06.jpg" alt="" />
                <img src="https://www.brandedcorporategift.com/content/images/instagram/07.jpg" alt="" />
                <img src="https://www.brandedcorporategift.com/content/images/instagram/08.jpg" alt="" />
            </div>
            <div className="social-icons mt-7">
                <ul className="icons-list flex gap-2">
                    <li className="icon-item w-11 h-11 p-2 rounded-full border-solid border-2 border-slate-50">
                        <a href="#" target="_blank"><FaInstagram className="text-white hover:text-red-700 text-2xl"/></a>
                    </li>
                    <li className="icon-item w-11 h-11 p-2 rounded-full border-solid border-2 border-slate-50">
                        <a href="#" target="_blank"><FaFacebookF className="text-white hover:text-blue-700 text-2xl"/></a>
                    </li>
                    <li className="icon-item w-11 h-11 p-2 rounded-full border-solid border-2 border-slate-50">
                        <a href="#" target="_blank"><FaLinkedinIn className="text-white hover:text-blue-700 text-2xl"/></a>
                    </li>
                    <li className="icon-item w-11 h-11 p-2 rounded-full border-solid border-2 border-slate-50">
                        <a href="#" target="_blank"><FaXTwitter className="text-white hover:text-sky-500 text-2xl"/></a>
                    </li>
                    <li className="icon-item w-11 h-11 p-2 rounded-full border-solid border-2 border-slate-50">
                        <a href="#" target="_blank"><FaYoutube className="text-white hover:text-red-700 text-2xl"/></a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
