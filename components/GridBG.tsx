'use client';

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

interface GridBGProps {
    color?: 'primary' | 'foreground';
}

export default function GridBG({ color = 'primary' }: GridBGProps) {
    const svgRef = useRef<SVGSVGElement | null>(null);
	const maskCircleRef = useRef<SVGCircleElement | null>(null);
    
    // Track scroll progress from start until hero parent div is completely off screen
    const { scrollYProgress } = useScroll({
        offset: ["0vh", "100vh"]
    });
    
    // Define the color values
    const primaryColor = "oklch(0.87 0.148144 202.8755)";
    const foregroundColor = "oklch(0.5972 0.2351 25.35)";
    
    // Interpolate between colors based on scroll progress
    const interpolatedColor = useTransform(
        scrollYProgress,
        [0, 1],
        [primaryColor, foregroundColor]
    );
    
    return (
        <div className="">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
		  ref={svgRef}
          viewBox="0 0 800 800"
          opacity="1"
          className="w-max h-max"
        >
            <defs>
                <mask id="cursorMask" maskUnits="userSpaceOnUse">
                <rect x="0" y="0" width="100%" height="100%" fill="black" />
                <circle
                    ref={maskCircleRef}
                    cx="-9999"
                    cy="-9999"
                    r="50"
                    fill="white"
                />
                </mask>
                <pattern id="h-lines" width="100" height="100" patternUnits="userSpaceOnUse">
                    <motion.line 
                        x1="0" 
                        y1="100" 
                        x2="100%" 
                        y2="100" 
                        stroke={interpolatedColor}
                        strokeWidth="0.5" 
                    />
                    <motion.line 
                        x1="100" 
                        y1="0" 
                        x2="100" 
                        y2="100" 
                        stroke={interpolatedColor}
                        strokeWidth="0.5" 
                    />
                </pattern>
            </defs>
            {/* base background at 0.5 opacity (no mask) */}
            <rect id="bgrect-base" width="100%" height="100%" fill="url(#h-lines)" opacity={0.4} />
            {/* top layer masked by circle at full opacity */}
            <rect id="bgrect-mask" width="100%" height="100%" fill="url(#h-lines)" mask="url(#cursorMask)" opacity={0.5} />
        </motion.svg>
        </div>
    );
}