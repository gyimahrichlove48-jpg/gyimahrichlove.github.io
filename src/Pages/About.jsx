import { Link } from 'react-router-dom'
import { CornerNav, GhostNum } from '../components/PageChrome'

export default function About() {
  return (
    <div className="page-shell fade-in">
      <GhostNum page="about" />
      <CornerNav page="about" />
      <div className="page-inner">
        <span className="page-label">01 &mdash; About</span>
        <h2 className="page-title">Who I am</h2>
        <p className="page-text">
          I'm interested in industrial processes and practical engineering applications, and
          I'm eager to learn and apply what I know in real engineering environments &mdash; this
          page exists to make that easy to see.
        </p>

        <div className="facts">
          <span className="fact-pill">Based in <strong>Tarkwa, Ghana</strong></span>
          <span className="fact-pill">Studying at <strong>UMaT</strong></span>
          <span className="fact-pill"><strong>OHS</strong> certified</span>
        </div>

        <div className="about-block">
          <p className="about-block-title">Currently</p>
          <p className="page-text" style={{ marginBottom: 0 }}>
            BSc Chemical Engineering at the University of Mines and Technology, Tarkwa &mdash;
            2026 to present.
          </p>
        </div>

        <div className="about-block">
          <p className="about-block-title">Core skills</p>
          <div className="tag-row">
            <span className="tag">Data analysis (Excel)</span>
            <span className="tag">AutoCAD (basic)</span>
            <span className="tag">Problem solving</span>
            <span className="tag">Communication</span>
          </div>
        </div>

        <div className="about-block">
          <p className="about-block-title">Languages</p>
          <div className="lang-row">
            <span className="lang-item"><strong>English</strong> &mdash; fluent</span>
            <span className="lang-item"><strong>Twi</strong> &mdash; native</span>
            <span className="lang-item"><strong>French</strong> &mdash; basic</span>
          </div>
        </div>

        <Link className="next-link" to="/journey">
          How this page came together <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  )
}
