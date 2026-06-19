import Badge from './Badge'
import { Reveal } from './Navigation'
import { meta } from '../data/content'

export default function Header() {
  return (
    <header className="page-header">
      <Reveal>
        <div className="page-header__meta">
          <Badge variant="teal">{meta.company}</Badge>
          <span className="page-header__date">
            {meta.date} · TC referencia: {meta.exchangeRate}
          </span>
        </div>
        <h1 className="page-header__title">{meta.title}</h1>
        <p className="page-header__subtitle">{meta.subtitle}</p>
      </Reveal>
    </header>
  )
}
