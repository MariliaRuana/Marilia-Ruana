import TopBar from './components/TopBar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Timeline from './components/Timeline.jsx'
import Publications from './components/Publications.jsx'
import Courses from './components/Courses.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="wrap">
      <TopBar />
      <Hero />
      <Stats />
      <About />
      <Timeline />
      <Publications />
      <Courses />
      <Skills />
      <Contact />
    </div>
  )
}
