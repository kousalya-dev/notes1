import { useEffect, useState } from 'react'
import { reduced } from '../hooks.js'

export default function Preloader() {
  const [n, setN] = useState(0)
  const [gone, setGone] = useState(reduced())
  const [hide, setHide] = useState(false)

  useEffect(() => {
    if (gone) return
    document.body.style.overflow = 'hidden'
    // exit is timer-driven (never depends on animation frames), the counter is just visual
    const t1 = setTimeout(() => setHide(true), 1500)
    const t2 = setTimeout(() => setGone(true), 2400)
    const t0 = performance.now()
    let raf
    const tick = (t) => {
      const p = Math.min((t - t0) / 1300, 1)
      setN(Math.round(100 * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      cancelAnimationFrame(raf)
      document.body.style.overflow = ''
    }
  }, [gone])

  if (gone) return null
  return (
    <div className={`preloader ${hide ? 'hide' : ''}`} aria-hidden="true">
      <div className="pre-name">HANU<span>.</span>DEV</div>
      <div className="pre-count">{String(n).padStart(3, '0')}</div>
      <div className="pre-bar"><i style={{ width: `${n}%` }} /></div>
    </div>
  )
}
