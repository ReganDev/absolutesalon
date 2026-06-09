import { useState, useRef, useCallback } from 'react'
import './BeforeAfterSlider.css'

interface Props {
  before: string
  after: string
  label?: string
}

export default function BeforeAfterSlider({ before, after, label }: Props) {
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    setPos(pct)
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePos(e.clientX) }
  const onMouseUp   = () => { dragging.current = false }
  const onTouchMove = (e: React.TouchEvent) => { updatePos(e.touches[0].clientX) }

  return (
    <div
      className="ba-slider"
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <img src={after} alt="After" className="ba-img ba-after" />
      <div className="ba-before-wrap" style={{ width: `${pos}%` }}>
        <img src={before} alt="Before" className="ba-img ba-before" />
      </div>

      <div
        className="ba-handle"
        style={{ left: `${pos}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={onMouseDown}
        onTouchMove={onTouchMove}
        onTouchEnd={onMouseUp}
      >
        <div className="ba-handle-line" />
        <div className="ba-handle-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
        <div className="ba-handle-line" />
      </div>

      <div className="ba-label ba-label-before">Before</div>
      <div className="ba-label ba-label-after">After</div>

      {label && <div className="ba-caption">{label}</div>}
    </div>
  )
}
