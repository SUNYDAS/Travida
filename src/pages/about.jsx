import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function About() {

  useEffect(() => {
  document.title = "About Travida | Your Trusted Travel Partner";

  const meta = document.querySelector("meta[name='description']");
  meta.setAttribute(
    "content",
    "Learn about Travida, a leading travel agency specializing in domestic and international tour packages. We create memorable journeys with expert planning and personalized service."
  );
  }, []);


  const faqsLeft = [
    { q: "How do I book a tour package?", a: "You can book directly from our website or contact our travel experts." },
    { q: "Are flights included in the tour price?", a: "Some packages include flights, others offer optional flight booking." },
    { q: "Can I customize my travel itinerary?", a: "Yes, we provide fully customizable itineraries." },
    { q: "What payment methods do you accept?", a: "We accept cards, UPI, net banking and international payments." },
    { q: "Is travel insurance included?", a: "Travel insurance is optional but recommended." },
  ];

  const faqsRight = [
    { q: "What is your cancellation policy?", a: "Cancellation charges depend on the tour and cancellation date." },
    { q: "Do you offer group discounts?", a: "Yes, we provide discounts for group and corporate tours." },
    { q: "Are meals included in the tour?", a: "Meal plans vary by package. Breakfast is included in most tours." },
    { q: "Do you provide visa assistance?", a: "Yes, we provide visa guidance and documentation support." },
    { q: "How can I contact customer support?", a: "You can contact us via phone, email, or live chat 24/7." },
  ];

  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <>
      <section
      className="h-[300px] md:h-[400px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/about-banner.webp')" }}
    >
      {/* Dark Overlay */}
      <div className="bg-black/60 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white text-center">
          
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            About Us
          </h1>

          {/* Breadcrumb */}
          <p className="text-sm md:text-base text-gray-300">
            <a href="/">Home</a> <span className="mx-2">/</span> About
          </p>

        </div>
      </div>
    </section>


    {/* About */}

    <section className="grid md:grid-cols-2 gap-10 my-20 m-auto max-w-7xl">
      <div>
         <img src="/images/tour-colg.jpg" alt="" className="w-[100%] md:w-[80%] m-auto"/> 
      </div>
      <div className="flex flex-col align-middle">
          <h1 className="font-semibold text-3xl">We have been in the tourism industry for more than 20 years</h1>
          <p className="mt-4">Leave your guidebooks at home and dive into the local cultures that make each destination so special. We’ll connect you with our exclusive experiences.</p>
          
          <section className="py-10 bg-white flex flex-col gap-y-10">

              {/* 1 */}
              <div className="flex gap-5">
                <div className="text-blue-600 text-3xl">
                  <i className="fa-solid fa-shield-heart"></i>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Book With Confidence</h2>
                  <p className="text-gray-600 mt-2">
                    Each trip is carefully crafted to leave you free to live in the moment and enjoy your vacation.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="flex gap-4">
                <div className="text-green-600 text-3xl">
                  <i className="fa-solid fa-compass"></i>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Freedom to Discover, Confidence to Explore</h2>
                  <p className="text-gray-600 mt-2">
                    Each trip is carefully crafted to leave you free to live in the moment and enjoy your vacation.
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="flex gap-4">
                <div className="text-orange-600 text-3xl">
                  <i className="fa-solid fa-people-group"></i>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Dive into Culture</h2>
                  <p className="text-gray-600 mt-2">
                    Each trip is carefully crafted to leave you free to live in the moment and enjoy your vacation.
                  </p>
                </div>
              </div>

          </section>

          <button className="w-[250px] bg-[#00bdbb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#000] transition">
          Book Now
        </button>

      </div>
    </section>


    {/* FAQs */}


    <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-2">Everything you need to know before booking</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT COLUMN */}
            <div className="space-y-4">
              {faqsLeft.map((faq, i) => (
                <div key={i} className="bg-white border rounded-lg">
                  <button
                    onClick={() => toggle("L" + i)}
                    className="w-full flex justify-between p-4 font-semibold"
                  >
                    {faq.q}
                    <span>{open === "L" + i ? "−" : "+"}</span>
                  </button>

                  {open === "L" + i && (
                    <p className="px-4 pb-4 text-gray-600">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-4">
              {faqsRight.map((faq, i) => (
                <div key={i} className="bg-white border rounded-lg">
                  <button
                    onClick={() => toggle("R" + i)}
                    className="w-full flex justify-between p-4 font-semibold"
                  >
                    {faq.q}
                    <span>{open === "R" + i ? "−" : "+"}</span>
                  </button>

                  {open === "R" + i && (
                    <p className="px-4 pb-4 text-gray-600">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>



  <section className="bg-cover bg-center" style={{backgroundImage:"URL('/images/testimonial-bg.jpg')"}}>
  <div className="stat w-[90%] m-auto md:py-10">

  <div className="st">
    <img src="/public/images/icon-earth.png" alt="service" />
    <div className="text">
      <h3>700 Destinations</h3>
      <p>Our expert team handpicked all destinations in this site</p>
    </div>
  </div>

  <div className="st">
    <img src="/public/images/logo-02.png" alt="service" />
    <div className="text">
      <h3>Best Price Gurantee</h3>
      <p>Price match within 48 hours of order confirmation</p>
    </div>
  </div>

  <div className="st">
    <img src="/public/images/logo-03.png" alt="service" />
    <div className="text">
      <h3>Top Notch Support</h3>
      <p>We are here to help, before, during, and even after your trip.</p>
    </div>
  </div>

</div>
</section>

    </>
  );
}
