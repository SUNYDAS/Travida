import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonial() {

  const slides = [
    {
      img: "/images/P02-150x150.jpg",
      name: "Brittany Clark",
      city: "San Francisco",
      comment: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers."
    },
    {
      img: "/images/P02-150x150.jpg",
      name: "Brittany Clark",
      city: "San Francisco",
      comment: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers."
    },
    {
      img: "/images/P02-150x150.jpg",
      name: "Brittany Clark",
      city: "San Francisco",
      comment: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers."
    },
    {
      img: "/images/P02-150x150.jpg",
      name: "Brittany Clark",
      city: "San Francisco",
      comment: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers."
    },
    {
      img: "/images/P02-150x150.jpg",
      name: "Brittany Clark",
      city: "San Francisco",
      comment: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers."
    },
    {
      img: "/images/P02-150x150.jpg",
      name: "Brittany Clark",
      city: "San Francisco",
      comment: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers."
    }
  ];

  return (
    <div className="w-full mx-auto">

      <h2 className="text-center text-4xl font-bold mb-10 uppercase">
        Testimonials
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card bg-white p-6 rounded-2xl shadow-xl text-center">

              {/* Stars */}
              <div className="text-yellow-400 text-lg mb-3">
                ⭐⭐⭐⭐⭐
              </div>

              <img src={slide.img} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" />

              <h3 className="font-bold text-lg">{slide.name}</h3>
              <p className="text-sm text-gray-500">{slide.city}</p>

              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                {slide.comment}
              </p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}
