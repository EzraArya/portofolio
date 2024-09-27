/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Header from "./components/ui/Header";
import Button from "./components/ui/Button";
import AboutMe from "./components/section/AboutMe";
import Project from "./components/section/Project";
import Landing from "./components/section/Landing";
import Contact from "./components/section/Contact";

export default function Home() {
  return (
    <main>
     <Header />
      <Landing />
      <AboutMe />
      <Project />
      <Contact />
   </main>
  );
}
