import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import webBanner1 from "../assets/banner/web1.webp";
import webBanner2 from "../assets/banner/web2.webp";
import webBanner4 from "../assets/banner/web4.webp";
import "./HeroBanner.css";

const HeroBanner = () => {
  const bannerImage = [webBanner1, webBanner2, webBanner4];

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {bannerImage.map((images) => (
          <SwiperSlide key={images}>
            <img src={images} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroBanner;
