import { Link } from 'react-router-dom'
import { CornerNav, GhostNum } from '../components/PageChrome'

const JOURNEY = [
  {
    week: 'Week 1',
    title: 'First contact with React',
    text: 'Opened VS Code and a Vite project for the first time. Everything below started here.',
  },
  {
    week: 'Week 2',
    title: 'Working components',
    text: 'Shipped a working layout with real navigation and state — no longer just following a tutorial line by line.',
  },
  {
    week: 'Week 3',
    title: 'Planned before I built',
    text: 'Answered the seven planning questions properly for the first time — who the page is for, what they should do, what it should feel like — before touching a line of code.',
  },
  {
    week: 'Week 3',
    title: 'Rebuilt around the plan',
    text: 'Reworked the whole site to match what I\u2019d written down: real content instead of placeholder data, a proper flow between pages, and a look that fits a chemical engineering portfolio instead of a generic template.',
  },
  {
    week: 'Week 4',
    title: 'Split the file apart',
    text: 'Moved the shared page chrome, Skills and Contact out of one long App.jsx into their own files in components/ — same page, safer to change.',
  },
  {
    week: 'Week 6',
    title: 'Real routing',
    text: 'Installed React Router and turned each page into an actual address — no more state pretending to be navigation.',
  },
]

export default function Journey() {
  return (
    <div className="page-shell fade-in">
      <GhostNum page="journey" />
      <CornerNav page="journey" />
      <div className="page-inner">
        <span className="page-label">02 &mdash; Journey</span>
        <h2 className="page-title">Building this, week by week</h2>
        <p className="page-text">
          This site is part of a web development bootcamp. Here's the actual progress behind it.
        </p>
        <div className="journey-list">
          {JOURNEY.map((j, i) => (
            <div className="journey-item" key={i}>
              <span className="journey-week">{j.week}</span>
              <div>
                <p className="journey-title">{j.title}</p>
                <p className="journey-text">{j.text}</p>
              </div>
            </div>
          ))}
        </div>
        <Link className="next-link" to="/skills">
          What I can already do <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  )
}
