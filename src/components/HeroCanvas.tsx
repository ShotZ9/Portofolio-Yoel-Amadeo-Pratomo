'use client'

import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particlesArray: Particle[] = []

    const getCanvasSize = () => ({
      width: canvas.offsetWidth,
      height: canvas.offsetHeight,
    })

    const particleSettings = {
      count: 180,
      radius: 2,
      color: '#3498db',
      lineColor: '#3498db',
      connectDistance: 120,
    }

    class Particle {
      constructor(
        public x: number,
        public y: number,
        public directionX: number,
        public directionY: number,
        public size: number,
        public color: string,
        private ctx: CanvasRenderingContext2D,
        private canvasWidth: number,
        private canvasHeight: number
      ) {}

      draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
      }

      update() {
        if (this.x > this.canvasWidth || this.x < 0) this.directionX = -this.directionX
        if (this.y > this.canvasHeight || this.y < 0) this.directionY = -this.directionY
        this.x += this.directionX
        this.y += this.directionY
        this.draw()
      }

      setCanvasSize(width: number, height: number) {
        this.canvasWidth = width
        this.canvasHeight = height
      }
    }

    const init = () => {
      const { width, height } = getCanvasSize()
      canvas.width = width
      canvas.height = height

      particlesArray = []
      for (let i = 0; i < particleSettings.count; i++) {
        const size = particleSettings.radius
        const x = Math.random() * width
        const y = Math.random() * height
        const directionX = Math.random() * 0.4 - 0.2
        const directionY = Math.random() * 0.4 - 0.2
        particlesArray.push(new Particle(x, y, directionX, directionY, size, particleSettings.color, ctx, width, height))
      }
    }

    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < particleSettings.connectDistance) {
            const opacity = 1 - distance / particleSettings.connectDistance
            ctx.strokeStyle = `rgba(52, 152, 219, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      const { width, height } = getCanvasSize()
      particlesArray.forEach(p => p.setCanvasSize(width, height))

      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particlesArray.forEach((p) => p.update())
      connect()
    }

    const handleResize = () => {
      init()
    }

    window.addEventListener('resize', handleResize)
    init()
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      id="hero-canvas"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-1"
    />
  )
}