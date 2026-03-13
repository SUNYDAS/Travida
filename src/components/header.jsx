import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <header className="bg-[#00bdbb] text-white w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* ✅ Left Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Travida</Link>
        </div>

        {/* ✅ Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-lg">

          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>

          {/* ✅ Tours Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setTourOpen(true)}
            onMouseLeave={() => setTourOpen(false)}
          >
            <button className="hover:text-yellow-400 transition flex items-center gap-1">
              Tours ⌄
            </button>

            {tourOpen && (
              <div className="absolute top-8 left-0 bg-white text-gray-900 rounded-lg shadow-lg w-44 py-2">
                <Link to="/india" className="block px-4 py-2 hover:bg-gray-200">
                  India
                </Link>
                <Link to="/spain" className="block px-4 py-2 hover:bg-gray-200">
                  Spain
                </Link>
                <Link to="/germany" className="block px-4 py-2 hover:bg-gray-200">
                  Germany
                </Link>
                <Link to="/italy" className="block px-4 py-2 hover:bg-gray-200">
                  Italy
                </Link>
                <Link to="/dubai" className="block px-4 py-2 hover:bg-gray-200">
                  Dubai
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>

          <a href="tel:9330393001"><button className="cta"> <i className="fa-solid fa-phone"></i> 9330393001</button></a>
          
        </nav>

        {/* ✅ Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-4 space-y-3 text-lg">

          <Link to="/" className="block hover:text-yellow-400">
            Home
          </Link>

          <Link to="/about" className="block hover:text-yellow-400">
            About
          </Link>

          {/* Mobile Tours Dropdown */}
          <div>
            <button
              onClick={() => setTourOpen(!tourOpen)}
              className="w-full text-left hover:text-yellow-400 flex justify-between"
            >
              Tours <span>{tourOpen ? "▲" : "▼"}</span>
            </button>

            {tourOpen && (
              <div className="pl-4 mt-2 space-y-2 text-base">
                <Link to="/india" className="block hover:text-yellow-400">
                  India
                </Link>
                <Link to="/spain" className="block hover:text-yellow-400">
                  Spain
                </Link>
                <Link to="/germany" className="block hover:text-yellow-400">
                  Germany
                </Link>
                <Link to="/italy" className="block hover:text-yellow-400">
                  Italy
                </Link>
                <Link to="/dubai" className="block hover:text-yellow-400">
                  Dubai
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="block hover:text-yellow-400">
            Contact
          </Link>

        </div>
      )}
    </header>
  );
}
