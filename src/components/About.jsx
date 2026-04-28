import SectionHead from './SectionHead.jsx'
import { aboutBullets } from '../data.js'

export default function About() {
  return (
    <section id="sobre">
      <SectionHead num="01" label="Sobre">
        Pesquisa em <b>gestão social</b>, povos originários e bem viver.
      </SectionHead>
      <div className="about">
        <ul className="about-aside">
          {aboutBullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="about-body">
          <p>
            Bacharela em Administração Pública e Gestão Social pela{' '}
            <strong>Universidade Federal do Cariri (UFCA)</strong> e mestranda em Administração
            pela mesma instituição. Atua como pesquisadora pela{' '}
            <strong>Incubadora Tecnológica de Empreendimentos Populares e Solidários (ITEPS)</strong>.
          </p>
          <p>
            É co-autora do livro{' '}
            <strong>"Entre a Resistência e os Encantos: Diálogos sobre Gestão Social e Bem Viver
            com Povos Tradicionais"</strong>{' '}
            e autora de artigos científicos sobre o Projeto Tessituras, que recebeu o prêmio
            principal do 3º Congresso Científico Internacional da RedeCT.
          </p>
          <p>
            Atualmente integra a produção do documentário{' '}
            <strong>"Cultura e Memória do Povo Truká"</strong>, em parceria com a Comunidade
            Indígena Truká. Tem experiência em Sociologia e Ciências Sociais, com ênfase em Bem
            Viver Indígena, Gestão Social, Políticas Públicas, Economia Solidária e Desenvolvimento
            Sustentável.
          </p>
        </div>
      </div>
    </section>
  )
}
