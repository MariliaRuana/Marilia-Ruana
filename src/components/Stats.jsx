import { stats } from '../data.js'

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s, i) => (
        <div className="stat" key={i}>
          <div className="num">
            {s.num}
            {s.sup && <sup>{s.sup}</sup>}
          </div>
          <div className="label">
            {s.label.map((line, j) => (
              <span key={j}>
                {line}
                {j < s.label.length - 1 && <br />}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
