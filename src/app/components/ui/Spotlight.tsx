"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

export function Spotlight() {
  const [mounted, setMounted] = useState(false);  // ← top
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);           // ← before other effects

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(255,255,255,0.08), transparent 40%)`;

  if (!mounted || theme !== "dark") return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 mix-blend-overlay"
      style={{ background }}
      aria-hidden="true"
    />
  );
}