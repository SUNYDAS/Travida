import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function TourImage() {
  const tours = [
    {
    country: "India",
    img: "/images/slider-1.webp",
  },
  {
    country: "Germany",
    img: "/images/slider-2.webp",
  },
  {
    country: "Italy",
    img: "/images/slider-3.webp",
  },
  {
    country: "Spain",
    img: "/images/slider-4.webp",
  },
  {
    country: "Dubai",
    img: "/images/slider-5.webp",
  },
  ];

  return (
    <div className="w-[90%] mx-auto mt-[-250px]">

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        //pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {tours.map((tour) => (
          <SwiperSlide key={tour.id}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={tour.img}
                alt={tour.title}
                className="w-full h-[300px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
