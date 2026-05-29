import { motion, useScroll } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 via-white to-blue-200 z-[100] origin-left drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
