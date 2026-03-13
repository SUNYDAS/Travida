import React from "react";

export default function Dubai() {
  return (
    <div className="dubai-page">

      {/* ================= HERO SECTION ================= */}
      <section 
        className="hero bg-cover bg-center h-[300px] md:h-[400px] flex items-center justify-center text-white"
        style={{backgroundImage:"url('https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
      >
        <div className="bg-black/50 p-10 rounded-xl text-center">
          <h1 className="text-5xl font-bold">Explore Luxury Dubai</h1>
          <p className="mt-4 text-xl">Skyscrapers, desert safari, luxury shopping and beaches</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-white font-bold">
            Book Your Tour
          </button>
        </div>
      </section>

      {/* ================= ABOUT DUBAI TOURISM ================= */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">About Dubai Tourism</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Dubai is one of the world’s most luxurious travel destinations, famous for 
          futuristic skyscrapers, desert adventures, luxury shopping malls, and beautiful beaches. 
          From Burj Khalifa to Palm Jumeirah, Dubai offers a unique mix of modern lifestyle, 
          culture, and adventure tourism.
        </p>
      </section>

      {/* ================= TOP DESTINATIONS ================= */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Top Destinations in Dubai
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Burj Khalifa */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://plus.unsplash.com/premium_photo-1694475634077-e6e4b623b574?q=80&w=771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burj Khalifa" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Burj Khalifa</h3>
                <p className="text-gray-600 mt-2">World’s tallest building with observation deck.</p>
              </div>
            </div>

            {/* Palm Jumeirah */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1682410601904-24ec1d9858e6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Palm Jumeirah</h3>
                <p className="text-gray-600 mt-2">Luxury island with resorts and beaches.</p>
              </div>
            </div>

            {/* Dubai Mall */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1562280963-8a5475740a10?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dubai Mall" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Dubai Mall</h3>
                <p className="text-gray-600 mt-2">One of the world’s largest shopping malls.</p>
              </div>
            </div>

            {/* Desert Safari */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://plus.unsplash.com/premium_photo-1661962388409-eb7a041606fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Desert Safari" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Desert Safari</h3>
                <p className="text-gray-600 mt-2">Dune bashing, camel rides and BBQ dinner.</p>
              </div>
            </div>

            {/* Dubai Marina */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1682410601760-6372fd33ad2b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dubai Marina" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Dubai Marina</h3>
                <p className="text-gray-600 mt-2">Luxury yachts and nightlife hotspot.</p>
              </div>
            </div>

            {/* Burj Al Arab */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1561501900-3701fa6a0864" alt="Burj Al Arab" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Burj Al Arab</h3>
                <p className="text-gray-600 mt-2">Iconic luxury hotel and landmark.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 15 DAYS DUBAI TOUR ROADMAP ================= */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          15 Days Dubai Tour Plan
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE TIMELINE */}
          <div className="space-y-6 border-l-4 border-blue-600 pl-6">

            <div>
              <h3 className="text-xl font-bold">Day 1-2: Dubai City Tour</h3>
              <p className="text-gray-600">Burj Khalifa, Dubai Mall, Fountain show.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 3: Palm Jumeirah</h3>
              <p className="text-gray-600">Atlantis Hotel and beach activities.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 4-5: Desert Safari</h3>
              <p className="text-gray-600">Dune bashing, camel ride, desert camp.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 6: Dubai Marina</h3>
              <p className="text-gray-600">Luxury yacht cruise and nightlife.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 7-8: Abu Dhabi</h3>
              <p className="text-gray-600">Sheikh Zayed Mosque and Ferrari World.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 9: Burj Al Arab</h3>
              <p className="text-gray-600">Luxury hotel tour and beach club.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 10-11: Shopping Tour</h3>
              <p className="text-gray-600">Gold Souk, Mall of Emirates.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 12: Sky Views & Adventure</h3>
              <p className="text-gray-600">Sky Views Edge Walk and indoor skiing.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 13-14: Beach Relaxation</h3>
              <p className="text-gray-600">JBR Beach and luxury resorts.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 15: Departure</h3>
              <p className="text-gray-600">Shopping and return home.</p>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">
            <img 
              src="/images/Dubai.webp" 
              alt="Dubai Tour"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute bottom-6 left-6 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold">Luxury Dubai Journey</h4>
              <p className="text-sm">Luxury • Desert • Beaches • Shopping</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
