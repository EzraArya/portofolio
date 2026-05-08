"use client";

import { motion } from "framer-motion";

// NOTE: Project data preserved from original — may need updating later
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A portfolio website built using Next.js, Tailwind CSS, and Framer Motion with a liquid glass floating navigation bar.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/EzraArya/portofolio",
  },
  {
    title: "LapangPedia",
    description:
      "A project I worked on with my team, where I was responsible as a full-stack developer. It's an auction website using Laravel, MySQL, Tailwind, and Bootstrap.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "Bootstrap"],
    github: "https://github.com/EzraArya/lapangpedia-web",
  },
  {
    title: "Hackathon Website",
    description:
      "A project where I was the back-end developer, configuring the admin role. It's a Hackathon website built using Laravel.",
    tech: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/EzraArya/ProjectTpm/",
  },
  {
    title: "iOS Game Catalog",
    description:
      "An iOS Game Catalog that uses SwiftUI and Rawg.io API allowing users to see list of games, developers, and creators and add items to the favorites list.",
    tech: ["Swift", "SwiftUI", "REST API"],
    github: "https://github.com/EzraArya/iOS-GameCatalog",
  },
  {
    title: "SIBI Sign Language Translator",
    description:
      "A Flutter application that utilizes TFLite as the model to translate SIBI Sign Language in real-time using the device camera.",
    tech: ["Flutter", "Dart", "TFLite", "ML"],
    github: "https://github.com/EzraArya/SIBI-Translator-Flutter",
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

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center px-6 pt-16 sm:pt-24 pb-8">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-xl w-full space-y-8"
      >
        {/* Header */}
        <motion.div variants={fadeUp}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Projects
          </h1>
          <p className="text-muted-foreground">
            Here&apos;s a list of projects I&apos;ve developed throughout my career.
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div variants={stagger} className="space-y-4">
          {projects.map((project) => (
            <motion.a
              key={project.title}
              variants={fadeUp}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block group rounded-xl border border-border bg-card/50 backdrop-blur-sm p-5 transition-all duration-300 hover:bg-accent/50 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-400/5 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-blue-400 transition-colors font-sans">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-md bg-accent text-accent-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub arrow icon */}
                <span className="text-muted-foreground group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-1">
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
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
