import { useState, useRef } from "react";
import { motion } from "framer-motion";

function MusicStar() {
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);

  const handleMouseEnter = async () => {
    setIsHovered(true);
    
    // Play sound once on hover
    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/ascending.mp3");
      audioRef.current.volume = 0.25;
    }
    
    try {
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    } catch (error) {
      console.log("Audio play failed:", error);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="absolute cursor-pointer z-30"
      style={{
        left: "4px",
        top: "-48px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        scale: isHovered ? [1, 1.15, 1] : 1,
        y: isHovered ? [0, -5, 0] : 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full blur-2xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,215,0,0.7) 0%, rgba(255,165,0,0.4) 50%, transparent 80%)",
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.3 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Star image */}
      <motion.img
        src="/icon_star.webp"
        alt="star"
        className="w-12 h-12"
        style={{
          filter: isHovered ? "drop-shadow(0 0 15px rgba(255,215,0,0.8))" : "none",
        }}
        animate={{
          rotate: isHovered ? [0, 10, -10, 0] : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
}

export default MusicStar;