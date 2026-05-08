import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ezra Wijaya. Available for iOS development, mobile engineering, and software engineering opportunities.",
};

export default function ContactPage() {
  return <ContactContent />;
}
