"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function StaggerContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}