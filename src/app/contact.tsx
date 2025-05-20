import React from 'react';

// Define the Contact component
const Contact: React.FC = () => {
  return (
    // Main container with dark background and padding
<div id="contact" className="scroll-mt-24 min-h-screen bg-black text-white p-8">
      {/* Content wrapper for layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left section: Header and social links */}
        <div className="lg:w-1/3 flex flex-col space-y-6">
          {/* Header text */}
          <div className="text-4xl font-bold">
            <span className="block">It's time</span>
            <span className="block">to talk!</span>
            <span className="block mt-2">Contact me</span>
          </div>

          {/* Email address */}
          <p className="text-lg italic text-gray-400">vishalbachu7@gmail.com</p>

          {/* Social media links */}
          <div className="flex flex-wrap gap-3">
            {/* Example social link button */}
            <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors duration-200">
              {/* Icon placeholder - replace with actual icons (e.g., Lucide, Font Awesome) */}
              <span className="mr-2">X</span> Formely Twitter
            </button>
             <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors duration-200">
              {/* Icon placeholder */}
              <span className="mr-2"></span> GitHub
            </button>
             <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors duration-200">
              {/* Icon placeholder */}
              <span className="mr-2">in</span> LinkedIn
            </button>
             <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors duration-200">
              {/* Icon placeholder */}
              <span className="mr-2"></span> Instagram
            </button>
             <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors duration-200">
              {/* Icon placeholder */}
              <span className="mr-2"></span> Dev.to
            </button>
            {/* Add more social links as needed */}
          </div>
        </div>

        {/* Right section: Contact form */}
        <div className="lg:w-2/3 flex flex-col space-y-6">
          {/* Introduction text */}
          <p className="text-lg text-gray-300">
            Best way to reach out is <a href="mailto:vishalbachu7@gmail.com" className="text-blue-400 hover:underline">vishalbachu7@gmail.com</a> or just simply fill out the form below. Don't be shy, I love to talk to new people and make new connections.
          </p>

          {/* Contact Form */}
          <form className="flex flex-col space-y-6">
            {/* Name and Email fields */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Name Field */}
              <div className="flex-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="mt-1 block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {/* Email Field */}
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="John Doe" // Assuming placeholder is also John Doe based on image
                  className="mt-1 block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="John Doe" // Assuming placeholder is also John Doe based on image
                className="mt-1 block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>


            {/* Send Message Button */}
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-md hover:from-pink-600 hover:to-purple-700 transition-colors duration-200 flex items-center justify-center"
            >
              Send Message
              {/* Arrow icon placeholder - replace with actual icon */}
              <span className="ml-2">&rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
