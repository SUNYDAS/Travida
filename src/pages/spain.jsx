import React from "react";

export default function Spain() {
  return (
    <div className="spain-page">

      {/* ================= HERO SECTION ================= */}
      <section 
        className="hero bg-cover bg-center h-[300px] md:h-[400px] flex items-center justify-center text-white"
        style={{backgroundImage:"url('https://plus.unsplash.com/premium_photo-1700566982560-31ed8b46991a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
      >
        <div className="bg-black/50 p-10 rounded-xl text-center">
          <h1 className="text-5xl font-bold">Explore Beautiful Spain</h1>
          <p className="mt-4 text-xl">Culture, beaches, history and vibrant nightlife</p>
          <button className="mt-6 px-6 py-3 bg-red-600 rounded-lg text-white font-bold">
            Book Your Tour
          </button>
        </div>
      </section>

      {/* ================= ABOUT SPAIN TOURISM ================= */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">About Spain Tourism</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Spain is one of Europe’s most popular travel destinations, famous for its 
          beautiful beaches, historic cities, flamenco dance, delicious cuisine, and 
          vibrant festivals. From Barcelona’s architecture to Madrid’s royal heritage, 
          Spain offers a perfect mix of culture, relaxation, and adventure.
        </p>
      </section>

      {/* ================= TOP DESTINATIONS ================= */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Top Destinations in Spain
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Barcelona */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Barcelona" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Barcelona</h3>
                <p className="text-gray-600 mt-2">Gaudí architecture, beaches and nightlife.</p>
              </div>
            </div>

            {/* Madrid */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4" alt="Madrid" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Madrid</h3>
                <p className="text-gray-600 mt-2">Royal Palace, museums and football culture.</p>
              </div>
            </div>

            {/* Seville */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1688404808661-92f72f2ea258?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Seville" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Seville</h3>
                <p className="text-gray-600 mt-2">Flamenco dance and historic old town.</p>
              </div>
            </div>

            {/* Valencia */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb" alt="Valencia" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Valencia</h3>
                <p className="text-gray-600 mt-2">Beaches and futuristic architecture.</p>
              </div>
            </div>

            {/* Granada */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1528728329032-2972f65dfb3f" alt="Granada" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Granada</h3>
                <p className="text-gray-600 mt-2">Alhambra Palace and Moorish history.</p>
              </div>
            </div>

            {/* Ibiza */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Ibiza" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Ibiza</h3>
                <p className="text-gray-600 mt-2">Party island with luxury beaches.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 15 DAYS SPAIN TOUR ROADMAP ================= */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          15 Days Spain Tour Plan
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE TIMELINE */}
          <div className="space-y-6 border-l-4 border-red-600 pl-6">

            <div>
              <h3 className="text-xl font-bold">Day 1-2: Madrid</h3>
              <p className="text-gray-600">Royal Palace, Prado Museum, city tour.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 3-5: Barcelona</h3>
              <p className="text-gray-600">Sagrada Familia, beaches, nightlife.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 6: Valencia</h3>
              <p className="text-gray-600">City of Arts & Sciences, beach time.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 7-8: Seville</h3>
              <p className="text-gray-600">Cathedral, flamenco show, Alcázar.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 9: Granada</h3>
              <p className="text-gray-600">Alhambra Palace and old town tour.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 10-12: Ibiza</h3>
              <p className="text-gray-600">Luxury beaches and party nights.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 13: Malaga</h3>
              <p className="text-gray-600">Costa del Sol beaches and Picasso museum.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 14: Toledo</h3>
              <p className="text-gray-600">Historic medieval city tour.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 15: Departure</h3>
              <p className="text-gray-600">Shopping and return home.</p>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">
            <img 
              src="/images/spain.webp" 
              alt="Spain Tour"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute bottom-6 left-6 bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold">Grand Spain Journey</h4>
              <p className="text-sm">Beaches • Culture • Nightlife • History</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
