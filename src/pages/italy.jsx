import React from "react";

export default function Italy() {
  return (
    <div className="italy-page">

      {/* ================= HERO SECTION ================= */}
      <section 
        className="hero bg-cover bg-center h-[300px] md:h-[400px] flex items-center justify-center text-white"
        style={{backgroundImage:"url('https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
      >
        <div className="bg-black/50 p-10 rounded-xl text-center">
          <h1 className="text-5xl font-bold">Explore Romantic Italy</h1>
          <p className="mt-4 text-xl">History, art, food, fashion and beautiful landscapes</p>
          <button className="mt-6 px-6 py-3 bg-green-600 rounded-lg text-white font-bold">
            Book Your Tour
          </button>
        </div>
      </section>

      {/* ================= ABOUT ITALY TOURISM ================= */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">About Italy Tourism</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Italy is one of the world’s most beautiful travel destinations, famous for 
          ancient history, Renaissance art, stunning coastlines, delicious cuisine, 
          and romantic cities. From Rome’s ancient ruins to Venice’s canals and 
          Florence’s art, Italy offers a perfect blend of culture, luxury, and history.
        </p>
      </section>

      {/* ================= TOP DESTINATIONS ================= */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Top Destinations in Italy
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Rome */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Rome" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Rome</h3>
                <p className="text-gray-600 mt-2">Colosseum, Vatican City and ancient history.</p>
              </div>
            </div>

            {/* Venice */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1558271736-cd043ef2e855?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Venice" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Venice</h3>
                <p className="text-gray-600 mt-2">Canals, gondola rides and romantic views.</p>
              </div>
            </div>

            {/* Florence */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://plus.unsplash.com/premium_photo-1676289157074-1afc4b1dfdea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Florence" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Florence</h3>
                <p className="text-gray-600 mt-2">Renaissance art and historic architecture.</p>
              </div>
            </div>

            {/* Milan */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" alt="Milan" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Milan</h3>
                <p className="text-gray-600 mt-2">Fashion capital and modern lifestyle.</p>
              </div>
            </div>

            {/* Naples */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1710625361134-332bc2801df3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Naples" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Naples</h3>
                <p className="text-gray-600 mt-2">Pizza city and Mount Vesuvius views.</p>
              </div>
            </div>

            {/* Amalfi Coast */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Amalfi Coast" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Amalfi Coast</h3>
                <p className="text-gray-600 mt-2">Luxury coastline and scenic beauty.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 15 DAYS ITALY TOUR ROADMAP ================= */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          15 Days Italy Tour Plan
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE TIMELINE */}
          <div className="space-y-6 border-l-4 border-green-600 pl-6">

            <div>
              <h3 className="text-xl font-bold">Day 1-3: Rome</h3>
              <p className="text-gray-600">Colosseum, Vatican Museums, Roman Forum.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 4-5: Florence</h3>
              <p className="text-gray-600">Duomo, Uffizi Gallery, Pisa day trip.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 6-7: Venice</h3>
              <p className="text-gray-600">Gondola ride, St. Mark’s Square.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 8-9: Milan</h3>
              <p className="text-gray-600">Fashion district, Duomo Cathedral.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 10: Lake Como</h3>
              <p className="text-gray-600">Boat tour and luxury villas.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 11-12: Naples</h3>
              <p className="text-gray-600">Pompeii ruins and pizza tour.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 13-14: Amalfi Coast</h3>
              <p className="text-gray-600">Positano and scenic coastal drive.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 15: Departure</h3>
              <p className="text-gray-600">Shopping and return home.</p>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">
            <img 
              src="/images/italy.webp" 
              alt="Italy Tour"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute bottom-6 left-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold">Grand Italy Journey</h4>
              <p className="text-sm">Art • History • Food • Romance</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
