import { useState } from 'react'

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <header className="hero">
      <div>
        <div className="eyebrow">
          Pesquisadora · Mestranda em Administração · UFCA
        </div>
        <h1>
          Marília Ruana<br />
          <span>Nascimento Moura</span>
        </h1>
      </div>

      <aside className="hero-side">
        {imgError ? (
          <div className="hero-portrait placeholder">
            Salvar foto em<br />public/marilia.jpg
          </div>
        ) : (
          <div className="hero-portrait">
            <img
              src={`${import.meta.env.BASE_URL}marilia.jpg`}
              alt="Marília Ruana Nascimento Moura"
              onError={() => setImgError(true)}
            />
          </div>
        )}

        <div className="hero-caption">
          <span className="role">Linhas de pesquisa</span>
          Gestão Social, Bem Viver dos povos originários, Políticas Públicas e Economia Solidária.
          <div className="where">Juazeiro do Norte / CE · Brasil</div>
        </div>
      </aside>
    </header>
  )
}
