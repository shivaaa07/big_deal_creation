import React from "react";
import dummyImage from "../assets/t-shirt.jpg";
import hoverImg from "../assets/on-hover-t-shirt.jpg"
import ImageToggleOnMouseOver from "./ImageToggleOnMouseOver";

const SingleCategories = () => {
  return (
    <>
      <div className="container mx-auto my-4">
        <div className="cards-wrapper flex justify-center gap-4">
          <div className="product-item w-2/12">
            <div className="figure">
              {/* <img src={dummyImage} alt="Bag" className="rounded-md" /> */}
              <ImageToggleOnMouseOver primaryImg={dummyImage} secondaryImg={hoverImg} />
            </div>
            <div className="figCaption">
              <div className="discription px-2">
                <p className="truncate">Grey Denim Cargo Pocket Baggy Fit</p>
                <div className="price">Rs. 3000</div>
              </div>
            </div>
          </div>
          <div className="product-item w-2/12">
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
          <div className="product-item w-2/12">
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
          <div className="product-item w-2/12">
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
          <div className="product-item w-2/12">
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
