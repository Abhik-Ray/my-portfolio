"use client";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import GridBG from "@/components/GridBG";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 w-screen h-screen">
        <GridBG color="primary"/>
      </div>
      <div className="relative z-10 h-screen flex items-center justify-center">
        <Hero />
      </div>
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      {/* <Folder/> */}
      {/* <div id="footer" className="h-screen"></div> */}
    </main>
  );
}
