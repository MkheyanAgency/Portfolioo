import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { ABOUT } from '../data/site'

export default function About() {
  return (
    <section className="section page">
      <Seo title="About" description="About Vazgen Mkheyan, a junior web developer building modern, responsive, and user-friendly websites." />
      <div className="container">
        <h1 className="section__title">About <span>Me</span></h1>
        <Reveal className="about__content">
          <p className="about__title">{ABOUT.title}</p>
          {ABOUT.paragraphs.map((t) => <p key={t} className="about__description">{t}</p>)}
          <Link to="/contact" className="button">Contact me</Link>
        </Reveal>
      </div>
    </section>
  )
}
