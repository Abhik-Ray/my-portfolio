'use client'

import React, { memo } from "react";

import { Plus } from "lucide-react";
import { getImagePath } from "@/lib/getImagePath";
import { motion } from "framer-motion";

// Move static data outside component to prevent re-creation on every render
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
] as const;

const SkillItem = memo(({ skill }: { skill: typeof skills[number] }) => (
  <motion.li
    className="aspect-square w-full border border-foreground flex flex-col items-center justify-center p-3 md:p-4 gap-2 md:gap-3 relative overflow-hidden modal-cut bg-black"
    initial="initial"
    whileHover="hover"
    style={{ willChange: 'transform' }}
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
    <Plus className="absolute top-1 left-1 md:top-2 md:left-2 w-3 h-3 md:w-4 md:h-4 z-10" />
    <Plus className="absolute top-1 right-1 md:top-2 md:right-2 w-3 h-3 md:w-4 md:h-4 z-10" />
    <Plus className="absolute bottom-1 left-1 md:bottom-2 md:left-2 w-3 h-3 md:w-4 md:h-4 z-10" />
    
    <div 
      className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center z-10"
      style={{
        backgroundColor: 'var(--foreground)',
        WebkitMaskImage: `url(${getImagePath(skill.logo)})`,
        maskImage: `url(${getImagePath(skill.logo)})`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    />
    <span className="text-center text-xs md:text-sm z-10">{skill.name}</span>
  </motion.li>
));

SkillItem.displayName = 'SkillItem';

const Skills: React.FC = () => {

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <header className="mb-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-thin">Skills</h1>
        </header>
        {/* Skills component */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 lg:gap-20">
          {skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
