import type { Metadata } from "next";
import ExperienceContent from "./ExperienceContent";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience and skills of Ezra Wijaya. iOS Engineer Intern at 99 Group, Bachelor of Computer Science at Bina Nusantara University.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
