import React from "react";
import { motion } from "framer-motion";

type FolderProps = React.HTMLAttributes<HTMLDivElement>;

const Folder: React.FC<FolderProps> = (props) => {
  return (
    <div {...props} className="w-full h-screen relative">
      <div
        id="tab"
        className="w-40 border right-15 top-[10%] absolute h-40 z-10"
        style={{ borderColor: "var(--foreground)" }}
      />
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          id={`tab-${index}`}
          key={index}
          className="w-40 border top-[10%] absolute h-40 z-10"
          style={{ 
            borderColor: "var(--foreground)",
            // right: `${45 + (index * 10)}px`
            right: `calc(var(--spacing) * 60 + ${index * 200}px)`
          }}
        />
      ))}

      <motion.div
        className="w-25 border right-15 top-[29%] absolute h-4/6 border-t-40"
        style={{ borderColor: "var(--foreground)" }}
      ></motion.div>
    </div>
  );
};

export default Folder;
