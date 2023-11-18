import { useEffect, useRef } from "react"

interface Point {
  x: number
  y: number
  vx: number
  vy: number
}

export const BackgroundAnimation: React.FC<{ color: string }> = ({ color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>(0)
  const pointsRef = useRef<Point[]>([])
  const speed = 0.5 // Variável de velocidade
  const pointSize = 1.5 // Tamanho dos pontos

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")

    if (canvas && ctx) {
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.width = width
      canvas.height = height

      const pointsCount = 250
      const points: Point[] = []
      for (let i = 0; i < pointsCount; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const vx = (Math.random() * 2 - 1) * speed // Aplicando a velocidade ao eixo X
        const vy = (Math.random() * 2 - 1) * speed // Aplicando a velocidade ao eixo Y
        points.push({ x, y, vx, vy })
      }
      pointsRef.current = points

      const animate = () => {
        ctx.clearRect(0, 0, width, height)

        for (let i = 0; i < points.length; i++) {
          const point = points[i]
          point.x += point.vx
          point.y += point.vy

          if (point.x < 0 || point.x > width) {
            point.vx *= -1
          }
          if (point.y < 0 || point.y > height) {
            point.vy *= -1
          }
        }

        for (let i = 0; i < points.length; i++) {
          const pointA = points[i]

          ctx.beginPath()
          ctx.fillStyle = color
          ctx.arc(pointA.x, pointA.y, pointSize, 0, Math.PI * 2)
          ctx.fill()
          ctx.closePath()

          for (let j = i + 1; j < points.length; j++) {
            const pointB = points[j]

            const dx = pointB.x - pointA.x
            const dy = pointB.y - pointA.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.beginPath()
              ctx.strokeStyle = color
              ctx.lineWidth = 0.2
              ctx.moveTo(pointA.x, pointA.y)
              ctx.lineTo(pointB.x, pointB.y)
              ctx.stroke()
            }
          }
        }

        requestRef.current = requestAnimationFrame(animate)
      }

      requestRef.current = requestAnimationFrame(animate)
    }

    return () => {
      cancelAnimationFrame(requestRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        zIndex: -1,
        width: "100%",
        height: "100%",
        position: "absolute",
        opacity: 0.4,
      }}
    />
  )
}
