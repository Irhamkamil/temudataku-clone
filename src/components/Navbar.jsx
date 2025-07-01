import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { navLinks } from "../../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Scroll effect to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu on mobile
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Simulate login/logout toggle (for demo)
  const handleLoginClick = () => {
    // setLoggedIn(true);
    navigate("/login"); // redirect to login page
    setMenuOpen(false); // close menu on login
  };

  const handleLogoutClick = () => {
    setLoggedIn(false);
    setMenuOpen(false); // close menu on logout
  };

  return (
    <nav
      className={`fixed w-full top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
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
                onClick={handleLogoutClick}
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
            {/* Navigation links */}
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
            {/* Logout button */}
            <button
              onClick={() => {
                handleLogoutClick();
                setMenuOpen(false);
              }}
              className="block w-full text-left bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition mt-2"
            >
              Logout
            </button>
          </>
        ) : (
          /* Login button */
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
  );
}
