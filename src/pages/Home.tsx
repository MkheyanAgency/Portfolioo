import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Typed from 'typed.js'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { SITE } from '../data/site'
import { PROJECTS } from '../data/projects'

export default function Home() {
  const typedRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = typedRef.current
    if (!el) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = SITE.roles[1]; return }
    const t = new Typed(el, { strings: SITE.roles, typeSpeed: 70, backSpeed: 40, backDelay: 1600, loop: true })
    return () => t.destroy()
  }, [])
  return (
    <>
      <Seo description={`${SITE.greeting}. ${SITE.tagline}`} />
      <section className="home section">
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__subtitle">{SITE.greeting}</h1>
            <p className="home__title">
              <span className="sr-only">{SITE.roles.join(' and ')}</span>
              <span aria-hidden="true"><span ref={typedRef} /></span>
            </p>
            <p className="home__description">{SITE.tagline}</p>
            <div className="home__buttons">
              <Link to="/projects" className="button">View my work <i className="ri-arrow-right-up-line" aria-hidden="true" /></Link>
              <Link to="/contact" className="button button--ghost">Contact me</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section__title">Selected <span>Projects</span></h2>
          <Reveal>
            <ul className="work__list">
              {PROJECTS.map((p, i) => (
                <li key={p.slug}>
                  <Link to={`/projects/${p.slug}`} className="work__item">
                    <span className="work__number">{String(i + 1).padStart(2, '0')}</span>
                    <span className="work__name">{p.name}</span>
                    <i className="ri-arrow-right-up-line" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  )
}
