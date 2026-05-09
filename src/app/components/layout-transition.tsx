"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

function getRouteKey(pathname: string): string {
  return pathname.split("?")[0].split("#")[0];
}

export function LayoutTransition({ children, className }: LayoutTransitionProps) {
  const pathname = usePathname();
  const routeKey = getRouteKey(pathname);

  // Lighter animation for mobile — no y shift, shorter duration
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <AnimatePresence mode={isMobile ? "wait" : "sync"}>
      <motion.div
        key={routeKey}
        className={className}
        initial={{ opacity: 0, y: isMobile ? 0 : 6 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: isMobile ? 0.15 : 0.25,
            ease: "easeOut",
          },
        }}
        exit={{
          opacity: 0,
          y: isMobile ? 0 : -4,
          transition: {
            duration: isMobile ? 0.1 : 0.15,
            ease: "easeIn",
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}