"use client";

import { motion } from "motion/react";

export default function HeroReveal({
  children,
  delay = 0,
  y = 40,
  duration = 0.8,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}