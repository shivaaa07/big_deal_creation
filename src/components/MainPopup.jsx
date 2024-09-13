import React from "react";
import { useState } from "react";
// import popupImg from "../assets/popup.webp";
import popupImg from "../assets/employee-joining-kits-2.webp";
import { RxCross2 } from "react-icons/rx";
import "./MainPopup.css";

const MainPopup = ({ onClose, hiddenClass }) => {
  console.log(hiddenClass);

  return (
    <>
      <div className="main-popup">
        <div className="close-btn">
          <RxCross2 />
        </div>
        <div className="popup-wrapper max-w-lg px-4">
          <div className="img-wrapper">
            <img src={popupImg} alt="Gift" />
          </div>
          <div className="form-wrapper bg-orange-500 px-4 py-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl text-center font-protest tracking-wide">Looking for New & Innovative Gifts</h2>
            <p className="text-sm sm:text-2xl font-semibold text-center my-2">Let us send you our latest updated catelog</p>
            <form action="#">
              <input type="text" name="mobile" placeholder="Enter Mobile Number" />
              <input type="email" name="email" placeholder="Enter Email Id" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPopup;
