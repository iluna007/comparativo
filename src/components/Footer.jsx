import ExternalLink from './ExternalLink'
import { Reveal } from './Navigation'
import { links } from '../data/links'
import { productCta } from '../data/content'

export default function Footer() {
  return (
    <footer className="page-footer">
      <Reveal direction="up">
        <div className="product-cta">
          <div>
            <div className="product-cta__label">Producto de referencia</div>
            <div className="product-cta__name">
              {productCta.name}{' '}
              <span className="product-cta__detail">{productCta.detail}</span>
            </div>
            <div className="product-cta__price">
              <ExternalLink href={links.makerPro}>{productCta.vendor}</ExternalLink> ·{' '}
              <strong>{productCta.priceUsd}</strong> /{' '}
              <strong>{productCta.priceCrc}</strong>{' '}
              <span className="product-cta__note">{productCta.note}</span>
            </div>
          </div>
          <a href={productCta.url} target="_blank" rel="noopener noreferrer" className="cta-btn">
            Ver producto →
          </a>
        </div>
      </Reveal>
    </footer>
  )
}
