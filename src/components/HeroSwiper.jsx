import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";  // ✅ add this

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function HeroSwiper() {
  const navigate = useNavigate(); 

  const slides = [
    {
      title: "Explore Beautiful India",
      desc: "Discover culture, food, mountains and unforgettable journeys.",
      btn: "Explore India",
      img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80",
      link: "/india",
    },
    {
      title: "Visit Spain With Friends",
      desc: "Enjoy beaches, nightlife and stunning architecture.",
      btn: "View Spain Tours",
      img: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1600&q=80",
      link: "/spain",
    },
    {
      title: "Discover Germany Wonders",
      desc: "Explore castles, modern cities and beautiful landscapes in Germany.",
      btn: "Explore Germany",
      img: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1600&q=80",
      link: "/germany",
    },
    {
      title: "Romantic Italy Getaway",
      desc: "Visit Rome, Venice and enjoy the best food, art and history in Italy.",
      btn: "Explore Italy",
      img: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1600&q=80",
      link: "/italy",
    },
    {
      title: "Luxury Dubai Adventures",
      desc: "Desert safari, skyscrapers and premium lifestyle experience.",
      btn: "Explore Dubai",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
      link: "/dubai",
    },
  ];

  return (
    <div className="w-full h-[80vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[80vh] flex items-center"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="w-full h-full bg-black/60 flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 fade-up">
                    {slide.title}
                  </h2>

                  <p className="text-lg md:text-xl mb-6 max-w-xl">
                    {slide.desc}
                  </p>

                  <button
                    onClick={() => navigate(slide.link)}
                    className="bg-[rgb(0,189,187)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
                  >
                    {slide.btn}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
