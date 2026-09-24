const GHOST_NUM = { about: '01', journey: '02', skills: '03', resume: '04', contact: '05' }
const PAGE_LABELS = { about: 'About', journey: 'Journey', skills: 'Skills', resume: 'Résumé', contact: 'Contact' }

export function CornerNav({ page, onHome }) {
  return (
    <>
      <a className="corner-brand" href="#" onClick={(e) => { e.preventDefault(); onHome() }}>
        <span className="arrow">←</span> Richlove Gyimah
      </a>
      <span className="corner-mark">{PAGE_LABELS[page]}</span>
    </>
  )
}

export function GhostNum({ page }) {
  return <span className="ghost-num" aria-hidden="true">{GHOST_NUM[page]}</span>
}
