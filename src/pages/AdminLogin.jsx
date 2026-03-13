import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const login = () => {
    if (username==='Root' &&password === "Pass") {
      localStorage.setItem("admin", "true");
      navigate("/admin");
      window.location.reload();
    } else {
      alert("Wrong Username or Password");
    }
  };

  return (
    <div className="h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-2">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
    
    {/* Logo / Title */}
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold text-gray-800">Admin Panel</h2>
      <p className="text-gray-500 text-sm mt-1">Sign in to continue</p>
    </div>

    {/* Username */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Username
      </label>
      <input
        type="text"
        placeholder="Enter Username"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>

    {/* Password */}
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Password
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    {/* Login Button */}
    <button
      onClick={login}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
    >
      Login
    </button>

  </div>
</div>
  );
}
