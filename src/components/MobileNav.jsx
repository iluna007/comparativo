import { useState } from 'react'
import { navSections } from '../data/content'
import { useActiveSection } from '../hooks/useScrollReveal'

export default function MobileNav() {
  const sectionIds = navSections.map((s) => s.id)
  const activeId = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav__toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="mobile-nav__current">
          {navSections.find((s) => s.id === activeId)?.num} ·{' '}
          {navSections.find((s) => s.id === activeId)?.label}
        </span>
        <span className="mobile-nav__chevron" aria-hidden="true">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="mobile-nav__menu">
          {navSections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`mobile-nav__item ${activeId === section.id ? 'is-active' : ''}`}
              onClick={() => scrollTo(section.id)}
            >
              <span>{section.num}</span>
              {section.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
