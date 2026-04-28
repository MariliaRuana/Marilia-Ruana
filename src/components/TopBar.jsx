import { navLinks } from '../data.js'

export default function TopBar() {
  return (
    <nav className="nav">
      <span className="nav-mark">M</span>
      <div className="nav-links">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>
    </nav>
  )
}
