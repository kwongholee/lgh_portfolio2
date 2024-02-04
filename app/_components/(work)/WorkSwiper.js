'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './WorkSwiper.css';

import { Pagination, Navigation } from 'swiper/modules';

export default function WorkSwiper() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [pageLoaded, setPageLoaded] = React.useState(false);
  
  React.useEffect(() => {
    setPageLoaded(true);
  }, [pageLoaded]);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div ref={navigationNextRef} className="swiper-button-next swiper-nav-ctrl simp-next cursor-pointer">
          <span className="simple-btn right"></span>
        </div>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <div ref={navigationPrevRef} className="swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer">
          <span className="simple-btn"></span>
        </div>
      </Swiper>
    </>
  );
}
