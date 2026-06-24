import VolumeDiagram from './VolumeDiagram'
import { Reveal } from './Navigation'
import { financingProposal } from '../data/content'

export default function FinancingSection() {
  const { sectionNum, title } = financingProposal

  return (
    <section id="financing" className="section">
      <Reveal direction="left">
        <div className="section-label">{sectionNum} · Propuesta</div>
        <h2 className="section-title">{title}</h2>
      </Reveal>

      <div className="tiers-block">
        <Reveal delay={80} direction="left">
          <h3 className="tiers-heading">Tarifas garantizadas por tipo de proyecto</h3>
        </Reveal>

        <VolumeDiagram />
      </div>
    </section>
  )
}
