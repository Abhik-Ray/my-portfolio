'use client'

import Image from "next/image";
import { Plus } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const skills = [
    { name: "TypeScript", logo: "/vectors/typescript-logo.svg" },
    { name: "React", logo: "/vectors/react-logo.svg" },
    { name: "Next.js", logo: "/vectors/next-js-logo.svg" },
    { name: "Tailwind CSS", logo: "/vectors/tailwind-logo.svg" },
    { name: "React Native", logo: "/vectors/react-native-logo.svg" },
    { name: "Flutter", logo: "/vectors/flutter-logo.svg" },
    { name: "Prisma", logo: "/vectors/prisma-logo.svg" },
    { name: "CakePHP", logo: "/vectors/cakephp-logo.svg" },
    { name: "Unity", logo: "/vectors/unity-logo.svg" },
    { name: "Blender", logo: "/vectors/blender-logo.svg" },
    { name: "Illustrator", logo: "/vectors/illustrator-logo.svg" },
    { name: "Inkscape", logo: "/vectors/inkscape-logo.svg" },
  ];

  return (
    <section className="flex flex-col items-center">
      <div className="w-fit">
        <header className="mb-10">
          <h1 className="text-8xl font-thin">Skills</h1>
        </header>
        {/* Skills component */}
        {skills.length === 0 ? null : (
          <ul className="grid grid-cols-4 gap-20">
          {skills.map((skill) => (
            <motion.li
              key={skill.name}
              className="aspect-square min-w-40 min-h-40 max-w-50 max-h-50 border border-foreground flex flex-col items-center justify-center p-4 gap-3 relative overflow-hidden modal-cut"
              initial="initial"
              whileHover="hover"
            >
              {/* Fill animation overlay */}
              <motion.div
                className="absolute inset-0 bg-[oklch(0.5972_0.2351_25.35/0.2)] origin-left"
                variants={{
                  initial: { scaleX: 0 },
                  hover: { scaleX: 1 }
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              
              {/* Plus icons */}
              <Plus className="absolute top-2 left-2 w-4 h-4 z-10" />
              <Plus className="absolute top-2 right-2 w-4 h-4 z-10" />
              <Plus className="absolute bottom-2 left-2 w-4 h-4 z-10" />
              
              <div 
                className="w-16 h-16 flex items-center justify-center z-10"
                style={{
                  backgroundColor: 'var(--foreground)',
                  WebkitMaskImage: `url(${skill.logo})`,
                  maskImage: `url(${skill.logo})`,
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                }}
              />
              <span className="text-center text-sm z-10">{skill.name}</span>
            </motion.li>
          ))}
        </ul>
        )}
      </div>
    </section>
  );
};

export default Skills;
