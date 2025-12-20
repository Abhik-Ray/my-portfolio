"use client";

import { memo, useRef } from "react";

import Art from "@/components/Art";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import GridBG from "@/components/GridBG";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

// Memoize sections to prevent unnecessary re-renders
const MemoizedExperience = memo(Experience);
const MemoizedSkills = memo(Skills);
const MemoizedProjects = memo(Projects);
const MemoizedArt = memo(Art);

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative">
      <div className="fixed inset-0 w-screen h-screen">
        <GridBG contactRef={contactRef}/>
      </div>
      <div className="relative z-10 h-screen flex items-center justify-center">
        <Hero />
      </div>
      <MemoizedExperience />
      <MemoizedSkills />
      <MemoizedProjects />
      <MemoizedArt />
      <Contact ref={contactRef} />
    </main>
  );
}
