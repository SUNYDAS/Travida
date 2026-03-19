import React from "react";
import HeroSwiper from "../components/HeroSwiper";
import TourSlider from "../components/TourSlider";
import TourImage from "../components/TourImage";
import Testimonial from "../components/Testimonial";
import Contact_form from "../components/contact_form";

export default function Home() {
  return (
    <>
      <div className="hero">
      <HeroSwiper />
      </div>

      <div className="cnt-frm">
        <Contact_form />
      </div>

      <div className="w-[90%] mx-auto my-14 flex flex-col md:flex-row gap-8">
  {/* Left Column */}
  <div className="w-full md:w-1/2">
    <img
      src="/images/p1.webp"
      className="w-full h-auto object-cover rounded-lg"
      alt=""
    />

    <div className="flex flex-col sm:flex-row gap-8 mt-8">
      <img
        src="/images/p2.webp"
        className="w-full sm:w-1/2 h-auto object-cover rounded-lg"
        alt=""
      />
      <img
        src="/images/p3.webp"
        className="w-full sm:w-1/2 h-auto object-cover rounded-lg"
        alt=""
      />
    </div>
  </div>

  {/* Right Column */}
  <div className="w-full md:w-1/2 mt-12">
    <div>
      <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
        Destination
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Explore breathtaking places and create unforgettable memories. From peaceful
        beaches to stunning mountains, we help you plan the perfect trip with
        comfort, safety, and best budget deals.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-8 mt-8">
      <div className="w-full sm:w-1/2">
        <img
          src="/images/p4.webp"
          className="w-full h-auto object-cover rounded-lg"
          alt=""
        />
      </div>

      <div className="w-full sm:w-1/2 flex flex-col gap-8">
        <img
          src="/images/p5.webp"
          className="w-full h-auto object-cover rounded-lg"
          alt=""
        />
        <img
          src="/images/p6.webp"
          className="w-full h-auto object-cover rounded-lg"
          alt=""
        />
      </div>
    </div>
  </div>
</div>

<div className="bg1">
  <div className="text-1">
    <h2 className="text-white text-4xl font-bold">Tour Type</h2>
    <p className="text-white mt-4">Adventure tours offer thrilling experiences for travelers who love excitement and nature. From mountain trekking to river rafting, these tours are designed for those who want to explore the outdoors while enjoying safe and guided activities in beautiful locations.
    </p>
  </div>  
</div>

<div className="tour">
  <TourImage/>
</div>

<div className="w-[90%] mx-auto my-12 flex flex-col md:flex-row gap-10">

  {/* LEFT IMAGE */}
  <div
    className="w-full md:w-1/2 h-[300px] bg-cover bg-center rounded-xl relative"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
  >
    <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

    <div className="absolute bottom-5 left-5 text-white of-1">
      <h2 className="text-3xl font-bold">Discover Special Deals!</h2>
      <p>Make sure to check out these special promotions</p>
      <button>See Tours</button>
    </div>
  </div>

  {/* RIGHT TEXT */}
  <div className="w-full md:w-1/2 bg-slate-100 p-4 flex justify-center flex-col rounded-xl">
    <h2 className="text-4xl font-bold mb-4">Don’t miss a thing</h2>
    <p className="text-gray-600">
      Stay updated with our latest travel deals and exclusive holiday offers.
      Enjoy special discounts, premium packages, and early bird deals.
      Join us and make your travel more affordable and exciting.
    </p>
  </div>

</div>

<div className="plan">
  <TourSlider/>
</div>


<div className="testi">
  <Testimonial/>
</div>

<div className="stat w-[90%] m-auto md:py-10">

  <div className="st">
    <img src="/images/icon-earth.png" alt="service" />
    <div className="text">
      <h3>700 Destinations</h3>
      <p>Our expert team handpicked all destinations in this site</p>
    </div>
  </div>

  <div className="st">
    <img src="/images/logo-02.png" alt="service" />
    <div className="text">
      <h3>Best Price Gurantee</h3>
      <p>Price match within 48 hours of order confirmation</p>
    </div>
  </div>

  <div className="st">
    <img src="/images/logo-03.png" alt="service" />
    <div className="text">
      <h3>Top Notch Support</h3>
      <p>We are here to help, before, during, and even after your trip.</p>
    </div>
  </div>

</div>
 

 

    </>
  );
}
