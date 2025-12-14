"use client";

import Folder from "@/components/Folder";
import GridBG from "@/components/GridBG";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 w-screen h-screen">
        <GridBG color="primary"/>
      </div>
      <div className="relative z-10 h-screen flex items-center justify-center">
        <Hero />
      </div>
      <Folder/>
      {/* <div id="footer" className="h-screen"></div> */}
    </main>
  );
}
