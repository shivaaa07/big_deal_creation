import React, { useState, useEffect } from "react";
import HeroBanner from "./HeroBanner";
import Categories from "./Categories";
import ProductGallery from "./ProductGallery";
import MainPopup from "./MainPopup";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  // On load function
  const [showModal, setShowModal] = useState("hidden");

  const openModal = () => {
    console.log("Main Popup Call");
    setShowModal("block");
  };

  const closeModal = () => {
    setShowModal("hidden")
  }

  useEffect(() => {
    const timer = setTimeout(openModal, 5000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []); 

  // window.onload = setTimeout(openModal, 5000);

  return (
    <>
      <div className="w-full">
        <HeroBanner />
        <Categories />
        <ProductGallery />
        <Product />
        <MainPopup hiddenClass={showModal} onClose={closeModal}/>
        {/* <MainPopup /> */}
      </div>
    </>
  );
};

export default Home;
