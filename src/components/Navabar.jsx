import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ import Link

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Update links with route paths
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Why Us", path: "/whyus" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Feedback", path: "/feedback" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white text-gray-900 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/aalogo.png"
            alt="Applute Academy Logo"
            className="h-12 w-auto object-contain hover:opacity-90 transition-opacity duration-200"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[15px] font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path} // ✅ use Link instead of a
                className="text-[#0033A0] hover:text-[#007BFF] transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#0033A0]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.4 }}
            className="md:hidden bg-white shadow-lg"
          >
            <ul className="flex flex-col items-center space-y-6 py-6 font-semibold text-[#0033A0]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path} // ✅ use Link for mobile too
                    className="hover:text-[#007BFF] transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
