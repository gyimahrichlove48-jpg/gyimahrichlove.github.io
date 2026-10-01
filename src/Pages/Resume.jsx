import { Link } from 'react-router-dom'
import { CornerNav, GhostNum } from '../components/PageChrome'

export default function Resume() {
  return (
    <div className="page-shell fade-in">
      <GhostNum page="resume" />
      <CornerNav page="resume" />
      <div className="page-inner">
        <span className="page-label">04 &mdash; R&eacute;sum&eacute;</span>
        <h2 className="page-title">Full r&eacute;sum&eacute;</h2>
        <p className="page-text">Education, experience, skills and references, in one place.</p>
        <div className="resume-frame-wrap">
          <iframe src="/resume.pdf" title="Richlove Gyimah résumé" />
        </div>
        <div className="btn-row">
          <a className="btn btn-accent" href="/resume.pdf" download>Download PDF</a>
          <a className="btn btn-outline" href="/resume.pdf" target="_blank" rel="noreferrer">Open in new tab</a>
        </div>
        <Link className="next-link" to="/contact">
          Get in touch <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  )
}
