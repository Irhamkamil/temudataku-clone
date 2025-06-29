import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Beranda" },
    { to: "/mentoring", label: "Mentoring" },
    { to: "/bootcamp", label: "Bootcamp" },
    { to: "/latihan", label: "Latihan" }
  ];

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
        <div className="hidden md:flex space-x-8 text-green-400 font-medium">
          <NavLinks
            links={navLinks}
            activeClass="text-green-500 border-b-2 border-green-600 pb-1"
            inactiveClass="hover:text-green-500 transition"
          />
        </div>
        <div className="flex space-x-4 bg-green-600 py-2 px-4 rounded-md text-white font-semibold hover:bg-green-700 transition ">
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
}
