import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { navLinks } from "../../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false); // State animasi masuk/keluar
  const navigate = useNavigate();

  useEffect(() => {
    setScrolled(window.scrollY > 50);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    setLoggedIn(!!userEmail);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLoginClick = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  const confirmLogout = () => {
    setShowLogoutModal(true);
    setMenuOpen(false);
    setTimeout(() => setAnimateModal(true), 10); // Trigger animasi masuk
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("userEmail");
    setLoggedIn(false);
    closeModal();
    navigate("/");
  };

  const closeModal = () => {
    setAnimateModal(false); // Mulai animasi keluar
    setTimeout(() => setShowLogoutModal(false), 300); // Durasi animasi 300ms, sesuaikan dengan CSS transition
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-40 transition-colors duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 pt-4 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.webp" alt="Temudataku Logo" className="w-25" />
          </Link>

          {/* Desktop Navbar Links & Login/Logout */}
          <div className="hidden md:flex items-center space-x-6 font-semibold text-green-700">
            {loggedIn ? (
              <>
                {navLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-400 border-b-2 border-green-400 pb-1"
                        : "hover:text-green-500 transition"
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                ))}
                <button
                  onClick={confirmLogout}
                  className="ml-6 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={handleLoginClick}
                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-gray-700 focus:outline-none mx-2"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`md:hidden bg-white shadow-md py-4 px-6 space-y-4
          transition-all duration-500 ease-in-out
          overflow-hidden
          ${
            menuOpen
              ? "max-h-96 opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-75"
          }
          origin-top
        `}
        >
          {loggedIn ? (
            <>
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "block text-green-600 border-l-4 border-green-600 pl-3 py-2 font-semibold"
                      : "block text-gray-700 hover:text-green-500 pl-3 py-2 transition"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  confirmLogout();
                }}
                className="block w-full text-left bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition mt-2"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                handleLoginClick();
                setMenuOpen(false);
              }}
              className="block w-full text-left bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 bg-opacity-50
          transition-opacity duration-300 ${
            animateModal ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`bg-white rounded-lg shadow-lg w-80 p-6 space-y-4 
            transform transition-all duration-300 ${
              animateModal ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <h2 className="text-lg font-semibold text-gray-800">
              Konfirmasi Logout
            </h2>
            <p>Apakah Anda yakin ingin logout?</p>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 font-semibold rounded bg-green-300 hover:bg-green-400 transition"
              >
                Batal
              </button>
              <button
                onClick={handleLogoutClick}
                className="px-4 py-2 font-semibold rounded bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
