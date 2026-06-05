"use client";

import { motion } from "framer-motion";

export default function ProgressBar({ 
    progress,
}: { 
    progress: number;
}) {
  return (
    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: `${progress}%`,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="h-full bg-indigo-500"
      />
    </div>
  );
}