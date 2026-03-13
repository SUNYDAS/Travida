import React from "react";
import { useState } from "react";
import Enquiry from "../components/enquiry";

export default function Contact() {
    return(
    <>
      <section className="h-[300px] md:h-[400px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/contact-banner.webp')" }}>
      {/* Dark Overlay */}
      <div className="bg-black/60 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white text-center">
          
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Contact Us
          </h1>

          {/* Breadcrumb */}
          <p className="text-sm md:text-base text-gray-300">
            <a href="/">Home</a> <span className="mx-2">/</span> Contact
          </p>

        </div>
      </div>
    </section>

    <div className="bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Let’s Plan Your Journey</h2>
          <p className="text-gray-600 mt-3">
            Have questions? We’d love to hear from you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl">
                <source src="/images/travel.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Contact Form */}
          {/*<div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>*/}
          <Enquiry/>

        </div>

        {/* Google Map */}
        <div className="mt-12">
          <iframe
            title="map"
            className="w-full h-[350px] rounded-xl border"
            src="https://www.google.com/maps?q=Kolkata&output=embed"
            loading="lazy"
          ></iframe>
        </div>

      </div>

    </div>

    </>
    )
}