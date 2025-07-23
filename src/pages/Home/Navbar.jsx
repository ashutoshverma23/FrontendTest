import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Models", to: "/models" },
    { name: "Services", to: "/services" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 tracking-tight"
        >
          DriveX
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="hover:text-red-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
          >
            Book a Test Drive
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-white shadow-md space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 font-medium hover:text-red-600"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block mt-2 px-4 py-2 bg-red-600 text-white text-center rounded-full hover:bg-red-700 transition"
          >
            Book a Test Drive
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
