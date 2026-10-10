import { Link } from 'react-router-dom'
import { CONTACT, SITE } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">{SITE.footerLine}</h2>
        <ul className="footer__links">
          <li><Link to="/projects" className="footer__link">Projects</Link></li>
          <li><Link to="/about" className="footer__link">About</Link></li>
          <li><Link to="/skills" className="footer__link">Skills</Link></li>
          <li><Link to="/contact" className="footer__link">Contact</Link></li>
        </ul>
        {CONTACT.length > 0 && (
          <ul className="footer__social">
            {CONTACT.map((c) => (
              <li key={c.label}><a className="footer__social-link" href={c.href} aria-label={c.label} target="_blank" rel="noopener noreferrer"><i className={c.icon} aria-hidden="true" /></a></li>
            ))}
          </ul>
        )}
        <span className="footer__copy">&copy; {new Date().getFullYear()} {SITE.name}</span>
      </div>
    </footer>
  )
}
