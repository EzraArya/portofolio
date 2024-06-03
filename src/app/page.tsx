/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Header from "./components/ui/Header";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <main>
     <Header />
     <div className="flex flex-col-reverse gap-20 md:flex-row w-screen/2 m-14 items-center h-4/5 justify-evenly" id="hero">
        <div className="flex justify-center">
          <div className="flex flex-col items-start gap-2 mt-6">
            <h1 className="font-montserrat font-medium text-3xl">{"Hello 👋 I'm Ezra"}</h1>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-3">a <span className="underline decoration-blue-400 decoration-8">Software Developer</span></h1> 
            <div className="flex justify-center w-full mt-4">
              <button type="button" className="border border-black drop-shadow-lg w-40 h-12 bg-white rounded-2xl hover:bg-gradient-to-t hover:from-gradient-start hover:to-gradient-stop animate-bounce transition duration-350">
              <a href="#">
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
            <div className="absolute w-[22rem] h-[22rem] bg-blue-400 opacity-50 drop-shadow-md rounded-full -top-6 -right-4 md:-top-4 md:-right-[6rem]"></div>
            <Image className="relative z-10 border border-black/50 drop-shadow-xl rounded-full w-[20rem] h-[20rem] md:w-[26rem] md:h-[26rem] object-cover right-14" width={550} height={550} src="/image/image.png" alt="Your Image" />
            <div className="absolute w-[16rem] h-[16rem] bg-purple-500 opacity-50 drop-shadow-md rounded-full -bottom-14 -right-1 md:-bottom-1/4 md:-right-[0rem]"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 m-14 items-center h-screen justify-center" id="about">
        <div className="flex flex-col justify-center items-center">
          <div className="relative">
            <div className="absolute w-[24rem] h-[28rem] bg-blue-400 opacity-50 drop-shadow-md rounded-3xl -top-6 -right-0"></div>
            <Image className="relative z-10 border border-black/50 drop-shadow-xl rounded-3xl w-[24rem] h-[28rem] object-cover right-14" width={550} height={550} src="/image/image.png" alt="Your Image" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-start gap-2 mt-6 mr-10">
            <h1 className="font-montserrat font-bold text-5xl mb-3"><span className="underline decoration-blue-400 decoration-8">About me</span></h1> 
            <p className="font-montserrat font-light text-lg">I'm Ezra, a highly motivated Computer Science undergraduate student with a specialization in Software Engineering at BINUS University. Fueled by a passion for building innovative solutions, I'm constantly pushing myself to learn new technologies and tackle challenging problems..</p>
            <p className="font-montserrat font-light text-lg">I've developed strong proficiency in object-oriented programming languages like Python and C, along with functional programming with Dart. My web development knowledge spans frameworks like Laravel, React, and Node.js. I'm currently building an auction website called LapangPedia as a project for my assignment that utilize Laravel framework and MySQL</p>
            <p className="font-montserrat font-light text-lg">Beyond the technical skills, I'm an eager learner with a strong work ethic. I'm excited to contribute my skills and knowledge to a team that shares my passion for creating impactful software</p>
          </div>
        </div>
      </div>
      <div className="grid mr-20 ml-36 p-8  items-center  h-auto justify-start " id="project">
        <div className="flex justify-center">
          <div className="flex flex-col items-start gap-2 mt-6">
            <h1 className="font-montserrat font-bold text-5xl mb-3"><span className="underline decoration-blue-400 decoration-8">Project</span></h1> 
            <p className="font-montserrat font-light text-xl">Here's a list of project that i developed throughout my career</p>
            <div className="gap-4 flex flex-col">
              <div className="flex flex-col items-center  bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-6xl hover:bg-gray-100 md:max-h-96">
                  {/* <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/image/Skeb Media Post copy.jpeg" alt="" /> */}
                  <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portofolio Website</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This is a portofolio website that i worked on using NextJs, Tailwind, and Flowbit as it techstack!</p>
                      <div className="flex w-full justify-center">
                        <div className="flex gap-2">
                          <a href="https://github.com/EzraArya/portofolio" className="flex flex-row gap-2 border rounded-xl w-40 h-9 justify-center items-center hover:bg-gray-200 drop-shadow-md">
                            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                            </svg>
                              GitHub
                            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                            </svg>
                          </a>
                          <a href="/projects/portofolio" className="flex flex-row gap-2 border rounded-xl w-40 h-9 justify-center items-center hover:bg-gray-200 drop-shadow-md">
                              View Project
                            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                            </svg>
                          </a>
                      </div>
                      </div>
                  </div>
              </div>
              <div className="flex flex-col items-center  bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-6xl hover:bg-gray-100 md:max-h-96">
                  {/* <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/image/Skeb Media Post copy.jpeg" alt="" /> */}
                  <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LapangPedia</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This is a project that i worked with my team, where i'am responsible as a full-stack developer in this project. This website is an auction website where user can bid and auction their product. The techstack that is used in this project are Laravel framework with MySQL as it database, Tailwind, Flowbite, and Bootstrap</p>
                      <div className="flex w-full justify-center">
                        <div className="flex gap-2">
                          <a href="https://github.com/EzraArya/lapangpedia-web" className="flex flex-row gap-2 border rounded-xl w-40 h-9 justify-center items-center hover:bg-gray-200 drop-shadow-md">
                              <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                            </svg>
                              GitHub
                            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                            </svg>
                          </a>
                          <Link href="/projects/lapangpedia" className="flex flex-row gap-2 border rounded-xl w-40 h-9 justify-center items-center hover:bg-gray-200 drop-shadow-md">
                              View Project
                            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                            </svg>
                          </Link>
                        </div>
                      </div>
                  </div>
              </div>
              <div className="flex flex-col items-center  bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-6xl hover:bg-gray-100 md:max-h-96">
                  {/* <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/image/Skeb Media Post copy.jpeg" alt="" /> */}
                  <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hackathon Website</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This is a project that I worked with my team, where I'am responsible as a back-end developer in this project specifically on configuring the admin role in this website. This website is an Hackathon website where user can create account and signup to the Hackathon. The techstack that is used in this project is Laravel framework </p>
                      <div className="flex w-full justify-center">
                        <div className="flex gap-2">
                          <a href="https://github.com/EzraArya/ProjectTpm/" className="flex flex-row gap-2 border rounded-xl w-40 h-9 justify-center items-center hover:bg-gray-200 drop-shadow-md" >
                            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                            </svg>
                              GitHub
                            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                            </svg>
                          </a>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="flex flex-col items-center  bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-6xl hover:bg-gray-100 md:max-h-96">
                  {/* <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/image/Skeb Media Post copy.jpeg" alt="" /> */}
                  <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SIBI Sign Language Translator</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This is a project that i worked on that integrates machine learning model using TFLite with Flutter to create a mobile application that is capable to translate SIBI Sign Language Alphabet</p>
                      <div className="flex w-full justify-center">
                        <div className="flex gap-2">
                          <a href="https://github.com/EzraArya/SIBI-Translator-Flutter" className="flex flex-row gap-2 border rounded-xl w-40 h-9 justify-center items-center hover:bg-gray-200 drop-shadow-md" >
                            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                            </svg>
                              GitHub
                            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                            </svg>
                          </a>
                          <Link href="/projects/sibi-translator" className="flex flex-row gap-2 border rounded-xl w-40 h-9 justify-center items-center hover:bg-gray-200 drop-shadow-md" >
                              View Project
                            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                            </svg>
                          </Link>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-56 items-center flex shadow-2xl" id="contact">
        <div className="flex-col w-full justify-start ">
          <h1 className="font-montserrat font-bold text-5xl md:ml-44 mb-3"><span className="underline decoration-blue-400 decoration-8">Contact Me</span></h1>
          <div className="w-full flex justify-center md:ml-0">
            <h1 className="font-montserrat font-light text-xl mb-3">email me at <span className="font-medium">ezrawijaya10@gmail.com</span></h1>         
          </div>
        </div>
      </div>
   </main>
  );
}
