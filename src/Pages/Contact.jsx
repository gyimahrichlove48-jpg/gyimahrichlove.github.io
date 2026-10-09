import { useState } from 'react'
import { CornerNav, GhostNum } from '../components/PageChrome'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    // honeypot: if this hidden field is filled, it was a bot — pretend success, send nothing
    if (e.target.elements['bot-field'].value) {
      setStatus('sent')
      return
    }

    setStatus('sending')

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      })
      .catch(() => setStatus('error'))
  }

  return (
    <div className="page-shell contact-shell fade-in">
      <img className="contact-bg-photo" src="/contact-photo.jpg" alt="Richlove Gyimah" />
      <GhostNum page="contact" />
      <CornerNav page="contact" />
      <div className="page-inner">
        <span className="page-label">05 &mdash; Contact</span>
        <h2 className="page-title">Get in touch</h2>
        <p className="page-text">
          Open to internships, placements and entry-level roles in chemical engineering and
          related fields. Send a message directly below, or reach me through any of the links.
        </p>

        {status === 'sent' ? (
          <div className="form-success">
            <p className="form-success-title">Message sent</p>
            <p className="page-text" style={{ marginBottom: 0 }}>
              Thanks for reaching out &mdash; I'll reply as soon as I can.
            </p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden-field">
              <label>
                Don&rsquo;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="form-row">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                className="form-input form-textarea"
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
              />
            </div>

            <button className="btn btn-accent" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'error' && (
              <p className="form-error">
                Something went wrong &mdash; please try again, or email me directly below.
              </p>
            )}
          </form>
        )}

        <div className="contact-list">
          <a className="contact-row" href="mailto:gyimahrichlove48@email.com">
            <span className="contact-row-label">Email</span>
            <span className="contact-row-value">gyimahrichlove48@email.com</span>
          </a>
          <a className="contact-row" href="tel:+233548484454">
            <span className="contact-row-label">Phone</span>
            <span className="contact-row-value">+233 54 848 4454</span>
          </a>
          <a className="contact-row" href="https://www.linkedin.com/in/richlove-gyimah" target="_blank" rel="noreferrer">
            <span className="contact-row-label">LinkedIn</span>
            <span className="contact-row-value">linkedin.com/in/richlove-gyimah</span>
          </a>
          <a className="contact-row" href="https://github.com/gyimahrichlove48-jpg" target="_blank" rel="noreferrer">
            <span className="contact-row-label">GitHub</span>
            <span className="contact-row-value">github.com/gyimahrichlove48-jpg</span>
          </a>
        </div>
      </div>
    </div>
  )
}
