import React from "react";
import { useState } from "react";
import popupImg from "../assets/popup.webp";
import "./MainPopup.css";
import { RxCross2 } from "react-icons/rx";

const MainPopup = ({ popupCloseBtn }) => {
  const [open, setOpen] = useState(true);
  // const closeBtn = document.querySelectorAll("popupCloseBtn");
  // closeBtn.addEventListener("click", () => {
  //   alert("Hello World");
  // });

  return (
    <>
      <section className="main-popup ">
        <div className="container mx-auto flex justify-center items-center">
          <div className="bg-orange-400 w-[800px] h-[500px]">
            <div className="flex gap-4">
              <div className="popup-imgage w-3/6 h-full">
                <img src={popupImg} alt="Gift" className="w-full h-[500px]" />
              </div>
              <div className="popup-info relative w-3/6 h-full p-12">
                <RxCross2 className={popupCloseBtn} />
                <div className="heading">
                  <h2 className="text-4xl text-slate-50 text-center font-bold font-protest tracking-wider">
                    Looking for New & Innovative Gifts
                  </h2>
                  <p className="text-lg text-slate-50 text-center font-poppins mt-6">
                    Let us send you our latest updated catelog
                  </p>
                </div>
                <form action="#" className="form-wrapper">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Mobile Number"
                    className="font-protest mt-4"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    className="font-protest mt-4"
                  />
                  <div className="btn-wrapper w-full text-center my-8">
                    <button className="btn font-protest tracking-wider">
                      Send Catalogs
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPopup;
