export default function ExternalLink({ href, children, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`ext-link ${className}`}
    >
      {children}
      <span className="ext-link__icon" aria-hidden="true">↗</span>
    </a>
  )
}
