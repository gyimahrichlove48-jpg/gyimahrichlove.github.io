import { CornerNav, GhostNum } from './PageChrome'

const SKILL_GROUPS = [
  {
    title: 'Chemical engineering foundations',
    items: ['Chemical engineering principles', 'Analytical chemistry', 'Engineering drawing basics', 'Basic electronics'],
  },
  {
    title: 'Computer & digital',
    items: ['MS Word, Excel, PowerPoint', 'AutoCAD (basic)', 'Data analysis (Excel)'],
  },
  {
    title: 'Web development',
    items: ['HTML & CSS', 'JavaScript', 'React.js', 'Git & GitHub'],
  },
  {
    title: 'Working style',
    items: ['Problem solving', 'Time management', 'Written & verbal communication', 'Data collection & analysis'],
  },
]

export default function Skills({ onNavigate, onHome }) {
  return (
    <div className="page-shell fade-in">
      <GhostNum page="skills" />
      <CornerNav page="skills" onHome={onHome} />
      <div className="page-inner page-inner-wide">
        <span className="page-label">03 &mdash; Skills</span>
        <h2 className="page-title">What I can already do</h2>
        <p className="page-text">
          Two tracks: the chemical engineering foundation from my coursework, and the web
          development skills I'm picking up through this bootcamp &mdash; see the Journey page
          for how that started.
        </p>
        <div className="skills-groups">
          {SKILL_GROUPS.map((g) => (
            <div className="about-block" key={g.title}>
              <p className="about-block-title">{g.title}</p>
              <div className="tag-row">
                {g.items.map((i) => <span className="tag" key={i}>{i}</span>)}
              </div>
            </div>
          ))}
        </div>
        <a className="next-link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('resume') }}>
          See the full r&eacute;sum&eacute; <span className="arrow">→</span>
        </a>
      </div>
    </div>
  )
}
