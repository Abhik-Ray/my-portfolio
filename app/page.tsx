"use client";

import GridBG from "@/components/GridBG";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 w-screen h-screen">
        <GridBG color="primary"/>
      </div>
      <div className="relative z-10 inset-0">
        {/* Hero section - full height with centered content */}
        <div className="h-screen flex items-center justify-center">
          <Hero />
        </div>
        
        {/* Other content below the hero */}
        <div className="h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold">Scroll to see the color transition</h2>
        </div>
        <div className="h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold">Keep scrolling...</h2>
        </div>
        <div className="h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold">Color transition complete!</h2>
        </div>
      </div>
    </main>
  );
}
