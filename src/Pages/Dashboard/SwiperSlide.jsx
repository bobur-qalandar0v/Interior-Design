import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

function SwiperComponent() {
  return (
    <>
      <Swiper
        centeredSlides={true}
        speed={5000}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="swiper__img" src="/swiper1.jpg" alt="swiper-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper__img" src="/swiper2.jpg" alt="swiper-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper__img" src="/swiper3.jpg" alt="swiper-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper__img" src="/swiper4.jpg" alt="swiper-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper__img" src="/swiper5.jpg" alt="swiper-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper__img" src="/swiper6.jpg" alt="swiper-img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperComponent;
