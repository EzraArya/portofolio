import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../ui/ProjectCard";
export default function Project() {
    return (
        <div className="grid lg:mr-20 lg:ml-36 m-14 items-center h-auto justify-start" id="project">
            <div className="flex justify-center">
                <div className="flex flex-col items-start gap-2">
                    <h1 className="font-montserrat font-bold text-4xl sm:text-5xl mb-3">
                        <span className="underline decoration-blue-400 decoration-8">Project</span>
                    </h1> 
                    <p className="font-montserrat font-light text-lg sm:text-xl">
                        Here&apos;s a list of projects that I&apos;ve developed throughout my career
                    </p>
                    <div className="grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <ProjectCard 
                            title={"Portfolio Website"} 
                            description={"This is a portfolio website that I worked on using NextJs, Tailwind, and Flowbit as its tech stack!"} 
                            githubLink={"https://github.com/EzraArya/portofolio"} 
                        />
                        <ProjectCard 
                            title={"LapangPedia"} 
                            description={"This is a project that I worked on with my team, where I'm responsible as a full-stack developer. It's an auction website using Laravel, MySQL, Tailwind, and Bootstrap."} 
                            githubLink={"https://github.com/EzraArya/lapangpedia-web"} 
                        />
                        <ProjectCard 
                            title={"Hackathon Website"} 
                            description={"This is a project where I was the back-end developer, configuring the admin role. It's a Hackathon website using Laravel."} 
                            githubLink={"https://github.com/EzraArya/ProjectTpm/"} 
                        />
                        <ProjectCard 
                            title={"iOS Game Catalog"} 
                            description={"an iOS Game Catalog that use SwiftUI and Rawg.io API allowing users to see list of games, developers, and creators and add items to the favorites list"} 
                            githubLink={"https://github.com/EzraArya/iOS-GameCatalog"} 
                        />
                        <ProjectCard 
                            title={"SIBI Sign Language Translator"} 
                            description={"a Flutter application that utilize TFLite as the model to translate SIBI Sign Language"} 
                            githubLink={"https://github.com/EzraArya/SIBI-Translator-Flutter"} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

