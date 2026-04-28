import SectionHead from './SectionHead.jsx'
import { experience } from '../data.js'

export default function Timeline() {
  return (
    <section id="atuacao">
      <SectionHead num="02" label="Atuação">
        Trajetória profissional e <b>acadêmica</b>.
      </SectionHead>
      <div className="tl">
        {experience.map((row, i) => (
          <div className="tl-row" key={i}>
            <div className="tl-when">
              {row.when} {row.now && <span className="now">atual</span>}
            </div>
            <div>
              <div className="tl-role">{row.role}</div>
              <div className="tl-org">{row.org}</div>
            </div>
            <div className="tl-meta">
              {row.metaTop}<br />{row.metaBottom}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
