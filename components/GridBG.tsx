'use client';

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface GridBGProps {
    contactRef?: React.RefObject<HTMLDivElement | null>;
}

export default function GridBG({ contactRef }: GridBGProps) {
    const svgRef = useRef<SVGSVGElement | null>(null);
	const maskCircleRef = useRef<SVGCircleElement | null>(null);
    
    // Track mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    // Smooth spring animation for pattern offset
    const patternX = useSpring(mouseX, { stiffness: 20, damping: 110 });
    const patternY = useSpring(mouseY, { stiffness: 20, damping: 110 });
    
    // Map mouse position to pattern offset (-50 to 50 for subtle movement)
    const x = useTransform(patternX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-50, 50]);
    const y = useTransform(patternY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-50, 50]);
    
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);
    
    // Track scroll progress from start until hero parent div is completely off screen
    const { scrollYProgress } = useScroll({
        offset: ["0vh", "100vh"]
    });
    
    // Track scroll progress for Contact section
    const { scrollYProgress: contactScrollProgress } = useScroll({
        target: contactRef,
        offset: ["start end", "start start"]
    });
    
    // Define the color values
    const primaryColor = "oklch(0.87 0.148144 202.8755)";
    const foregroundColor = "oklch(0.3 0.148144 202.8755)";
    
    // Combine both scroll progresses: use hero initially, then transition to contact
    const interpolatedColor = useTransform(
        [scrollYProgress, contactScrollProgress],
        ([hero, contact]) => {
            const contactVal = contact as number;
            const heroVal = hero as number;
            
            if (contactVal > 0) {
                // In contact transition zone
                const t = Math.min(contactVal, 1);
                return `color-mix(in oklch, ${foregroundColor} ${(1-t)*100}%, ${primaryColor} ${t*100}%)`;
            }
            // In hero zone
            const t = Math.min(heroVal, 1);
            return `color-mix(in oklch, ${primaryColor} ${(1-t)*100}%, ${foregroundColor} ${t*100}%)`;
        }
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
                <motion.pattern 
                    id="h-lines" 
                    width="100" 
                    height="100" 
                    patternUnits="userSpaceOnUse"
                    style={{ x, y }}
                >
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
                </motion.pattern>
                {/* Interlacing pattern for CRT screen effect */}
                <pattern 
                    id="interlace" 
                    width="100%" 
                    height="4" 
                    patternUnits="userSpaceOnUse"
                >
                    <rect width="100%" height="2" fill="white" fillOpacity="0.03" />
                    <rect y="2" width="100%" height="2" fill="transparent" />
                </pattern>
            </defs>
            {/* base background at 0.5 opacity (no mask) */}
            <rect id="bgrect-base" width="100%" height="100%" fill="url(#h-lines)" opacity={0.6} />
            {/* top layer masked by circle at full opacity */}
            <rect id="bgrect-mask" width="100%" height="100%" fill="url(#h-lines)" mask="url(#cursorMask)" opacity={0.5} />
            {/* Interlacing overlay for CRT screen effect */}
            <rect id="interlace-overlay" width="100%" height="100%" fill="url(#interlace)" />
        </motion.svg>
        </div>
    );
}