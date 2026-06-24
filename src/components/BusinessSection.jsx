import VolumeDiagram from './VolumeDiagram'
import { businessModels } from '../data/content'
import { Reveal } from './Navigation'

export default function BusinessSection() {
  return (
    <section id="business" className="section">
      <Reveal direction="left">
        <div className="section-label">10 · Modelos financieros posibles</div>
        <h2 className="section-title">Escenarios de propiedad y uso</h2>
        <p className="section-lead">
          Más allá del uso interno de la oficina, el escáner abre posibilidades de uso extendido en proyectos personales
          y servicios a terceros. Tres escenarios según quién asume la inversión y cómo se reparte el uso, todos abiertos
          a negociación.
        </p>
      </Reveal>

      {businessModels.map((model, i) => (
        <Reveal key={model.num} delay={i * 100} direction={i % 2 === 0 ? 'left' : 'right'}>
          <article className="bm-card">
            <div className="bm-header">
              <div className="bm-icon" style={{ background: model.iconBg }}>{model.icon}</div>
              <div className="bm-meta">
                <div className="bm-num">{model.num}</div>
                <div className="bm-title">{model.title}</div>
                <div className="bm-sub">{model.sub}</div>
              </div>
            </div>

            {model.volumeDiagram ? (
              <div className="tiers-block">
                <h3 className="tiers-heading">Tarifas garantizadas por tipo de proyecto</h3>
                <VolumeDiagram />
              </div>
            ) : (
              <div className="bm-inner-grid">
                {model.variants.map((v, j) => (
                  <Reveal key={v.title} delay={j * 60} direction="up">
                    <div className="bm-variant" style={{ background: v.bg }}>
                      <div className={`vt ${v.accent ? 'vt--accent' : ''}`}>{v.title}</div>
                      <p>{v.desc}</p>
                      {v.investment && <div className="vi">{v.investment}</div>}
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            <div className="tags-row">
              {model.tags.map((tag) => (
                <span key={tag.text} className={`tag tag-${tag.variant}`}>{tag.text}</span>
              ))}
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  )
}
