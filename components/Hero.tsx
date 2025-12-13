"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import Image from "next/image";
import { motion } from "framer-motion";

// Typewriter component for typing effect
const TypewriterText = ({
  text,
  delay = 0,
  className = "",
  speed = 0.05,
}: {
  text: string;
  delay?: number;
  className?: string;
  speed?: number;
}) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + index * speed,
            duration: 0,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Hero() {
  return (
    <section id="hero" className="">
      <motion.div
        className={
          "flex justify-center items-center"
        }
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <Card className="bg-slate-900 border-2 border-cyan-400 rounded-none relative p-4 min-w-70 hero-card">
          {/* Header section */}
          <div className="mb-4">
            <div className="text-cyan-400 text-sm font-bold mb-1">
              DATA
            </div>
          </div>

          {/* Scan results with image */}
          <div className="mb-4 flex items-start gap-6">
            <div className="flex-1">
              <div className="text-gray-400 text-xs">
                SCAN RESULTS
              </div>
              <div className="text-yellow-400 text-lg font-bold mb-1">
                <TypewriterText text="ABHIK RAY" delay={0.75} />
              </div>
              <div className="text-gray-400 text-xs">
                AFFILIATION
              </div>
              <div className="text-cyan-400 text-sm mb-3">
                <TypewriterText text="ARCADIS" delay={1.5} />
              </div>
            </div>

            {/* Profile Image */}
            <div className="shrink-0">
              <motion.div
                className="w-16 h-24 border-2 border-cyan-400 overflow-hidden"
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)" }}
                transition={{ 
                  delay: 0.75, 
                  duration: 2,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Abhik Ray Profile"
                  width={64}
                  height={96}
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-60"
                />
              </motion.div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex items-start gap-6">
            <div>
              <div className="text-gray-300 text-sm font-bold mb-2">
                INFO
              </div>
            </div>
            <div className="flex-1">
              <div className="text-cyan-400 text-sm text-right leading-relaxed">
                <TypewriterText text="Full Stack Developer" delay={2.8} />
                <br />
                <TypewriterText text="Focused on Elegant Interfaces" delay={3.8} />
                <br />
                <TypewriterText text="and Solid Backend Architecture" delay={4.8} />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
