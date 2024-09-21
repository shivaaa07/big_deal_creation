import React from "react";
import Heading from "./Heading";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Electronics from "../assets/categories/electronics-product.jpg";
import tShirt from "../assets/categories/t-shirt.jpg";
import shirt from "../assets/categories/shirt.jpg";
import bags from "../assets/categories/bags.jpg";
import chocolate from "../assets/categories/chocolates.jpg";
import dry_fruits from "../assets/categories/dry_fruits.jpg";
import cap from "../assets/categories/cap.jpg";
import bluetooth_speaker from "../assets/categories/bluetooth_speaker.jpg";
import smart_watch from "../assets/categories/smart_watch.jpg";
import umbrella from "../assets/categories/umbrella.jpg";
import water_bottle from "../assets/categories/water_bottle.jpg";
import welcome_kit from "../assets/categories/welcome_kits.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "./NavCategories.css";

const NavCategories = () => {
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
    {
      categorieImage: welcome_kit,
      categoriesName: "Welcome Kits",
    },
    {
      categorieImage: chocolate,
      categoriesName: "Chocolate",
    },
    {
      categorieImage: dry_fruits,
      categoriesName: "Dry Fruit",
    },
    {
      categorieImage: cap,
      categoriesName: "Cap",
    },
    {
      categorieImage: bluetooth_speaker,
      categoriesName: "Bluetooth Speaker",
    },
    {
      categorieImage: smart_watch,
      categoriesName: "Smart Watch",
    },
    {
      categorieImage: umbrella,
      categoriesName: "Umbrella",
    },
    {
      categorieImage: water_bottle,
      categoriesName: "Water Bottle",
    }
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
                    <img src={ele.categorieImage} alt="Power Bank" className="rounded-3xl"/>
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

export default NavCategories;
