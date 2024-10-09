import Image from "next/image";
import Link from "next/link";

export default function Landing() {
    return (
        <div className="flex flex-col-reverse gap-20 md:flex-row w-screen/2 m-14 items-center h-4/5 justify-evenly" id="hero">
        <div className="flex justify-center">
          <div className="flex flex-col items-start gap-2 mt-2 lg:mt-6">
            <h1 className="font-montserrat font-medium text-xl md:text-3xl">{"Hello 👋 I'm Ezra"}</h1>
            <h1 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-5xl mb-3">a <span className="underline decoration-blue-400 decoration-8">Software Developer</span></h1> 
            <div className="flex justify-center w-full mt-4">
              <button type="button" className="border border-black drop-shadow-lg w-40 h-12 bg-white rounded-2xl hover:bg-gradient-to-t hover:from-gradient-start hover:to-gradient-stop animate-bounce transition duration-350 hover:bg-slate-100">
              <a href="/resume.pdf" download="resume">
                <div className="text-black font-montserrat font-semibold text-md flex gap-1 items-center justify-center">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
                  </svg>
                  <h1>Download CV</h1>
                </div>
              </a>
              </button> 
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative items-center">
            <div className="absolute w-[14rem] h-[14rem] md:w-[20rem] md:h-[20rem] lg:w-[22rem] lg:h-[22rem] bg-blue-400 opacity-50 drop-shadow-md rounded-full -top-6 -right-8 lg:-top-6 lg:-right-4 md:-top-4 md:-right-[6rem]"></div>
            <Image className="relative z-10 border border-black/50 drop-shadow-xl rounded-full w-[14rem] h-[14rem] md:w-[20rem] md:h-[20rem] lg:w-[26rem] lg:h-[26rem] object-cover lg:right-14" width={550} height={550} src="/image/image.png" alt="Your Image" />
            <div className="absolute w-[12rem] h-[12rem] md:w-[14rem] md:h-[14rem] lg:w-[16rem] lg:h-[16rem] bg-purple-500 opacity-50 drop-shadow-md rounded-full -bottom-10 -right-8 lg:-bottom-14 lg:-right-1 md:-bottom-1/4 md:-right-[0rem]"></div>
          </div>
        </div>
      </div>
    )
}