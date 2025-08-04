import { useState } from 'react';
import About from "./Popups_temp/About_temp";
import Links from "./Popups_temp/Links_temp";
import Work from "./Popups_temp/Work_temp";
import Education from "./Popups_temp/Edu_temp";
import Contact from "./Popups_temp/Contact";
function Hero() {
  const [active, setActive] = useState(null); // null means no popup
  
  return (
    
    <section className="  font-inter min-h-screen flex flex-col justify-center text-center px-4 bg-[#171717] text-white">
      {/* Title */}
      <div className='mx-80'>
        <div className=" p-4 bg-[#171717] text-white text-left font-bold  border-t-2 border-l-2 border-r-2 border-white rounded-tr-lg rounded-tl-lg" >
            <p>home</p>
        </div>
      </div>
        
      <div className='border-2 border-white rounded-bl-lg rounded-br-lg  bg-[#132135] p-20 px-28 mx-80'>
        
        <h1 className="text-5xl sm:text-6xl md:text-6xl font-bold mb-4">
          hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">mahek</span>
        </h1>
        {/* Subtitle */}
        <p className="text-2xl text-gray-300 mb-6">
           design, development, and aesthetics!
        </p>
        {/* Call to Action */}
        <div className="mt-12 flex flex-wrap justify-center gap-10 text-white">
          <button className="flex flex-col items-center hover:scale-110 transition-all" onClick={() => setActive('about')}>
            <img
              src="/icons/icon_about_dark.webp"
              alt="About section icon showing a user silhouette in a dark circular background, representing personal information, set in a modern digital interface"
              className="w-18 h-20"
            />
            <span className="mt-2 text-sm font-semibold">about</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 transition-all" onClick={() => setActive('links')}>
            <img
              src="/icons/icon_links_dark.webp"
              alt="Links section icon with interconnected chain links symbolizing navigation to external profiles, displayed in a clean digital environment"
              className="w-18 h-20 ml-4"
            />
            <span className="mt-2 text-sm font-semibold ml-3">links</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 transition-all" onClick={() => setActive('work')}>
            <img
              src="/icons/icon_work_dark.webp"
              alt="Work section icon featuring a briefcase symbolizing professional projects and portfolio, set against a minimalist background"
              className="w-18 h-20 ml-4"
            />
            <span className="mt-2 text-sm font-semibold ml-2">work</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 transition-all" onClick={() => setActive('education')}>
            <img
              src="/icons/icon_edu_dark.png"
              alt="FAQ section icon with a question mark inside a speech bubble, representing frequently asked questions in a friendly digital setting"
              className="w-18 h-20"
            />
            <span className="mt-2 text-sm font-semibold">education</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 transition-all" onClick={() => setActive('contact')}>
            <img
              src="/icons/icon_contact_dark.webp"
              alt="Contact section icon showing an envelope symbolizing email communication, placed in a welcoming digital interface"
              className="w-18 h-20 ml-4"
            />
            <span className="mt-2 text-sm font-semibold ml-3">contact</span>
          </button>
        </div>
      </div>
      {active && (
  <div
    className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-[#132135] border-2 border-white rounded-lg w-[90%] max-w-2xl h-[450px] overflow-hidden shadow-xl"
    style={{ resize: 'both' }}
  >
    <div className="flex justify-between items-center px-4 py-2  bg-[#171717] text-white font-bold border-b border-gray-200" id="popupHeader">
      <h3 className="capitalize">{active}</h3>
      <button onClick={() => setActive(null)} className="text-sm text-white-500 hover:scale-110">[ X ] </button>
    </div>

    <div className="overflow-y-auto h-[calc(100%-3rem)] p-4">
      {active === 'about' && <About />}
      {active === 'links' && <Links />}
      {active === 'work' && <Work  />}
      {active === 'education' && <Education />}
      {active === 'contact' && <Contact />}
    </div>
  </div>
)}
    </section>
  );
}

export default Hero;
