import React from "react";

export default function Germany() {
  return (
    <div className="germany-page">

      {/* ================= HERO SECTION ================= */}
      <section 
        className="hero bg-cover bg-center h-[300px] md:h-[400px] flex items-center justify-center text-white"
        style={{backgroundImage:"url('https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?q=80&w=821&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
      >
        <div className="bg-black/50 p-10 rounded-xl text-center">
          <h1 className="text-5xl font-bold">Explore Amazing Germany</h1>
          <p className="mt-4 text-xl">Historic cities, castles, beer festivals and modern culture</p>
          <button className="mt-6 px-6 py-3 bg-yellow-600 rounded-lg text-white font-bold">
            Book Your Tour
          </button>
        </div>
      </section>

      {/* ================= ABOUT GERMANY TOURISM ================= */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">About Germany Tourism</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Germany is one of Europe’s most popular travel destinations, known for its 
          medieval castles, modern cities, scenic countryside, and rich history. 
          From Berlin’s vibrant culture to Bavaria’s Alpine beauty, Germany offers 
          a perfect blend of tradition, technology, and tourism.
        </p>
      </section>

      {/* ================= TOP DESTINATIONS ================= */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Top Destinations in Germany
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Berlin */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1560969184-10fe8719e047" alt="Berlin" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Berlin</h3>
                <p className="text-gray-600 mt-2">Capital city with history and nightlife.</p>
              </div>
            </div>

            {/* Munich */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://plus.unsplash.com/premium_photo-1661963646444-ea17cd77c212?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Munich" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Munich</h3>
                <p className="text-gray-600 mt-2">Oktoberfest, beer gardens, and Bavarian culture.</p>
              </div>
            </div>

            {/* Hamburg */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://plus.unsplash.com/premium_photo-1733353207482-d85d35635a45?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hamburg" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Hamburg</h3>
                <p className="text-gray-600 mt-2">Port city with modern architecture.</p>
              </div>
            </div>

            {/* Cologne */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1578308148355-6e1b5300f134?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cologne" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Cologne</h3>
                <p className="text-gray-600 mt-2">Cologne Cathedral and Rhine river cruises.</p>
              </div>
            </div>

            {/* Frankfurt */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1626447637943-4c9d412fa8cf?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Frankfurt" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Frankfurt</h3>
                <p className="text-gray-600 mt-2">Financial hub with skyline views.</p>
              </div>
            </div>

            {/* Neuschwanstein Castle */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b" alt="Neuschwanstein Castle" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Bavaria Castles</h3>
                <p className="text-gray-600 mt-2">Fairytale castles and Alpine mountains.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 15 DAYS GERMANY TOUR ROADMAP ================= */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          15 Days Germany Tour Plan
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE TIMELINE */}
          <div className="space-y-6 border-l-4 border-yellow-600 pl-6">

            <div>
              <h3 className="text-xl font-bold">Day 1-2: Berlin</h3>
              <p className="text-gray-600">Brandenburg Gate, Berlin Wall, museums.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 3-4: Hamburg</h3>
              <p className="text-gray-600">Harbor tour, Miniatur Wunderland.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 5-6: Cologne</h3>
              <p className="text-gray-600">Cologne Cathedral and Rhine cruise.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 7: Frankfurt</h3>
              <p className="text-gray-600">Old Town and skyline tour.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 8-10: Munich</h3>
              <p className="text-gray-600">Oktoberfest grounds and Bavarian villages.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 11: Neuschwanstein Castle</h3>
              <p className="text-gray-600">Fairytale castle tour.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 12: Black Forest</h3>
              <p className="text-gray-600">Nature, lakes and scenic routes.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 13: Heidelberg</h3>
              <p className="text-gray-600">Romantic old town and castle.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 14: Stuttgart</h3>
              <p className="text-gray-600">Mercedes & Porsche museums.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Day 15: Departure</h3>
              <p className="text-gray-600">Shopping and return home.</p>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">
            <img 
              src="/images/germany.webp" 
              alt="Germany Tour"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute bottom-6 left-6 bg-yellow-600 text-white px-6 py-3 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold">Grand Germany Journey</h4>
              <p className="text-sm">Castles • Culture • Nature • Cities</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
