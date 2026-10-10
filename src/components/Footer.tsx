import { Link } from 'react-router-dom'
import { Terminal, Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './Icons'
import { SITE, CONTACT_LINKS } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__brand-block">
            <Link to="/" className="footer__brand">
              <span className="footer__brand-icon">
                <Terminal size={15} />
              </span>
              <span className="footer__brand-title">{SITE.name}</span>
            </Link>
            <p className="footer__tagline">{SITE.footerLine}</p>
            <div className="footer__availability">
              <span className="status-indicator" aria-hidden="true" />
              <span>Open to junior developer roles & collaborations</span>
            </div>
          </div>

          <div className="footer__nav-group">
            <h3 className="footer__group-title">Navigation</h3>
            <ul className="footer__links-list">
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/about" className="footer__link">About</Link></li>
              <li><Link to="/skills" className="footer__link">Skills</Link></li>
              <li><Link to="/projects" className="footer__link">Projects</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__nav-group">
            <h3 className="footer__group-title">Connect</h3>
            <ul className="footer__links-list">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="footer__link footer__link--icon"
                >
                  <Mail size={14} />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link footer__link--icon"
                >
                  <GithubIcon size={14} />
                  <span>GitHub Profile</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} {SITE.name}. Built with React, TypeScript & Vite.
          </p>
          <div className="footer__subtext">
            <span>The Friendly Developer Terminal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
