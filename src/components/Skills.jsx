import SectionHead from './SectionHead.jsx'
import { studyAreas, languages, formacao } from '../data.js'

function Bar({ filled, total = 5 }) {
  return (
    <span className="area-bar">
      {Array.from({ length: total }).map((_, i) => (
        <i key={i} className={i < filled ? 'on' : ''} />
      ))}
    </span>
  )
}

export default function Skills() {
  return (
    <section>
      <SectionHead num="05" label="Áreas & Idiomas">
        Campos de estudo e <b>fluências</b>.
      </SectionHead>

      <div className="skills">
        <div>
          <h4>Áreas de Estudo</h4>
          <div className="areas">
            {studyAreas.map((a) => (
              <div className="area" key={a.name}>
                <span className="area-name">{a.name}</span>
                <Bar filled={a.level} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4>Idiomas</h4>
          <div className="langs">
            {languages.map((l) => (
              <div className="lang" key={l.name}>
                <span className="lang-name">{l.name}</span>
                <span className="lang-level">{l.level}</span>
                <Bar filled={l.bars} />
              </div>
            ))}
          </div>

          <h4 style={{ marginTop: 40 }}>Formação Acadêmica</h4>
          <div className="langs">
            {formacao.map((f) => (
              <div className="lang simple" key={f.title}>
                <span className="lang-name">{f.title}</span>
                <span className="lang-level">{f.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
