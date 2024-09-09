import React from "react";
import HeroBanner from "./HeroBanner";
import Categories from "./Categories";
import ProductGallery from "./ProductGallery";
import MainPopup from "./MainPopup";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  // On load function
  const mainPopUp = () => {
    document.getElementById("popup").style.display = "flex";
  };
  // document.getElementsByClassName("popupCloseBtn").style.display = "none";
  // const closeBtn = document.querySelectorAll("popupCloseBtn");
  // closeBtn.addEventListener("click", () => {
  //   alert("Hello World");
  // });

  // window.onload = setTimeout(mainPopUp, 5000);

  return (
    <>
      <div className="w-full">
        <HeroBanner />
        <Categories />
        <ProductGallery />
        <Product />
        <div id="popup" style={{ display: "none" }}>
          <MainPopup popupCloseBtn={"popupCloseBtn"} />
        </div>
      </div>
    </>
  );
};

export default Home;
