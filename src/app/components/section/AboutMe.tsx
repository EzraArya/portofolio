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
            <p className="font-montserrat font-light text-md md:text-lg">Aspiring iOS Developer, BackEnd Developer, and Mobile Developer with a strong foundation in software engineering and hands-on experience in building mobile and web applications. Proficient in iOS technologies such as Swift and SwiftUI, backend development with PHP and Laravel, and cross-platform mobile development using Flutter.</p>
            <p className="font-montserrat font-light text-md md:text-lg">Adept at implementing RESTful APIs for seamless data integration and applying Agile methodologies alongside SOLID principles to create scalable, maintainable applications. With proven problem-solving skills, I excel in managing and delivering projects efficiently. Currently pursuing a Bachelor&apos;s in Computer Science with a focus on Software Engineering, maintaining a 3.79 GPA. I am seeking an internship opportunity to contribute my expertise in iOS, backend, or mobile development to dynamic and innovative teams.</p>
          </div>
        </div>
      </div>
    )
}