// src/components/Hero.jsx
import { useState } from "react";
import Draggable from "react-draggable";
import { createPortal } from "react-dom";

import About from "./Popups_temp/About_temp";
import Links from "./Popups_temp/Links_temp";
import Work from "./Popups_temp/Work_temp";
import Education from "./Popups_temp/Edu_temp";
import Contact from "./Popups_temp/Contact";

import { ShootingStars } from "@/components/ui/shadcn-io/shooting-stars";

function Hero() {
  const [windows, setWindows] = useState([]);
  const [offset, setOffset] = useState(0);

  const playSound = (soundPath) => {
    const audio = new Audio(soundPath);
    audio.currentTime = 0;
    audio.play();
  };

  // Helper to return the popup JSX for a given type
  const renderContent = (type) => {
    switch (type) {
      case "about":
        return <About />;
      case "links":
        return <Links />;
      case "work":
        return <Work />;
      case "education":
        return <Education />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  const openWindow = (type) => {
    setWindows((prev) => {
      // Check if already open
      const existingIndex = prev.findIndex((w) => w.type === type);
      if (existingIndex !== -1) {
        // Move that window to the front
        const existing = prev[existingIndex];
        const updated = [...prev];
        updated.splice(existingIndex, 1); // remove
        updated.push(existing); // push to top
        return updated;
      }

      playSound("/sounds/open.mp3");

      // compute width similar to: w-[90%] max-w-2xl
      const maxW = 672; // 2xl ~ 672px
      const widthPx = Math.min(Math.round(window.innerWidth * 0.9), maxW);
      const heightPx = 450;

      // center-top base position
      const baseLeft = Math.round(window.innerWidth / 2 - widthPx / 2);
      const baseTop = 100; // near top

      // apply offset and ensure not off-screen
      let left = baseLeft + offset;
      let top = baseTop + offset;

      // wrap if it goes too far right or bottom
      if (left + widthPx > window.innerWidth - 20) left = 20;
      if (top + heightPx > window.innerHeight - 20) top = 20;

      const newWindow = {
        id: Date.now(),
        type,
        left,
        top,
        width: widthPx,
        height: heightPx,
      };

      return [...prev, newWindow];
    });

    // increase offset; wrap back after a while so windows don't run off screen
    setOffset((prev) => (prev + 30) % 180);
  };

  const closeWindow = (id) => {
    playSound("/sounds/close.mp3");
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  // Renders a single window into document.body via portal
  const WindowPortal = ({ win }) => {
    if (typeof document === "undefined") return null;

    const popup = (
      <div
        style={{
          position: "fixed",
          left: win.left,
          top: win.top,
          zIndex: 9999,
        }}
      >
        <Draggable
          handle=".popup-header"
          cancel=".popup-content"
          defaultPosition={{ x: 0, y: 0 }}
        >
          <div
            style={{
              width: win.width,
              height: win.height,
            }}
            className="bg-[#132135] border-2 border-white rounded-lg overflow-hidden shadow-xl"
          >
            <div
              className="popup-header flex justify-between items-center px-4 py-2 bg-[#171717] text-white font-bold border-b border-gray-200"
              style={{ cursor: "default" }} // no grab cursor
            >
              <h3 className="capitalize">{win.type}</h3>
              <button
                onClick={() => closeWindow(win.id)}
                className="text-sm text-white hover:scale-110"
              >
                [ X ]
              </button>
            </div>

            <div className="popup-content overflow-y-auto h-[calc(100%-3rem)] p-4 transparent-scrollbar">
              {renderContent(win.type)}
            </div>
          </div>
        </Draggable>
      </div>
    );

    return createPortal(popup, document.body);
  };

  return (
    <section className="overflow-x-hidden relative z-10 font-inter min-h-screen flex flex-col justify-center text-center px-4 bg-black text-white">
      <ShootingStars
        starColor="#ffffff"
        trailColor="#ffffff"
        minSpeed={5}
        maxSpeed={5}
        minDelay={100}
        maxDelay={300}
      />

      <div className="mx-80">
        <div className="p-4 bg-[#171717] text-white text-left font-bold border-t-2 border-l-2 border-r-2 border-white rounded-tr-lg rounded-tl-lg">
          <p>Home</p>
        </div>
      </div>

      <div className="border-2 border-white rounded-bl-lg rounded-br-lg bg-[#132135] p-20 px-28 mx-80">
        <h1
          className="text-5xl text-[powderblue] sm:text-6xl md:text-6xl font-bold mb-4"
          id="nata-sans"
        >
          hello, I'm mek!
        </h1>
        <p className="text-2xl text-gray-300 mb-6 font-Allura">
          design, development, and aesthetics!
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-10 text-white">
          {[
            { type: "about", icon: "/icons/icon_about_dark.webp" },
            { type: "links", icon: "/icons/icon_links_dark.webp", ml: "ml-4" },
            { type: "work", icon: "/icons/icon_work_dark.webp", ml: "ml-4" },
            { type: "education", icon: "/icons/icon_edu_dark.png" },
            { type: "contact", icon: "/icons/icon_contact_dark.webp", ml: "ml-4" },
          ].map(({ type, icon, ml }) => (
            <button
              key={type}
              className={`flex flex-col items-center hover:scale-110 transition-all ${ml || ""}`}
              onClick={() => openWindow(type)}
            >
              <img src={icon} alt={type} className="w-18 h-20" />
              <span className="mt-2 text-sm font-semibold capitalize">
                {type}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Render windows via portals */}
      {windows.map((win) => (
        <WindowPortal key={win.id} win={win} />
      ))}
    </section>
  );
}

export default Hero;
