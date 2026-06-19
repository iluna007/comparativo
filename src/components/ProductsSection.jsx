import { Fragment } from 'react'
import ExternalLink from './ExternalLink'
import { Reveal } from './Navigation'
import { CellValue } from './Badge'
import { links } from '../data/links'
import { products, ravenCompare, compareTable } from '../data/content'

function ProductCard({ product }) {
  const variantClass = product.variant === 'featured' ? 'featured' : product.variant === 'budget' ? 'budget' : ''
  const productHref = product.productUrl ? links[product.productUrl] : null
  const vendorHref = product.vendorKey ? links[product.vendorKey] : null

  return (
    <article className={`prod-card ${variantClass}`}>
      <a
        href={productHref || vendorHref}
        target="_blank"
        rel="noopener noreferrer"
        className="prod-card__img-link"
      >
        <div className="prod-card__img-wrap">
          <img
            className="pc-img"
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.opacity = '0.3'
            }}
          />
        </div>
      </a>
      <div className="pc-body">
        <div className="pc-tag">{product.tag}</div>
        <div className="pc-name">
          {productHref ? (
            <ExternalLink href={productHref}>{product.name}</ExternalLink>
          ) : (
            product.name
          )}
        </div>
        <div className="pc-vendor">
          {vendorHref ? (
            <ExternalLink href={vendorHref}>3DMakerPro</ExternalLink>
          ) : (
            <ExternalLink href={links.satLab}>SatLab</ExternalLink>
          )}
          {product.distributorKeys && (
            <>
              {' · '}
              {product.distributorKeys.map((key, i) => (
                <span key={key}>
                  {i > 0 && ' / '}
                  <ExternalLink href={links[key]}>
                    {key === 'satCr' ? 'SAT CR' : 'Geotecnologías'}
                  </ExternalLink>
                </span>
              ))}
            </>
          )}
          {!product.distributorKeys && product.vendor.includes('·') && (
            <span className="pc-vendor-detail"> · {product.vendor.split('·').slice(1).join('·')}</span>
          )}
        </div>
        <div className="pc-price-usd">{product.priceUsd}</div>
        <div className="pc-price-crc">{product.priceCrc}</div>
        {product.note && (
          <div className={`pc-note pc-note--${product.noteColor || 'default'}`}>{product.note}</div>
        )}
        {product.rec && <div className="pc-rec">{product.rec}</div>}
      </div>
    </article>
  )
}

function RavenColumn({ data, variant }) {
  return (
    <div className={`rc-col rc-${variant}`}>
      <div className={`rc-label rc-label--${variant}`}>{data.label}</div>
      <div className="rc-header">{data.name}</div>
      <div className={`rc-price rc-price--${variant}`}>{data.price}</div>
      <div className="rc-crc">{data.crc}</div>
      {data.rows.map((row) => (
        <div key={row.label} className="rc-row">
          <span className="rl">{row.label}</span>
          <span className={`rv ${row.highlight ? `rv--${row.highlight}` : ''}`}>{row.value}</span>
        </div>
      ))}
      <p className="rc-note">{data.note}</p>
      <p className={`rc-valid rc-valid--${variant}`}>{data.valid}</p>
    </div>
  )
}

export default function ProductsSection() {
  return (
    <section id="products" className="section">
      <Reveal direction="left">
        <div className="section-label">04 · Comparativo técnico</div>
        <h2 className="section-title">Los cuatro equipos analizados</h2>
        <p className="section-lead">
          Referencias oficiales:{' '}
          <ExternalLink href={links.makerPro}>3DMakerPro</ExternalLink>,{' '}
          <ExternalLink href={links.satLab}>SatLab</ExternalLink>,{' '}
          <ExternalLink href={links.satCr}>SAT CR</ExternalLink>,{' '}
          <ExternalLink href={links.geotecnologias}>Geotecnologías</ExternalLink>.
        </p>
      </Reveal>

      <div className="product-cards">
        {products.map((product, i) => (
          <Reveal key={product.id} delay={i * 70} direction={i % 2 === 0 ? 'left' : 'right'}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={80} direction="scale">
        <div className="raven-box">
          <div className="section-label">¿Cuál Raven comprar?</div>
          <h3>Standard vs. Max RTK: la diferencia que importa</h3>
          <p className="raven-box__lead">
            Ambos tienen la misma precisión LiDAR y los mismos formatos de exportación compatibles con{' '}
            <ExternalLink href={links.rhino}>Rhino</ExternalLink> y{' '}
            <ExternalLink href={links.sketchup}>SketchUp</ExternalLink>. La diferencia está en el número
            de cámaras, el RTK y el tiempo de trabajo en campo.
          </p>
          <div className="raven-compare">
            <RavenColumn data={ravenCompare.standard} variant="std" />
            <RavenColumn data={ravenCompare.max} variant="max" />
          </div>
          <p className="note">{ravenCompare.footnote}</p>
        </div>
      </Reveal>

      <Reveal delay={100} direction="up">
        <div className="table-scroll">
          <table className="compare-table">
            <thead>
              <tr>
                <th style={{ width: '28%' }}>Especificación</th>
                {compareTable.columns.map((col, i) => (
                  <th key={col} className={i === 0 ? 'col-raven' : ''} style={{ width: '24%' }}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareTable.sections.map((section) => (
                <Fragment key={section.title}>
                  <tr className="section-row">
                    <td colSpan={4}>{section.title}</td>
                  </tr>
                  {section.rows.map((row) => (
                    <tr key={row.label}>
                      <td className="row-label">{row.label}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className={i === 0 ? 'col-raven' : ''}>
                          <CellValue value={val} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  )
}
