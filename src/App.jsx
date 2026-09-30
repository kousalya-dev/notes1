import Preloader from './components/Preloader.jsx'
import Background from './components/Background.jsx'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Impact from './components/Impact.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Preloader />
      <Background />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Impact />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
