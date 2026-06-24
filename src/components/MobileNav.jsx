import { useEffect, useState } from 'react'
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

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav__toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="mobile-nav__current">
          {navSections.find((s) => s.id === activeId)?.num} ·{' '}
          {navSections.find((s) => s.id === activeId)?.label}
        </span>
        <span className="mobile-nav__chevron" aria-hidden="true">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <>
          <button
            type="button"
            className="mobile-nav__backdrop"
            aria-label="Cerrar menú de navegación"
            onClick={() => setOpen(false)}
          />
          <div className="mobile-nav__menu" role="listbox">
            {navSections.map((section) => (
              <button
                key={section.id}
                type="button"
                className={`mobile-nav__item ${activeId === section.id ? 'is-active' : ''}`}
                onClick={() => scrollTo(section.id)}
                role="option"
                aria-selected={activeId === section.id}
              >
                <span>{section.num}</span>
                {section.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
