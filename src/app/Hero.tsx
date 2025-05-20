"use client";

import React, { useEffect, useState } from "react";
// Assuming you have react-icons installed for social media icons
// You can install it using: npm install react-icons
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const roles = [
  "Full-Stack Developer",
  "React Enthusiast",
  "MERN Stack Expert",
  "WordPress Specialist",
  "Shopify Developer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 120); // Typing speed
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 60); // Deleting speed
    } else if (charIndex === currentRole.length + 1) {
      timeout = setTimeout(() => setDeleting(true), 1500); // Pause before deleting
    } else if (charIndex === -1) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length); // Move to the next role
      setCharIndex(0); // Start typing from the beginning
    }

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [charIndex, deleting, roleIndex]);

  return (
    // Main section container with enhanced background and padding
    <section className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Background gradient overlay for a more dynamic look */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-30 animate-gradient-shift"></div>

      {/* Content wrapper to ensure content is above the background overlay */}
      <div className="relative z-10 max-w-4xl">
        {/* Intro text with improved styling */}
        <p className="text-lg md:text-xl text-purple-400 mb-3 animate-fade-in-up">Hi, my name is</p>

        {/* Name with more impact */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight animate-fade-in-up animation-delay-100">
          Vishal Bachu.
        </h1>

        {/* Dynamic role text with typing effect and improved caret */}
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-400 mb-6 min-h-[60px] relative overflow-hidden animate-fade-in-up animation-delay-200">
          <span>{text}</span>
          {/* Animated caret */}
          <span className="absolute right-0 top-0 h-full border-r-4 border-blue-400 animate-blinkCaret"></span>
        </h2>

        {/* Description with refined text and spacing */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 animate-fade-in-up animation-delay-300">
          I build scalable web applications using MERN stack and craft elegant
          WordPress and Shopify solutions.
        </p>

        {/* Call to action button with gradient and hover effects */}
        <a
          href="#projects"
          className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-lg font-bold shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 animate-fade-in-up animation-delay-400"
        >
          View Projects &rarr;
        </a>

        {/* Social media icons */}
        <div className="mt-12 flex space-x-6 animate-fade-in-up animation-delay-500">
            {/* Replace with your actual social links */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaLinkedin size={30} />
            </a>
             <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaTwitter size={30} />
            </a>
             <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaEnvelope size={30} />
            </a>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        .animate-blinkCaret {
          animation: blinkCaret 0.8s step-end infinite;
        }
        @keyframes blinkCaret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: currentColor;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }

        .animate-gradient-shift {
            animation: gradientShift 15s ease infinite alternate;
        }

        @keyframes gradientShift {
            0% {
                background-position: 0% 50%;
            }
            100% {
                background-position: 100% 50%;
            }
        }
      `}</style>
    </section>
  );
}
