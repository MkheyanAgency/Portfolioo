import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import NotFound from './NotFound'
import { PROJECTS } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const i = PROJECTS.findIndex((p) => p.slug === slug)
  if (i < 0) return <NotFound />
  const p = PROJECTS[i]
  const next = PROJECTS[(i + 1) % PROJECTS.length]
  return (
    <section className="section page">
      <Seo title={p.name} description={p.summary ?? `${p.name} — a project by Vazgen Mkheyan.`} />
      <div className="container detail">
        <Link to="/projects" className="back"><i className="ri-arrow-left-line" aria-hidden="true" /> All projects</Link>
        <h1 className="section__title detail__title">{p.name}</h1>
        {p.image && <img className="detail__img" src={p.image} alt={p.imageAlt ?? p.name} />}
        {p.summary ? <p className="about__description">{p.summary}</p> : <p className="about__description">The case study for this project has not been added yet.</p>}
        {p.tech && p.tech.length > 0 && <ul className="skills__list">{p.tech.map((t) => <li key={t} className="skills__item">{t}</li>)}</ul>}
        <div className="home__buttons">
          {p.url && <a className="button" href={p.url} target="_blank" rel="noopener noreferrer">Visit site <i className="ri-arrow-right-up-line" aria-hidden="true" /></a>}
          {p.repo && <a className="button button--ghost" href={p.repo} target="_blank" rel="noopener noreferrer">Source code</a>}
          <Link className="button button--ghost" to={`/projects/${next.slug}`}>Next: {next.name}</Link>
        </div>
      </div>
    </section>
  )
}
