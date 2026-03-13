import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/images/vite.svg'
import './App.css'
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import India from './pages/india';
import Spain from './pages/spain';
import Germany from './pages/germany';
import Italy from './pages/italy';
import Dubai from './pages/dubai';
import Contact from './pages/contact';
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function ProtectedAdmin({ children }) {
  return localStorage.getItem("admin") ? children : <AdminLogin />;
}

function App() {
  return (
      <>
      <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/india" element={<India />} />
        <Route path="/spain" element={<Spain />} />
        <Route path="/germany" element={<Germany />} />
        <Route path="/italy" element={<Italy />} />
        <Route path="/dubai" element={<Dubai />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={
          <ProtectedAdmin>
            <AdminDashboard />
          </ProtectedAdmin>
        } />

      </Routes>

      <Footer />
      </BrowserRouter>
      </>
  )
}

export default App

