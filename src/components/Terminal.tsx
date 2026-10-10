import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Trash2, ArrowUpRight } from 'lucide-react'
import { SITE, ABOUT, SKILL_CATEGORIES } from '../data/site'
import { PROJECTS } from '../data/projects'

interface HistoryEntry {
  id: string
  command: string
  output: React.ReactNode
}

const COMMAND_LIST = ['help', 'about', 'skills', 'projects', 'contact', 'clear', 'whoami', 'date', 'repo']

export default function Terminal() {
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="terminal__welcome">
          <p className="terminal__green">
            ✦ Vazgen Mkheyan — Developer Shell [Version 1.0.4]
          </p>
          <p className="terminal__muted">
            Interactive console ready. Type <span className="terminal__highlight">help</span> or click suggestions below to explore.
          </p>
        </div>
      ),
    },
  ])
  const [cmdIndex, setCmdIndex] = useState<number>(-1)
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalBodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }, [history])

  const executeCommand = (cmdText: string) => {
    const raw = cmdText.trim()
    if (!raw) return

    const parts = raw.toLowerCase().split(' ')
    const primary = parts[0]

    setCmdHistory((prev) => [...prev, raw])
    setCmdIndex(-1)

    let outputNode: React.ReactNode

    switch (primary) {
      case 'help':
        outputNode = (
          <div className="terminal__output-block">
            <p className="terminal__bold text-amber">Available commands:</p>
            <div className="terminal__help-grid">
              <div><span className="terminal__cmd">about</span></div>
              <div>Who Vazgen is, his background, and principles</div>
              <div><span className="terminal__cmd">skills</span></div>
              <div>Categorized technical competencies & tools</div>
              <div><span className="terminal__cmd">projects</span></div>
              <div>Selected portfolio projects with direct links</div>
              <div><span className="terminal__cmd">contact</span></div>
              <div>Email address and GitHub profile details</div>
              <div><span className="terminal__cmd">whoami</span></div>
              <div>Display current guest user identity</div>
              <div><span className="terminal__cmd">date</span></div>
              <div>Print current UTC timestamp</div>
              <div><span className="terminal__cmd">repo</span></div>
              <div>View repository source information</div>
              <div><span className="terminal__cmd">clear</span></div>
              <div>Reset and clear the terminal output buffer</div>
            </div>
          </div>
        )
        break

      case 'about':
        outputNode = (
          <div className="terminal__output-block">
            <p className="terminal__bold text-blue">Vazgen Mkheyan — Junior Developer</p>
            <p className="terminal__text">{SITE.tagline}</p>
            <p className="terminal__text mt-1">{ABOUT.lead}</p>
            <div className="terminal__quick-nav mt-2">
              <Link to="/about" className="terminal__link">
                Read full About page <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        )
        break

      case 'skills':
        outputNode = (
          <div className="terminal__output-block">
            <p className="terminal__bold text-green">Technical Stack Overview:</p>
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.title} className="terminal__skill-line">
                <span className="terminal__skill-group">{cat.title}:</span>{' '}
                <span className="terminal__text">
                  {cat.items.map((i) => i.name).join(' · ')}
                </span>
              </div>
            ))}
            <div className="terminal__quick-nav mt-2">
              <Link to="/skills" className="terminal__link">
                View interactive Skills page <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        )
        break

      case 'projects':
        outputNode = (
          <div className="terminal__output-block">
            <p className="terminal__bold text-amber">Selected Projects ({PROJECTS.length}):</p>
            <div className="terminal__projects-list">
              {PROJECTS.map((p, idx) => (
                <div key={p.slug} className="terminal__project-item">
                  <span className="terminal__project-num">0{idx + 1}.</span>{' '}
                  <Link to={`/projects/${p.slug}`} className="terminal__project-title">
                    {p.name}
                  </Link>{' '}
                  <span className="terminal__muted">[{p.category}]</span> —{' '}
                  <span className="terminal__text">{p.tagline}</span>
                </div>
              ))}
            </div>
            <div className="terminal__quick-nav mt-2">
              <Link to="/projects" className="terminal__link">
                Browse complete project catalog <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        )
        break

      case 'contact':
        outputNode = (
          <div className="terminal__output-block">
            <p className="terminal__bold text-blue">Get In Touch:</p>
            <p className="terminal__text">
              Email: <a href={`mailto:${SITE.email}`} className="terminal__link">{SITE.email}</a>
            </p>
            <p className="terminal__text">
              GitHub: <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="terminal__link">{SITE.github}</a>
            </p>
            <p className="terminal__muted text-xs mt-1">Status: {SITE.status}</p>
            <div className="terminal__quick-nav mt-2">
              <Link to="/contact" className="terminal__link">
                Open Contact Form <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        )
        break

      case 'whoami':
        outputNode = (
          <div className="terminal__output-block">
            <p className="terminal__text">
              guest@portfolio-visitor (Remote guest on Web Terminal session)
            </p>
          </div>
        )
        break

      case 'date':
        outputNode = (
          <div className="terminal__output-block">
            <p className="terminal__text">{new Date().toUTCString()}</p>
          </div>
        )
        break

      case 'repo':
        outputNode = (
          <div className="terminal__output-block">
            <p className="terminal__text">
              GitHub repository: <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="terminal__link">{SITE.github}</a>
            </p>
          </div>
        )
        break

      case 'clear':
        setHistory([])
        setInputVal('')
        return

      default:
        outputNode = (
          <div className="terminal__output-block">
            <p className="terminal__error">
              command not found: {raw}. Type <span className="terminal__highlight">help</span> for available commands.
            </p>
          </div>
        )
        break
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `entry-${Date.now()}-${Math.random()}`,
        command: raw,
        output: outputNode,
      },
    ])
    setInputVal('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (cmdHistory.length === 0) return
      const nextIdx = cmdIndex === -1 ? cmdHistory.length - 1 : Math.max(0, cmdIndex - 1)
      setCmdIndex(nextIdx)
      setInputVal(cmdHistory[nextIdx])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (cmdIndex === -1) return
      if (cmdIndex < cmdHistory.length - 1) {
        const nextIdx = cmdIndex + 1
        setCmdIndex(nextIdx)
        setInputVal(cmdHistory[nextIdx])
      } else {
        setCmdIndex(-1)
        setInputVal('')
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const match = COMMAND_LIST.find((c) => c.startsWith(inputVal.trim().toLowerCase()))
      if (match) {
        setInputVal(match)
      }
    }
  }

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal__header">
        <div className="terminal__controls" aria-hidden="true">
          <span className="terminal__dot terminal__dot--red" />
          <span className="terminal__dot terminal__dot--amber" />
          <span className="terminal__dot terminal__dot--green" />
        </div>
        <div className="terminal__title">
          <TerminalIcon size={13} className="terminal__title-icon" />
          <span>vazgen@dev: ~/portfolio</span>
        </div>
        <div className="terminal__actions">
          <button
            type="button"
            className="terminal__action-btn"
            title="Clear terminal"
            onClick={(e) => {
              e.stopPropagation()
              setHistory([])
            }}
          >
            <Trash2 size={12} />
            <span className="terminal__action-label">Clear</span>
          </button>
        </div>
      </div>

      <div className="terminal__body" ref={terminalBodyRef}>
        {history.map((h) => (
          <div key={h.id} className="terminal__entry">
            {h.command !== 'welcome' && (
              <div className="terminal__line">
                <span className="terminal__prompt">vazgen@dev:~$</span>
                <span className="terminal__cmd-text">{h.command}</span>
              </div>
            )}
            <div className="terminal__output">{h.output}</div>
          </div>
        ))}

        <div className="terminal__input-row">
          <label htmlFor="terminal-input" className="terminal__prompt">
            vazgen@dev:~$
          </label>
          <input
            id="terminal-input"
            ref={inputRef}
            type="text"
            className="terminal__input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command prompt"
          />
          <button
            type="button"
            className="terminal__submit-btn"
            onClick={(e) => {
              e.stopPropagation()
              executeCommand(inputVal)
            }}
            aria-label="Submit command"
          >
            <CornerDownLeft size={12} />
          </button>
        </div>
      </div>

      <div className="terminal__footer">
        <div className="terminal__suggestions-label">
          <Sparkles size={11} /> Try:
        </div>
        <div className="terminal__chips">
          {['help', 'about', 'skills', 'projects', 'contact'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              className="terminal__chip"
              onClick={(e) => {
                e.stopPropagation()
                executeCommand(cmd)
              }}
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
