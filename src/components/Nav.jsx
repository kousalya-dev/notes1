import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const links = [['about', 'About'], ['impact', 'Impact'], ['experience', 'Work'], ['skills', 'Stack'], ['contact', 'Contact']]

export default function Nav() {
  const [p, setP] = useState(0)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      setP(max > 0 ? scrollY / max : 0)
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), {
      rootMargin: '-45% 0px -50% 0px',
    })
    links.forEach(([id]) => document.getElementById(id) && io.observe(document.getElementById(id)))
    return () => {
      removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="logo">H<i>.</i></a>
        <nav className={open ? 'open' : ''}>
          {links.map(([id, l]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href={profile.resume} target="_blank" rel="noreferrer" className="pill">Résumé ↗</a>
        </nav>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
      <div className="scrollbar"><i style={{ transform: `scaleX(${p})` }} /></div>
    </header>
  )
}
