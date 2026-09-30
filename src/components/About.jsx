import { useEffect, useRef } from 'react'
import { manifesto, now, education, profile } from '../data.js'
import Reveal from './Reveal.jsx'

export function Head({ n, title, sub }) {
  return (
    <Reveal className="head">
      <span className="num">{n}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  )
}

// words light up as you scroll through the paragraph
function ScrollText({ text }) {
  const ref = useRef(null)
  const words = text.split(' ')
  useEffect(() => {
    const el = ref.current
    const spans = [...el.querySelectorAll('span')]
    const update = () => {
      const r = el.getBoundingClientRect()
      const p = Math.min(Math.max((innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.25), 0), 1)
      const n = Math.round(p * spans.length)
      spans.forEach((s, i) => s.classList.toggle('on', i < n))
    }
    update()
    addEventListener('scroll', update, { passive: true })
    addEventListener('resize', update)
    return () => { removeEventListener('scroll', update); removeEventListener('resize', update) }
  }, [])
  return (
    <p ref={ref} className="scrolltext">
      {words.map((w, i) => (<span key={i}>{w} </span>))}
    </p>
  )
}

export default function About() {
  return (
    <section id="about" className="section container">
      <Head n="01 / About" title="The short version" />
      <ScrollText text={manifesto} />
      <div className="about-row">
        <Reveal className="now hoverable">
          <span className="mono">▍{now.title}</span>
          <ul>{now.lines.map((l, i) => <li key={l} style={{ '--i': i }}>{l}</li>)}</ul>
          <small>Using Claude and GitHub Copilot to speed up app development.</small>
        </Reveal>
        <Reveal delay={120} className="edu">
          <span className="mono">▍Education</span>
          <h3>{education.degree}</h3>
          <p>{education.school} · {education.period}</p>
          <span className="mono loc">▍Based in</span>
          <p>{profile.location}</p>
        </Reveal>
      </div>
    </section>
  )
}
