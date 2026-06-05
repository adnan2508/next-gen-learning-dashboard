"use client";

import { motion } from "framer-motion";

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function AnimatedItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={item}
      transition={{
        duration: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
}