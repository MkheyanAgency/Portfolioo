import { useRef, useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import Seo from '../components/Seo'
import { CONTACT } from '../data/site'

const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined
const ENABLED = Boolean(SERVICE && TEMPLATE && KEY)

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!ENABLED || !form.current) return
    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE!, TEMPLATE!, form.current, { publicKey: KEY! })
      setStatus('ok'); form.current.reset()
    } catch { setStatus('err') }
  }

  return (
    <section className="section page">
      <Seo title="Contact" description="Get in touch with Vazgen Mkheyan." />
      <div className="container">
        <h1 className="section__title">Contact <span>Me</span></h1>
        <div className="contact__container grid">
          <form ref={form} className="contact__form" onSubmit={onSubmit} noValidate={false}>
            <label className="contact__label" htmlFor="user_name">Name</label>
            <input className="contact__input" id="user_name" name="user_name" type="text" autoComplete="name" required />
            <label className="contact__label" htmlFor="user_email">Email</label>
            <input className="contact__input" id="user_email" name="user_email" type="email" autoComplete="email" required />
            <label className="contact__label" htmlFor="user_message">Message</label>
            <textarea className="contact__input contact__area" id="user_message" name="user_message" rows={5} required />
            <button className="button" type="submit" disabled={!ENABLED || status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            <p className="contact__status" role="status" aria-live="polite">
              {!ENABLED && 'The contact form is not configured yet. Set the EmailJS variables in .env.'}
              {status === 'ok' && 'Message sent successfully.'}
              {status === 'err' && 'Message not sent. Please try again later.'}
            </p>
          </form>
          <div className="contact__info">
            {CONTACT.length === 0 && <p className="muted">Verified contact details have not been added yet.</p>}
            {CONTACT.map((c) => (
              <div key={c.label} className="contact__card">
                <i className={c.icon} aria-hidden="true" />
                <div><h2 className="contact__title">{c.label}</h2><a href={c.href} className="contact__address" target={c.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">{c.text}</a></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
