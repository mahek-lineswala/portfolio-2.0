import projects from "../../data/Projects_temp";
import { useState } from "react";

function Work() {
const playSound = (soundPath) => {
  const audio = new Audio(soundPath);
  audio.currentTime = 0; 
  audio.play();
  };
  return (
    
    <>
    
    <div className="flex flex-col justify-between gap-6 mb-8">
      <div className="w-full ">
        <h2 className="text-white text-left text-2xl font-bold mb-4">LANGUAGES</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "HTML", "Css", "React","C++","JavaScript", "C", 
            "Python",  "Java", "Mysql", "Tailwind",
          ].map((lang) => (
            <p
              key={lang}
              onMouseEnter={() => { playSound('/sounds/c.mp3'); }}
              className="px-4 py-1 bg-[#171717] border-2 border-white rounded-md drop-shadow-tag text-white font-mono text-sm md:text-base hover:translate-y-[2px] duration-100"
            >
              {lang}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-white text-left text-2xl font-bold mb-4">TOOLS</h2>
        <div className="flex flex-wrap gap-2  ">
          {["Figma", "Canva", "Git", "Blender", "Github", "Vercel"].map((tool) => (
            <p
              key={tool}
              onMouseEnter={() => { playSound('/sounds/c.mp3'); }}
              className="px-4 py-1 bg-[#171717] border-2 border-white rounded-md drop-shadow-tag text-white font-mono text-sm md:text-base hover:translate-y-[2px] duration-100"
            >
              {tool}
            </p>
          ))}
       </div>
     </div>
    </div>
    <h2 className="text-white text-center mt-3 text-2xl font-bold" >PROJECTS</h2>
      {projects.map((project) => (
        <div key={project.id} className="border-b border-gray-600 p-4">
          <h3 className="text-lg text-white font-bold mb-2 text-left">{project.title}</h3>
          <p className="text-sm text-gray-400 text-left mb-3">{project.description}</p>
          <div className="flex gap-4">
            <div ><a href={project.link} target="_blank" className="text-sm border-b-2 w-fit text-[#c0faff] border-[#c0faff] font-bold">Link</a></div>
            <div ><a href={project.githubRepo} target="_blank "className="text-sm border-b-2 w-fit text-[#c0faff] border-[#c0faff] font-bold">Repository</a></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Work;