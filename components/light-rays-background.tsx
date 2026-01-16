"use client"

import { useEffect, useRef } from "react"

export function LightRaysBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Create rays
    const rays = Array.from({ length: 12 }, (_, i) => ({
      angle: (i * Math.PI * 2) / 12,
      length: Math.max(canvas.width, canvas.height) * 1.5,
      opacity: 0.03 + Math.random() * 0.05,
      speed: 0.0002 + Math.random() * 0.0003,
    }))

    let animationFrame: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      rays.forEach((ray) => {
        const currentAngle = ray.angle + Math.sin(time * ray.speed) * 0.3

        const gradient = ctx.createLinearGradient(
          centerX,
          centerY,
          centerX + Math.cos(currentAngle) * ray.length,
          centerY + Math.sin(currentAngle) * ray.length,
        )

        gradient.addColorStop(0, `rgba(20, 184, 166, ${ray.opacity})`) // teal
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${ray.opacity * 0.5})`) // blue
        gradient.addColorStop(1, "rgba(20, 184, 166, 0)")

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)

        const spread = 0.15
        ctx.lineTo(
          centerX + Math.cos(currentAngle - spread) * ray.length,
          centerY + Math.sin(currentAngle - spread) * ray.length,
        )
        ctx.lineTo(
          centerX + Math.cos(currentAngle + spread) * ray.length,
          centerY + Math.sin(currentAngle + spread) * ray.length,
        )

        ctx.closePath()
        ctx.fillStyle = gradient
        ctx.fill()
      })

      time++
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ mixBlendMode: "screen" }} />
}
