import { CornerNav, GhostNum } from '../components/PageChrome'

export default function Contact() {
  return (
    <div className="page-shell fade-in">
      <GhostNum page="contact" />
      <CornerNav page="contact" />
      <div className="page-inner">
        <span className="page-label">05 &mdash; Contact</span>
        <h2 className="page-title">Get in touch</h2>
        <p className="page-text">
          Open to internships, placements and entry-level roles in chemical engineering and
          related fields.
        </p>
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
