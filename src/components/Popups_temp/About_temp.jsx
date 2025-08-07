import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#132135] text-white p-6 font-sans text-left">
      <div className="flex items-center space-x-6 ">
        <img
          src="/images/neko.jpg"
          alt="avatar"
          className="w-24 h-24 rounded-full object-cover border-2 border-cyan-400"
        />
        <div>
          <h1 className="text-3xl font-bold text-cyan-300">Mahek Lineswala</h1>
          <p className="text-gray-300">Web Developer & UI/UX Designer</p>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <p className="text-lg">
          Hi, I'm Mahek — a web developer and UI/UX designer who loves building clean, user-friendly interfaces. <br />
         
         Let’s build something cool — or at least agree that light mode is a crime.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            With a sharp eye for detail (and a love for smooth interactions), I turn coffee into code and ideas into engaging experiences. 
          </li>
          <li>
            I'm all about blending logic with creativity — plus the occasional bug-induced meltdown. <br />
          </li>
          <li>
            I design intuitive wireframes and build responsive sites with Tailwind & React.
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Things I Like</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Smooth scroll and buttery transitions</li>
          <li>Pixel-perfect UI</li>
          <li>Learning weird things like "why CSS does that"</li>
          <li>Lo-fi beats while coding</li>
          <li>Helping others get unstuck (after googling it myself)</li>
          <li>A lil bit of a gamer</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
