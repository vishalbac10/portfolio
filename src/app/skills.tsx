import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the Skills component
const Skills: React.FC = () => {
  // State to keep track of the currently hovered skill category
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // List of skill categories
  const categories = ['Frontend', 'Backend', 'DevOps', 'Databases', 'Cloud', 'Other'];

  // List of all technologies/tools and the categories they belong to
  const technologies = [
    { name: 'TypeScript', categories: ['Frontend'] },
    { name: 'JavaScript', categories: ['Frontend'] },
    { name: 'Next.js 13', categories: ['Frontend'] },
    { name: 'Next.js 12', categories: ['Frontend'] },
    { name: 'React.js', categories: ['Frontend'] },
    { name: 'HTML', categories: ['Frontend'] },
    { name: 'React Native', categories: ['Frontend'] },
    { name: 'Tailwind CSS', categories: ['Frontend'] },
    { name: 'CSS', categories: ['Frontend'] },
    { name: 'Sass', categories: ['Frontend'] },
    { name: 'Node.js', categories: ['Backend'] },
    { name: 'Docker', categories: ['Backend', 'DevOps'] }, // Example of a technology in multiple categories
    { name: 'Git & GitHub', categories: ['Backend', 'DevOps'] }, // Example of a technology in multiple categories
    { name: 'Prisma', categories: ['Backend', 'Databases'] }, // Example of a technology in multiple categories
    { name: 'Express.js', categories: ['Backend'] },
    { name: 'Mongoose', categories: ['Backend', 'Databases'] }, // Example of a technology in multiple categories
    { name: 'ESLint', categories: ['Backend'] },
    { name: 'MongoDB', categories: ['Databases'] },
    { name: 'PostgreSQL', categories: ['Databases'] },
    { name: 'MySQL', categories: ['Databases'] },
    { name: 'AWS', categories: ['Cloud'] },
    { name: 'Figma', categories: ['Other'] },
    { name: 'REST APIs', categories: ['Other'] },
    { name: 'GraphQL', categories: ['Other'] },
  ];

  // Framer Motion variants for entrance animations
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 // Stagger the two main columns
      }
    }
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const categoryItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

   const techTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };


  return (
    // Main container for the skills section with enhanced background
    <motion.section
      id="skills"
      className="w-full bg-black text-white py-24 px-8 overflow-hidden relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Animate when the section is in view
      viewport={{ once: true, amount: 0.3 }}
    >
       {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-black opacity-80"></div>

      {/* Content wrapper to center and limit width */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title - Centered and prominent with gradient text */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 animate-fade-in">
          My Skills & Work Stack
        </h2>

        {/* Two-column layout for categories and technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column: Skill Categories */}
          <motion.div
            className="flex flex-col space-y-6"
            variants={columnVariants} // Apply column entrance animation
          >
            <h3 className="text-2xl font-semibold text-purple-400 border-b border-gray-700 pb-4">Skills</h3>
            {/* List of categories */}
            <ul className="space-y-4">
              <AnimatePresence> {/* Use AnimatePresence for exit animations if needed later */}
                {categories.map((category) => (
                  <motion.li
                    key={category}
                    className={`text-lg font-medium cursor-pointer transition-colors duration-200 ease-in-out
                      ${hoveredCategory === category ? 'text-purple-400' : 'text-gray-300 hover:text-purple-300'}
                    `}
                    onMouseEnter={() => setHoveredCategory(category)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    variants={categoryItemVariants} // Apply entrance animation to list items
                    whileHover={{ scale: 1.05, color: '#a78bfa' }} // Scale up and change color on hover
                    transition={{ duration: 0.2 }}
                  >
                    {category}
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </motion.div>

          {/* Right Column: Work Stack (Technologies) */}
          <motion.div
            className="flex flex-col space-y-6"
            variants={columnVariants} // Apply column entrance animation
          >
             <h3 className="text-2xl font-semibold text-purple-400 border-b border-gray-700 pb-4">Work Stack</h3>
            {/* List of technologies */}
            <div className="flex flex-wrap gap-3">
              <AnimatePresence> {/* Use AnimatePresence for exit animations if needed later */}
                {technologies.map((tech) => (
                  <motion.span
                    key={tech.name}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out
                      ${hoveredCategory && tech.categories.includes(hoveredCategory)
                        ? 'bg-purple-700 text-white underline' // Highlighted style if it belongs to the hovered category
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700' // Default style
                      }
                    `}
                    variants={techTagVariants} // Apply entrance animation to tech tags
                    whileHover={{ scale: 1.1, backgroundColor: '#4c1d95' }} // Scale up and change background on hover
                     transition={{ duration: 0.2 }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

       {/* Custom styles for background animations (kept from previous versions) */}
      <style jsx>{`
         @keyframes subtle-shift {
            0% {
                background-position: 0% 0%;
            }
            100% {
                background-position: 100% 100%;
            }
        }

        .animate-subtle-shift { animation: subtle-shift 20s ease infinite alternate; }

         @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
         .animate-fade-in { animation: fade-in 1s ease-out forwards; }

      `}</style>
    </motion.section>
  );
};

export default Skills;
