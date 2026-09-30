import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    let x = 0, y = 0, rx = 0, ry = 0, raf
    const move = (e) => {
      x = e.clientX
      y = e.clientY
      dot.current.style.opacity = ring.current.style.opacity = 1
      const hot = e.target.closest?.('a, button, .hoverable, input')
      ring.current.classList.toggle('hot', !!hot)
    }
    const loop = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('pointermove', move)
    loop()
    return () => {
      window.removeEventListener('pointermove', move)
      cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <>
      <div ref={ring} className="cur-ring" aria-hidden="true" />
      <div ref={dot} className="cur-dot" aria-hidden="true" />
    </>
  )
}
