import { useState, useEffect } from 'react'
import './App.css'

function AtomIcon() {
  return (
    <svg viewBox="0 0 40 40" className="atom-icon" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="3" fill="currentColor" />
      <ellipse cx="20" cy="20" rx="16" ry="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="20" cy="20" rx="16" ry="7" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 20 20)" />
      <ellipse cx="20" cy="20" rx="16" ry="7" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 20 20)" />
    </svg>
  )
}

const NAV_ITEMS = ['Dashboard', 'Reactions', 'Samples', 'Formulas', 'Lab notes']

const REACTIONS = [
  { name: 'Esterification synthesis', stage: 'Heating', temp: '68°C', pct: 72, eta: '12 min left' },
  { name: 'Acid-base titration', stage: 'Endpoint reached', temp: '24°C', pct: 100, eta: 'Complete' },
  { name: 'Recrystallization batch 3', stage: 'Cooling', temp: '31°C', pct: 45, eta: '28 min left' },
]

const SAMPLES = [
  { id: 'SMP-014', name: 'Ethanol extract', status: 'In analysis', location: 'Rack B2' },
  { id: 'SMP-015', name: 'Copper sulfate solution', status: 'Stored', location: 'Fridge A1' },
  { id: 'SMP-016', name: 'Unknown organic compound', status: 'Awaiting GC-MS', location: 'Bench 3' },
  { id: 'SMP-017', name: 'Calibration standard', status: 'Stored', location: 'Cabinet C4' },
]

const FORMULAS = [
  { name: 'Sulfuric acid', formula: 'H₂SO₄', note: 'Strong diprotic acid' },
  { name: 'Sodium bicarbonate', formula: 'NaHCO₃', note: 'Mild base, buffering agent' },
  { name: 'Ethanol', formula: 'C₂H₅OH', note: 'Common solvent, flammable' },
  { name: 'Glucose', formula: 'C₆H₁₂O₆', note: 'Simple sugar, reference compound' },
]

const LAB_NOTES = [
  { date: 'Sep 15', text: 'Esterification yield lower than expected — check reflux temperature next run.' },
  { date: 'Sep 13', text: 'Titration endpoint consistent across 3 trials. Concentration confirmed at 0.1M.' },
  { date: 'Sep 10', text: 'New batch of ethanol extract logged and stored in Rack B2.' },
]

const STATUS_CARDS = [
  { label: 'Lab status', value: 'Online', sub: '96% operational capacity', pct: 96 },
  { label: 'Reaction', value: 'Stable', sub: 'Temperature within range', pct: 88 },
  { label: 'Samples', value: 'Active', sub: 'Analysis in progress', pct: 72 },
  { label: 'Containment', value: 'Secure', sub: 'Safety protocols enabled', pct: 100 },
]

function BubbleField() {
  const bubbles = [
    { size: 18, left: '6%', duration: 14, delay: 0 },
    { size: 10, left: '18%', duration: 10, delay: 2 },
    { size: 26, left: '32%', duration: 18, delay: 4 },
    { size: 14, left: '48%', duration: 12, delay: 1 },
    { size: 20, left: '64%', duration: 16, delay: 3 },
    { size: 12, left: '78%', duration: 11, delay: 5 },
    { size: 22, left: '90%', duration: 15, delay: 2.5 },
  ]
  return (
    <div className="bubble-field" aria-hidden="true">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

function useClock() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return time.toLocaleTimeString('en-US', { hour12: true })
}

function Sidebar({ activeNav, onSelect, onAbout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark">L</div>
        <div>
          <p className="brand-title">Lionel Richy</p>
          <p className="brand-sub">Chem lab</p>
        </div>
      </div>

      <div className="identity-card">
        <div className="identity-avatar">
          <AtomIcon />
        </div>
        <div>
          <p className="identity-name">Lionel Richy</p>
          <p className="identity-sub">Lead chemist</p>
        </div>
        <span className="dot" />
      </div>

      <p className="nav-heading">Main system</p>
      <nav className="nav-list">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            className={`nav-item ${item === activeNav ? 'active' : ''}`}
            type="button"
            onClick={() => onSelect(item)}
          >
            <span className="nav-label">{item}</span>
            {item === activeNav && <span className="dot" />}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="about-link" type="button" onClick={onAbout}>About</button>
        <p className="footer-status"><span className="dot" /> Containment sealed</p>
        <p className="footer-version">Lab OS v1.0.26</p>
      </div>
    </aside>
  )
}

function ReactionsPanel() {
  return (
    <div className="panel-section">
      <div className="panel-header">
        <p className="pill"><span className="dot" /> {REACTIONS.length} reactions running</p>
        <h2 className="module-title">Reactions</h2>
        <p className="module-desc">Live progress across everything currently on the bench.</p>
      </div>
      <div className="reaction-list">
        {REACTIONS.map((r) => (
          <div className="reaction-card" key={r.name}>
            <div className="reaction-top">
              <span className="reaction-name">{r.name}</span>
              <span className="reaction-temp">{r.temp}</span>
            </div>
            <div className="status-track">
              <div className="status-fill" style={{ width: `${r.pct}%` }} />
            </div>
            <div className="reaction-bottom">
              <span className="reaction-stage">{r.stage}</span>
              <span className="reaction-eta">{r.eta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SamplesPanel() {
  return (
    <div className="panel-section">
      <div className="panel-header">
        <p className="pill"><span className="dot" /> {SAMPLES.length} samples logged</p>
        <h2 className="module-title">Samples</h2>
        <p className="module-desc">Current inventory, storage location and analysis status.</p>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Sample</th>
              <th>Status</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {SAMPLES.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td><span className="status-chip">{s.status}</span></td>
                <td>{s.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function FormulasPanel() {
  return (
    <div className="panel-section">
      <div className="panel-header">
        <p className="pill"><span className="dot" /> {FORMULAS.length} formulas saved</p>
        <h2 className="module-title">Formulas</h2>
        <p className="module-desc">Quick reference for compounds used across active work.</p>
      </div>
      <div className="formula-grid">
        {FORMULAS.map((f) => (
          <div className="formula-card" key={f.name}>
            <p className="formula-symbol">{f.formula}</p>
            <p className="formula-name">{f.name}</p>
            <p className="formula-note">{f.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function LabNotesPanel() {
  return (
    <div className="panel-section">
      <div className="panel-header">
        <p className="pill"><span className="dot" /> {LAB_NOTES.length} entries this week</p>
        <h2 className="module-title">Lab notes</h2>
        <p className="module-desc">Observations and follow-ups from recent sessions.</p>
      </div>
      <div className="notes-list">
        {LAB_NOTES.map((n) => (
          <div className="note-card" key={n.date}>
            <span className="note-date">{n.date}</span>
            <p className="note-text">{n.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const NAV_PANELS = {
  Reactions: ReactionsPanel,
  Samples: SamplesPanel,
  Formulas: FormulasPanel,
  'Lab notes': LabNotesPanel,
}

function Hero({ activeNav, initialized, onInitialize, showLogs, onToggleLogs, logs }) {
  const time = useClock()
  return (
    <>
      <div className="topbar">
        <p className="breadcrumb">System / {activeNav}</p>
        <p className="clock"><span className="dot" /> {time}</p>
      </div>
      <h1 className="welcome">Welcome back, Lionel Richy</h1>
      <div className="divider" />

      {activeNav !== 'Dashboard' ? (
        (() => {
          const Panel = NAV_PANELS[activeNav]
          return <Panel />
        })()
      ) : (
        <div className="hero">
          <span className="pill"><span className="dot" /> {initialized ? 'Reaction initialized' : 'Lab online'}</span>
          <h2 className="hero-title">GYIMAH RICHLOVE <span className="slashes">👩‍🔬</span></h2>
          <p className="hero-tag">Universal chemist🧪⚗️</p>
          <p className="hero-desc">
            Welcome to the private lab interface. Monitor reactions, analyze samples and
            keep your experiments under control.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" type="button" onClick={onInitialize}>
              {initialized ? 'Reaction initialized' : 'Start reaction'} <span>+</span>
            </button>
            <button className="btn-secondary" type="button" onClick={onToggleLogs}>
              {showLogs ? 'Hide log' : 'View experiment log'}
            </button>
          </div>
          {showLogs && (
            <div className="log-panel">
              {logs.map((line, i) => (
                <p key={i} className="log-line">{line}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}

function StatusGrid() {
  return (
    <div className="status-grid">
      {STATUS_CARDS.map((c) => (
        <div className="status-card" key={c.label}>
          <div className="status-head">
            <span className="status-label">{c.label}</span>
            <span className="dot" />
          </div>
          <p className="status-value">{c.value}</p>
          <div className="status-track">
            <div className="status-fill" style={{ width: `${c.pct}%` }} />
          </div>
          <p className="status-sub">{c.sub}</p>
        </div>
      ))}
    </div>
  )
}

const TECH_SKILLS = [
  'HTML & CSS', 'JavaScript', 'React.js', 'Git & GitHub', 'Microsoft Word & Excel',
  'AutoCAD', 'Engineering drawing', 'Chemical engineering principles', 'Basic electronics', 'Analytical chemistry',
]

const SOFT_SKILLS = [
  'Communication', 'Teamwork', 'Problem solving', 'Time management',
  'Critical thinking', 'Adaptability', 'Willingness to learn',
]

function AboutPage({ onBack }) {
  return (
    <div className="about-page">
      <button className="btn-secondary about-back" type="button" onClick={onBack}>
        <span>&lt;</span> Back to dashboard
      </button>

      <div className="about-content">
        <div className="identity-avatar about-avatar">
          <AtomIcon />
        </div>
        <h1 className="about-name">Richlove Gyimah</h1>
        <p className="about-role">Chemical engineering student, UMaT</p>

        <p className="about-bio">
          Curious and determined, with a growing interest in technology and engineering alongside
          my studies in chemical engineering, electronics, engineering drawing, mathematics and
          analytical chemistry. I like exploring new ideas and building projects that push my
          skills forward, academically and beyond. My goal is to become a skilled chemical
          engineer and use that knowledge to solve real-world problems.
        </p>

        <div className="about-links">
          <a className="about-link-item" href="https://github.com/gyimahrichlove48-jpg" target="_blank" rel="noreferrer">
            GitHub <span>&rarr;</span>
          </a>
          <a className="about-link-item" href="https://www.linkedin.com/in/richlove-gyimah-3299913a9" target="_blank" rel="noreferrer">
            LinkedIn <span>&rarr;</span>
          </a>
        </div>

        <div className="about-skills">
          <div className="skills-block">
            <p className="skills-heading">Technical skills</p>
            <div className="skills-tags">
              {TECH_SKILLS.map((s) => (
                <span className="skill-tag" key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div className="skills-block">
            <p className="skills-heading">Soft skills</p>
            <div className="skills-tags">
              {SOFT_SKILLS.map((s) => (
                <span className="skill-tag accent" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const INIT_LOGS = [
  '[10:48:02] Experiment sequence started',
  '[10:48:04] Verifying safety protocols... ok',
  '[10:48:06] Calibrating instruments',
  '[10:48:09] All readings nominal',
]

function App() {
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [initialized, setInitialized] = useState(false)
  const [showLogs, setShowLogs] = useState(false)
  const [page, setPage] = useState('app')

  if (page === 'about') {
    return (
      <div className="shell">
        <BubbleField />
        <main className="main about-main">
          <AboutPage onBack={() => setPage('app')} />
        </main>
      </div>
    )
  }

  return (
    <div className="shell">
      <BubbleField />
      <Sidebar activeNav={activeNav} onSelect={setActiveNav} onAbout={() => setPage('about')} />
      <main className="main">
        <Hero
          activeNav={activeNav}
          initialized={initialized}
          onInitialize={() => setInitialized(true)}
          showLogs={showLogs}
          onToggleLogs={() => setShowLogs((v) => !v)}
          logs={INIT_LOGS}
        />
        {activeNav === 'Dashboard' && <StatusGrid />}
      </main>
    </div>
  )
}

export default App
