import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { SKILLS } from '../data/site'

export default function Skills() {
  return (
    <section className="section page">
      <Seo title="Skills" description="Technologies Vazgen Mkheyan uses to build modern, responsive web experiences." />
      <div className="container">
        <h1 className="section__title">My <span>Skills</span></h1>
        <div className="skills__container grid">
          {SKILLS.map((g) => (
            <Reveal key={g.group} className="skills__card">
              <h2 className="skills__title">{g.group}</h2>
              <ul className="skills__list">
                {g.items.map((s) => <li key={s} className="skills__item">{s}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
