import React from "react";
import Heading from "./Heading";
import { NavLink } from "react-router-dom";
import productimg1 from "../assets/canvas-backpack.webp";
import "./Categories.css";

const Categories = () => {
  const productLists = [
    {
      categorieImage: productimg1,
      categoriesName: "Electronic",
      
    },
    {
      categorieImage: productimg1,
      categoriesName: "T Shirt",
      
    },
    {
      categorieImage: productimg1,
      categoriesName: "Shirt",
      
    },
    {
      categorieImage: productimg1,
      categoriesName: "Bags",
      
    },
    {
      categorieImage: productimg1,
      categoriesName: "Welcome Kits",
      
    },
  ];

  return (
    <>
      <section>
        <div className="container my-9 mx-auto">
          <Heading headingName={"Categories"} viewBtn={"hidden"} />
          <div className="productCards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 place-items-center">
            {productLists.map((ele, index) => (
              <NavLink to="About" key={index} className="my-3 lg:my-0" >
                <div className="imgWrapper">
                  <img src={ele.categorieImage} alt="Power Bank" />
                </div>
                <div className="cardInfo mt-3">
                  <div className="productName">
                    <p className="capitalize text-block-400 text-center font-semibold font-poppins">
                      {ele.categoriesName}
                    </p>
                    {/* <p className="discription text-gray-500 font-poppins">
                      {ele.productDescription}
                    </p>
                    <p className="price text-gray-950 font-poppins">
                      Rs.
                      <span className="text-gray-950 font-semibold font-poppins">
                        {ele.price}
                      </span>
                    </p> */}
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
