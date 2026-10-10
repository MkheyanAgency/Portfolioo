import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <section className="section page notfound">
      <Seo title="Page not found" description="The page you are looking for does not exist." />
      <div className="container">
        <p className="notfound__code">404</p>
        <h1 className="section__title">Page not <span>found</span></h1>
        <p className="about__description">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="button">Back home</Link>
      </div>
    </section>
  )
}
