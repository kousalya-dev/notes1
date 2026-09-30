import { impact } from '../data.js'
import Reveal from './Reveal.jsx'
import CountUp from './CountUp.jsx'
import { Head } from './About.jsx'
import { tilt, untilt } from '../hooks.js'

export default function Impact() {
  return (
    <section id="impact" className="section container">
      <Head n="02 / Impact" title="Numbers that moved" sub="Measured results from production work at Unifo." />
      <div className="bento">
        {impact.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className={`bcard ${s.tone} b${i} hoverable`} onPointerMove={tilt} onPointerLeave={untilt}>
            <div className="big"><CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} /></div>
            <h3>{s.label}</h3>
            <p>{s.note}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
