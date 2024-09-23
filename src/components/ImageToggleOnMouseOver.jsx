import React, { Component, useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg, borderHover }) => {
  const imageRef = useRef(null);
  console.log(borderHover);

  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
      src={primaryImg}
      alt=""
      ref={imageRef}
      className={`w-full ${borderHover} rounded`}
    />
  );
};

export default ImageToggleOnMouseOver;
