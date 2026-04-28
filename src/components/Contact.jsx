import { contact } from '../data.js'

export default function Contact() {
  return (
    <>
      <footer id="contato" className="contact">
        <h2>Contato</h2>
        <div className="contact-info">
          <span className="label">E-mail</span>
          {contact.email}
          <span className="label">Telefone</span>
          {contact.phone}
          <span className="label">Endereço</span>
          {contact.address.map((line, i) => (
            <span key={i}>
              {line}
              {i < contact.address.length - 1 && <br />}
            </span>
          ))}
        </div>
      </footer>

      <div className="meta-foot">
        <span>© 2026 — Marília Ruana Nascimento Moura</span>
        <span>UFCA · ITEPS</span>
      </div>
    </>
  )
}
