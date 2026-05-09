"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useEffect, useRef, useState } from "react";

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozenContext = useRef(context).current;
  const frozenChildren = useRef(props.children).current;

  return (
    <LayoutRouterContext.Provider value={frozenContext}>
      {frozenChildren}
    </LayoutRouterContext.Provider>
  );
}

interface LayoutTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function LayoutTransition({ children, className }: LayoutTransitionProps) {
  const segment = useSelectedLayoutSegment();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className={className}
        key={segment}
        initial={{ opacity: 0, y: isMobile ? 4 : 8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: isMobile ? 0.15 : 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
        }}
        exit={{
          opacity: 0,
          y: isMobile ? -4 : -8,
          transition: { duration: isMobile ? 0.1 : 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
        }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
