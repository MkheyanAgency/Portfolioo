import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Code, CheckCircle2, Layers, Calendar, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import Seo from '../components/Seo'
import NotFound from './NotFound'
import Reveal from '../components/Reveal'
import { PROJECTS } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug)

  if (currentIndex === -1) {
    return <NotFound />
  }

  const project = PROJECTS[currentIndex]
  const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length
  const nextIndex = (currentIndex + 1) % PROJECTS.length
  const prevProject = PROJECTS[prevIndex]
  const nextProject = PROJECTS[nextIndex]

  return (
    <div className="page-wrapper project-detail-page">
      <Seo
        title={project.name}
        description={project.summary}
      />

      {/* Detail Header */}
      <section className="project-detail-header">
        <div className="container">
          <Link to="/projects" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </Link>

          <div className="project-detail-header__content">
            <div className="project-detail-meta">
              <span className="project-detail-badge">{project.category}</span>
              <span className="project-detail-year">Completed {project.year}</span>
            </div>

            <h1 className="project-detail-title">{project.name}</h1>
            <p className="project-detail-tagline">{project.tagline}</p>

            <div className="project-detail-actions">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <GithubIcon size={16} />
                  <span>View Repository</span>
                  <ArrowUpRight size={14} />
                </a>
              )}
              <Link to="/contact" className="btn btn--secondary">
                <span>Inquire About This Project</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Media Hero Showcase */}
      {project.image && (
        <section className="project-detail-media-section">
          <div className="container">
            <Reveal className="project-detail-media-frame">
              <img
                src={project.image}
                alt={project.imageAlt ?? `${project.name} preview showcase`}
                className="project-detail-hero-img"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* Main Content Grid: Narrative & Specs */}
      <section className="section project-detail-body-section">
        <div className="container">
          <div className="project-detail-grid">
            {/* Left Column: Problem, Solution, Highlights */}
            <div className="project-detail-main">
              {/* Overview & Problem/Solution */}
              <div className="detail-card">
                <h2 className="detail-card__heading">Project Overview</h2>
                <p className="detail-card__text">{project.summary}</p>

                {project.problem && (
                  <div className="detail-card__sub-block mt-4">
                    <h3 className="detail-card__sub-heading">The Challenge</h3>
                    <p className="detail-card__text">{project.problem}</p>
                  </div>
                )}

                {project.solution && (
                  <div className="detail-card__sub-block mt-4">
                    <h3 className="detail-card__sub-heading">Technical Solution</h3>
                    <p className="detail-card__text">{project.solution}</p>
                  </div>
                )}
              </div>

              {/* Implementation Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="detail-card mt-6">
                  <h2 className="detail-card__heading">Key Implementation Highlights</h2>
                  <ul className="highlights-list">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="highlight-item">
                        <CheckCircle2 size={16} className="highlight-icon" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Tech Specs & Meta Card */}
            <aside className="project-detail-sidebar">
              <div className="detail-card sidebar-spec-card">
                <h3 className="sidebar-spec-title">Technology Stack</h3>
                <div className="sidebar-tech-list">
                  {project.tech.map((t) => (
                    <div key={t} className="sidebar-tech-item">
                      <Code size={13} className="text-blue" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                <div className="sidebar-meta-divider" />

                <div className="sidebar-meta-item">
                  <span className="sidebar-meta-label">Project Role:</span>
                  <span className="sidebar-meta-value">Frontend & UI Design</span>
                </div>
                <div className="sidebar-meta-item">
                  <span className="sidebar-meta-label">Category:</span>
                  <span className="sidebar-meta-value">{project.category}</span>
                </div>
                <div className="sidebar-meta-item">
                  <span className="sidebar-meta-label">Status:</span>
                  <span className="sidebar-meta-value text-green">Production Complete</span>
                </div>
              </div>

              {/* Ask Question Card */}
              <div className="detail-card sidebar-contact-card mt-4">
                <h3 className="sidebar-spec-title">Have questions about this build?</h3>
                <p className="text-secondary text-sm mb-3">
                  I’m happy to discuss architecture decisions, component trees, or challenges encountered.
                </p>
                <Link to="/contact" className="btn btn--outline btn--block">
                  <span>Send A Message</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Prev / Next Pagination */}
      <section className="section project-pagination-section">
        <div className="container">
          <div className="project-pagination-grid">
            <Link to={`/projects/${prevProject.slug}`} className="pagination-card pagination-card--prev">
              <span className="pagination-direction">
                <ArrowLeft size={14} /> Previous Project
              </span>
              <span className="pagination-title">{prevProject.name}</span>
              <span className="pagination-category">{prevProject.category}</span>
            </Link>

            <Link to={`/projects/${nextProject.slug}`} className="pagination-card pagination-card--next">
              <span className="pagination-direction">
                Next Project <ArrowRight size={14} />
              </span>
              <span className="pagination-title">{nextProject.name}</span>
              <span className="pagination-category">{nextProject.category}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
