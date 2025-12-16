'use client'

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: { 
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

const Experience: React.FC = () => {
  return (
    <section
      aria-label="Experience"
      className="relative py-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <header className="mb-10 md:pl-12">
          <h1 className="text-8xl font-thin text-foreground">
            Experience
          </h1>
        </header>

        <motion.ul 
          className="space-y-24 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated vertical timeline line */}
          <motion.div 
            className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-0.5 bg-foreground/50"
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Animated raindrop traveling down the timeline */}
          <motion.div 
            className="absolute left-[7px] md:left-1/2 w-0.5 h-24 bg-linear-to-b from-transparent via-foreground to-transparent"
            initial={{ top: 0, opacity: 0 }}
            animate={{ 
              top: ["0%", "100%"],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 1
            }}
          />

          <motion.li className="relative md:pl-12" variants={itemVariants}>
            <div 
              role="article" 
              className="p-6 border border-foreground bg-black/40 backdrop-blur-sm relative overflow-hidden modal-cut"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-foreground" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-foreground" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-foreground" />

              <div className="flex flex-col justify-end md:flex-row md:items-start md:justify-between gap-4 relative z-10">
                <div>
                  <h3 className="text-5xl font-semibold text-yellow-400">
                    Arcadis
                  </h3>
                  <p className="text-sm italic text-yellow-400">
                    Fullstack Developer • Jul 2022 - Present
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm list-disc list-inside relative z-10 text-foreground">
                <li>
                  Built and maintained large-scale apps using React, Next.js and
                  TypeScript; led front-end architecture and reusable component
                  libraries.
                </li>
                <li>
                  Migrated bundling (Webpack → Vite) and improved DX with
                  pre-commit hooks, linting and CI automation.
                </li>
                <li>
                  Modernized legacy codebases to TypeScript + functional
                  components, improving maintainability.
                </li>
                <li>
                  Implemented robust auth flows (JWT access + refresh), role-based
                  access and scalable data strategies.
                </li>
                <li>
                  Integrated mapping solutions (React Leaflet, Google Maps,
                  MapLibre) for scalable geospatial features.
                </li>
                <li>
                  Improved Lighthouse performance to 90+ via code-splitting,
                  memoization, caching and lazy loading.
                </li>
                <li>
                  Introduced real-time interactions (WebSockets) and Jest + RTL
                  testing culture to reduce bugs.
                </li>
              </ul>
            </div>
          </motion.li>

          <motion.li className="relative md:pl-12" variants={itemVariants}>
            <div 
              role="article" 
              className="p-6 border border-foreground bg-black/40 backdrop-blur-sm relative overflow-hidden modal-cut"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-foreground" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-foreground" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-foreground" />

              <div className="flex items-center justify-between relative z-10">
                <div>
                  <h3 className="text-5xl font-semibold text-yellow-400">
                    Arcadis
                  </h3>
                  <p className="text-sm italic text-yellow-400">
                    Internship • Oct 2021 - July 2022
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm list-disc list-inside relative z-10 text-foreground">
                <li>Worked on building and maintaining UI features using React and modern JavaScript.</li>
                <li>Assisted in developing reusable components and improving overall code structure.</li>
                <li>Collaborated with designers and senior developers to implement responsive layouts.</li>
                <li>Debugged UI issues and helped improve performance and user experience.</li>
                <li>Gained hands-on experience with real-world development workflows and team collaboration.</li>
              </ul>
            </div>
          </motion.li>

          <motion.li className="relative md:pl-12" variants={itemVariants}>
            <div 
              role="article" 
              className="p-6 border border-foreground bg-black/40 backdrop-blur-sm relative overflow-hidden modal-cut"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-foreground" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-foreground" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-foreground" />

              <div className="flex items-center justify-between relative z-10">
                <div>
                  <h3 className="text-5xl font-semibold text-yellow-400">
                    Highradius
                  </h3>
                  <p className="text-sm italic text-yellow-400">
                    Internship • Jan 2021 - March 2021
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm list-disc list-inside relative z-10 text-foreground">
                <li>Contributed to developing a machine learning model aimed at predicting business-related outcomes.</li>
                <li>Assisted in data preprocessing, model training, and evaluating prediction results.</li>
                <li>Integrated ML outputs into a web interface for visualization and interaction.</li>
                <li>Worked on the front end using React to build UI components for the platform.</li>
                <li>Learned how ML systems connect with web applications in a production-like environment.</li>
              </ul>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
};

export default Experience;
