import { Link } from 'react-router-dom'

export default function Home() {
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
          <Link className="btn btn-accent" to="/about">
            View my work <span>→</span>
          </Link>
          <Link className="btn btn-outline-light" to="/contact">
            Contact me
          </Link>
        </div>
      </div>
    </div>
  )
}
