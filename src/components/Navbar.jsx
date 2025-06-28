import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-30 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo.webp"
            alt="Temudataku Logo"
            className="w-26 hover:bg-white rounded-full transition duration-300"
          />
        </Link>
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600 transition"
            }
          >
            Beranda
          </NavLink>
          <NavLink
            to="/mentoring"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600 transition"
            }
          >
            Mentoring
          </NavLink>
          <NavLink
            to="/bootcamp"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600 transition"
            }
          >
            Bootcamp
          </NavLink>
          <NavLink
            to="/latihan"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600 transition"
            }
          >
            Latihan
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
