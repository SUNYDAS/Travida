import React, { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  // Show button when scroll down
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-6 relative">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 p-10">

        {/* Column 1 */}
        <div>
          <a href="/"><h2 className="text-2xl font-bold mb-3">Travida</h2></a>
          <p className="text-sm text-gray-400">
            Discover amazing destinations across India.<br />
            Trusted travel tours with best prices.<br />
            Your journey, our responsibility.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <a href="/"><li className="hover:text-white cursor-pointer">Home</li></a>
            <a href="/about"><li className="hover:text-white cursor-pointer">About</li></a>
            <a href="/contact"><li className="hover:text-white cursor-pointer">Contact</li></a>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-400">
            <a href='tel:9330393001'><i className="fa-solid fa-phone"></i> 9330393001 </a>
          </p>
          <p className="text-gray-400 mt-2">
            <i className="fa-solid fa-location-dot"></i> 3/124, Rabindranagar, Kolkata - 700060
          </p>
        </div>

      </div>

      <hr className="border-gray-700" />

      <div className="container mx-auto px-4 pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Travida. All rights reserved. Developed by Suny Das.
        </p>
      </div>

      {/* 🔝 Back To Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition animate-bounce z-[9999]"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}

    </footer>
  );
}
