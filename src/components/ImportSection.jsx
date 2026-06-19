import ExternalLink from './ExternalLink'
import { Reveal } from './Navigation'
import { links } from '../data/links'
import { importOptions } from '../data/content'

const optionLinks = {
  'Tiendamia': links.tiendamia,
  'Importación directa': links.makerPro,
  'Vía maleta — declarado': links.makerPro,
  'Vía maleta — sin declarar': links.makerPro,
}

export default function ImportSection() {
  return (
    <section id="import" className="section">
      <Reveal direction="left">
        <div className="section-label">06 · Opciones de importación</div>
        <h2 className="section-title">Cómo adquirir e ingresar el Raven a Costa Rica</h2>
        <p className="section-lead">
          El Raven Max RTK no tiene distribuidor en Costa Rica. Compra directa en{' '}
          <ExternalLink href={links.makerPro}>3DMakerPro</ExternalLink> o vía{' '}
          <ExternalLink href={links.tiendamia}>Tiendamia</ExternalLink>. Cuatro vías con costo total,
          desglose, plazo y trámite en cada tarjeta.
        </p>
      </Reveal>

      <div className="import-grid">
        {importOptions.map((opt, i) => (
          <Reveal key={opt.label} delay={i * 70} direction={i % 2 === 0 ? 'left' : 'right'}>
            <article className="import-card">
              <div className="op-label">{opt.label}</div>
              <div className="op-name">
                {optionLinks[opt.name] ? (
                  <ExternalLink href={optionLinks[opt.name]}>{opt.name}</ExternalLink>
                ) : (
                  opt.name
                )}
              </div>
              <div className="op-sub">{opt.sub}</div>
              <div className="op-total-usd">{opt.totalUsd}</div>
              <div className="op-total-crc">{opt.totalCrc}</div>
              {opt.breakdown.map((line) => (
                <div key={line.label} className="br">
                  <span className="bl">{line.label}</span>
                  <span className="bv">{line.value}</span>
                </div>
              ))}
              <div className="import-meta">
                <div className="import-meta__item">
                  <span className="import-meta__label">Plazo</span>
                  <span className="import-meta__val">{opt.plazo}</span>
                </div>
                <div className="import-meta__item">
                  <span className="import-meta__label">Trámite</span>
                  <span className="import-meta__val">{opt.tramite}</span>
                </div>
              </div>
              <p className="op-note">{opt.note}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
