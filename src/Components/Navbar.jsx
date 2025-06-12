import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-2xl px-6 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src="/images/logo 1-01 1.png"
          alt="UPSCHOLAR Logo"
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#aboutUs"
          className="text-blue-600 text-base font-medium hover:underline"
        >
          About Us
        </a>
        <a
          href="#services"
          className="text-blue-600 text-base font-medium hover:underline"
        >
          Our Services
        </a>
        <a href="#enquiry">
          <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-blue-700 transition">
            Enquiry
          </button>
        </a>
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu className="text-blue-600 w-8 h-8" />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-2xl py-4 px-6 flex flex-col items-start space-y-4 md:hidden z-50">
          <a
            href="#aboutUs"
            className="text-blue-600 text-base font-medium hover:underline w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-blue-600 text-base font-medium hover:underline w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Services
          </a>
          <a
            href="#enquiry"
            className="w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-blue-700 transition w-full text-left">
              Enquiry
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
