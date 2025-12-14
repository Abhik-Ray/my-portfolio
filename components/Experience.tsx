import React from "react";
import { motion } from "framer-motion";

const transition = { type: "spring" as const, stiffness: 280, damping: 20 };
const whileHover = { y: -6, scale: 1.02 };
const whileTap = { scale: 0.995 };

const Experience: React.FC = () => {
  return (
    <section
      aria-label="Experience"
      className="relative py-16 px-6"
    >

      <div className="max-w-5xl">
        <header className="ml-10 mb-10">
          <h1 className="text-9xl font-thin">
            Experience
          </h1>
        </header>

        <ul className="space-y-8">
          <li className="relative md:pl-12">
            {/* marker */}
            <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full shadow bg-inherit" />

            <motion.div whileHover={whileHover} whileTap={whileTap} transition={transition} role="article" className="p-6 shadow-sm border">
              <div className="flex flex-col justify-end md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-5xl font-semibold">
                    Arcadis
                  </h3>
                  <p className="text-sm italic">
                    Fullstack Developer • Apr 2021 - Present
                  </p>
                </div>
                <div className="text-sm font-medium">
                  Impact: 30%
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm list-disc list-inside">
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
            </motion.div>
          </li>

          <li className="relative md:pl-12">
            <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 shadow bg-inherit" />

            <motion.div whileHover={whileHover} whileTap={whileTap} transition={transition} role="article" className="p-6 shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    Arcadis
                  </h3>
                  <p className="text-sm">
                    Internship
                  </p>
                </div>
                <div className="text-sm">2020</div>
              </div>

              <ul className="mt-4 space-y-2 text-sm list-disc list-inside">
                <li>Worked on building and maintaining UI features using React and modern JavaScript.</li>
                <li>Assisted in developing reusable components and improving overall code structure.</li>
                <li>Collaborated with designers and senior developers to implement responsive layouts.</li>
                <li>Debugged UI issues and helped improve performance and user experience.</li>
                <li>Gained hands-on experience with real-world development workflows and team collaboration.</li>
              </ul>
            </motion.div>
          </li>

          <li className="relative md:pl-12">
            <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 shadow bg-inherit" />

            <motion.div whileHover={whileHover} whileTap={whileTap} transition={transition} role="article" className="p-6 shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    Highradius
                  </h3>
                  <p className="text-sm">
                    Previous Role
                  </p>
                </div>
                <div className="text-sm">2018–2020</div>
              </div>

              <ul className="mt-4 space-y-2 text-sm list-disc list-inside">
                <li>Contributed to developing a machine learning model aimed at predicting business-related outcomes.</li>
                <li>Assisted in data preprocessing, model training, and evaluating prediction results.</li>
                <li>Integrated ML outputs into a web interface for visualization and interaction.</li>
                <li>Worked on the front end using React to build UI components for the platform.</li>
                <li>Learned how ML systems connect with web applications in a production-like environment.</li>
              </ul>
            </motion.div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
