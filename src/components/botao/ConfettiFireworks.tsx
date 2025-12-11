"use client"

import confetti from "canvas-confetti"

import { Button } from "@/components/ui/button"

export default function ConfettiFireworks() {
  const handleClick = () => {
    const duration = 6 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)
  }

  return (
    <div className="relative">
      
      <Button
        onClick={handleClick}
        type="submit"
        className="w-full py-3 px-6 text-white font-bold text-lg rounded-xl bg-gradient-to-r from-amber-500 via-red-600 to-pink-900 bg-[length:200%_200%] bg-left transition-all duration-500 hover:bg-right hover:shadow-lg hover:shadow-red-500/50"
      >
        Enviar Feedback
      </Button>
    </div>
  )
}
