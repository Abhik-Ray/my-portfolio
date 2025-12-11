'use client';

import { useEffect, useRef } from "react";

export default function GridBG() {
    const svgRef = useRef<SVGSVGElement | null>(null);
	const maskCircleRef = useRef<SVGCircleElement | null>(null);

	// useEffect(() => {
	// 	const svg = svgRef.current;
	// 	const circle = maskCircleRef.current;
	// 	if (!svg || !circle) return; // restore guard

	// 	let rafId: number | null = null;
	// 	let lastClientX = 0;
	// 	let lastClientY = 0;

	// 	function updateCircleFromLastPointer() {
	// 		rafId = null;
	// 		// Convert client coords to SVG user-space coords (handles scaling/viewBox)
	// 		const rect = svg.getBoundingClientRect();
	// 		const viewBox = svg.viewBox.baseVal; // viewBox.width/height exist if declared

	// 		// Map client pixel -> svg coordinate
	// 		const svgX = ((lastClientX - rect.left) / rect.width) * viewBox.width + viewBox.x;
	// 		const svgY = ((lastClientY - rect.top) / rect.height) * viewBox.height + viewBox.y;

	// 		circle.setAttribute("cx", String(svgX));
	// 		circle.setAttribute("cy", String(svgY));
	// 	}

	// 	function onMove(e: PointerEvent) {
	// 		lastClientX = e.clientX;
	// 		lastClientY = e.clientY;
	// 		if (rafId == null) rafId = requestAnimationFrame(updateCircleFromLastPointer);
	// 	}

	// 	// pointermove works for touch + mouse
	// 	window.addEventListener("pointermove", onMove);
	// 	return () => {
	// 		window.removeEventListener("pointermove", onMove);
	// 		if (rafId != null) cancelAnimationFrame(rafId);
	// 	};
	// }, []);
    
    return (
        <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
		  ref={svgRef} // attach the ref so calculations use the correct element
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
                    <line x1="0" y1="100" x2="100%" y2="100" strokeWidth="0.5" />
                    <line x1="100" y1="0" x2="100" y2="100" strokeWidth="0.5" />
                </pattern>
            </defs>
            {/* base background at 0.5 opacity (no mask) */}
            <rect id="bgrect-base" width="100%" height="100%" fill="url(#h-lines)" opacity={0.3} />
            {/* top layer masked by circle at full opacity */}
            <rect id="bgrect-mask" width="100%" height="100%" fill="url(#h-lines)" mask="url(#cursorMask)" opacity={0.5} />
        </svg>
        </div>
    );
}