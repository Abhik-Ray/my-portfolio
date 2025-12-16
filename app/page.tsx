"use client";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import GridBG from "@/components/GridBG";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useRef } from "react";

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
      <Experience />
      <Skills />
      <Projects />
      <Contact ref={contactRef} />
    </main>
  );
}
