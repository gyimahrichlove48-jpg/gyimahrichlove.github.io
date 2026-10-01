import { Link } from 'react-router-dom'

const PAGE_LABELS = { about: 'About', journey: 'Journey', skills: 'Skills', resume: 'Résumé', contact: 'Contact' }
const GHOST_NUM = { about: '01', journey: '02', skills: '03', resume: '04', contact: '05' }

export function CornerNav({ page }) {
  return (
    <>
      <Link className="corner-brand" to="/">
        <span className="arrow">←</span> Richlove Gyimah
      </Link>
      <span className="corner-mark">{PAGE_LABELS[page]}</span>
    </>
  )
}

export function GhostNum({ page }) {
  return <span className="ghost-num" aria-hidden="true">{GHOST_NUM[page]}</span>
}
