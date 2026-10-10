import { Link, useLocation } from 'react-router-dom'
import { Terminal, Home, ArrowLeft, FolderCode, Sparkles } from 'lucide-react'
import Seo from '../components/Seo'

export default function NotFound() {
  const { pathname } = useLocation()

  return (
    <div className="page-wrapper not-found-page">
      <Seo
        title="404 — Route Not Found"
        description="The requested page could not be found."
      />

      <div className="container not-found-container">
        <div className="not-found-card">
          <div className="not-found-terminal-header">
            <div className="terminal__controls" aria-hidden="true">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--amber" />
              <span className="terminal__dot terminal__dot--green" />
            </div>
            <div className="not-found-terminal-title">
              <Terminal size={13} />
              <span>error_handler.sh (404)</span>
            </div>
          </div>

          <div className="not-found-terminal-body">
            <div className="not-found-line">
              <span className="terminal__prompt">vazgen@dev:~$</span>
              <span className="not-found-cmd">lookup {pathname}</span>
            </div>
            <p className="not-found-err">
              Error 404: The specified path <code>{pathname}</code> does not exist on this portfolio server.
            </p>
            <p className="not-found-sub">
              Possible reasons: broken link, mistyped URL, or experimental route moved to production.
            </p>
          </div>

          <div className="not-found-footer">
            <h2 className="not-found-heading">Where would you like to navigate?</h2>
            <div className="not-found-actions">
              <Link to="/" className="btn btn--primary">
                <Home size={15} />
                <span>Return to Home</span>
              </Link>
              <Link to="/projects" className="btn btn--secondary">
                <FolderCode size={15} />
                <span>Explore Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
