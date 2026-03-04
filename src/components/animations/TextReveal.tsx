"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Wraps each direct child in an animated container that reveals sequentially.
 * Use by wrapping each line of text in a span/div:
 *
 * <TextReveal>
 *   <h1>Line One</h1>
 *   <div>Line Two</div>
 * </TextReveal>
 */
export default function TextReveal({
  delay = 0.3,
  duration = 0.5,
  className,
  children,
}: TextRevealProps) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual line wrapper — use inside TextReveal
 */
export function RevealLine({
  children,
  duration = 0.5,
  className,
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={lineVariants}
      transition={{
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
