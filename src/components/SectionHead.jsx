export default function SectionHead({ num, label, children }) {
  return (
    <div className="sec-head">
      <div className="sec-tag">§ {num} / {label}</div>
      <h2 className="sec-title">{children}</h2>
    </div>
  )
}
