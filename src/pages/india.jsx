import React from "react";

export default function India() {
  return (
    <div className="india-page">

      {/* ================= HERO SECTION ================= */}
      <section className="hero bg-cover bg-center h-[300px] md:h-[400px] flex items-center justify-center text-white"
        style={{backgroundImage:"url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da')"}}
      >
        <div className="bg-black/50 p-10 rounded-xl text-center">
          <h1 className="text-5xl font-bold">Explore Incredible India</h1>
          <p className="mt-4 text-xl">Discover culture, history, nature, and spiritual journeys</p>
          <button className="mt-6 px-6 py-3 bg-orange-500 rounded-lg text-white font-bold">
            Book Your Tour
          </button>
        </div>
      </section>

      {/* ================= ABOUT INDIAN TOURISM ================= */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">About Indian Tourism</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          India is one of the most diverse travel destinations in the world. 
          From the snow-capped Himalayas to tropical beaches, from ancient temples 
          to modern cities, India offers a rich blend of culture, history, spirituality, 
          wildlife, and adventure. Millions of travelers visit India every year to 
          experience its heritage, festivals, cuisine, and warm hospitality.
        </p>
      </section>

      {/* ================= TOP DESTINATIONS ================= */}
<section className="bg-gray-100 py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 text-center">
      Top Destinations in India
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* 1. Agra */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1548013146-72479768bada" alt="Taj Mahal" />
        <div className="p-5">
          <h3 className="text-xl font-bold">Agra - Taj Mahal</h3>
          <p className="text-gray-600 mt-2">World-famous monument and symbol of love.</p>
        </div>
      </div>

      {/* 2. Jaipur */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <img src="https://plus.unsplash.com/premium_photo-1661962388409-eb7a041606fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jaipur" />
        <div className="p-5">
          <h3 className="text-xl font-bold">Jaipur - Pink City</h3>
          <p className="text-gray-600 mt-2">Royal forts, palaces, and colorful markets.</p>
        </div>
      </div>

      {/* 3. Kerala */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <img src="https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kerala" />
        <div className="p-5">
          <h3 className="text-xl font-bold">Kerala - Backwaters</h3>
          <p className="text-gray-600 mt-2">Lush greenery, houseboats, and Ayurveda.</p>
        </div>
      </div>

      {/* 4. Goa */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Goa Beach" />
        <div className="p-5">
          <h3 className="text-xl font-bold">Goa - Beaches</h3>
          <p className="text-gray-600 mt-2">Party beaches, sunsets, and Portuguese culture.</p>
        </div>
      </div>

      {/* 5. Varanasi */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1706186839147-0d708602587b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Varanasi" />
        <div className="p-5">
          <h3 className="text-xl font-bold">Varanasi - Spiritual City</h3>
          <p className="text-gray-600 mt-2">Holy Ganga river, temples, and Ganga Aarti.</p>
        </div>
      </div>

      {/* 6. Ladakh */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1593118845043-359e5f628214?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ladakh" />
        <div className="p-5">
          <h3 className="text-xl font-bold">Ladakh - Himalayas</h3>
          <p className="text-gray-600 mt-2">Mountains, monasteries, and adventure trips.</p>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ================= 15 DAYS INDIA TOUR ROADMAP ================= */}
      <section className="max-w-7xl mx-auto py-20 px-6">
  <h2 className="text-3xl font-bold mb-10 text-center">
    15 Days Incredible India Tour Plan
  </h2>

  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT SIDE - TIMELINE */}
    <div className="space-y-6 border-l-4 border-orange-500 pl-6">

      <div>
        <h3 className="text-xl font-bold">Day 1-2: Delhi</h3>
        <p className="text-gray-600">Explore India Gate, Red Fort, Qutub Minar, and Chandni Chowk.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold">Day 3: Agra</h3>
        <p className="text-gray-600">Visit Taj Mahal and Agra Fort.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold">Day 4-5: Jaipur</h3>
        <p className="text-gray-600">Amber Fort, Hawa Mahal, City Palace.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold">Day 6: Udaipur</h3>
        <p className="text-gray-600">Lake Palace, City tour and boat ride.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold">Day 7-8: Varanasi</h3>
        <p className="text-gray-600">Ganga Aarti, temples and sunrise boat ride.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold">Day 9-10: Kerala</h3>
        <p className="text-gray-600">Houseboat stay and nature sightseeing.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold">Day 11-12: Goa</h3>
        <p className="text-gray-600">Beach отдых, nightlife and water sports.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold">Day 13: Mumbai</h3>
        <p className="text-gray-600">Gateway of India, Marine Drive, Bollywood tour.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold">Day 14: Rishikesh</h3>
        <p className="text-gray-600">Yoga, Ganga Aarti, river rafting.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold">Day 15: Departure</h3>
        <p className="text-gray-600">Shopping and return home.</p>
      </div>

    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="relative">
      <img 
        src="https://images.unsplash.com/photo-1541438633571-9578b70ae5bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhJTIwdHJhdmVsfGVufDB8fDB8fHww" 
        alt="India Tour Map"
        className="rounded-2xl shadow-xl"
      />
      <div className="absolute bottom-6 left-6 bg-orange-500 text-white px-6 py-3 rounded-xl shadow-lg">
        <h4 className="text-lg font-bold">All India Grand Tour</h4>
        <p className="text-sm">Culture • Nature • Adventure • Spiritual</p>
      </div>
    </div>

  </div>
</section>

    </div>
  );
}
