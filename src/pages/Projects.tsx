import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Search, Filter, Layers, Code, Sparkles, FolderGit2 } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { PROJECTS, type Project } from '../data/projects'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const categories = ['All', 'Agency & Portfolio', 'Web Application', 'E-Commerce', 'Media & Community']

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query) ||
        p.tech.some((t) => t.toLowerCase().includes(query))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <div className="page-wrapper projects-page">
      <Seo
        title="Projects & Work"
        description="Explore web applications, agency platforms, and interactive interfaces built by Vazgen Mkheyan."
      />

      <section className="page-header">
        <div className="container">
          <div className="page-header__meta">
            <span className="section-kicker">Featured Portfolio</span>
          </div>
          <h1 className="page-header__title">
            Selected <span>Projects</span>
          </h1>
          <p className="page-header__lead">
            A showcase of web applications, client solutions, and experimental interfaces built with React, TypeScript, and modern styling.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="section projects-filter-section">
        <div className="container">
          <div className="projects-controls-card">
            {/* Search Input */}
            <div className="projects-search-wrap">
              <Search size={16} className="projects-search-icon" />
              <input
                type="text"
                className="projects-search-input"
                placeholder="Search by project name or technology (e.g. React, TypeScript)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search projects"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="projects-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="projects-categories" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`projects-cat-btn ${activeCategory === cat ? 'projects-cat-btn--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="projects-count">
              Showing {filteredProjects.length} of {PROJECTS.length} projects
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section projects-grid-section">
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div className="projects-empty-state">
              <FolderGit2 size={40} className="projects-empty-icon" />
              <h3 className="projects-empty-title">No matching projects found</h3>
              <p className="projects-empty-lead">
                No projects matched your search criteria for “{searchQuery}”. Try checking for typos or resetting your filters.
              </p>
              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => {
                  setActiveCategory('All')
                  setSearchQuery('')
                }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map((project, idx) => (
                <Reveal key={project.slug} delay={idx * 100} className="project-grid-card">
                  {project.image ? (
                    <div className="project-grid-card__media">
                      <img
                        src={project.image}
                        alt={project.imageAlt ?? project.name}
                        loading="lazy"
                        className="project-grid-card__img"
                      />
                      <span className="project-grid-card__badge">{project.category}</span>
                    </div>
                  ) : (
                    <div className="project-grid-card__media project-grid-card__media--placeholder">
                      <div className="project-placeholder-pattern" />
                      <div className="project-placeholder-content">
                        <Code size={24} />
                        <span className="project-placeholder-title">{project.name}</span>
                      </div>
                      <span className="project-grid-card__badge">{project.category}</span>
                    </div>
                  )}

                  <div className="project-grid-card__body">
                    <div className="project-grid-card__meta">
                      <span className="project-grid-card__num">0{idx + 1}</span>
                      <span className="project-grid-card__year">{project.year}</span>
                    </div>

                    <h2 className="project-grid-card__title">
                      <Link to={`/projects/${project.slug}`}>
                        {project.name}
                      </Link>
                    </h2>

                    <p className="project-grid-card__summary">{project.summary}</p>

                    <div className="project-grid-card__tech">
                      {project.tech.map((t, i) => (
                        <span key={t} className="tech-item">
                          {t}
                          {i < project.tech.length - 1 && <span className="tech-sep">·</span>}
                        </span>
                      ))}
                    </div>

                    <div className="project-grid-card__footer">
                      <Link to={`/projects/${project.slug}`} className="project-grid-card__link">
                        <span>Case Study</span>
                        <ArrowRight size={14} />
                      </Link>

                      <div className="project-grid-card__external-links">
                        {project.repo && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-ext-btn"
                            aria-label={`View ${project.name} source code on GitHub`}
                          >
                            <span>Code</span>
                            <ArrowUpRight size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Collaboration Callout */}
      <section className="section projects-footer-cta">
        <div className="container">
          <div className="projects-cta-card">
            <h3 className="projects-cta-title">Looking for something specific?</h3>
            <p className="projects-cta-desc">
              I’m constantly experimenting with new frontend interfaces and backend patterns. Feel free to reach out to review code samples or discuss collaboration.
            </p>
            <Link to="/contact" className="btn btn--primary">
              <span>Contact Me</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
