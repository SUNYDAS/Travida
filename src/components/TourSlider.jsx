import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function TourSlider() {
  const tours = [
  {
    id: 1,
    title: "Goa Beach Tour",
    price: "₹12,999",
    img: "https://images.unsplash.com/photo-1580741186862-c5d0bf2aff33?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Manali Snow Trip",
    price: "₹18,499",
    img: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Dubai Luxury Tour",
    price: "₹45,999",
    img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Italy Romantic Trip",
    price: "₹60,999",
    img: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Spain Friends Tour",
    price: "₹52,999",
    img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Germany Adventure",
    price: "₹55,999",
    img: "https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?q=80&w=821&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

  return (
    <div className="w-[90%] mx-auto my-14">
      <h2 className="text-3xl font-bold mb-6">Popular Tours</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        //pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {tours.map((tour) => (
          <SwiperSlide key={tour.id}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={tour.img}
                alt={tour.title}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">{tour.title}</h3>
                <p className="text-gray-600 mt-2">
                  Starting from <span className="font-bold">{tour.price}</span>
                </p>

                <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
