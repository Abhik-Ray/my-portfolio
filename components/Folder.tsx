import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

import FolderTab from "./FolderTab";

type FolderProps = React.HTMLAttributes<HTMLDivElement>;

const Folder: React.FC<FolderProps> = (props) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  });

  const barScale = useTransform(scrollYProgress, [0.1, 0.12], [0, 1]);
  const barTransform = useMotionTemplate`scale(${barScale})`;

  const tabScaleX = useTransform(scrollYProgress, [0.12, 0.13, 0.14, 0.15], [0, 0.8, 0.9, 1]);
  const tabScaleY = useTransform(scrollYProgress, [0.12, 0.15], [0, 1]);
  const tabY = useTransform(scrollYProgress, [0.12, 0.15], ["10rem", "0rem"]);
  const tabTransform = useMotionTemplate`translateY(${tabY}) scaleX(${tabScaleX}) scaleY(${tabScaleY})`;

  return (
    <div className="h-[1000vh]" ref={parentRef}>
      <div {...props} className="w-full h-screen top-0 sticky">
        <motion.div
          id="tab"
          className="w-40 border right-15 top-[10%] absolute h-40 z-10"
          style={{
            borderColor: "var(--foreground)",
            transform: tabTransform,
          }}
        />
        {Array.from({ length: 5 }).map((_, index) => (
          <FolderTab
            key={index}
            xPos={index * 200}
            scrollDelay={(index * 0.05) + 0.05}
            parentRef={parentRef as React.RefObject<HTMLDivElement>}
          />
        ))}

        <motion.div
          id="bar"
          className="w-25 border right-15 top-[29%] absolute h-4/6 border-t-40"
          style={{
            borderColor: "var(--foreground)",
            transform: barTransform,
          }}
        />
      </div>
    </div>
  );
};

export default Folder;
