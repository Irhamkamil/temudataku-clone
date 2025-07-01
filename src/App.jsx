import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

export default function App() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/login"; // Kondisi untuk sembunyikan Navbar/Footer di halaman login

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbarFooter && <Navbar />}{" "}
      {/* Render Navbar hanya jika bukan di halaman login */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      {!hideNavbarFooter && <Footer />}{" "}
      {/* Render Footer hanya jika bukan di halaman login */}
    </div>
  );
}
