import { useState } from 'react'
import { profile } from '../data.js'
import { magnet, unmagnet } from '../hooks.js'

export default function Contact() {
  const [ok, setOk] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setOk(true)
      setTimeout(() => setOk(false), 1800)
    } catch {
      location.href = `mailto:${profile.email}`
    }
  }
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="num">05 / Contact</span>
        <h2 className="mega">Let’s build<br /><em>something</em> <span>fast.</span></h2>
        <div className="cta">
          <a className="btn solid lg" href={`mailto:${profile.email}`} onPointerMove={magnet} onPointerLeave={unmagnet}>Say hello →</a>
          <button className="btn lg" onClick={copy} onPointerMove={magnet} onPointerLeave={unmagnet}>{ok ? 'Copied ✓' : profile.email}</button>
        </div>
        <div className="links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.resume} target="_blank" rel="noreferrer">Résumé ↗</a>
        </div>
        <footer>© {new Date().getFullYear()} {profile.name} · Built with React + Vite</footer>
      </div>
    </section>
  )
}
