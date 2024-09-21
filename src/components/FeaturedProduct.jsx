import React from "react";
import Heading from "./Heading";
import Speaker from "../assets/categories/water_bottle.jpg"

const FeaturedProduct = () => {
  const featuredProduct = [
    {
      featuredProductImg : Speaker,
      featuredProductSpecification : "Smart Devices",
      featuredProductName : "Amazon Echo Dot 5th Gen",
      price : 3499
    },
    {
      featuredProductImg : Speaker,
      featuredProductSpecification : "Smart Devices",
      featuredProductName : "Amazon Echo Dot 5th Gen",
      price : 3499
    },
    {
      featuredProductImg : Speaker,
      featuredProductSpecification : "Smart Devices",
      featuredProductName : "Amazon Echo Dot 5th Gen",
      price : 3499
    },
    {
      featuredProductImg : Speaker,
      featuredProductSpecification : "Smart Devices",
      featuredProductName : "Amazon Echo Dot 5th Gen",
      price : 3499
    },
    {
      featuredProductImg : Speaker,
      featuredProductSpecification : "Smart Devices",
      featuredProductName : "Amazon Echo Dot 5th Gen",
      price : 3499
    },
    {
      featuredProductImg : Speaker,
      featuredProductSpecification : "Smart Devices",
      featuredProductName : "Amazon Echo Dot 5th Gen",
      price : 3499
    },
    {
      featuredProductImg : Speaker,
      featuredProductSpecification : "Smart Devices",
      featuredProductName : "Amazon Echo Dot 5th Gen",
      price : 3499
    },
    {
      featuredProductImg : Speaker,
      featuredProductSpecification : "Smart Devices",
      featuredProductName : "Amazon Echo Dot 5th Gen",
      price : 3499
    }
  ]
  return (
    <section className="my-8 md:my-12">
      <div className="container px-3 sm:px-0 mx-auto">
        <Heading headingName={"Featured Products"} />
        <div className="productWrapper grid place-content-center sm:grid-rows-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-2 mx-auto">
          {
            featuredProduct.map((productsDetails, index) => (
            <div className="productCards justify-self-center" key={index}>
              <div className="cardHead max-w-72">
                <img src={productsDetails.featuredProductImg} alt="Speaker" className="w-full h-full rounded-lg"/>
              </div>
              <div className="productInfo">
                {/* <p className="text-xs text-gray-500 font-poppins">{productsDetails.featuredProductSpecification}</p> */}
                <div className="ProductName text-sm font-poppins">
                  {productsDetails.featuredProductName}
                </div>
                <div className="productPrice">
                  <span className="text-lg font-semibold font-poppins">Rs.</span> {productsDetails.price.toFixed(2)}
                </div>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
