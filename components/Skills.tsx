'use client'

import React, { memo } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

import { Plus } from "lucide-react";
import { getImagePath } from "@/lib/getImagePath";
import { motion } from "framer-motion";

// Move static data outside component to prevent re-creation on every render
const skills = [
  {
    name: "TypeScript",
    logo: "/vectors/typescript-logo.svg",
    hint: "Practiced strict types, interfaces, custom rules and always avoided 'any'",
  },
  {
    name: "React",
    logo: "/vectors/react-logo.svg",
    hint: "Proficient in Redux Toolkit, Zustand, React Query, Jotai, Sagas, Testing Library, Motion, React Router etc.",
  },
  {
    name: "Next.js",
    logo: "/vectors/next-js-logo.svg",
    hint: "Implemented performant SSR PWA applications with good Lighthouse scores",
  },
  {
    name: "Tailwind CSS",
    logo: "/vectors/tailwind-logo.svg",
    hint: "Built responsive components on the fly",
  },
  {
    name: "React Native",
    logo: "/vectors/react-native-logo.svg",
    hint: "Built cross platform fast and maintainable applications",
  },
  {
    name: "Flutter",
    logo: "/vectors/flutter-logo.svg",
    hint: "Built Responsive, crisp Android apps",
  },
  {
    name: "Prisma",
    logo: "/vectors/prisma-logo.svg",
    hint: "Wrote efficient, reusable queries for both api and from components",
  },
  {
    name: "CakePHP",
    logo: "/vectors/cakephp-logo.svg",
    hint: "Wrote clean, efficient MVC components",
  },
  {
    name: "Unity",
    logo: "/vectors/unity-logo.svg",
    hint: "Built variety of games, both in 2D and 3D engines",
  },
  {
    name: "Blender",
    logo: "/vectors/blender-logo.svg",
    hint: "Built many scenes and objects to be used in different applications",
  },
  {
    name: "Illustrator",
    logo: "/vectors/illustrator-logo.svg",
    hint: "Built pixel perfect SVG to be used in various applications",
  },
  {
    name: "Inkscape",
    logo: "/vectors/inkscape-logo.svg",
    hint: "Built pixel perfect SVG to be used in various applications",
  },
] as const;

const SkillItem = memo(({ skill }: { skill: (typeof skills)[number] }) => (
  <motion.li
    className="aspect-square w-full border border-foreground flex flex-col items-center justify-center p-3 md:p-4 gap-2 md:gap-3 relative overflow-hidden modal-cut bg-black"
    initial="initial"
    whileHover="hover"
    style={{ willChange: "transform" }}
  >
    {/* Fill animation overlay */}
    <motion.div
      className="absolute inset-0 bg-[oklch(0.9_0.15_203/0.2)] origin-left"
      variants={{
        initial: { scaleX: 0 },
        hover: { scaleX: 1 },
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
        backgroundColor: "var(--foreground)",
        WebkitMaskImage: `url(${getImagePath(skill.logo)})`,
        maskImage: `url(${getImagePath(skill.logo)})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
    <span className="text-center text-xs md:text-sm z-10">{skill.name}</span>
  </motion.li>
));

SkillItem.displayName = "SkillItem";

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
            <Tooltip key={skill.name} delayDuration={500}>
              <TooltipTrigger>
                <SkillItem skill={skill} />
              </TooltipTrigger>
              <TooltipContent className="text-sm">
                {skill.hint}
              </TooltipContent>
            </Tooltip>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
