import Image from "next/image";

export default function AboutMe() {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-14 items-center min-h-screen justify-center ml-14 mr-14" id="about">
        <div className="flex flex-col justify-center items-center">
          <div className="relative">
            <div className="absolute w-[14rem] h-[18rem] md:w-[24rem] md:h-[28rem] bg-blue-400 opacity-50 drop-shadow-md rounded-3xl -top-6 -right-8 md:-right-0"></div>
            <Image className="relative z-10 border border-black/50 drop-shadow-xl rounded-3xl w-[14rem] h-[18rem] md:w-[24rem] md:h-[28rem] object-cover md:right-14" width={550} height={550} src="/image/image.png" alt="Your Image" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-start gap-2 mt-6 md:mr-10">
            <h1 className="font-montserrat font-bold text-3xl md:text-5xl mb-3"><span className="underline decoration-blue-400 decoration-8">About me</span></h1> 
            <p className="font-montserrat font-light text-md md:text-lg">I&apos;m Ezra, a highly motivated Computer Science undergraduate student with a specialization in Software Engineering at BINUS University. Fueled by a passion for building innovative solutions, I&apos;m constantly pushing myself to learn new technologies and tackle challenging problems..</p>
            <p className="font-montserrat font-light text-md md:text-lg">I&apos;ve developed strong proficiency in object-oriented programming languages like Python and C, along with functional programming with Dart. My web development knowledge spans frameworks like Laravel, React, and Node.js. I&apos;m currently building an auction website called LapangPedia as a project for my assignment that utilize Laravel framework and MySQL</p>
            <p className="font-montserrat font-light text-md md:text-lg">Beyond the technical skills, I&apos;m an eager learner with a strong work ethic. I&apos;m excited to contribute my skills and knowledge to a team that shares my passion for creating impactful software</p>
          </div>
        </div>
      </div>
    )
}