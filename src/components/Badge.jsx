const variants = {
  green: 'badge-green',
  amber: 'badge-amber',
  teal: 'badge-teal',
  blue: 'badge-blue',
  gray: 'badge-gray',
}

export default function Badge({ children, variant = 'teal' }) {
  return <span className={`badge ${variants[variant]}`}>{children}</span>
}

export function CellValue({ value }) {
  if (typeof value === 'string') return value

  const classMap = {
    check: 'check',
    partial: 'partial',
    cross: 'cross',
    strong: 'cell-strong',
  }

  const cls = classMap[value.type] || ''
  if (value.type === 'strong') {
    return <strong>{value.text}</strong>
  }
  return <span className={cls}>{value.text}</span>
}
