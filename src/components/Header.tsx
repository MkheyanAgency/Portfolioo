import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { SITE } from '../data/site'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY >= 50)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [])
  return (
    <header className={`header${scrolled ? ' blur-header' : ''}`} id="header">
      <nav className="nav container" aria-label="Primary">
        <Link to="/" className="nav__logo">{SITE.name}</Link>
        <div className={`nav__menu${open ? ' show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={({ isActive }) => `nav__link${isActive ? ' active-link' : ''}`}>{l.label}</NavLink>
              </li>
            ))}
            <li><NavLink to="/contact" className="nav__contact">Contact me</NavLink></li>
          </ul>
          <button className="nav__close" aria-label="Close menu" onClick={() => setOpen(false)}><i className="ri-close-large-line" aria-hidden="true" /></button>
        </div>
        <button className="nav__toggle" aria-label="Open menu" aria-expanded={open} aria-controls="nav-menu" onClick={() => setOpen(true)}>
          <i className="ri-menu-line" aria-hidden="true" />
        </button>
      </nav>
    </header>
  )
}
