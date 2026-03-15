import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleBack = () => {
      // Logout when back button pressed
      localStorage.removeItem("admin");
      window.location.href = "/admin-login"; // force redirect
    };

    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, []);

  useEffect(() => {
    fetch("https://travida-backend.onrender.com/api/travel")
      .then(res => res.json())
      .then(setData);
  }, []);

  const deleteData = async (id) => {
    await fetch(`https://travida-backend.onrender.com/api/travel/${id}`, {
      method: "DELETE",
    });
    setData(data.filter(item => item._id !== id));
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("admin"); // remove admin login
    navigate("/admin-login"); // redirect to login page
  };

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Travel Enquiries</h2>
        <button
          onClick={logout}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <table className="border w-full">
        <thead className="bg-gray-200">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Persons</th>
            <th>Destination</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map(item => (
            <tr key={item._id} className="border text-center">
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.date}</td>
              <td>{item.persons}</td>
              <td>{item.destination}</td>
              <td>
                <button
                  onClick={() => deleteData(item._id)}
                  className="bg-red-600 text-white px-3 py-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}