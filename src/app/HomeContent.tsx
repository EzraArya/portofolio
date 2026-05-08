"use client";

import { motion } from "framer-motion";
import { staggerSlow, fadeUpLarge } from "@/lib/animations";

const techLinks = [
  { name: "Swift", icon: "🍏" },
  { name: "SwiftUI", icon: "📱" },
  { name: "UIKit", icon: "🖼️" },
  { name: "MVVM", icon: "🏗️" },
  { name: "Core ML", icon: "🧠" },
  { name: "Firebase", icon: "🔥" },
  { name: "Flutter", icon: "💙" },
];

const socialLinks = [
  {
    name: "Resume",
    href: "/CV.pdf",
    download: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/EzraArya",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ezra-wijaya-1506a1248/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function HomeContent() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 pt-16 sm:pt-24 pb-20">
      <motion.div
        variants={staggerSlow}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full auto-rows-[minmax(140px,auto)]"
      >
        {/* Card 1: Intro (Spans 2 cols, 2 rows) */}
        <motion.div
          variants={fadeUpLarge}
          className="md:col-span-2 md:row-span-2 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.02] shadow-sm dark:shadow-none backdrop-blur-md p-8 flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight flex items-center">
              {"Ezra Wijaya".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.2 + index * 0.05 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
                className="ml-2 w-3 h-[0.8em] bg-blue-400 inline-block"
              />
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Software Engineer with proven experience in{" "}
              <span className="text-foreground font-medium">iOS development</span>,{" "}
              previously maintaining large-scale, high-traffic consumer applications at{" "}
              <span className="text-foreground font-medium">99 Group</span>.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Status & Contact (1 col, 1 row) */}
        <motion.div
          variants={fadeUpLarge}
          className="rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.02] shadow-sm dark:shadow-none backdrop-blur-md p-6 flex flex-col justify-between group hover:border-emerald-500/30 transition-colors duration-300"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium">Available for Opportunities</span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs text-muted-foreground mb-1">Get in touch</p>
            <a
              href="mailto:ezrawijaya10@gmail.com"
              className="text-sm sm:text-base font-mono hover:text-blue-400 transition-colors break-all"
            >
              ezrawijaya10@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Card 3: Social Links (1 col, 1 row) */}
        <motion.div
          variants={fadeUpLarge}
          className="rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.02] shadow-sm dark:shadow-none backdrop-blur-md p-6 flex items-center justify-center gap-6"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.download ? undefined : "_blank"}
              rel={link.download ? undefined : "noopener noreferrer"}
              download={link.download ? "Ezra_Wijaya_CV" : undefined}
              className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 hover:scale-110"
              aria-label={link.name}
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        {/* Card 4: Tech Stack (Spans 2 cols, 1 row) */}
        <motion.div
          variants={fadeUpLarge}
          className="md:col-span-2 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.02] shadow-sm dark:shadow-none backdrop-blur-md p-6 flex flex-col justify-center overflow-hidden"
        >
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider font-semibold">
            Proficient In
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {techLinks.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/10 text-sm font-medium border border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/20 transition-colors cursor-default shadow-sm dark:shadow-none"
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 5: Currently Exploring (1 col, 1 row) */}
        <motion.div
          variants={fadeUpLarge}
          className="rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.02] shadow-sm dark:shadow-none backdrop-blur-md p-6 flex flex-col items-center justify-center text-center group"
        >
          <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
            Currently Exploring
          </p>
          <p className="text-sm font-medium">
            iOS & Mobile Development
          </p>
        </motion.div>

      </motion.div>
    </main>
  );
}
