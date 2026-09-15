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

const NAV_ITEMS = ['Dashboard', 'Network', 'System', 'Database', 'Terminal']

const NAV_CONTENT = {
  Network: { title: 'Network module', desc: 'Live traffic, connected nodes and routing status would surface here.' },
  System: { title: 'System module', desc: 'CPU, memory and process-level diagnostics would surface here.' },
  Database: { title: 'Database module', desc: 'Query throughput, replication lag and table health would surface here.' },
  Terminal: { title: 'Terminal module', desc: 'A live command console would surface here.' },
}

const STATUS_CARDS = [
  { label: 'System status', value: 'Online', sub: '96% operational capacity', pct: 96 },
  { label: 'Network', value: 'Secure', sub: 'Encrypted connection', pct: 88 },
  { label: 'Database', value: 'Active', sub: 'Sync in progress', pct: 72 },
  { label: 'Firewall', value: 'Protected', sub: 'Threat protection enabled', pct: 100 },
]

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
          <p className="brand-sub">Cyber system</p>
        </div>
      </div>

      <div className="identity-card">
        <div className="identity-avatar">
          <AtomIcon />
        </div>
        <div>
          <p className="identity-name">Lionel Richy</p>
          <p className="identity-sub">Root access</p>
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
        <p className="footer-status"><span className="dot" /> Encrypted</p>
        <p className="footer-version">Lionel OS v1.0.26</p>
      </div>
    </aside>
  )
}

function ModulePlaceholder({ title, desc }) {
  return (
    <div className="module-placeholder">
      <p className="pill"><span className="dot" /> Module loaded</p>
      <h2 className="module-title">{title}</h2>
      <p className="module-desc">{desc}</p>
    </div>
  )
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
        <ModulePlaceholder {...NAV_CONTENT[activeNav]} />
      ) : (
        <div className="hero">
          <span className="pill"><span className="dot" /> {initialized ? 'System initialized' : 'System online'}</span>
          <h2 className="hero-title">Gyimah Richlove <span className="slashes">👩‍🔬</span></h2>
          <p className="hero-tag">Universal Chemist🧪⚗️</p>
          <p className="hero-desc">
            Welcome to the private command interface. Monitor systems, analyze networks and
            control your digital environment.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" type="button" onClick={onInitialize}>
              {initialized ? 'System initialized' : 'Initialize system'} <span>+</span>
            </button>
            <button className="btn-secondary" type="button" onClick={onToggleLogs}>
              {showLogs ? 'Hide logs' : 'View logs'}
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
  '[10:48:02] Boot sequence started',
  '[10:48:04] Verifying root access... ok',
  '[10:48:06] Establishing encrypted channel',
  '[10:48:09] All systems nominal',
]

function App() {
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [initialized, setInitialized] = useState(false)
  const [showLogs, setShowLogs] = useState(false)
  const [page, setPage] = useState('app')

  if (page === 'about') {
    return (
      <div className="shell">
        <main className="main about-main">
          <AboutPage onBack={() => setPage('app')} />
        </main>
      </div>
    )
  }

  return (
    <div className="shell">
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
