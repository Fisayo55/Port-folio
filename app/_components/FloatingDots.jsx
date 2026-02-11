"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingDots = () => {
  const [dots, setDots] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const numDots = 100;
    const newDots = Array.from({ length: numDots }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1.5,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }));
    setDots(newDots);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-full h-screen bg-gray-950 overflow-hidden" />
    );
  }

  return (
    <div className="relative w-full h-screen bg-gray-950 overflow-hidden">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-white"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "linear",
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
};
export default FloatingDots;
