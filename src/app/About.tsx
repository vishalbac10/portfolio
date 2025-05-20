import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Define the About component
const About: React.FC = () => {
  // Create a ref for the section to track scroll position
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // Track scroll from when the element starts entering to when it finishes exiting
  });

  // Define parallax transformations for different elements
  const titleY = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]); // Title moves vertically with scroll
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]); // Text fades in/out based on scroll position
  const textY = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]); // Text block moves vertically slightly
  const visualScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]); // Visual element scales slightly
  const visualRotate = useTransform(scrollYProgress, [0, 1], [0, 360]); // Visual element rotates with scroll (optional, can be subtle)


  // Framer Motion variants for entrance animations (still useful for initial visibility)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Stagger animations of children elements
      }
    }
  };

   const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };


  return (
    // Main section container with enhanced background and padding
    // Attach the ref for scroll tracking
    <section ref={ref} id="about" className="w-full bg-black text-white py-24 px-8 overflow-hidden relative">

      {/* Background Gradient Layer 1 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-black opacity-80"></div>

      {/* Background Gradient Layer 2 (Subtle, animated - keeping CSS animation for background) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 via-transparent to-blue-900 opacity-20 animate-subtle-shift"></div>

      {/* Content wrapper to center and limit width */}
      {/* Use motion.div for the main content container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title - Centered and prominent with a subtle gradient text */}
        {/* Apply motion style for parallax Y movement */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
          style={{ y: titleY }} // Apply parallax Y transform
        >
          About Me
        </motion.h2>

        {/* About content layout - More dynamic two-column on larger screens */}
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* Left Column: Text Content */}
          {/* Apply motion style for parallax Y movement and opacity */}
          <motion.div
            className="lg:w-2/3 text-lg md:text-xl text-gray-300 space-y-8 leading-relaxed"
            style={{ y: textY, opacity: textOpacity }} // Apply parallax Y and opacity transforms
            variants={containerVariants} // Still use variants for staggering paragraphs on initial view
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Use motion.p for animating each paragraph */}
            <motion.p variants={itemVariants}>
              With an <strong className="text-purple-300">unparalleled mastery</strong> forged over <strong className="text-blue-300">more than 6 years of relentless dedication</strong> to the craft of web development, I stand at the forefront of creating digital experiences that don't just function, but <strong className="text-green-300">dominate</strong>. My expertise is not merely broad; it is <strong className="text-red-300">deeply specialized</strong> in engineering high-quality, <strong className="text-yellow-300">infinitely scalable</strong>, and <strong className="text-pink-300">blazingly performant</strong> web applications that redefine industry standards.
            </motion.p>
            <motion.p variants={itemVariants}>
              My command spans the <strong className="text-blue-300">entire MERN stack</strong>, where I orchestrate complex data flows and build robust server-side applications with <strong className="text-purple-300">surgical precision</strong>. Beyond that, I am a <strong className="text-green-300">virtuoso</strong> in crafting bespoke WordPress themes that are not just visually stunning but are <strong className="text-yellow-300">architectural marvels</strong> of flexibility and performance. My expertise extends to sculpting <strong className="text-pink-300">powerful and intuitive</strong> Shopify eCommerce solutions that convert visitors into loyal customers with <strong className="text-red-300">unrivaled efficiency</strong>.
            </motion.p>
            <motion.p variants={itemVariants}>
              I am driven by an <strong className="text-yellow-300">insatiable passion</strong> for dissecting the most intricate challenges and transforming them into <strong className="text-blue-300">elegant, intuitive, and breathtakingly user-friendly</strong> digital triumphs. For me, every project is a mission to deliver <strong className="text-purple-300">extraordinary, measurable value</strong> that propels clients far beyond their expectations. I don't just build websites; I forge <strong className="text-green-300">digital powerhouses</strong>.
            </motion.p>
          </motion.div>

          {/* Right Column: More Abstract/Innovative Visual Element */}
          {/* Apply motion style for parallax scale and rotate, and add hover animation */}
          <motion.div
            className="lg:w-1/3 flex justify-center items-center"
            style={{ scale: visualScale, rotate: visualRotate }} // Apply parallax transforms
            whileHover={{ rotateY: 180, scale: 1.1 }} // 3D rotation and scale on hover
            transition={{ duration: 0.5, ease: "easeInOut" }} // Transition for hover effect
          >
             {/* More complex abstract SVG example - keeping CSS animation for subtle pulse */}
            <svg className="w-72 h-72 md:w-96 md:h-96 text-purple-600 opacity-80 animate-pulse-subtle" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M44.7,-65.4C58.8,-58.1 72.4,-47.5 76.9,-34.2C81.4,-20.9 76.8,-4.8 71.8,10.4C66.8,25.6 61.4,39.9 52.3,51.1C43.2,62.3 30.4,70.5 16.1,73.7C1.8,76.9,-13.1,75.1,-27.3,70.2C-41.6,65.3,-55,57.3,-62.2,45.5C-69.4,33.7,-70.4,18.1,-69.2,3C-68,-12.1,-64.6,-25.9,-57.8,-37.1C-51,-48.4,-40.8,-57.1,-28.8,-62.5C-16.8,-67.8,-3.1,-69.8,10.7,-69.6C24.5,-69.4,36.6,-67.1,44.7,-65.4Z" transform="translate(100 100)" />
            </svg>
          </motion.div>
        </div>
      </div>

       {/* Custom styles for background and subtle SVG pulse animations (kept from previous version) */}
      <style jsx>{`
         @keyframes subtle-shift {
            0% {
                background-position: 0% 0%;
            }
            100% {
                background-position: 100% 100%;
            }
        }

         @keyframes pulse-subtle {
            0%, 100% {
                transform: scale(1);
                opacity: 0.8;
            }
            50% {
                transform: scale(1.05);
                opacity: 0.9;
            }
        }

        .animate-subtle-shift { animation: subtle-shift 20s ease infinite alternate; }
        .animate-pulse-subtle { animation: pulse-subtle 3s ease-in-out infinite; }

      `}</style>
    </section>
  );
};

export default About;
