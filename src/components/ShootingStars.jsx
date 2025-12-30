import React, { useEffect, useState } from "react";

export function ShootingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const totalStars = 80;
    const generatedStars = Array.from({ length: totalStars }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 4 + Math.random() * 6,
      size: Math.random() < 0.3 ? "w-1.5 h-1.5" : "w-0.5 h-0.5",
      glow: Math.random() < 0.4,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full bg-black overflow-hidden pointer-events-none">
      <div className="relative h-full w-full">
        {stars.map((star, i) => (
          <span
            key={i}
            className={`absolute rounded-full bg-white opacity-80 animate-shooting ${star.size} ${
              star.glow ? "shadow-[0_0_6px_2px_white]" : ""
            }`}
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}