import { navSections } from '../data/content'
import { useScrollReveal, useActiveSection } from '../hooks/useScrollReveal'

export default function SideNav() {
  const sectionIds = navSections.map((s) => s.id)
  const activeId = useActiveSection(sectionIds)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="side-nav" aria-label="Secciones del documento">
      <div className="side-nav__inner">
        {navSections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={`side-nav__item ${activeId === section.id ? 'is-active' : ''}`}
            onClick={() => scrollTo(section.id)}
          >
            <span className="side-nav__num">{section.num}</span>
            <span className="side-nav__label">{section.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export function ScrollProgress({ progress }) {
  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  )
}

export function Reveal({ children, className = '', delay = 0, direction = 'up', once = false }) {
  const [ref, visible] = useScrollReveal(0.1, once)

  return (
    <div
      ref={ref}
      className={`reveal reveal--${direction} ${visible ? 'is-visible' : 'is-hidden'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
