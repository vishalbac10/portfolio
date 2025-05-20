'use client';

import { useState, useRef } from 'react'; // Import useRef
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons (assuming react-icons is installed)


const projects = [
  {
    title: 'MERN Job Tracker App',
    description: 'A full-stack application to track job applications with authentication, CRUD, and filters. Built using MongoDB, Express, React, and Node.js.',
    // Replaced placehold.co with via.placeholder.com
    image: 'https://via.placeholder.com/1000x500?text=MERN+Job+Tracker+App',
  },
  {
    title: 'Corporate WordPress Website',
    description: 'Responsive business website built with WordPress, ACF, and Elementor. SEO-optimized with custom contact forms and blog integration.',
    // Replaced placehold.co with via.placeholder.com
    image: 'https://via.placeholder.com/1000x500?text=Corporate+WordPress+Website',
  },
  {
    title: 'Shopify Furniture Store',
    description: 'Modern Shopify storefront with custom sections, cart drawer, and Stripe checkout. Includes product filtering and dynamic collections.',
    // Replaced placehold.co with via.placeholder.com
    image: 'https://via.placeholder.com/1000x500?text=Shopify+Furniture+Store',
  },
  {
    title: 'Admin Dashboard (React + Tailwind)',
    description: 'Interactive analytics dashboard with charts, filters, dark mode, and user roles. Built using React, TailwindCSS, and Chart.js.',
    // Replaced placehold.co with via.placeholder.com
    image: 'https://via.placeholder.com/1000x500?text=Admin+Dashboard',
  },
  {
    title: 'SaaS Landing Page',
    description: 'High-converting landing page for a B2B SaaS product. Features pricing toggle, testimonials, FAQ accordion, and modern responsive design.',
    // Replaced placehold.co with via.placeholder.com
    image: 'https://via.placeholder.com/1000x500?text=SaaS+Landing+Page',
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null); // Ref for the thumbnail carousel

  // Function to scroll the carousel
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 200; // Adjust scroll amount as needed
      if (direction === 'left') {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };


  // Framer Motion variants for section entrance
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  // Framer Motion variants for the main project preview transition
  const previewVariants = {
    enter: { opacity: 0, y: 20 }, // Initial state when entering
    center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, // Active state
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } } // State when exiting
  };

  // Framer Motion variants for thumbnail carousel entrance
  const carouselVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        staggerChildren: 0.1 // Stagger individual thumbnails
      }
    }
  };

  // Framer Motion variants for individual thumbnail buttons
  const thumbnailVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };


  return (
    // Main section container with enhanced background and padding
    <motion.section
      id="projects"
      className="py-24 px-8 bg-gradient-to-br from-gray-950 to-black text-white overflow-hidden relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Animate when the section is in view
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Title with gradient text */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-fade-in">
          Featured Projects
        </h2>

        <div className="relative">
          {/* Large preview - Use AnimatePresence for transitions */}
          <AnimatePresence mode="wait"> {/* Wait for the exit animation to complete before entering */}
            <motion.div
              key={active} // Key is crucial for AnimatePresence to track changes
              variants={previewVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="rounded-xl overflow-hidden shadow-xl mb-8 bg-gray-800" // Added dark background to preview card
            >
              {/* Image with rounded top corners */}
              <div className="relative w-full" style={{ paddingBottom: '50%' }}> {/* Maintain aspect ratio */}
                 <Image
                    src={projects[active].image}
                    alt={projects[active].title}
                    layout="fill" // Fill the parent div
                    objectFit="cover" // Cover the area without distorting aspect ratio
                    className="rounded-t-xl" // Apply rounded corners to the top
                  />
              </div>

              {/* Project details with dark background */}
              <div className="text-left p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">{projects[active].title}</h3>
                <p className="text-gray-300">{projects[active].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Thumbnail carousel container with navigation arrows */}
          <div className="flex items-center justify-center md:justify-start gap-4"> {/* Added items-center and gap */}
             {/* Left Arrow Button */}
            <button
              onClick={() => scrollCarousel('left')}
              className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous project"
            >
              <FaArrowLeft size={20} />
            </button>

            {/* Thumbnail carousel - Apply entrance animation */}
            <motion.div
              ref={carouselRef} // Attach the ref here
              className="flex gap-4 overflow-x-auto scrollbar-hide px-2 flex-grow" // Added flex-grow
              variants={carouselVariants} // Apply carousel entrance animation
            >
              {projects.map((project, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`min-w-[160px] border-2 rounded-lg overflow-hidden hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 ${ // Added focus styles
                    index === active
                      ? 'border-blue-500 shadow-md' // Highlight active thumbnail
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  variants={thumbnailVariants} // Apply entrance animation to thumbnails
                  whileHover={{ scale: 1.1, rotate: 2 }} // Playful scale and rotate on hover
                  whileTap={{ scale: 0.95 }} // Press effect on tap/click
                  transition={{ type: "spring", stiffness: 300, damping: 10 }} // Spring transition for hover/tap
                >
                   {/* Image with rounded corners */}
                  <div className="relative w-full" style={{ paddingBottom: '62.5%' }}> {/* Maintain aspect ratio (e.g., 160x100 is 1.6 ratio, so 1/1.6 = 0.625) */}
                     <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md" // Apply rounded corners
                      />
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Right Arrow Button */}
            <button
              onClick={() => scrollCarousel('right')}
               className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
               aria-label="Next project"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

       {/* Custom styles for background animations (optional, can be added if needed) */}
      <style jsx>{`
         @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
         .animate-fade-in { animation: fade-in 1s ease-out forwards; }

         /* Hide scrollbar but allow scrolling */
         .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
         }
         .scrollbar-hide::-webkit-scrollbar {
            display: none;  /* Chrome, Safari and Opera */
         }
      `}</style>
    </motion.section>
  );
}
