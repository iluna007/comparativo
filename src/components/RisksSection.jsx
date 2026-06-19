import Badge from './Badge'
import ExternalLink from './ExternalLink'
import { Reveal } from './Navigation'
import { links } from '../data/links'
import { risks } from '../data/content'

export default function RisksSection() {
  return (
    <section id="risks" className="section">
      <Reveal direction="left">
        <div className="section-label">08 · Consideraciones</div>
        <h2 className="section-title">Riesgos del Raven</h2>
      </Reveal>

      <div className="risk-grid">
        {risks.map((risk, i) => (
          <Reveal key={risk.title} delay={i * 80} direction={i === 0 ? 'left' : 'right'}>
            <article className="risk-item">
              <div className="rt">
                <Badge variant="amber">{risk.badge}</Badge>
                <span>{risk.title}</span>
              </div>
              <p>
                {risk.title === 'Sin distribuidor local' ? (
                  <>
                    El soporte técnico es remoto (correo,{' '}
                    <ExternalLink href={links.makerProForum}>foro 70k+ usuarios</ExternalLink>, chat en 3DMakerPro).
                    En caso de falla de hardware, la garantía opera por envío internacional.
                  </>
                ) : (
                  <>
                    <ExternalLink href={links.rayStudio}>RayStudio</ExternalLink> requiere Windows 11, i7, 32–64 GB RAM
                    y GPU NVIDIA RTX 3060 mínimo para Gaussian Splatting. Para nube de puntos y mediciones básicas los
                    requisitos son menores.
                  </>
                )}
              </p>
              <div className="rn">{risk.note}</div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function ConclusionSection() {
  return (
    <section id="conclusion" className="section">
      <Reveal direction="scale">
        <div className="conclusion-box">
          <h2>Conclusión</h2>
          <p>
            Para las necesidades de la oficina —levantar as-built de interiores, eliminar re-mediciones, tener un modelo
            único que el equipo pueda capturar in situ en Jacó o San José— el Raven Max RTK presenta especificaciones
            suficientes a un precio considerablemente menor que las alternativas con distribuidor local. Su precisión de
            2 cm cubre los requerimientos de interiorismo residencial y sus formatos de exportación (E57, OBJ) son
            compatibles con <ExternalLink href={links.rhino}>Rhino</ExternalLink> y{' '}
            <ExternalLink href={links.sketchup}>SketchUp</ExternalLink>.
          </p>
          <p>
            Los equipos <ExternalLink href={links.satLab}>SatLab</ExternalLink> están orientados a ingeniería civil y agrimensura.
            La diferencia de precio —entre $5,451 y $7,626 USD (₡2,480,205–₡3,469,830)— no se traduce en mejor resultado
            para el caso de uso específico de la empresa.
          </p>
          <p>
            El proceso de digitalización puede estructurarse como un servicio facturable (~$600 / ₡273,000 por proyecto),
            permitiendo recuperar la inversión en 5–8 proyectos y agregar valor medible al servicio de diseño.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
