"use client";

import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Skills from "./skills";
import Navbar from "./Navbar";
import Projects from "./projects";
import Contact from "./contact";
import About from "./About";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // This useEffect is still here but the Navbar no longer uses the state
    // You might remove this if dark mode is permanently off and not used elsewhere
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);


  return (
    <>
      {/* Navbar component - now always dark theme */}
      <Navbar />

      {/* Main content area - removed pt-24 */}
      {/* The content will now start directly below the fixed Navbar */}
      <main className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-blue-900 text-gray-900 dark:text-white w-full">
        {/* The div below no longer has gap-24 */}
        <div className="flex flex-col w-full">
          {/* Hero section */}
          <Hero />

          {/* About section */}
          <About />

          {/* Skills section */}
          <Skills />

          {/* Projects section */}
          <Projects />

          {/* Contact section */}
          <Contact />
        </div>
      </main>

      {/* Custom styles (if any are still needed) */}
      <style jsx>{`
        .animate-blinkCaret {
          animation: blinkCaret 0.75s step-end infinite;
        }
        @keyframes blinkCaret {
          from, to { border-color: transparent; }
          50% { border-color: currentColor; }
        }
      `}</style>
    </>
  );
}
