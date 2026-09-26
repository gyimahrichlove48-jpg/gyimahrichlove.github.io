import { useState } from 'react'
import './App.css'
import { CornerNav, GhostNum } from './components/PageChrome'
import Skills from './components/Skills'
import Contact from './components/Contact'

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
]

function Home({ onNavigate }) {
  return (
    <div className="home fade-in">
      <img className="home-photo" src="/profile.jpg" alt="Richlove Gyimah" />
      <span className="home-right-caption">Tarkwa, Ghana</span>
      <div className="home-left">
        <span className="home-eyebrow">Chemical engineering student &middot; OHS certified</span>
        <h1 className="home-name">Richlove Gyimah</h1>
        <p className="home-tag">
          Aspiring Chemical Engineer passionate about science, technology, innovation, and
          problem-solving. I enjoy learning how things work, turning challenges into
          opportunities, and continuously developing the skills needed to create practical
          solutions and make a meaningful impact.
        </p>
        <p className="home-tagline">Curious mind. Creative thinker. Future engineer.</p>
        <div className="home-cta-row">
          <a
            className="btn btn-accent"
            href="#"
            onClick={(e) => { e.preventDefault(); onNavigate('about') }}
          >
            View my work <span>→</span>
          </a>
          <a
            className="btn btn-outline-light"
            href="#"
            onClick={(e) => { e.preventDefault(); onNavigate('contact') }}
          >
            Contact me
          </a>
        </div>
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
