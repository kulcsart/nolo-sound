"use client";

import { motion } from "framer-motion";

interface DividerRevealProps {
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Animated divider that grows from 0 to full width
 */
export default function DividerReveal({
  delay = 0.6,
  className,
  style,
}: DividerRevealProps) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{ originX: 0, ...style }}
      className={className}
    />
  );
}
