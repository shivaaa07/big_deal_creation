import React from "react";
import Heading from "./Heading";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Electronics from "../assets/categories/Electronics.jpg";
import tShirt from "../assets/categories/t-shirt.jpg";
import shirt from "../assets/categories/Shirt.jpg";
import bags from "../assets/categories/Backpacks.jpg";
// import shirt from "../assets/categories/Shirt.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "./Categories.css";

const Categories = () => {
  const productLists = [
    {
      categorieImage: Electronics,
      categoriesName: "Electronic",
      categoriesLinks: "About",
    },
    {
      categorieImage: tShirt,
      categoriesName: "T Shirt",
      categoriesLinks: "/",
    },
    {
      categorieImage: shirt,
      categoriesName: "Shirt",
    },
    {
      categorieImage: bags,
      categoriesName: "Bags",
    },
    // {
    //   categorieImage: productimg1,
    //   categoriesName: "Welcome Kits",
    // },
    // {
    //   categorieImage: productimg1,
    //   categoriesName: "Welcome Kits",
    // },
    // {
    //   categorieImage: productimg1,
    //   categoriesName: "Welcome Kits",
    // },
    // {
    //   categorieImage: productimg1,
    //   categoriesName: "Welcome Kits",
    // },
    // {
    //   categorieImage: productimg1,
    //   categoriesName: "Welcome Kits",
    // },
  ];

  return (
    <section id="categorie">
      <div className="container my-20 mx-auto">
        <Heading headingName={"Categories"} viewBtn={"hidden"} />
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <div className="categories">
            {productLists.map((ele, index) => (
              <SwiperSlide key={index}>
                <NavLink to={ele.categoriesLinks} className="my-3 lg:my-0">
                  <div className="imgWrapper">
                    <img src={ele.categorieImage} alt="Power Bank" />
                  </div>
                  <div className="cardInfo mt-3">
                    <div className="productName">
                      <p className="capitalize text-block-400 text-center font-semibold font-poppins">
                        {ele.categoriesName}
                      </p>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
