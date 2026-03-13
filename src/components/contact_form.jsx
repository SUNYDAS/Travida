import React, { useState } from "react";

export default function TravelForm() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    persons: "1 Person",
    destination: "India"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/travel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Form Submitted!");

    // Clear Form
    setFormData({
      name: "",
      phone: "",
      date: "",
      persons: "1 Person",
      destination: "India",
    });
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-[90%] mx-auto">

      <h2 className="text-2xl font-bold text-center mb-6">Plan Your Trip</h2>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center">

        {/* Name */}
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border p-3 rounded-lg w-full md:w-[20%]"
          required
        />

        {/* Phone */}
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border p-3 rounded-lg w-full md:w-[18%]"
          required
        />

        {/* Date */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full md:w-[16%]"
          required
        />

        {/* Persons */}
        <select
          name="persons"
          value={formData.persons}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full md:w-[16%]"
        >
          <option value="1 Person">1 Person</option>
          <option value="2 Persons">2 Persons</option>
          <option value="3 Persons">3 Persons</option>
          <option value="Family">Family</option>
          <option value="Group">Group</option>
        </select>

        {/* Destination */}
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full md:w-[16%]"
        >
          <option value="India">India</option>
          <option value="Spain">Spain</option>
          <option value="Germany">Germany</option>
          <option value="Italy">Italy</option>
          <option value="Dubai">Dubai</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Search Tour
        </button>

      </form>
    </div>
  );
}

