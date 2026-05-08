"use client";

import { motion } from "framer-motion";

// NOTE: Experience data preserved/adapted from original — may need updating later
const experiences = [
  {
    title: "Bachelor of Computer Science",
    organization: "University",
    period: "Current",
    description:
      "Focus on Software Engineering, maintaining a 3.79 GPA. Proficient in applying SOLID principles and Agile methodologies to create scalable, maintainable applications.",
    type: "education" as const,
  },
];

const skills = [
  {
    category: "iOS / Mobile",
    items: ["Swift", "SwiftUI", "UIKit", "Flutter", "Dart"],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "MySQL", "RESTful APIs"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "Agile", "SOLID", "MVVM", "TDD"],
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
            My education and professional journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={fadeUp} className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-6 border-l-2 border-border"
            >
              {/* Dot */}
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blue-400 border-2 border-background" />

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                    {exp.type === "education" ? "Education" : "Work"}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-lg font-semibold font-sans">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {exp.organization}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-4 space-y-3"
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

        {/* About — original text preserved */}
        <motion.div variants={fadeUp} className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight">About</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Aspiring iOS Developer, BackEnd Developer, and Mobile Developer with
            a strong foundation in software engineering and hands-on experience
            in building mobile and web applications. Proficient in iOS
            technologies such as Swift and SwiftUI, backend development with PHP
            and Laravel, and cross-platform mobile development using Flutter.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Adept at implementing RESTful APIs for seamless data integration and
            applying Agile methodologies alongside SOLID principles to create
            scalable, maintainable applications. With proven problem-solving
            skills, I excel in managing and delivering projects efficiently.
            Currently pursuing a Bachelor&apos;s in Computer Science with a focus
            on Software Engineering, maintaining a 3.79 GPA. I am seeking an
            internship opportunity to contribute my expertise in iOS, backend, or
            mobile development to dynamic and innovative teams.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
