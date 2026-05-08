"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement slightly
  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  const { theme } = useTheme();
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const isDark = theme === "dark";

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 mix-blend-overlay transition-opacity duration-500"
      style={{
        opacity: isDark ? 1 : 0,
        background: useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(255,255,255,0.08), transparent 40%)`
      }}
      aria-hidden="true"
    />
  );
}
