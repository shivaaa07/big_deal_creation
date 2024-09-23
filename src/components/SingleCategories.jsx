import React from "react";
import dummyImage from "../assets/t-shirt.jpg";
import hoverImg from "../assets/on-hover-t-shirt.jpg";
import ImageToggleOnMouseOver from "./ImageToggleOnMouseOver";
import "./SingleCategories.css";
import SingleProductDetails from "./SingleProductDetails/SingleProductDetails";

const SingleCategories = () => {
  const allProducts = [
    {
      productFrontImage: dummyImage,
      prodctBackImage: hoverImg,
      productTitle: "Grey Denim Cargo Pocket Baggy Fit",
      prodcutPrice: "Rs. 3000",
    },
    {
      productFrontImage: dummyImage,
      prodctBackImage: hoverImg,
      productTitle: "Grey Denim Cargo Pocket Baggy Fit",
      prodcutPrice: "Rs. 3000",
    },
    {
      productFrontImage: dummyImage,
      prodctBackImage: hoverImg,
      productTitle: "Grey Denim Cargo Pocket Baggy Fit",
      prodcutPrice: "Rs. 3000",
    },
    {
      productFrontImage: dummyImage,
      prodctBackImage: hoverImg,
      productTitle: "Grey Denim Cargo Pocket Baggy Fit",
      prodcutPrice: "Rs. 3000",
    },
    {
      productFrontImage: dummyImage,
      prodctBackImage: hoverImg,
      productTitle: "Grey Denim Cargo Pocket Baggy Fit",
      prodcutPrice: "Rs. 3000",
    },
    {
      productFrontImage: dummyImage,
      prodctBackImage: hoverImg,
      productTitle: "Grey Denim Cargo Pocket Baggy Fit",
      prodcutPrice: "Rs. 3000",
    },
    {
      productFrontImage: dummyImage,
      prodctBackImage: hoverImg,
      productTitle: "Grey Denim Cargo Pocket Baggy Fit",
      prodcutPrice: "Rs. 3000",
    },
  ];

  return (
    <>
      <div className="container mx-auto my-4">
        <div className="cards-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 px-1 sm:px-0">
          {allProducts.map((singleProduct) => (
            <div className="product-item mb-1 lg:mb-2 xl:mb-3">
              <div className="figure">
                <ImageToggleOnMouseOver
                  primaryImg={singleProduct.productFrontImage}
                  secondaryImg={singleProduct.prodctBackImage}
                  borderHover={"borderHover"}
                />
              </div>
              <div className="figCaption">
                <div className="discription p-3">
                  <p className="truncate text-xs md:text-base font-medium font-poppins my-1">
                    {singleProduct.productTitle}
                  </p>
                  <div className="price text-sm md:text-base lg:text-sm font-poppins">
                    {singleProduct.prodcutPrice}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <SingleProductDetails /> */}
    </>
  );
};

export default SingleCategories;
