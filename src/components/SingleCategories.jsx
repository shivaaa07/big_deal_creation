import React from "react";
import dummyImage from "../assets/t-shirt.jpg";
import hoverImg from "../assets/on-hover-t-shirt.jpg";
import ImageToggleOnMouseOver from "./ImageToggleOnMouseOver";

const SingleCategories = () => {
  return (
    <>
      <div className="container mx-auto my-4">
        {/* <div className="cards-wrapper flex justify-center gap-4"> */}
        <div className="cards-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
          <div className="product-item">
            <div className="figure">
              {/* <img src={dummyImage} alt="Bag" className="rounded-md" /> */}
              <ImageToggleOnMouseOver
                primaryImg={dummyImage}
                secondaryImg={hoverImg}
              />
            </div>
            <div className="figCaption">
              <div className="discription px-2">
                <p className="truncate text-xs md:text-base font-medium font-poppins my-1">
                  Grey Denim Cargo Pocket Baggy Fit
                </p>
                <div className="price text-sm md:text-base font-poppins">
                  Rs. 3000
                </div>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="figure">
              <img src={dummyImage} alt="Bag" />
            </div>
            <div className="figCaption">
              <div className="discription">
                <p>Grey Denim Cargo Pocket Baggy Fit</p>
                <div className="price">Rs. 3000</div>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="figure">
              <img src={dummyImage} alt="Bag" />
            </div>
            <div className="figCaption">
              <div className="discription">
                <p>Grey Denim Cargo Pocket Baggy Fit</p>
                <div className="price">Rs. 3000</div>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="figure">
              <img src={dummyImage} alt="Bag" />
            </div>
            <div className="figCaption">
              <div className="discription">
                <p>Grey Denim Cargo Pocket Baggy Fit</p>
                <div className="price">Rs. 3000</div>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="figure">
              <img src={dummyImage} alt="Bag" />
            </div>
            <div className="figCaption">
              <div className="discription">
                <p>Grey Denim Cargo Pocket Baggy Fit</p>
                <div className="price">Rs. 3000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCategories;
