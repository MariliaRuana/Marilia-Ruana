import SectionHead from './SectionHead.jsx'
import { courses } from '../data.js'

export default function Courses() {
  return (
    <section id="formacao">
      <SectionHead num="04" label="Formação Complementar">
        Cursos, extensões e <b>congressos</b>.
      </SectionHead>
      <div className="courses">
        {courses.map((c, i) => (
          <div className="course" key={i}>
            <div className="c-year">{c.year}</div>
            <div className="c-title">{c.title}</div>
            <div className="c-org">{c.org}</div>
            <div className="c-load">{c.load}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
