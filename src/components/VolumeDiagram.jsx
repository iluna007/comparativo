import { Reveal } from './Navigation'

const P = {
  black: '#0d0d0d',
  charcoal: '#1f2124',
  mustard: '#c8a11e',
  yellow: '#ffcf4b',
  cream: '#f1f1ef',
}

const TIERS = [
  {
    label: 'Pequeño',
    area: '~100 m²',
    volume: 500,
    price: 575,
    priceCRC: '¢265,175',
    color: P.charcoal,
    colorLight: P.cream,
    dark: true,
    floors: 3,
    width: 42,
  },
  {
    label: 'Mediana',
    area: '~200 m²',
    volume: 1500,
    price: 750,
    priceCRC: '¢345,750',
    color: P.mustard,
    colorLight: P.cream,
    floors: 5,
    width: 56,
  },
  {
    label: 'Grande',
    area: '~300 m²',
    volume: 2700,
    price: 950,
    priceCRC: '¢437,950',
    color: P.yellow,
    colorLight: P.cream,
    bright: true,
    floors: 7,
    width: 70,
  },
  {
    label: 'Muy Grande',
    area: '~400 m²+',
    volume: 5000,
    price: 1100,
    priceCRC: '¢507,100',
    color: P.black,
    colorLight: P.yellow,
    dark: true,
    floors: 10,
    width: 88,
  },
]

const FLOOR_H = 14
const BASE_Y = 248
const GAP = 48
const LABEL_Y = BASE_Y + 22
const SVG_W = 560
const SVG_H = 328

function Building({ tier, x }) {
  const h = tier.floors * FLOOR_H
  const y = BASE_Y - h
  const cx = x + tier.width / 2
  const priceFill = tier.bright ? P.charcoal : tier.dark ? P.yellow : P.black
  const badgeTextFill = tier.dark ? P.black : tier.bright ? P.charcoal : P.mustard
  const windowFill = tier.dark ? P.yellow : P.cream

  const windows = []
  for (let f = 0; f < tier.floors; f++) {
    const wy = y + f * FLOOR_H + 3
    const cols = Math.floor(tier.width / 14)
    for (let c = 0; c < cols; c++) {
      windows.push(
        <rect
          key={`w-${f}-${c}`}
          x={x + 4 + c * 14}
          y={wy}
          width={7}
          height={7}
          rx={1}
          fill={windowFill}
          opacity={0.9}
        />,
      )
    }
  }

  const perM3 = (tier.price / tier.volume).toFixed(2)

  return (
    <g>
      <rect
        x={x + 3}
        y={y + 3}
        width={tier.width}
        height={h}
        rx={3}
        fill="rgba(0,0,0,0.08)"
      />
      <rect
        x={x}
        y={y}
        width={tier.width}
        height={h}
        rx={3}
        fill={tier.color}
      />
      {windows}
      <rect x={x} y={y} width={tier.width} height={4} rx={3} fill="rgba(255,255,255,0.15)" />

      <text
        x={cx}
        y={y - 42}
        textAnchor="middle"
        fontFamily="'Fraunces', Georgia, serif"
        fontWeight="700"
        fontSize="15"
        fill={priceFill}
      >
        ${tier.price}
      </text>
      <text
        x={cx}
        y={y - 28}
        textAnchor="middle"
        fontFamily="'DM Sans', sans-serif"
        fontWeight="500"
        fontSize="10"
        fill={P.charcoal}
      >
        {tier.priceCRC}
      </text>
      <rect
        x={cx - 24}
        y={y - 20}
        width={48}
        height={16}
        rx={8}
        fill={tier.colorLight}
      />
      <text
        x={cx}
        y={y - 9}
        textAnchor="middle"
        fontFamily="'DM Sans', sans-serif"
        fontWeight="600"
        fontSize="10"
        fill={badgeTextFill}
      >
        ${perM3}/m³
      </text>

      <line
        x1={x - 4}
        y1={BASE_Y + 1}
        x2={x + tier.width + 4}
        y2={BASE_Y + 1}
        stroke={tier.color}
        strokeWidth={2}
        strokeLinecap="round"
      />

      <text
        x={cx}
        y={LABEL_Y + 6}
        textAnchor="middle"
        fontFamily="'DM Sans', sans-serif"
        fontWeight="600"
        fontSize="11"
        fill={P.black}
      >
        {tier.label}
      </text>
      <text
        x={cx}
        y={LABEL_Y + 20}
        textAnchor="middle"
        fontFamily="'DM Sans', sans-serif"
        fontSize="10"
        fill={P.charcoal}
      >
        {tier.volume.toLocaleString()} m³
      </text>
      <text
        x={cx}
        y={LABEL_Y + 33}
        textAnchor="middle"
        fontFamily="'DM Sans', sans-serif"
        fontSize="10"
        fill={P.charcoal}
      >
        {tier.area}
      </text>
    </g>
  )
}

export default function VolumeDiagram() {
  const totalWidth = TIERS.reduce((s, t) => s + t.width, 0) + GAP * (TIERS.length - 1)
  const startX = (SVG_W - totalWidth) / 2

  const positions = []
  let cursor = startX
  TIERS.forEach((t) => {
    positions.push(cursor)
    cursor += t.width + GAP
  })

  const curvePoints = TIERS.map((t, i) => {
    const cx = positions[i] + t.width / 2
    const perM3 = t.price / t.volume
    const maxPerM3 = TIERS[0].price / TIERS[0].volume
    const cy = BASE_Y - 168 - (1 - perM3 / maxPerM3) * 80
    return { cx, cy, perM3 }
  })

  const pathD = curvePoints
    .map((p, i) => (i === 0 ? `M ${p.cx} ${p.cy}` : `L ${p.cx} ${p.cy}`))
    .join(' ')

  return (
    <Reveal delay={100} direction="up">
      <div className="vd-wrap">
        <div className="vd-header">
          <span className="vd-title">Costo por m³ escaneado según volumen de proyecto</span>
          <span className="vd-note">NID garantiza un mínimo mensual — a mayor volumen, menor costo unitario.</span>
        </div>

        <div className="vd-scroll">
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Diagrama de edificios mostrando precio por m³ para 4 tipos de proyecto"
          >
          {[0, 40, 80, 120, 160].map((offset) => (
            <line
              key={offset}
              x1={startX - 8}
              y1={BASE_Y - offset}
              x2={SVG_W - startX + 8}
              y2={BASE_Y - offset}
              stroke={P.cream}
              strokeWidth={0.5}
              strokeDasharray="3 4"
            />
          ))}

          <path
            d={pathD}
            fill="none"
            stroke={P.mustard}
            strokeWidth={1.5}
            strokeDasharray="4 3"
            opacity={0.55}
          />
          {curvePoints.map((p, i) => (
            <circle key={i} cx={p.cx} cy={p.cy} r={3} fill={P.mustard} opacity={0.65} />
          ))}

          {TIERS.map((tier, i) => (
            <Building key={tier.label} tier={tier} x={positions[i]} />
          ))}
          </svg>
        </div>
      </div>
    </Reveal>
  )
}
