import ExternalLink from './ExternalLink'
import { Reveal } from './Navigation'
import { links } from '../data/links'
import { workflowSteps } from '../data/content'

const stepLinks = {
  3: [{ name: 'RayStudio', href: links.rayStudio }],
  4: [
    { name: 'Rhino', href: links.rhino },
    { name: 'SketchUp', href: links.sketchup },
  ],
}

export default function WorkflowSection() {
  return (
    <section id="workflow" className="section">
      <Reveal direction="left">
        <div className="section-label">02 · Flujo de trabajo</div>
        <h2 className="section-title">Del sitio al modelo: cómo funciona en la práctica</h2>
        <p className="section-lead">
          Incorporar el escáner no es solo comprarlo: implica un proceso con pasos definidos desde la visita de campo
          hasta la geometría utilizable en{' '}
          <ExternalLink href={links.rhino}>Rhino</ExternalLink> o{' '}
          <ExternalLink href={links.sketchup}>SketchUp</ExternalLink>.
        </p>
      </Reveal>

      <div className="workflow-grid">
        {workflowSteps.map((step, i) => (
          <Reveal
            key={step.num}
            delay={i * 70}
            direction={i % 2 === 0 ? 'up' : 'scale'}
            className="workflow-grid__item"
          >
            <div className="wf-step">
              <div className="wf-step__connector" aria-hidden="true" />
              <div className="wf-icon">{step.icon}</div>
              <div className="wf-num">{step.num}</div>
              <div className="wf-label">{step.label}</div>
              <div className="wf-desc">{step.desc}</div>
              {stepLinks[step.num] && (
                <div className="wf-links">
                  {stepLinks[step.num].map((link) => (
                    <ExternalLink key={link.name} href={link.href}>
                      {link.name}
                    </ExternalLink>
                  ))}
                </div>
              )}
              <span className="wf-time">{step.time}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
