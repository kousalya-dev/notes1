import { useEffect, useRef, useState } from 'react'
import { profile, orbit } from '../data.js'
import { magnet, unmagnet, reduced } from '../hooks.js'

function Typed({ words }) {
  const [i, setI] = useState(0)
  const [t, setT] = useState(reduced() ? words[0] : '')
  const [del, setDel] = useState(false)
  useEffect(() => {
    if (reduced()) return
    const w = words[i]
    let id
    if (!del && t === w) id = setTimeout(() => setDel(true), 1500)
    else if (del && t === '') { setDel(false); setI((i + 1) % words.length) }
    else id = setTimeout(() => setT(del ? w.slice(0, t.length - 1) : w.slice(0, t.length + 1)), del ? 30 : 65)
    return () => clearTimeout(id)
  }, [t, del, i, words])
  return <span className="typed">{t}<i /></span>
}

export default function Hero() {
  const stage = useRef(null)

  // mouse parallax → CSS variables consumed by the stage layers
  useEffect(() => {
    const el = stage.current
    if (!el || reduced()) return
    const move = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--px', ((e.clientX - (r.left + r.width / 2)) / innerWidth).toFixed(3))
      el.style.setProperty('--py', ((e.clientY - (r.top + r.height / 2)) / innerHeight).toFixed(3))
    }
    addEventListener('pointermove', move)
    return () => removeEventListener('pointermove', move)
  }, [])

  return (
    <section id="top" className="hero">
      <div className="giant" aria-hidden="true">{profile.first}</div>
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="badge"><i />Open to new roles · {profile.location}</span>
          <h1>
            <span className="l1">Hi, I’m</span>
            <span className="l2">Hanu<br />S Kumar<b>.</b></span>
          </h1>
          <p className="role"><em>/</em> <Typed words={profile.roles} /></p>
          <p className="tagline">{profile.tagline}</p>
          <p className="sub">{profile.summary}</p>
          <div className="cta">
            <a href="#experience" className="btn solid" onPointerMove={magnet} onPointerLeave={unmagnet}>See my work ↓</a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn" onPointerMove={magnet} onPointerLeave={unmagnet}>Résumé ↗</a>
          </div>
        </div>

        <div className="stage" ref={stage}>
          <div className="halo" />
          <svg className="ring" viewBox="0 0 400 400" aria-hidden="true">
            <defs><path id="circ" d="M200,200 m-170,0 a170,170 0 1,1 340,0 a170,170 0 1,1 -340,0" /></defs>
            <text><textPath href="#circ">FULL-STACK DEVELOPER ✦ MODULE LEAD ✦ REACT ✦ NODE ✦ AWS ✦ </textPath></text>
          </svg>
          <div className="photo">
            <img src={profile.photo} alt="Portrait of Hanu S Kumar" width="1100" height="1467" fetchPriority="high" />
            <div className="scan" style={{ '--cut': `url(${profile.photo})` }} />
          </div>
          {orbit.map((o, i) => (
            <span key={o} className={`chipo c${i}`}><b>{o}</b></span>
          ))}
          <div className="tag t-a"><small>PROMOTED</small><b>Module Lead in &lt;1 yr</b></div>
          <div className="tag t-b"><small>IMPACT</small><b>−75% input time</b></div>
        </div>
      </div>
      <a href="#about" className="scroll" aria-label="Scroll down"><span /></a>
    </section>
  )
}
