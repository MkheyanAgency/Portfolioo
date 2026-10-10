import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Filter, Code2, Database, Palette, CheckCircle2 } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { SKILL_CATEGORIES } from '../data/site'

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filterOptions = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & Data' },
    { id: 'design', label: 'Design & Tools' },
  ]

  const getFilteredCategories = () => {
    if (activeFilter === 'frontend') {
      return SKILL_CATEGORIES.filter((c) => c.title.includes('Frontend'))
    }
    if (activeFilter === 'backend') {
      return SKILL_CATEGORIES.filter((c) => c.title.includes('Backend'))
    }
    if (activeFilter === 'design') {
      return SKILL_CATEGORIES.filter((c) => c.title.includes('Design'))
    }
    return SKILL_CATEGORIES
  }

  const displayedCategories = getFilteredCategories()

  return (
    <div className="page-wrapper skills-page">
      <Seo
        title="Skills & Technologies"
        description="Explore technical competencies, frontend libraries, backend databases, and design software used by Vazgen Mkheyan."
      />

      <section className="page-header">
        <div className="container">
          <div className="page-header__meta">
            <span className="section-kicker">Technical Stack</span>
          </div>
          <h1 className="page-header__title">
            Skills & <span>Technologies</span>
          </h1>
          <p className="page-header__lead">
            Tools, libraries, and frameworks I use to engineer responsive, robust, and accessible digital products.
          </p>
        </div>
      </section>

      {/* Filter Segmented Control */}
      <section className="section skills-controls-section">
        <div className="container">
          <div className="skills-filter-bar">
            <div className="skills-filter-label">
              <Filter size={15} />
              <span>Filter Category:</span>
            </div>
            <div className="skills-tabs" role="tablist">
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === opt.id}
                  className={`skills-tab-btn ${activeFilter === opt.id ? 'skills-tab-btn--active' : ''}`}
                  onClick={() => setActiveFilter(opt.id)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Groups */}
      <section className="section skills-content-section">
        <div className="container">
          <div className="skills-groups-wrapper">
            {displayedCategories.map((cat, groupIdx) => (
              <div key={cat.title} className="skills-group-block">
                <div className="skills-group-header">
                  <div>
                    <span className="skills-group-badge">{cat.badge}</span>
                    <h2 className="skills-group-title">{cat.title}</h2>
                    <p className="skills-group-desc">{cat.description}</p>
                  </div>
                </div>

                <div className="skills-cards-grid">
                  {cat.items.map((skill, itemIdx) => (
                    <Reveal
                      key={skill.name}
                      delay={itemIdx * 50}
                      className="skill-card"
                    >
                      <div className="skill-card__header">
                        <div className="skill-card__icon-wrap">
                          <img
                            src={skill.icon}
                            alt=""
                            aria-hidden="true"
                            className="skill-card__icon"
                            loading="lazy"
                            onError={(e) => {
                              // If image fails to load, hide broken image icon
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                        </div>
                        <div className="skill-card__meta">
                          <span className="skill-card__level">{skill.level}</span>
                          <h3 className="skill-card__name">{skill.name}</h3>
                        </div>
                      </div>

                      <p className="skill-card__desc">{skill.description}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="section skills-quote-section">
        <div className="container">
          <Reveal className="skills-quote-card">
            <div className="skills-quote-badge">
              <Sparkles size={14} /> Lifelong Learning
            </div>
            <h2 className="skills-quote-title">
              “Frameworks come and go. Strong fundamentals, clean communication, and disciplined curiosity endure.”
            </h2>
            <p className="skills-quote-lead">
              While React and TypeScript are my primary day-to-day tools, I continually invest in the foundational mechanics of the browser: semantic DOM, layout performance, and accessible web standards.
            </p>
            <div className="skills-quote-action">
              <Link to="/projects" className="btn btn--primary">
                <span>See These Skills In Action</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
