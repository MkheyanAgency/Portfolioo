import { useState, useRef, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Send, Copy, Check, Clock, MapPin, Sparkles, AlertCircle, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { SITE, CONTACT_LINKS } from '../data/site'

const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined
const EMAILJS_CONFIGURED = Boolean(SERVICE && TEMPLATE && KEY)

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'demo-success' | 'error'>('idle')
  const [copiedEmail, setCopiedEmail] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!name.trim()) {
      errs.name = 'Please provide your name.'
    } else if (name.trim().length < 2) {
      errs.name = 'Name should be at least 2 characters.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
      errs.email = 'Please provide your email address.'
    } else if (!emailRegex.test(email.trim())) {
      errs.email = 'Please provide a valid email format.'
    }

    if (!message.trim()) {
      errs.message = 'Please write a message before sending.'
    } else if (message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')

    if (EMAILJS_CONFIGURED && formRef.current) {
      try {
        await emailjs.sendForm(SERVICE!, TEMPLATE!, formRef.current, { publicKey: KEY! })
        setStatus('success')
        formRef.current.reset()
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      } catch (err) {
        setStatus('error')
      }
    } else {
      // In local/preview without EmailJS API keys, provide honest fallback simulation
      setTimeout(() => {
        setStatus('demo-success')
      }, 700)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(SITE.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2400)
  }

  const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent(subject || 'Inquiry from Portfolio')}&body=${encodeURIComponent(`Hi Vazgen,\n\nName: ${name}\nEmail: ${email}\n\n${message}`)}`

  return (
    <div className="page-wrapper contact-page">
      <Seo
        title="Contact"
        description="Get in touch with Vazgen Mkheyan for junior developer positions, web projects, or collaborations."
      />

      <section className="page-header">
        <div className="container">
          <div className="page-header__meta">
            <span className="section-kicker">Get In Touch</span>
          </div>
          <h1 className="page-header__title">
            Let’s Start A <span>Conversation</span>
          </h1>
          <p className="page-header__lead">
            Whether you are discussing a junior developer opening, consulting on a project, or saying hello, I’d love to hear from you.
          </p>
        </div>
      </section>

      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Form Column */}
            <div className="contact-form-column">
              <Reveal className="contact-form-card">
                <h2 className="contact-card-title">Send A Message</h2>
                <p className="contact-card-desc">
                  Fill out the form below. I typically respond within 24–48 hours.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} noValidate className="contact-form">
                  {/* Name field */}
                  <div className="form-group">
                    <label htmlFor="user_name" className="form-label">
                      Your Name <span className="text-amber">*</span>
                    </label>
                    <input
                      id="user_name"
                      name="user_name"
                      type="text"
                      className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                      placeholder="e.g. Alex Smith"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value)
                        if (errors.name) setErrors((prev) => ({ ...prev, name: '' }))
                      }}
                      autoComplete="name"
                      required
                    />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div className="form-group">
                    <label htmlFor="user_email" className="form-label">
                      Your Email <span className="text-amber">*</span>
                    </label>
                    <input
                      id="user_email"
                      name="user_email"
                      type="email"
                      className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                      placeholder="alex@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (errors.email) setErrors((prev) => ({ ...prev, email: '' }))
                      }}
                      autoComplete="email"
                      required
                    />
                    {errors.email && <p className="form-error">{errors.email}</p>}
                  </div>

                  {/* Subject field */}
                  <div className="form-group">
                    <label htmlFor="user_subject" className="form-label">
                      Subject / Topic
                    </label>
                    <input
                      id="user_subject"
                      name="user_subject"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Junior Frontend Role / Web Project"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  {/* Message field */}
                  <div className="form-group">
                    <label htmlFor="user_message" className="form-label">
                      Message <span className="text-amber">*</span>
                    </label>
                    <textarea
                      id="user_message"
                      name="user_message"
                      rows={5}
                      className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                      placeholder="Share details about the role, project scope, or opportunity..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value)
                        if (errors.message) setErrors((prev) => ({ ...prev, message: '' }))
                      }}
                      required
                    />
                    {errors.message && <p className="form-error">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="form-actions">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn btn--primary btn--block"
                    >
                      <Send size={15} />
                      <span>{status === 'sending' ? 'Transmitting Message…' : 'Send Message'}</span>
                    </button>
                  </div>

                  {/* Honest Status Notifications */}
                  {status === 'success' && (
                    <div className="form-status-banner form-status-banner--success" role="alert">
                      <Check size={18} />
                      <div>
                        <strong>Message Sent Successfully!</strong>
                        <p className="text-xs mt-0.5">Thank you for reaching out. I’ll review your message and get back to you shortly.</p>
                      </div>
                    </div>
                  )}

                  {status === 'demo-success' && (
                    <div className="form-status-banner form-status-banner--info" role="alert">
                      <Sparkles size={18} />
                      <div>
                        <strong>Form Validated & Recorded</strong>
                        <p className="text-xs mt-0.5">
                          In this preview environment, live EmailJS keys are pending in <code>.env</code>. To send directly right now:
                        </p>
                        <a
                          href={mailtoHref}
                          className="btn btn--secondary btn--sm mt-2"
                        >
                          <Mail size={13} /> Open in Email Client (Pre-Filled)
                        </a>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="form-status-banner form-status-banner--error" role="alert">
                      <AlertCircle size={18} />
                      <div>
                        <strong>Message Delivery Failed</strong>
                        <p className="text-xs mt-0.5">
                          Please email directly to <a href={`mailto:${SITE.email}`} className="underline font-mono">{SITE.email}</a>.
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </Reveal>
            </div>

            {/* Sidebar Contact Cards */}
            <aside className="contact-sidebar-column">
              {/* Direct Email Card with One-Click Copy */}
              <Reveal className="contact-info-card">
                <div className="contact-info-icon">
                  <Mail size={22} />
                </div>
                <h3 className="contact-info-title">Direct Email</h3>
                <p className="contact-info-text">
                  Feel free to send emails directly for full job descriptions or project proposals.
                </p>
                <div className="email-copy-box">
                  <span className="email-address">{SITE.email}</span>
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="email-copy-btn"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </Reveal>

              {/* GitHub Card */}
              <Reveal delay={100} className="contact-info-card">
                <div className="contact-info-icon">
                  <GithubIcon size={22} />
                </div>
                <h3 className="contact-info-title">GitHub Profile</h3>
                <p className="contact-info-text">
                  Inspect source code repositories, commit histories, and experiment branches.
                </p>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-link"
                >
                  <span>github.com/MkheyanAgency</span>
                  <ArrowUpRight size={14} />
                </a>
              </Reveal>

              {/* Location & Availability Card */}
              <Reveal delay={200} className="contact-info-card">
                <div className="contact-info-icon">
                  <MapPin size={22} />
                </div>
                <h3 className="contact-info-title">Location & Availability</h3>
                <ul className="contact-meta-list">
                  <li className="contact-meta-item">
                    <span className="contact-meta-label">Location:</span>
                    <span>Armenia</span>
                  </li>
                  <li className="contact-meta-item">
                    <span className="contact-meta-label">Work mode:</span>
                    <span>Remote Worldwide</span>
                  </li>
                  <li className="contact-meta-item">
                    <span className="contact-meta-label">Timezone:</span>
                    <span>UTC+4</span>
                  </li>
                  <li className="contact-meta-item">
                    <span className="contact-meta-label">Status:</span>
                    <span className="text-green font-medium">Open to Opportunities</span>
                  </li>
                </ul>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
