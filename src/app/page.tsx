"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// NOTE: Text content preserved from original site — may need updating later
const techLinks = [
  { name: "Swift", href: "https://developer.apple.com/swift/" },
  { name: "SwiftUI", href: "https://developer.apple.com/xcode/swiftui/" },
  { name: "Laravel", href: "https://laravel.com/" },
  { name: "Flutter", href: "https://flutter.dev/" },
  { name: "Next.js", href: "https://nextjs.org/" },
];

const socialLinks = [
  {
    name: "Resume",
    href: "/CV.pdf",
    download: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ezra-wijaya-1506a1248/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-6 pt-16 sm:pt-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-xl w-full space-y-6"
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="flex items-center">
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
        </motion.div>

        {/* Subtitle / Role */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-muted-foreground"
        >
          Aspiring{" "}
          <span className="text-foreground font-medium">iOS Developer</span>,{" "}
          <span className="text-foreground font-medium">Backend Developer</span>, and{" "}
          <span className="text-foreground font-medium">Mobile Developer</span>{" "}
          with a strong foundation in software engineering and hands-on experience
          in building mobile and web applications.
        </motion.p>

        {/* Tech stack inline */}
        <motion.p variants={fadeUp} className="text-muted-foreground">
          Proficient in{" "}
          {techLinks.map((tech, i) => (
            <span key={tech.name}>
              <a
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 decoration-blue-400/40 hover:decoration-blue-300/60 transition-colors"
              >
                {tech.name}
              </a>
              {i < techLinks.length - 1 && (i === techLinks.length - 2 ? ", and " : ", ")}
            </span>
          ))}
          .
        </motion.p>

        {/* Currently exploring */}
        <motion.p variants={fadeUp} className="text-muted-foreground">
          Currently exploring:{" "}
          <span className="text-foreground font-semibold">
            iOS & Mobile Development
          </span>
        </motion.p>

        {/* Social links */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.download ? undefined : "_blank"}
              rel={link.download ? undefined : "noopener noreferrer"}
              download={link.download ? "Ezra_Wijaya_CV" : undefined}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="group-hover:scale-110 transition-transform duration-200">
                {link.icon}
              </span>
              {link.name}
            </a>
          ))}
        </motion.div>

        {/* Contact line */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-2 pt-4 text-sm text-muted-foreground"
        >
          <span>get in touch</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <a
            href="mailto:ezrawijaya10@gmail.com"
            className="text-foreground hover:text-blue-400 transition-colors"
          >
            ezrawijaya10@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
