import ExternalLink from './ExternalLink'
import { Reveal } from './Navigation'
import { links } from '../data/links'
import { feeItems } from '../data/content'

export default function ROISection() {
  return (
    <section id="roi" className="section">
      <Reveal direction="left">
        <div className="section-label">07 · Retorno sobre la inversión</div>
        <h2 className="section-title">La digitalización como servicio facturable</h2>
        <p className="section-lead">
          El proceso de escaneo representa trabajo profesional facturable: desplazamiento, tiempo de campo,
          procesamiento y modelado. Desglose orientativo para un proyecto en Jacó desde San José.
        </p>
      </Reveal>

      <Reveal delay={80} direction="scale">
        <div className="fee-box">
          <h3>Fee estimado por proyecto de digitalización as-built</h3>
          <p className="fee-box__sub">
            Viaje Jacó desde San José con pernoctación · escaneo · procesamiento · modelado en{' '}
            <ExternalLink href={links.rhino}>Rhino</ExternalLink> /{' '}
            <ExternalLink href={links.sketchup}>SketchUp</ExternalLink>
          </p>
          <div className="fee-grid">
            {feeItems.map((item) => (
              <div key={item.label} className={`fee-item ${item.total ? 'total' : ''}`}>
                <div className="fi-label">{item.label}</div>
                <div className="fi-val">{item.usd}</div>
                <div className="fi-crc">{item.crc}</div>
              </div>
            ))}
          </div>
          <p className="fee-box__foot">
            Con un fee de $600 / ₡273,000 por proyecto, la inversión en el equipo se recupera en{' '}
            <strong>5–8 proyectos</strong> (según canal de compra), sin contar el ahorro en re-mediciones y errores de diseño.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
