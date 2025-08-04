import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../images/ThinkAI_Logo_rectangular.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* <div className="text-2xl font-bold text-gray-900">TechAI</div> */}
              <img src={logo} alt="thinkAI logo" width="160" height="80" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Features
              </a>
              {/*               <a
                href="#about"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                About
              </a> */}
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
              >
                Services
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
              >
                Features
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
