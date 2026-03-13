import React, { useState } from "react";

export default function Enquiry() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://travida-backend.onrender.com/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Form Submitted!");
        setFormData({ name: "", email: "", text: "" });
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="text"
          value={formData.text}
          onChange={handleChange}
          rows="4"
          placeholder="Your Message"
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>

      </form>
    </div>
  );
}