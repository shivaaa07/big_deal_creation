import React from "react";
import { useState } from "react";
// import popupImg from "../assets/popup.webp";
import popupImg from "../assets/employee-joining-kits-2.webp";
import { RxCross2 } from "react-icons/rx";
import "./MainPopup.css";

const MainPopup = ({ onClose, hiddenClass }) => {
  console.log(hiddenClass);

  return (
    <section
      className={`main-popup fixed inset-0 backdrop-blur-md bg-opacity-30 flex justify-center items-center z-50 ${hiddenClass}`}
    >
      <div className="main-popup relative max-w-lg md:max-w-2xl">
        <div className="close-btn absolute top-2 right-6 text-white">
          <RxCross2 onClick={onClose} className="cursor-pointer" />
        </div>
        <div className="popup-wrapper px-4 block md:flex w-full">
          <div className="img-wrapper w-full md:w-1/2">
            <img
              src={popupImg}
              alt="Gift"
              className="w-full h-[250px] md:h-full"
            />
          </div>
          <div className="form-wrapper bg-orange-500 px-4 py-4 w-full md:w-1/2">
            <h2 className="text-2xl sm:text-4xl md:text-5xl text-center font-protest tracking-wide">
              Looking for New & Innovative Gifts
            </h2>
            <p className="text-sm sm:text-2xl font-semibold text-center my-2">
              Let us send you our latest updated catelog
            </p>
            <form action="#">
              <input
                type="text"
                name="mobile"
                placeholder="Enter Mobile Number"
                className="py-2 px-4 text-base rounded-3xl my-2 outline-none w-full font-poppins"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email Id"
                className="py-2 px-4 text-base rounded-3xl my-2 outline-none w-full font-poppins"
              />
              <div className="submit-btn text-center">
                <input
                  type="submit"
                  value="Subscribe"
                  className="btn font-protest tracking-wider my-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPopup;
