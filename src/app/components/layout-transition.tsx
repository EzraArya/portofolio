"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface LayoutTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function LayoutTransition({ children, className }: LayoutTransitionProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className={className}
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.25, ease: "linear" },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.15, ease: "linear" },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
