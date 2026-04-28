import SectionHead from './SectionHead.jsx'
import { publications } from '../data.js'

export default function Publications() {
  return (
    <section id="publicacoes">
      <SectionHead num="03" label="Publicações">
        Autoria, livros e <b>premiações</b>.
      </SectionHead>
      <div className="pubs">
        {publications.map((pub, i) => (
          <article className="pub" key={i}>
            <div className="pub-kind">{pub.kind}</div>
            <h3>{pub.title}</h3>
            <p>{pub.description}</p>
            {pub.award && <span className="award">{pub.award}</span>}
          </article>
        ))}
      </div>
    </section>
  )
}
