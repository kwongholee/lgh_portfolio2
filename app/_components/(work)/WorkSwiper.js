'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './WorkSwiper.css';

import { Pagination, Navigation } from 'swiper/modules';
import Contentbox from './Contentbox';

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
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        <div ref={navigationNextRef} className="swiper-button-next swiper-nav-ctrl simp-next cursor-pointer">
          <span className="simple-btn right"></span>
        </div>
        <SwiperSlide><Contentbox /></SwiperSlide>
        <SwiperSlide><Contentbox /></SwiperSlide>
        <SwiperSlide><Contentbox /></SwiperSlide>
        <div ref={navigationPrevRef} className="swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer">
          <span className="simple-btn"></span>
        </div>
      </Swiper>
    </>
  );
}
