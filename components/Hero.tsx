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

export default function Hero() {
  return (
    <section id="hero" className="">
      <motion.div
        className={
          "flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <Card className="bg-slate-900 border-2 border-cyan-400 rounded-none relative p-4 min-w-70 hero-card">
          {/* Header section */}
          <div className="mb-4">
            <div className="text-cyan-400 text-sm font-bold mb-1">DATA</div>
          </div>

          {/* Scan results with image */}
          <div className="mb-4 flex items-start gap-6">
            <div className="flex-1">
              <div className="text-gray-400 text-xs">SCAN RESULTS</div>
              <div className="text-yellow-400 text-lg font-bold mb-1">
                ABHIK RAY
              </div>
              <div className="text-gray-400 text-xs">AFFILIATION</div>
              <div className="text-cyan-400 text-sm mb-3">CIVILIAN</div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-16 h-24 border-2 border-cyan-400 overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Abhik Ray Profile"
                  width={64}
                  height={96}
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-60"
                />
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex items-start gap-6">
            <div>
              <div className="text-gray-300 text-sm font-bold mb-2">INFO</div>
            </div>
            <div className="flex-1">
              <div className="text-cyan-400 text-sm text-right leading-relaxed">
                Full Stack Developer
                <br />
                Focused on Elegant Interfaces
                <br />
                and Solid Backend Architechture
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
