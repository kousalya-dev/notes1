import { skills } from '../data.js'
import Reveal from './Reveal.jsx'
import { Head } from './About.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <Head n="04 / Stack" title="Tools of the trade" />
      <div className="skills">
        {skills.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 90} className="sgroup">
            <h3><span className="mono">0{i + 1}</span>{g.title}</h3>
            <div className="tags">{g.items.map((t) => <span key={t} className="hoverable">{t}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
