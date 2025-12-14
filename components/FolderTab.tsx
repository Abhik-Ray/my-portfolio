'use client';

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

import React from "react";

interface FolderTabProps {
  xPos: number;
  scrollDelay: number;
  parentRef: React.RefObject<HTMLDivElement>;
}

const FolderTab: React.FC<FolderTabProps> = ({ xPos, scrollDelay, parentRef }) => {
  const { scrollYProgress } = useScroll({ target: parentRef });
  const arrayTabOpacity = useTransform(scrollYProgress, [scrollDelay, scrollDelay + 0.10], [0, 1]);
  const arrayTabxPos = useTransform(scrollYProgress, [scrollDelay, scrollDelay + 0.10], ['100%', '0%']);
  const arrayTabTransform = useMotionTemplate`translateX(${arrayTabxPos})`;
  const right = useMotionTemplate`
  calc(var(--spacing) * 60 + ${xPos}px)
`;

  return (
    <motion.div
      ref={parentRef}
      className="w-40 border top-[10%] absolute h-40 z-10"
      style={{
        borderColor: "var(--foreground)",
        right,
        transform: arrayTabTransform,
        opacity: arrayTabOpacity,
      }}
    />
  );
};

export default FolderTab;

