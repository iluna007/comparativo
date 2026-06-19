import { Reveal } from './Navigation'
import ExternalLink from './ExternalLink'
import { links } from '../data/links'
import { introConcepts } from '../data/content'

const lidarSteps = [
  { label: '💡 Pulsos láser' },
  { label: '📡 Rebote en superficies' },
  { label: '☁️ Nube de puntos 3D' },
  {
    label: '📐 Geometría en',
    links: [
      { name: 'Rhino', href: links.rhino },
      { name: 'SketchUp', href: links.sketchup },
    ],
  },
  { label: '✅ Modelo as-built' },
]

export default function IntroSection() {
  return (
    <section id="intro" className="section">
      <Reveal direction="left">
        <div className="section-label">01 · Introducción</div>
      </Reveal>

      <Reveal delay={80} direction="scale">
        <div className="intro-hero">
          <div className="intro-hero__glow" aria-hidden="true" />
          <div className="intro-hero__grid-bg" aria-hidden="true" />
          <h2>¿Qué es un escáner LiDAR 3D?</h2>
          <p>
            Un escáner LiDAR (Light Detection and Ranging) emite miles de pulsos de láser por segundo en todas las direcciones.
            Cada pulso rebota en las superficies del entorno y regresa al sensor; midiendo el tiempo de retorno, el equipo calcula
            la distancia exacta a cada punto. El resultado es una <strong>nube de puntos</strong>: una representación tridimensional
            densa y coloreada del espacio, capturada en minutos.
          </p>

          <div className="lidar-flow">
            {lidarSteps.map((step, i) => (
              <span key={step.label} className="lidar-flow__group">
                <span className="lidar-step">
                  {step.label}
                  {step.links && (
                    <>
                      {' '}
                      {step.links.map((link, j) => (
                        <span key={link.name}>
                          {j > 0 && ' / '}
                          <ExternalLink href={link.href} className="ext-link--light">
                            {link.name}
                          </ExternalLink>
                        </span>
                      ))}
                    </>
                  )}
                </span>
                {i < lidarSteps.length - 1 && <span className="lidar-arrow" aria-hidden="true">→</span>}
              </span>
            ))}
          </div>

          <div className="intro-concept-grid">
            {introConcepts.map((concept, i) => (
              <Reveal key={concept.title} delay={i * 90} direction="up">
                <div className="intro-concept">
                  <div className="ic-icon">{concept.icon}</div>
                  <div className="ic-title">{concept.title}</div>
                  <div className="ic-desc">{concept.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={120} direction="right">
        <div className="video-block">
          <div className="video-block__label">
            <span aria-hidden="true">▶</span>
            <span>
              Video explicativo ·{' '}
              <ExternalLink href={links.lidarVideo}>What is LiDAR Scanning?</ExternalLink>
            </span>
          </div>
          <a
            href={links.lidarVideo}
            target="_blank"
            rel="noopener noreferrer"
            className="video-block__link"
          >
            <img
              src="https://img.youtube.com/vi/dsBjuJ-zc6E/maxresdefault.jpg"
              alt="What is LiDAR Scanning? — YouTube"
            />
            <div className="video-block__overlay">
              <div className="video-block__play">
                <span className="video-block__triangle" />
              </div>
            </div>
            <div className="video-block__caption">
              <div className="video-block__title">What is LiDAR Scanning?</div>
              <div className="video-block__url">youtube.com · hacer clic para ver</div>
            </div>
          </a>
        </div>
      </Reveal>
    </section>
  )
}
