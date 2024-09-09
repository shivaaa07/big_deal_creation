import React from "react";
import Heading from "./Heading";
import Speaker from "../assets/speaker-home.jpg"

const Product = () => {
  return (
    <>
      <div className="container mx-auto">
        <Heading headingName={"Featured Products"} />
        {/* <div className="productWrapper sm:flex md:justify-between sm:flex-wrap gap-2"> */}
        <div className="productWrapper grid place-content-center sm:grid-rows-1 sm:grid-cols-2 gap-2 mx-auto">
          {/* <div className="productCards sm:w-[30%] md:w-[25%] lg:w-[20%]">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div>
          <div className="productCards sm:w-[30%] md:w-[25%] lg:w-[20%]">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div>
          <div className="productCards sm:w-[30%] md:w-[25%] lg:w-[20%]">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div>
          <div className="productCards sm:w-[30%] md:w-[25%] lg:w-[20%]">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div>
          <div className="productCards sm:w-[30%] md:w-[25%] lg:w-[20%]">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div>
          <div className="productCards sm:w-[30%] md:w-[25%] lg:w-[20%]">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div>
          <div className="productCards sm:w-[30%] md:w-[25%] lg:w-[20%]">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div>
          <div className="productCards sm:w-[30%] md:w-[25%] lg:w-[20%]">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div> */}
          <div className="productCards">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div>
          <div className="productCards">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div>
          <div className="productCards">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div>
          <div className="productCards">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div>
          <div className="productCards">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div>
          <div className="productCards">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div>
          <div className="productCards">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div>
          <div className="productCards">
            <div className="cardHead max-w-72">
              <img src={Speaker} alt="Speaker" className="w-full h-full rounded-lg"/>
            </div>
            <div className="productInfo">
              <p className="text-xs text-gray-500">Smart Devices</p>
              <div className="ProductName text-sm">
                Amazon Echo Dot 5th Gen
              </div>
              <div className="productPrice">
                <span className="text-lg font-semibold">Rs.</span> 3499.00
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Product;
