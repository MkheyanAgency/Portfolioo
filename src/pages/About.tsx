import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Code2, Terminal, CheckCircle2, HeartHandshake, Compass } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { ABOUT, SITE } from '../data/site'

export default function About() {
  return (
    <div className="page-wrapper about-page">
      <Seo
        title="About Me"
        description="Learn about Vazgen Mkheyan, a junior web developer building modern, accessible, and responsive web applications."
      />

      <section className="page-header">
        <div className="container">
          <div className="page-header__meta">
            <span className="section-kicker">Developer Profile</span>
          </div>
          <h1 className="page-header__title">
            About <span>Vazgen Mkheyan</span>
          </h1>
          <p className="page-header__lead">
            {ABOUT.title}
          </p>
        </div>
      </section>

      <section className="section about-main-section">
        <div className="container">
          <div className="about-grid">
            {/* Left Column: Narrative story */}
            <div className="about-story">
              <Reveal className="about-bio-card">
                <h2 className="about-story__heading">Who I Am & What Drives Me</h2>
                <p className="about-story__lead">{ABOUT.lead}</p>
                {ABOUT.paragraphs.map((p, i) => (
                  <p key={i} className="about-story__paragraph">
                    {p}
                  </p>
                ))}
              </Reveal>

              {/* Core Principles */}
              <div className="about-principles">
                <h2 className="about-story__heading mt-6">Core Engineering Values</h2>
                <div className="principles-list">
                  {ABOUT.pillars.map((pillar) => (
                    <Reveal key={pillar.num} className="principle-item">
                      <div className="principle-item__num">{pillar.num}</div>
                      <div className="principle-item__content">
                        <h3 className="principle-item__title">{pillar.title}</h3>
                        <p className="principle-item__desc">{pillar.description}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Workflow, Quick Facts & Status */}
            <aside className="about-sidebar">
              {/* Profile Card */}
              <Reveal className="sidebar-card profile-summary-card">
                <div className="profile-badge">
                  <div className="profile-badge__icon">
                    <Terminal size={22} />
                  </div>
                  <div>
                    <h3 className="profile-badge__name">{SITE.name}</h3>
                    <p className="profile-badge__role">{SITE.role}</p>
                  </div>
                </div>

                <div className="profile-details-list">
                  <div className="profile-detail-row">
                    <span className="profile-detail-label">Location:</span>
                    <span className="profile-detail-value">{SITE.location}</span>
                  </div>
                  <div className="profile-detail-row">
                    <span className="profile-detail-label">Status:</span>
                    <span className="profile-detail-value text-green">Available</span>
                  </div>
                  <div className="profile-detail-row">
                    <span className="profile-detail-label">Focus:</span>
                    <span className="profile-detail-value">React, TypeScript & Web Standards</span>
                  </div>
                  <div className="profile-detail-row">
                    <span className="profile-detail-label">Email:</span>
                    <a href={`mailto:${SITE.email}`} className="profile-detail-link">
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className="profile-card-actions">
                  <Link to="/contact" className="btn btn--primary btn--block">
                    <span>Contact Me</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>

              {/* Tools & Workflow Card */}
              <Reveal delay={150} className="sidebar-card workflow-card">
                <h3 className="sidebar-card__title">
                  <Compass size={16} /> Workflow & Environment
                </h3>
                <ul className="workflow-list">
                  {ABOUT.workflow.map((w) => (
                    <li key={w.label} className="workflow-item">
                      <span className="workflow-item__label">{w.label}</span>
                      <span className="workflow-item__val">{w.val}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* GitHub Link Card */}
              <Reveal delay={250} className="sidebar-card github-card">
                <h3 className="sidebar-card__title">Code Repositories</h3>
                <p className="text-secondary text-sm mb-3">
                  Check out active development repositories, experiment sandboxes, and project commits.
                </p>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline btn--block"
                >
                  <span>Visit GitHub Profile</span>
                  <ArrowUpRight size={14} />
                </a>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="section about-bottom-cta">
        <div className="container">
          <div className="cta-split-card">
            <div>
              <h2 className="cta-split-title">Ready to see the work?</h2>
              <p className="cta-split-desc">
                Browse through real projects, live applications, and technical writeups.
              </p>
            </div>
            <div className="cta-split-buttons">
              <Link to="/projects" className="btn btn--primary">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/skills" className="btn btn--secondary">
                <span>Check Technical Skills</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
