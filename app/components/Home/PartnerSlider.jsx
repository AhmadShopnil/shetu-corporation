"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

const partnerLogos = [
  "/images/partner/1.webp",
  "/images/partner/2.webp",
  "/images/partner/4.webp",
  "/images/partner/5.webp",
  "/images/partner/6.webp",
  "/images/partner/7.webp",
];

export default function PartnerSlider() {
  return (
    <div className="relative w-full py-10 bg-white overflow-hidden">

      {/* Gradient Fade (left & right) */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={4000} // smooth continuous motion
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={2}
        spaceBetween={2}
        breakpoints={{
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        className="!overflow-visible"
      >
        {partnerLogos?.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="group flex items-center justify-center h-20 md:h-24">
              
              {/* Logo Wrapper */}
              <div className="relative w-[120px] md:w-[160px] h-full transition-all duration-300 group-hover:scale-110">
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}