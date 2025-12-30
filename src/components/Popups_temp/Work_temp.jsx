import projects from "../../data/Projects_temp";
import { useState } from "react";

function Work() {
  // Xylophone-like sound generator using Web Audio API
  const playXylophoneSound = (noteIndex = 0) => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Xylophone frequencies (pentatonic scale for pleasant sounds)
      const frequencies = [523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50];
      const frequency = frequencies[noteIndex % frequencies.length];
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Xylophone-like tone (sine wave with quick attack/decay)
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      
      // Quick attack and decay for xylophone effect
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      // Fallback if Web Audio API not available
      console.log('Audio not available');
    }
  };
  return (
    
    <>
    
    <div className="flex flex-col justify-between gap-6 mb-8">
      <div className="w-full ">
        <h2 className="text-white text-left text-2xl font-bold mb-4">LANGUAGES</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "HTML", "Css", "React","Tailwind", "PHP","JavaScript", "C", 
            "Python",  "Java", "Mysql", "C++",
          ].map((lang, index) => (
            <p
              key={lang}
              onMouseEnter={() => playXylophoneSound(index)}
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
          {["Figma", "Canva", "Git", "Blender", "Github", "Vercel"].map((tool, index) => (
            <p
              key={tool}
              onMouseEnter={() => playXylophoneSound(index + 11)}
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