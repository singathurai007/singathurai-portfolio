import React from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#10B981] origin-left z-[9999] pointer-events-none shadow-[0_0_10px_rgba(139,92,246,0.5)]"
      style={{ scaleX }}
    />
  );
};
