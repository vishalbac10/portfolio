"use client";

import React from "react";

// Removed the NavbarProps interface as darkMode state is no longer passed
// interface NavbarProps {
//   darkMode: boolean;
//   setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
// }

// Removed the darkMode and setDarkMode props
export default function Navbar() {
  // Removed darkMode state and useEffect hook

  return (
    // Navbar with dark background and fixed position
    // Using bg-gray-900 and shadow-lg for a dark theme look
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Site Title/Name */}
        {/* Text color set for dark theme by default */}
        <a
          href="#"
          className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition"
        >
          Vishal Bachu
        </a>
        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {/* Link text colors set for dark theme by default */}
          <a
            href="#about"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Contact
          </a>

          {/* Removed the Dark Mode Toggle Button */}

        </div>
      </div>
    </nav>
  );
}
