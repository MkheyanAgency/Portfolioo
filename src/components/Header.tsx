import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react'
import { SITE } from '../data/site'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 24)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} id="header">
      <div className="header__container container">
        {/* Zone 1: Brand wordmark */}
        <Link to="/" className="header__brand" aria-label="Vazgen Mkheyan - Home">
          <span className="header__brand-icon" aria-hidden="true">
            <Terminal size={15} />
          </span>
          <span className="header__brand-name">{SITE.name}</span>
          <span className="header__brand-tag">dev</span>
        </Link>

        {/* Zone 2: Nav links */}
        <nav className="header__nav" aria-label="Main Navigation">
          <ul className="header__nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Zone 3: Primary action & mobile trigger */}
        <div className="header__actions">
          <Link to="/contact" className="btn btn--primary btn--header">
            <span>Get In Touch</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="header__menu-toggle"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer ${open ? 'mobile-drawer--open' : ''}`}
        aria-hidden={!open}
      >
        <div className="mobile-drawer__backdrop" onClick={() => setOpen(false)} />
        <div className="mobile-drawer__content">
          <div className="mobile-drawer__header">
            <div className="header__brand">
              <span className="header__brand-icon">
                <Terminal size={15} />
              </span>
              <span className="header__brand-name">{SITE.name}</span>
            </div>
            <button
              type="button"
              className="mobile-drawer__close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          <ul className="mobile-drawer__list">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `mobile-drawer__link ${isActive ? 'mobile-drawer__link--active' : ''}`
                  }
                  onClick={() => setOpen(false)}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={16} />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer__footer">
            <p className="mobile-drawer__status">
              <span className="status-dot" aria-hidden="true" />
              {SITE.status}
            </p>
            <Link
              to="/contact"
              className="btn btn--primary btn--block"
              onClick={() => setOpen(false)}
            >
              Start A Conversation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
