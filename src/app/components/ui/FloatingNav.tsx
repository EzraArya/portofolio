"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Experience",
    href: "/experience",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    name: "Projects",
    href: "/projects",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    name: "Contact",
    href: "/contact",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export function FloatingNav() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Fix: bg-white/10 light / bg-black/30 dark — frosted glass tint in both modes */}
      <div className="relative flex items-center gap-1 px-2 py-2 rounded-full border border-white/[0.08] bg-white/10 dark:bg-black/30 backdrop-blur-xl backdrop-saturate-[1.8] shadow-lg shadow-black/20 dark:shadow-black/40">
        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 group"
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-black/[0.08] dark:bg-white/[0.1] rounded-full"
                  transition={{
                    // Fix: slightly crisper spring for snappier indicator movement
                    type: "spring",
                    stiffness: 400,
                    damping: 28,
                  }}
                />
              )}
              <span
                className={`relative z-10 transition-transform duration-200 group-hover:scale-110 ${isActive
                  ? "text-black dark:text-white"
                  : "text-black/50 dark:text-white/40 group-hover:text-black/80 dark:group-hover:text-white/80"
                  }`}
              >
                {item.icon}
              </span>
              {/* Fix: restored label text, was empty in original */}
              <span
                className={`relative z-10 hidden sm:block ${isActive
                  ? "text-black dark:text-white"
                  : "text-black/50 dark:text-white/40 group-hover:text-black/80 dark:group-hover:text-white/80"
                  }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}

        {/* Divider */}
        <div className="w-px h-6 bg-white/[0.1] mx-1" />

        {/* Theme toggle — gated on mounted to avoid hydration mismatch */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative flex items-center justify-center w-8 h-8 rounded-full text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 hover:bg-black/[0.08] dark:hover:bg-white/[0.08] transition-all duration-200"
          aria-label="Toggle theme"
        >
          {mounted && (
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </motion.div>
          )}
        </button>
      </div>
    </nav>
  );
}