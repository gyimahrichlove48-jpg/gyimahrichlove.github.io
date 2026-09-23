import { useState } from 'react'
import './App.css'

const CHAPTERS = [
  { key: 'about', num: '01', label: 'About' },
  { key: 'journey', num: '02', label: 'Journey' },
  { key: 'skills', num: '03', label: 'Skills' },
  { key: 'resume', num: '04', label: 'Résumé' },
  { key: 'contact', num: '05', label: 'Contact' },
]

const GHOST_NUM = { about: '01', journey: '02', skills: '03', resume: '04', contact: '05' }
const PAGE_LABELS = { about: 'About', journey: 'Journey', skills: 'Skills', resume: 'Résumé', contact: 'Contact' }

const SKILL_GROUPS = [
  {
    title: 'Computer & digital',
    items: ['MS Word, Excel, PowerPoint', 'AutoCAD (basic)', 'Data analysis (Excel)'],
  },
  {
    title: 'Engineering & field',
    items: ['Data collection & analysis', 'Engineering drawing basics'],
  },
  {
    title: 'Working style',
    items: ['Problem solving', 'Time management', 'Written & verbal communication'],
  },
]

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
]

function CornerNav({ page, onHome }) {
  return (
    <>
      <a className="corner-brand" href="#" onClick={(e) => { e.preventDefault(); onHome() }}>
        <span className="arrow">←</span> Richlove Gyimah
      </a>
      <span className="corner-mark">{PAGE_LABELS[page]}</span>
    </>
  )
}

function GhostNum({ page }) {
  return <span className="ghost-num" aria-hidden="true">{GHOST_NUM[page]}</span>
}

function Home({ onNavigate }) {
  return (
    <div className="home fade-in">
      <div className="home-left">
        <span className="home-eyebrow">Chemical engineering student &middot; OHS certified</span>
        <h1 className="home-name">Richlove Gyimah</h1>
        <p className="home-tag">
          Studying chemical engineering at UMaT, Tarkwa. Eager to apply it somewhere real.
        </p>
        <div className="chapters">
          {CHAPTERS.map((c) => (
            <a
              key={c.key}
              className="chapter-link"
              href="#"
              onClick={(e) => { e.preventDefault(); onNavigate(c.key) }}
            >
              <span className="chapter-num">{c.num}</span>
              <span className="chapter-label">{c.label}</span>
              <span className="chapter-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
      <div className="home-right">
        <img className="home-photo" src="/profile.jpg" alt="Richlove Gyimah" />
        <span className="home-right-caption">Tarkwa, Ghana</span>
      </div>
    </div>
  )
}

function About({ onNavigate, onHome }) {
  return (
    <div className="page-shell fade-in">
      <GhostNum page="about" />
      <CornerNav page="about" onHome={onHome} />
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

        <a className="next-link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('journey') }}>
          How this page came together <span className="arrow">→</span>
        </a>
      </div>
    </div>
  )
}

function Journey({ onNavigate, onHome }) {
  return (
    <div className="page-shell fade-in">
      <GhostNum page="journey" />
      <CornerNav page="journey" onHome={onHome} />
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
        <a className="next-link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('skills') }}>
          What I can already do <span className="arrow">→</span>
        </a>
      </div>
    </div>
  )
}

function Skills({ onNavigate, onHome }) {
  return (
    <div className="page-shell fade-in">
      <GhostNum page="skills" />
      <CornerNav page="skills" onHome={onHome} />
      <div className="page-inner">
        <span className="page-label">03 &mdash; Skills</span>
        <h2 className="page-title">What I can already do</h2>
        <p className="page-text">
          Picked up through coursework, this bootcamp, and the sales role on my résumé.
        </p>
        {SKILL_GROUPS.map((g) => (
          <div className="about-block" key={g.title}>
            <p className="about-block-title">{g.title}</p>
            <div className="tag-row">
              {g.items.map((i) => <span className="tag" key={i}>{i}</span>)}
            </div>
          </div>
        ))}
        <a className="next-link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('resume') }}>
          See the full r&eacute;sum&eacute; <span className="arrow">→</span>
        </a>
      </div>
    </div>
  )
}

function Resume({ onNavigate, onHome }) {
  return (
    <div className="page-shell fade-in">
      <GhostNum page="resume" />
      <CornerNav page="resume" onHome={onHome} />
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
        <a className="next-link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact') }}>
          Get in touch <span className="arrow">→</span>
        </a>
      </div>
    </div>
  )
}

function Contact({ onHome }) {
  return (
    <div className="page-shell fade-in">
      <GhostNum page="contact" />
      <CornerNav page="contact" onHome={onHome} />
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

const PAGES = { about: About, journey: Journey, skills: Skills, resume: Resume, contact: Contact }

function App() {
  const [page, setPage] = useState('home')

  if (page === 'home') {
    return (
      <div className="stage">
        <Home onNavigate={setPage} />
      </div>
    )
  }

  const Page = PAGES[page]
  return (
    <div className="stage">
      <Page onNavigate={setPage} onHome={() => setPage('home')} />
    </div>
  )
}

export default App
