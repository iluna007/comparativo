import Badge from './Badge'
import ExternalLink from './ExternalLink'
import { Reveal } from './Navigation'
import { links } from '../data/links'
import { officeUseCases, personalUseCases } from '../data/content'

const linkLabels = {
  rhino: 'Rhino',
  sketchup: 'SketchUp',
  cloudCompare: 'CloudCompare',
  rayStudio: 'RayStudio',
  enscape: 'Enscape',
}

function UseCaseCard({ useCase }) {
  return (
    <article className="uc-card">
      <div className="uc-icon" style={{ background: useCase.bg }}>{useCase.icon}</div>
      <div className="uc-body">
        <div className="uc-title">{useCase.title}</div>
        <p>{useCase.desc}</p>
        {useCase.linkKeys?.length > 0 && (
          <p className="uc-links">
            Compatible con{' '}
            {useCase.linkKeys.map((key, i) => (
              <span key={key}>
                {i > 0 && (i === useCase.linkKeys.length - 1 ? ' y ' : ', ')}
                <ExternalLink href={links[key]}>{linkLabels[key] || key}</ExternalLink>
              </span>
            ))}
            .
          </p>
        )}
        <div className="uc-badge">
          <Badge variant={useCase.badge.variant}>{useCase.badge.text}</Badge>
        </div>
      </div>
    </article>
  )
}

function UseCaseGrid({ items, startDelay = 0 }) {
  return (
    <div className="use-case-grid">
      {items.map((uc, i) => (
        <Reveal key={uc.title} delay={startDelay + i * 80} direction={i % 2 === 0 ? 'left' : 'right'}>
          <UseCaseCard useCase={uc} />
        </Reveal>
      ))}
    </div>
  )
}

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="section">
      <Reveal direction="left">
        <div className="section-label">03 · Caso de uso</div>
        <h2 className="section-title section-title--split">Dos contextos de uso</h2>
        <p className="section-lead">
          El mismo equipo responde a necesidades distintas según quién lo opera: la operación diaria de la oficina
          y el uso personal fuera del horario de NID.
        </p>
      </Reveal>

      <div className="use-case-block use-case-block--office">
        <Reveal direction="left" delay={40}>
          <div className="use-case-block__header">
            <span className="use-case-block__tag use-case-block__tag--office">Natural Instinct Designs</span>
            <h3 className="use-case-block__title">Para qué lo necesita la oficina</h3>
            <p className="use-case-block__sub">
              Documentación as-built, verificación en obra, diseño sobre geometría real, renders in situ
              y recorridos inmersivos para presentar y validar propuestas.
            </p>
          </div>
        </Reveal>
        <UseCaseGrid items={officeUseCases} startDelay={60} />
      </div>

      <div className="use-case-divider" aria-hidden="true">
        <span className="use-case-divider__line" />
        <span className="use-case-divider__label">Uso personal</span>
        <span className="use-case-divider__line" />
      </div>

      <div className="use-case-block use-case-block--personal">
        <Reveal direction="right" delay={40}>
          <div className="use-case-block__header">
            <span className="use-case-block__tag use-case-block__tag--personal">Fuera de la oficina</span>
            <h3 className="use-case-block__title">Para qué lo ocupo yo</h3>
            <p className="use-case-block__sub">
              Escaneos y documentación fuera del horario de NID: viviendas propias, estudios independientes
              y colaboraciones puntuales con libertad de uso del equipo.
            </p>
          </div>
        </Reveal>
        <UseCaseGrid items={personalUseCases} startDelay={60} />
      </div>

      <Reveal delay={100} direction="up">
        <p className="section-note">
          Los equipos{' '}
          <ExternalLink href={links.satLab}>SatLab</ExternalLink> (SL9 y Cygnus Lite) están diseñados para topografía
          profesional: catastro, minería, ingeniería civil. Sus capacidades GNSS avanzadas son necesarias para una empresa
          de agrimensura, no para una oficina de interiorismo que documenta apartamentos y casas de playa. En Costa Rica
          se adquieren vía{' '}
          <ExternalLink href={links.satCr}>SAT CR</ExternalLink> y{' '}
          <ExternalLink href={links.geotecnologias}>Geotecnologías</ExternalLink>.
        </p>
      </Reveal>
    </section>
  )
}
