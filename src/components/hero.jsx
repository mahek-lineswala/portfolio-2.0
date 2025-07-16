import { useState } from 'react';

function Hero() {
  const [active, setActive] = useState(null); // null means no popup
  return (
    <section className="  font-inter min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#171717] text-white">
      {/* Title */}
      <div className='border-2 border-white rounded-lg p-8 bg-[#132135] p-20 px-36'>
        <h1 className="text-5xl sm:text-6xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">mahek</span>
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
              className="w-16 h-16"
            />
            <span className="mt-2 text-sm font-semibold">about</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 transition-all" onClick={() => setActive('links')}>
            <img
              src="/icons/icon_links_dark.webp"
              alt="Links section icon with interconnected chain links symbolizing navigation to external profiles, displayed in a clean digital environment"
              className="w-16 h-16"
            />
            <span className="mt-2 text-sm font-semibold">links</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 transition-all" onClick={() => setActive('work')}>
            <img
              src="/icons/icon_work_dark.webp"
              alt="Work section icon featuring a briefcase symbolizing professional projects and portfolio, set against a minimalist background"
              className="w-16 h-16"
            />
            <span className="mt-2 text-sm font-semibold">work</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 transition-all" onClick={() => setActive('faq')}>
            <img
              src="/icons/icon_faq_dark.webp"
              alt="FAQ section icon with a question mark inside a speech bubble, representing frequently asked questions in a friendly digital setting"
              className="w-16 h-16"
            />
            <span className="mt-2 text-sm font-semibold">faq</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 transition-all" onClick={() => setActive('contact')}>
            <img
              src="/icons/icon_contact_dark.webp"
              alt="Contact section icon showing an envelope symbolizing email communication, placed in a welcoming digital interface"
              className="w-16 h-16"
            />
            <span className="mt-2 text-sm font-semibold">contact</span>
          </button>
        </div>
      </div>
      {active && (
        <div className="fixed bottom-24 bg-[#0a0f1c] border-2 border-white rounded-lg p-6 w-[90%] max-w-md mx-auto text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold capitalize">{active}</h3>
            <button onClick={() => setActive(null)} className="hover:scale-110"> [ X ] </button>
          </div>

          {active === 'about' && <p>I’m Mahek – a passionate UI/UX designer and web developer!</p>}
          {active === 'links' && <p>GitHub, Instagram, Behance, etc...</p>}
          {active === 'work' && <p>Projects, portfolio screenshots, etc...</p>}
          {active === 'faq' && <p>Answers to common stuff — or funny ones 😂</p>}
          {active === 'contact' && <p>Let’s connect! Drop a mail 📩</p>}
        </div>
      )}
    </section>
  );
}

export default Hero;
