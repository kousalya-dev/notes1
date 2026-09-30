import { experience } from '../data.js'
import { Head } from './About.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <Head n="03 / Work" title="Where I’ve shipped" />
      <div className="stack">
        {experience.map((j, i) => (
          <article key={j.company} className="xcard" style={{ '--i': i }}>
            <div className="xtop">
              <span className="xnum">0{i + 1}</span>
              <span className="period mono">{j.period}</span>
            </div>
            <h3>{j.role}</h3>
            <p className="co">{j.company} <span>· {j.place}</span></p>
            <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
            <div className="tags">{j.tags.map((t) => <span key={t}>{t}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
