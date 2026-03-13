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
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80",
  },
  {
    country: "Germany",
    img: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    country: "Italy",
    img: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1600&q=80",
  },
  {
    country: "Spain",
    img: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1600&q=80",
  },
  {
    country: "Dubai",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
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
