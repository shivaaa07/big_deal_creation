import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { SiMinutemailer } from "react-icons/si";
import { BiSolidPhoneCall } from "react-icons/bi";
import "./Footer.css";
import FooterDivider from "./FooterDivider";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add logic to handle form submission here
    console.log("Submitted Email:", email);
  };

  return (
    <>
      <footer className="footer">
        <div className="container mx-auto">
          <div className="overlay"></div>
          <div className="footer-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 pt-12 relative z-40">
            <div className="news-latter px-2">
              <div className="suscribe">
                <h4 className="text-white text-xl font-semibold text-center mb-4">
                  News Latters
                </h4>
                <form
                  onSubmit={handleSubmit}
                  className="flex max-w-[400px] mx-auto"
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-4/6 lg:w-1/2 outline-none px-2 py-1"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="w-2/6 lg:w-1/2 outline-none bg-red-700 cursor-pointer text-white font-poppins font-semibold px-2 py-1"
                  />
                </form>
              </div>
            </div>
            <div className="office-address px-2 text-center">
              <FooterDivider display={"block sm:hidden"} />
              <h4 className="text-white text-xl font-semibold text-center mb-4">
                Office Address
              </h4>
              <p className="text-xs sm:text-base md:text-xl text-white text-black-400">
                Powerlook Apparels Pvt Ltd Lotus Corporate Park Wing G02 - 1502,
                Ram Mandir Lane, off Western Express Highway, Goregaon, Mulund
                West - 400080
              </p>
              <div className="timing">
                <h5 className="text-white text-md font-medium mt-4">
                  Office Timing
                </h5>
                <span className="text-xs sm:text-base md:text-xl text-white text-black-400">
                  Mon - Sat : 10:00AM - 07:00 PM
                </span>
              </div>
            </div>
            <div className="usefull-links px-2 text-center">
              <FooterDivider display={"block lg:hidden"} />
              <h4 className="text-white text-xl font-semibold text-center mb-4">
                Useful Links
              </h4>
              <ul className="navbar-links">
                <li className="item">
                  <NavLink className="text-xs sm:text-base md:text-xl text-white hover:text-red-500 hover:font-semibold">
                    About Us
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink className="text-xs sm:text-base md:text-xl text-white hover:text-red-500 hover:font-semibold">
                    Shipping Policy
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink className="text-xs sm:text-base md:text-xl text-white hover:text-red-500 hover:font-semibold">
                    Privacy Policy
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink className="text-xs sm:text-base md:text-xl text-white hover:text-red-500 hover:font-semibold">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="categories px-2 text-center">
              <FooterDivider display={"block lg:hidden"} />
              <h4 className="text-xs sm:text-lg md:text-xl text-white text-xl font-semibold text-center mb-4">
                Categories
              </h4>
              <ul className="categories-links">
                <li className="item">
                  <NavLink className="text-xs sm:text-base md:text-xl text-white hover:text-red-500 hover:font-semibold">
                    T-Shirts
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink className="text-xs sm:text-base md:text-xl text-white hover:text-red-500 hover:font-semibold">
                    Shirt
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink className="text-xs sm:text-base md:text-xl text-white hover:text-red-500 hover:font-semibold">
                    Bags
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink className="text-xs sm:text-base md:text-xl text-white hover:text-red-500 hover:font-semibold">
                    Accessories
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="contact px-2 sm:col-start-1 sm:col-end-3 lg:col-start-auto lg:col-end-auto">
              <FooterDivider display={"block lg:hidden"} />
              <h4 className="text-white text-xl font-semibold text-center uppercase mb-4">
                Support
              </h4>
              <div className="mail flex justify-center items-center gap-3 text-white hover:text-red-500 cursor-pointer leading-10">
                <SiMinutemailer className="text-xs sm:text-base md:text-xl" />
                <span className="text-xs sm:text-base md:text-xl font-semibold">
                  support@bigdealcreation.com
                </span>
              </div>
              <div className="phone flex justify-center items-center gap-3 text-white hover:text-red-500 cursor-pointer leading-8">
                <BiSolidPhoneCall className="text-xs sm:text-base md:text-xl" />
                <span className="text-xs sm:text-base md:text-xl font-semibold">
                  +91 00000 00000
                </span>
              </div>
            </div>
          </div>
          <div className="copy-right py-4 relative z-10">
            <p className="text-center text-slate-50 text-xs sm:text-base md:text-xl">
              @ 2024 Big Deal Creation | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
