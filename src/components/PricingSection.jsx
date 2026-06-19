import ExternalLink from './ExternalLink'
import { Reveal } from './Navigation'
import { links } from '../data/links'
import { priceCards } from '../data/content'

const cardLinks = {
  'Raven Standard': links.ravenStandard,
  'Raven Max RTK': links.ravenMax,
  'SL9 SLAM RTK': links.sl9,
  'Cygnus Lite': links.cygnusLite,
}

export default function PricingSection() {
  return (
    <section id="pricing" className="section">
      <Reveal direction="left">
        <div className="section-label">05 · Comparativo de precios</div>
        <h2 className="section-title">Distribuidores locales vs. importación</h2>
      </Reveal>

      <div className="price-banner">
        {priceCards.map((card, i) => (
          <Reveal key={card.name} delay={i * 70} direction="scale">
            <div className={`price-card ${card.variant === 'featured' ? 'featured' : ''} ${card.variant === 'budget' ? 'budget' : ''}`}>
              {card.badge && <div className="pc-rec-badge">{card.badge}</div>}
              <div className={`name ${card.variant === 'budget' ? 'name--amber' : ''}`}>
                <ExternalLink href={cardLinks[card.name]}>{card.name}</ExternalLink>
              </div>
              <div className="vendor">{card.vendor}</div>
              <div className="p-usd">{card.usd}</div>
              <div className="p-crc">{card.crc}</div>
              <div className="p-note">{card.note}</div>
              {card.extra && (
                <div className={`p-note ${card.extraColor === 'red' ? 'p-note--red' : ''}`} style={{ marginTop: 6 }}>
                  {card.extra}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={80} direction="up">
        <div className="roi-pill">
          <div className="roi-big">6–8×</div>
          <div className="roi-text">
            El Raven Standard cuesta entre 6 y 8 veces menos que las alternativas con distribuidor local.
            El Raven Max RTK, entre 3 y 4 veces menos. Ambos tienen la misma precisión LiDAR para interiorismo;
            la diferencia está en el tiempo de escaneo en campo y la posibilidad de proyectos personales.
          </div>
        </div>
      </Reveal>
    </section>
  )
}
