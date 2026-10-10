import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  return (
    <section className="section page">
      <Seo title="Projects" description="Selected web projects by Vazgen Mkheyan." />
      <div className="container">
        <h1 className="section__title">View My <span>Work</span></h1>
        <div className="projects__grid grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug}>
              <Link to={`/projects/${p.slug}`} className="project__card">
                {p.image && <img src={p.image} alt={p.imageAlt ?? p.name} loading="lazy" />}
                <span className="work__number">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="project__name">{p.name}</h2>
                {p.summary ? <p>{p.summary}</p> : <p className="muted">Details coming soon.</p>}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
