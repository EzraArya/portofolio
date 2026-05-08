import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio projects by Ezra Wijaya. Sign Quest (iOS, Core ML), iOS Game Catalog (SwiftUI), and SIBI Sign Language Translator (Flutter).",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
