import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1E2227] sticky top-0 left-0 w-full  z-50 text-white shadow-[0_4px_10px_rgba(0,0,0,0.5)] border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="./images/loggo.png" alt="Logo" className="h-18 w-auto" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          <li>
            <Link to="/platform" className="hover:text-white transition">
              Platform
            </Link>
          </li>
          <li>
            <Link to="/use-case" className="hover:text-white transition">
              Use Case
            </Link>
          </li>
          <li>
            <Link to="/resources" className="hover:text-white transition">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/docs" className="hover:text-white transition">
              Docs
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-white transition">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/hire-experts" className="hover:text-white transition">
              Hire Experts
            </Link>
          </li>
        </ul>

        {/* Right actions (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/signin" className="text-gray-300 hover:text-white transition">
            Log In
          </Link>
          <Link
            to="/book-demo"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-5 py-2 rounded-full text-white transition"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1E2227] px-6 pb-4 border-t border-gray-700">
          <ul className="flex flex-col gap-4 text-gray-300">
            <li>
              <Link to="/platform" className="hover:text-white">
                Platform
              </Link>
            </li>
            <li>
              <Link to="/use-case" className="hover:text-white">
                Use Case
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-white">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/docs" className="hover:text-white">
                Docs
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/hire-experts" className="hover:text-white">
                Hire Experts
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <Link to="/signin" className="text-gray-300 hover:text-white">
              Sign In
            </Link>
            <Link
              to="/book-demo"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-5 py-2 rounded-full text-white"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}


