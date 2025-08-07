"use client"

import * as React from "react"

interface Star {
  id: number
  top: string
  left: string
  size: number
  delay: number
}

export function ShootingStars() {
  const [stars, setStars] = React.useState<Star[]>([])

  React.useEffect(() => {
    const totalStars = 80
    const generatedStars: Star[] = []

    for (let i = 0; i < totalStars; i++) {
      generatedStars.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 1.5 + 1,
        delay: Math.random() * 10,
      })
    }

    setStars(generatedStars)
  }, [])

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.6,
            animationDelay: `${star.delay}s`,
            animationDuration: `4s`,
          }}
        />
      ))}

      <style jsx>{`
        .twinkle {
          animation-name: twinkle;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  )
}
