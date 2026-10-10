import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, Code2, Layers, Cpu, Sparkles, Terminal as TerminalIcon } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Terminal from '../components/Terminal'
import { SITE, ABOUT } from '../data/site'
import { PROJECTS } from '../data/projects'

export default function Home() {
  const featuredProjects = PROJECTS.filter((p) => p.featured)

  return (
    <div className="home-page">
      <Seo
        title="Vazgen Mkheyan"
        description={`${SITE.greeting} ${SITE.tagline}`}
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-split">
            {/* Left Column: Typographic Hierarchy & Actions */}
            <div className="hero-content">
              <div className="hero-kicker">
                <span className="hero-kicker-dot" aria-hidden="true" />
                <span className="hero-kicker-text">The Friendly Developer Terminal</span>
              </div>

              <h1 className="hero-title">
                Hi, I’m Vazgen.
                <span className="hero-title-sub">I build things for the web.</span>
              </h1>

              <p className="hero-lead">
                I’m a junior developer passionate about building modern, responsive, and user-friendly digital experiences.
              </p>

              <div className="hero-actions">
                <Link to="/projects" className="btn btn--primary">
                  <span>Explore My Work</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link to="/contact" className="btn btn--secondary">
                  <span>Get In Touch</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>

              <div className="hero-status">
                <span className="status-indicator" aria-hidden="true" />
                <span className="hero-status-text">
                  Based in Armenia · Open to Remote Junior Roles & Projects
                </span>
              </div>
            </div>

            {/* Right Column: Functional Interactive Developer Terminal */}
            <div className="hero-terminal-wrapper">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Pillars */}
      <section className="section pillars-section">
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">Developer Focus</span>
            <h2 className="section-title">How I Approach Web Development</h2>
            <p className="section-lead">
              Solid foundations, thoughtful aesthetics, and an eagerness to learn and contribute.
            </p>
          </div>

          <div className="pillars-grid">
            <Reveal delay={100} className="pillar-card">
              <div className="pillar-card__icon">
                <Code2 size={24} />
              </div>
              <span className="pillar-card__number">01</span>
              <h3 className="pillar-card__title">Clean Code & Architecture</h3>
              <p className="pillar-card__desc">
                Writing modular, legible React components and strict TypeScript contracts. I prioritize maintainability over clever complexity.
              </p>
            </Reveal>

            <Reveal delay={200} className="pillar-card">
              <div className="pillar-card__icon">
                <Layers size={24} />
              </div>
              <span className="pillar-card__number">02</span>
              <h3 className="pillar-card__title">Responsive & Accessible UI</h3>
              <p className="pillar-card__desc">
                Building fluid layouts that render seamlessly on mobile, tablet, and desktop viewports, with WCAG contrast and keyboard navigation.
              </p>
            </Reveal>

            <Reveal delay={300} className="pillar-card">
              <div className="pillar-card__icon">
                <Cpu size={24} />
              </div>
              <span className="pillar-card__number">03</span>
              <h3 className="pillar-card__title">Growth & Full-Stack Curiosity</h3>
              <p className="pillar-card__desc">
                Actively expanding beyond frontend into backend systems—exploring Laravel, PostgreSQL, and Supabase to understand end-to-end data flows.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Selected Projects */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-kicker">Portfolio Highlights</span>
              <h2 className="section-title">Selected Projects</h2>
              <p className="section-lead">
                A selection of web apps, agency platforms, and store experiences I’ve built and designed.
              </p>
            </div>
            <Link to="/projects" className="btn btn--outline">
              <span>View All Projects</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="featured-grid">
            {featuredProjects.map((project, idx) => (
              <Reveal key={project.slug} delay={idx * 150} className="featured-card">
                {project.image && (
                  <div className="featured-card__media">
                    <img
                      src={project.image}
                      alt={project.imageAlt ?? project.name}
                      loading="lazy"
                      className="featured-card__img"
                    />
                    <div className="featured-card__badge">{project.category}</div>
                  </div>
                )}
                <div className="featured-card__content">
                  <div className="featured-card__meta">
                    <span className="featured-card__num">0{idx + 1}</span>
                    <span className="featured-card__year">{project.year}</span>
                  </div>

                  <h3 className="featured-card__title">
                    <Link to={`/projects/${project.slug}`}>
                      {project.name}
                    </Link>
                  </h3>

                  <p className="featured-card__summary">{project.summary}</p>

                  <div className="featured-card__tech">
                    {project.tech.map((t, i) => (
                      <span key={t} className="tech-item">
                        {t}
                        {i < project.tech.length - 1 && <span className="tech-sep">·</span>}
                      </span>
                    ))}
                  </div>

                  <div className="featured-card__actions">
                    <Link to={`/projects/${project.slug}`} className="featured-card__link">
                      <span>View Case Study</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="featured-card__repo"
                        aria-label={`View ${project.name} repository on GitHub`}
                      >
                        Code <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Teaser Strip */}
      <section className="section skills-strip-section">
        <div className="container">
          <div className="skills-strip-box">
            <div className="skills-strip-text">
              <span className="section-kicker">Core Toolkit</span>
              <h3 className="skills-strip-title">Technologies & Tools</h3>
              <p className="skills-strip-desc">
                React, TypeScript, JavaScript ES6+, HTML5, CSS3, Sass, Laravel, PostgreSQL, Supabase, and Figma.
              </p>
            </div>
            <div className="skills-strip-action">
              <Link to="/skills" className="btn btn--primary">
                <span>Explore Full Skills Matrix</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="section cta-section">
        <div className="container">
          <Reveal className="cta-box">
            <div className="cta-badge">
              <Sparkles size={14} /> Open for opportunities
            </div>
            <h2 className="cta-title">
              Let’s build something thoughtful together.
            </h2>
            <p className="cta-lead">
              Whether you are looking for a motivated junior developer to join your engineering team or want to discuss a new web project, my inbox is always open.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn--primary">
                <span>Start A Conversation</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/about" className="btn btn--secondary">
                <span>Read My Story</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
