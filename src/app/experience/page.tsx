"use client";

import { motion } from "framer-motion";

const workExperience = [
  {
    title: "iOS Engineer Intern",
    organization: "99 Group (99.co | Rumah123 | SRX)",
    period: "Feb 2025 - Feb 2026",
    highlights: [
      "Maintained and enhanced large-scale production iOS applications using Swift and UIKit, supporting high-traffic property platforms.",
      "Diagnosed and resolved critical production crashes (concurrency, memory leaks) using Firebase Crashlytics, achieving and sustaining a 99.93% crash-free rate over a quarter.",
      "Eliminated a backlog of 80+ production support tickets across main and legacy codebases, collaborating with senior engineers to implement safe fixes and maximize release stability.",
    ],
  },
];

const education = [
  {
    title: "Bachelor of Computer Science",
    organization: "Bina Nusantara University",
    period: "Expected Sept 2026",
    description:
      "Streaming in Software Engineering. Cumulative GPA: 3.83/4.0. Thesis defense completed.",
  },
];

const skills = [
  {
    category: "iOS Development",
    items: ["Swift", "Objective-C", "UIKit", "SwiftUI", "Core Data", "SPM"],
  },
  {
    category: "Architecture & Tools",
    items: ["MVVM", "Coordinator Pattern", "Combine", "Async/Await", "Unit Testing", "DI"],
  },
  {
    category: "Mobile Engineering",
    items: ["RESTful APIs", "Firebase", "Agile/Scrum", "SOLID Principles"],
  },
  {
    category: "Additional",
    items: ["React Native", "Flutter", "React", "Python", "MySQL"],
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ExperiencePage() {
  return (
    <main className="flex flex-col items-center px-6 pt-16 sm:pt-24 pb-8">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-xl w-full space-y-10"
      >
        {/* Header */}
        <motion.div variants={fadeUp}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Experience
          </h1>
          <p className="text-muted-foreground">
            My professional journey and technical expertise.
          </p>
        </motion.div>

        {/* Work Experience */}
        <motion.div variants={fadeUp} className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
          <div className="space-y-6">
            {workExperience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-2 border-border"
              >
                {/* Dot */}
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blue-400 border-2 border-background" />

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                      Work
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold font-sans">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.organization}
                  </p>
                  <ul className="text-sm text-muted-foreground leading-relaxed mt-2 space-y-1.5 list-disc list-outside ml-4 marker:text-muted-foreground/60">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="pl-1">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div variants={fadeUp} className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Education</h2>
          <div className="space-y-6">
            {education.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-2 border-border"
              >
                {/* Dot */}
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blue-400 border-2 border-background" />

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                      Education
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold font-sans">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.organization}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-4 space-y-3 hover:border-blue-400/30 transition-colors"
              >
                <h4 className="text-sm font-semibold text-foreground font-sans">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 rounded-md bg-accent text-accent-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
