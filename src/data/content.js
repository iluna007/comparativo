export const meta = {
  company: 'Natural Instinct Designs',
  date: 'Junio 2026',
  exchangeRate: '₡455 / USD (Banco General, 18 jun. 2026)',
  title: 'Análisis comparativo: Escáneres 3D LiDAR',
  subtitle: 'Evaluación de opciones para digitalización de obra as-built en proyectos de interiorismo',
}

export const navSections = [
  { id: 'intro', label: 'Introducción', num: '01' },
  { id: 'workflow', label: 'Flujo de trabajo', num: '02' },
  { id: 'use-cases', label: 'Caso de uso', num: '03' },
  { id: 'products', label: 'Comparativo técnico', num: '04' },
  { id: 'pricing', label: 'Precios', num: '05' },
  { id: 'import', label: 'Importación', num: '06' },
  { id: 'roi', label: 'Retorno', num: '07' },
  { id: 'risks', label: 'Consideraciones', num: '08' },
  { id: 'conclusion', label: 'Conclusión', num: '09' },
  { id: 'business', label: 'Modelos de negocio', num: '10' },
  { id: 'financing', label: 'Propuesta NID · Iker', num: '11' },
]

export const introConcepts = [
  {
    icon: '📏',
    title: 'Precisión centimétrica',
    desc: 'Los modelos SLAM ofrecen 1–3 cm de exactitud, suficiente para cualquier detalle de interiorismo.',
  },
  {
    icon: '⚡',
    title: 'Captura en minutos',
    desc: 'Un apartamento de 100 m² se escanea en 15–30 min. Sin estación fija, sin puntos de control.',
  },
  {
    icon: '🗂',
    title: 'Modelo único de referencia',
    desc: 'Reemplaza planos, medidas de cinta y fotos desconectadas por un solo archivo navegable y medible.',
  },
]

export const workflowSteps = [
  { icon: '📍', num: 1, label: 'Visita de campo', desc: 'Desplazamiento al sitio. Reconocimiento del espacio. Preparación del equipo.', time: 'Medio día' },
  { icon: '📡', num: 2, label: 'Escaneo', desc: 'Captura LiDAR del espacio completo: muros, vanos, techo, detalles fijos.', time: '1–3 h in situ' },
  { icon: '⚙️', num: 3, label: 'Procesamiento', desc: 'Importar nube de puntos a RayStudio. Limpieza, alineación y exportación (.E57 / .LAS / .OBJ).', time: '2–4 h' },
  { icon: '📐', num: 4, label: 'Conversión a geometría', desc: 'Trazar geometría operable sobre la nube en Rhino o SketchUp: plantas, cortes, alzados, mobiliario fijo.', time: '3–6 h' },
  { icon: '✅', num: 5, label: 'Verificación de diseño', desc: 'Cruzar el modelo as-built con la propuesta de diseño. Ajustar y confirmar tolerancias.', time: '1–2 h' },
]

export const officeUseCases = [
  {
    icon: '🏗',
    bg: '#FFCF4B',
    title: 'As-built de interiores',
    desc: 'Levantar el estado real de una obra entregada por contratista: muros, vanos, columnas, toma corrientes, luminarias. El Raven genera una nube de puntos RGB completa en una sola pasada.',
    badge: { text: 'Raven: suficiente', variant: 'amber' },
  },
  {
    icon: '📏',
    bg: '#F1F1EF',
    title: 'Verificación de diseño',
    desc: 'Contrastar el modelo de diseño con la realidad de obra. 2 cm de precisión es suficiente para confirmar si un respaldo de cama, un armario o una cocina encaja en el espacio real.',
    badge: { text: 'Raven: suficiente', variant: 'amber' },
  },
 
  {
    icon: '📐',
    bg: '#FFCF4B',
    title: 'Diseño sobre geometría real',
    desc: 'Usar la nube de puntos como base de trabajo: trazar muros, niveles y vanos reales y desarrollar propuestas que respetan tolerancias, inclinaciones e irregularidades del sitio — sin asumir que el espacio es ortogonal. Mobiliario, cocinas y vanos se modelan en coordenadas reales.',
    badge: { text: 'Raven: clave para NID', variant: 'amber' },
    linkKeys: ['rhino', 'sketchup'],
  },
  {
    icon: '🖼',
    bg: '#F1F1EF',
    title: 'Render y visualización in situ',
    desc: 'Insertar mobiliario, materiales o renders dentro de la nube de puntos para ver cómo se comporta un objeto en el espacio real: escala, proporción, luz y relación con elementos existentes antes de producir o instalar.',
    badge: { text: 'Gaussian Splatting + render', variant: 'amber' },
    linkKeys: ['rayStudio', 'enscape', 'rhino'],
  },
  {
    icon: '🥽',
    bg: '#FFCF4B',
    title: 'Recorridos inmersivos y realidad virtual',
    desc: 'Navegar el espacio escaneado en visores 3D o cascos VR: la nube coloreada y el Gaussian Splatting del Raven vinculan el modelo digital con la percepción espacial real — útil para presentar a clientes, validar volumetrías o explorar alternativas in situ.',
    badge: { text: 'Presentación · validación en obra', variant: 'amber' },
    linkKeys: ['rayStudio', 'cloudCompare'],
  },
]

export const personalUseCases = [
  {
    icon: '🎯',
    bg: '#F1F1EF',
    title: 'Proyectos personales',
    desc: 'Documentación espacial de viviendas, estudios propios o colaboraciones fuera de la oficina. Libertad para escanear en fines de semana o proyectos ajenos a NID, con exportación E57 y nubes coloreadas para modelado independiente.',
    badge: { text: 'Raven Max RTK: ideal', variant: 'amber' },
    linkKeys: ['rhino', 'sketchup', 'cloudCompare'],
  },
]

export const products = [
  {
    id: 'raven-std',
    variant: 'budget',
    tag: '▲ Variante básica · uso empresa',
    name: 'Raven Standard',
    vendor: '3DMakerPro · 1 cámara · sin RTK',
    priceUsd: '$1,274 USD',
    priceCrc: '₡579,670 · precio tienda (en oferta)',
    note: 'Más tiempo de escaneo en interiores · sin RTK · solo uso interno oficina',
    noteColor: 'amber',
    image: 'https://store.3dmakerpro.com/cdn/shop/files/3dmakerpro_raven_front.png?v=1773114858&width=600',
    productUrl: 'ravenStandard',
    vendorKey: 'makerPro',
  },
  {
    id: 'raven-max',
    variant: 'featured',
    tag: '✦ Analizado · uso empresa + personal',
    name: 'Raven Max RTK',
    vendor: '3DMakerPro · 2 cámaras · RTK incluido',
    priceUsd: '$2,624 USD',
    priceCrc: '₡1,193,920 · precio tienda (en oferta)',
    rec: '+ impuestos CR según canal · ver sección 6',
    image: 'https://store.3dmakerpro.com/cdn/shop/files/3dmakerpro_raven_front.png?v=1773114858&width=600',
    productUrl: 'ravenMax',
    vendorKey: 'makerPro',
  },
  {
    id: 'sl9',
    variant: 'default',
    tag: 'Distribuidor local CR',
    name: 'SL9 SLAM RTK',
    vendor: 'SatLab · SAT CR / Geotecnologías',
    priceUsd: '$8,075–$8,500 USD',
    priceCrc: '₡3,674,125–₡3,867,500 · con IVA',
    note: '$6,801–$7,226 más caro que el Raven Standard',
    noteColor: 'red',
    image: 'https://www.satlabgeo.com/wp-content/uploads/2025/06/SL-SLAM-RTK-4.webp',
    productUrl: 'sl9',
    vendorKey: 'satLab',
    distributorKeys: ['satCr', 'geotecnologias'],
  },
  {
    id: 'cygnus',
    variant: 'default',
    tag: 'Distribuidor local CR',
    name: 'Cygnus Lite',
    vendor: 'SatLab · SAT CR / Geotecnologías',
    priceUsd: '$9,737–$10,250 USD',
    priceCrc: '₡4,430,335–₡4,663,750 · con IVA',
    note: '$8,463–$8,976 más caro que el Raven Standard',
    noteColor: 'red',
    image: 'https://www.satlabgeo.com/wp-content/uploads/2024/09/2.png',
    productUrl: 'cygnusLite',
    vendorKey: 'satLab',
    distributorKeys: ['satCr', 'geotecnologias'],
  },
]

export const ravenCompare = {
  standard: {
    label: 'Variante básica',
    name: 'Raven Standard',
    price: '$1,274 USD',
    crc: '₡579,670 · precio tienda',
    rows: [
      { label: 'Cámaras', value: '1× 12 MP' },
      { label: 'RTK', value: 'No incluido', highlight: 'red' },
      { label: 'Precisión LiDAR', value: '2 cm @10 m' },
      { label: 'Exportación', value: 'E57, OBJ, LAS…' },
      { label: 'Gaussian Splatting', value: '✓ Sí' },
      { label: 'Tiempo escaneo 100 m²', value: '~3–5 h (más posiciones)', highlight: 'amber' },
      { label: 'Georreferenciación', value: 'No', highlight: 'red' },
    ],
    note: 'La cámara única limita la cobertura de color por posición de escaneo. El equipo necesita más estaciones de escaneo para cubrir el mismo espacio, lo que alarga el tiempo de campo en interiores con mobiliario, tabiques o muchos vanos.',
    valid: '✓ Válido para: uso empresa exclusivo · San José · espacios relativamente abiertos',
  },
  max: {
    label: '✦ Versión analizada',
    name: 'Raven Max RTK',
    price: '$2,624 USD',
    crc: '₡1,193,920 · precio tienda',
    rows: [
      { label: 'Cámaras', value: '2× 12 MP Sony 4K' },
      { label: 'RTK', value: '✓ Módulo incluido', highlight: 'teal' },
      { label: 'Precisión LiDAR', value: '2 cm @10 m' },
      { label: 'Exportación', value: 'E57, OBJ, LAS…' },
      { label: 'Gaussian Splatting', value: '✓ Sí' },
      { label: 'Tiempo escaneo 100 m²', value: '~1.5–3 h (más cobertura)', highlight: 'teal' },
      { label: 'Georreferenciación', value: '✓ Sí', highlight: 'teal' },
    ],
    note: 'Las dos cámaras capturan mayor cobertura por posición, reduciendo el número de estaciones y el tiempo total en campo. El módulo RTK permite georreferenciar la nube de puntos para proyectos en exteriores o personales.',
    valid: '✓ Válido para: empresa + proyectos personales + trabajo externo',
  },
  footnote: 'La diferencia de $1,350 USD (₡614,250) entre Standard y Max RTK se recupera en 2–3 proyectos adicionales de escaneo gracias al menor tiempo en campo que ofrece la versión de dos cámaras.',
}

export const compareTable = {
  columns: ['Raven Max RTK ✦', 'SL9 SLAM RTK', 'Cygnus Lite'],
  sections: [
    {
      title: 'Precisión y alcance',
      rows: [
        { label: 'Precisión en interiores', values: ['2 cm @10 m · 3 cm @20 m', '±2.5 cm', '±2.5 cm'] },
        { label: 'Alcance LiDAR', values: ['40 m @10% · 50 m @80%', '40 m @10% · 70 m @80%', '40 m @10% · 70 m @80%'] },
        { label: 'FOV horizontal / vertical', values: ['360° / 40°', '160° / 59°', '360° / 59°'] },
        { label: 'Puntos / segundo', values: ['150,000', '200,000', '200,000'] },
      ],
    },
    {
      title: 'Hardware',
      rows: [
        { label: 'Peso', values: ['1.1 kg', '1.68 kg', '1.0 kg'] },
        { label: 'RTK integrado', values: [{ type: 'check', text: '✓ Módulo incluido' }, { type: 'check', text: '✓ Nativo' }, { type: 'partial', text: 'RTK básico' }] },
        { label: 'Pantalla', values: ['3.9" AMOLED', '2.8" táctil', 'Vía smartphone'] },
        { label: 'Autonomía', values: ['2 h (intercambiable)', '10 h RTK · 5 h SLAM', '90 min × 2 baterías'] },
        { label: 'Clasificación IP', values: [{ type: 'partial', text: 'No especificada' }, { type: 'check', text: 'IP64' }, { type: 'check', text: 'IP54' }] },
        { label: 'Cámaras', values: ['2× 12 MP Sony 4K', '3× HD', '2× 12 MP HD'] },
      ],
    },
    {
      title: 'Software y flujo de trabajo',
      rows: [
        { label: 'Software incluido', values: ['RayStudio (gratis)', 'Satsurv + Sat-LiDAR', 'SatPoint APP + PC'] },
        { label: 'Exportación', values: ['LAS, PCD, PLY, OBJ, E57, XYZ', 'BLH/NEZ, GNSS', '.las, .pcd, .ply'] },
        { label: 'Compatible Rhino / SketchUp', values: [{ type: 'check', text: '✓ E57, OBJ, LAS' }, { type: 'partial', text: 'Vía conversión' }, { type: 'check', text: '✓ .las, .ply' }] },
        { label: 'Gaussian Splatting', values: [{ type: 'check', text: '✓ Incluido' }, { type: 'cross', text: 'No' }, { type: 'cross', text: 'No' }] },
      ],
    },
    {
      title: 'Soporte y precio final en CR (TC ₡455/USD)',
      rows: [
        { label: 'Distribuidor en CR', values: [{ type: 'cross', text: 'No · importación' }, { type: 'check', text: '✓ SAT + Geotecnologías' }, { type: 'check', text: '✓ SAT + Geotecnologías' }] },
        { label: 'Capacitación', values: [{ type: 'partial', text: 'YouTube + foro online' }, { type: 'check', text: '✓ Presencial · certificado' }, { type: 'check', text: '✓ Presencial · certificado' }] },
        { label: 'Garantía', values: ['2 años', '2 años GNSS · 3 m accesorios', '1 año'] },
        { label: 'Precio base sin impuestos CR', values: [{ type: 'strong', text: '$2,624 / ₡1,193,920' }, '$7,522 / ₡3,422,510', '$9,071 / ₡4,127,305'] },
        { label: 'Precio final con impuestos CR', values: [{ type: 'strong', text: '$2,624–$4,777 / ₡1,193,920–₡2,173,109' }, '$8,075–$8,500 / ₡3,674,125–₡3,867,500', '$9,737–$10,250 / ₡4,430,335–₡4,663,750'] },
      ],
    },
  ],
}

export const priceCards = [
  { name: 'Raven Standard', vendor: '3DMakerPro · 1 cámara', usd: '$1,274 USD', crc: '₡579,670', note: 'precio tienda en oferta · sin RTK', extra: 'Importado: ₡655,200–₡723,450 est.', variant: 'budget' },
  { name: 'Raven Max RTK', vendor: '3DMakerPro · 2 cámaras', usd: '$2,624 USD', crc: '₡1,193,920', note: 'precio tienda en oferta', extra: 'Costo final: ₡1,193,920–₡2,173,109', variant: 'featured', badge: '✦ Analizado' },
  { name: 'SL9 SLAM RTK', vendor: 'SAT CR / Geotecnologías', usd: '$8,075–$8,500', crc: '₡3,674,125–₡3,867,500', note: 'con IVA · precio final CR', extra: '$6,801–$7,226 más caro que Standard', extraColor: 'red' },
  { name: 'Cygnus Lite', vendor: 'SAT CR / Geotecnologías', usd: '$9,737–$10,250', crc: '₡4,430,335–₡4,663,750', note: 'con IVA · precio final CR', extra: '$8,463–$8,976 más caro que Standard', extraColor: 'red' },
]

export const importOptions = [
  {
    label: 'Opción A',
    name: 'Tiendamia',
    sub: 'Intermediario · cotización activa en carrito (Amazon USA)',
    totalUsd: '~$4,777 USD',
    totalCrc: '₡2,173,109',
    breakdown: [
      { label: 'Producto vía Tiendamia', value: '$4,124 / ₡1,876,329' },
      { label: 'Envío a Costa Rica', value: '$15 / ₡6,802' },
      { label: 'Impuestos CR (incluidos)', value: '$637 / ₡289,978' },
    ],
    note: 'Entrega en 10–15 días hábiles. Trámite aduanero gestionado por Tiendamia. Precio más alto por comisión del intermediario sobre precio Amazon.',
    plazo: '10–15 días hábiles',
    tramite: 'Ninguno · Tiendamia gestiona aduana',
  },
  {
    label: 'Opción B',
    name: 'Importación directa',
    sub: '3DMakerPro + courier internacional (DHL / FedEx)',
    totalUsd: '~$3,115–$3,230 USD',
    totalCrc: '₡1,417,325–₡1,469,650',
    breakdown: [
      { label: 'Producto (3DMakerPro)', value: '$2,624 / ₡1,193,920' },
      { label: 'Envío internacional (est.)', value: '$150 / ₡68,250' },
      { label: 'IVA CR 13% (est.)', value: '$341 / ₡155,155' },
      { label: 'Arancel CAFTA electrónica (0–5%)', value: '$0–$131 / ₡0–₡59,605' },
    ],
    note: 'Costos estimativos; IVA 13% en importación formal. Arancel CAFTA-DR frecuentemente 0% para instrumentos de medición — verificar con agente aduanero.',
    plazo: '1–2 semanas',
    tramite: 'Agente aduanero / casillero',
  },
  {
    label: 'Opción C',
    name: 'Vía maleta — declarado',
    sub: 'Alguien viajando desde EE.UU. declara el equipo al ingresar',
    totalUsd: '~$2,965–$3,096 USD',
    totalCrc: '₡1,349,075–₡1,408,680',
    breakdown: [
      { label: 'Producto (3DMakerPro)', value: '$2,624 / ₡1,193,920' },
      { label: 'Franquicia viajero CR', value: '$500 libre de impuestos' },
      { label: 'IVA 13% sobre valor total', value: '$341 / ₡155,155' },
      { label: 'Arancel CAFTA (0–5%)', value: '$0–$131 / ₡0–₡59,605' },
    ],
    note: 'La franquicia de $500 exime ese monto; el resto queda sujeto a IVA y arancel según clasificación arancelaria.',
    plazo: 'Según viaje',
    tramite: 'Declarar en aeropuerto al ingresar',
  },
  {
    label: 'Opción D',
    name: 'Vía maleta — sin declarar',
    sub: 'Equipo fuera de caja, ingresa como pertenencia personal sin declarar',
    totalUsd: '$2,624 USD',
    totalCrc: '₡1,193,920',
    breakdown: [
      { label: 'Producto (3DMakerPro)', value: '$2,624 / ₡1,193,920' },
      { label: 'Impuestos pagados', value: '$0' },
    ],
    note: 'En caso de detección, el art. 242 de la Ley General de Aduanas establece retención del bien y multa equivalente al doble de los impuestos no pagados. Decisión y responsabilidad recaen en el portador.',
    plazo: 'Según viaje',
    tramite: 'Ninguno (riesgo de retención si interceptado)',
  },
]

export const feeItems = [
  { label: 'Transporte ida y vuelta', usd: '~$60', crc: '₡27,300' },
  { label: 'Hospedaje 1 noche', usd: '~$80', crc: '₡36,400' },
  { label: 'Horas profesionales (campo + proceso + modelado)', usd: '~$400', crc: '₡182,000' },
  { label: 'Fee total estimado', usd: '~$600', crc: '₡273,000', total: true },
]

export const risks = [
  {
    badge: 'Atención',
    title: 'Sin distribuidor local',
    desc: 'El soporte técnico es remoto (correo, foro 70k+ usuarios, chat en 3DMakerPro). En caso de falla de hardware, la garantía opera por envío internacional.',
    note: '2 años de garantía incluidos · comunidad activa · producto mecánicamente sencillo.',
  },
  {
    badge: 'Atención',
    title: 'Requisitos de PC para post-proceso',
    desc: 'RayStudio requiere Windows 11, i7, 32–64 GB RAM y GPU NVIDIA RTX 3060 mínimo para Gaussian Splatting. Para nube de puntos y mediciones básicas los requisitos son menores.',
    note: 'Verificar hardware disponible en la oficina antes de la compra.',
  },
]

export const businessModels = [
  {
    num: 'Escenario 1',
    icon: '🏢',
    iconBg: 'var(--teal-light)',
    title: 'La empresa compra el equipo',
    sub: 'NID es propietaria · uso interno con posibilidad de préstamo negociado',
    variants: [
      { title: 'As-built como servicio interno', desc: 'El escaneo se incorpora al fee de proyecto (~$600 / ₡273,000). El equipo se amortiza en 5–8 proyectos. Cata o José aprenden a operarlo para Jacó; el procesamiento y modelado quedan a cargo de quien tenga el criterio técnico.', bg: 'var(--gray-light)' },
      { title: 'Préstamo negociado para uso personal', desc: 'Se define un protocolo de uso fuera de horas de oficina —fines de semana, proyectos personales, colaboraciones puntuales— a cambio de condiciones acordadas: porcentaje de ingresos externos, calendario de disponibilidad u otro arreglo a convenir.', bg: 'var(--gray-light)' },
    ],
    tags: [
      { text: '✓ Riesgo financiero cero para Iker', variant: 'green' },
      { text: '✓ Más fácil de aprobar internamente', variant: 'green' },
      { text: 'Uso personal depende de acuerdo con NID', variant: 'gray' },
    ],
  },
  {
    num: 'Escenario 2',
    icon: '🤝',
    iconBg: 'var(--purple-light)',
    title: 'Modelo compartido',
    sub: 'Propiedad y uso repartidos entre NID e Iker · dos variantes posibles',
    variants: [
      { title: 'Variante A · Co-compra 50/50', desc: 'NID e Iker aportan la mitad cada uno. Se establece un calendario de prioridad: proyectos NID tienen preferencia; fuera de eso el equipo queda disponible para proyectos personales o trabajo externo. Costos de mantenimiento y garantía se dividen. Requiere acuerdo escrito.', bg: 'var(--purple-light)', accent: true, investment: 'Inversión Iker: ~$1,312–$2,389 USD / ₡596,960–₡1,086,895' },
      { title: 'Variante B · Iker compra, NID paga por uso', desc: 'Iker es el propietario. Le cobra a NID una tarifa por proyecto (~$300–400 / ₡136,500–182,000 por escaneo base). Eso cubre la amortización del equipo con proyectos de la empresa. Fuera de esos proyectos, el uso es completamente libre para proyectos personales y clientes externos.', bg: 'var(--purple-light)', accent: true, investment: 'Inversión Iker: costo total del equipo según canal' },
    ],
    tags: [
      { text: '✓ Libertad total para proyectos personales', variant: 'green' },
      { text: '✓ NID reduce su inversión inicial', variant: 'green' },
      { text: 'Requiere acuerdo claro de uso y responsabilidad', variant: 'gray' },
    ],
  },
]

export const financingProposal = {
  sectionNum: '11',
  sectionLabel: 'Propuesta de acuerdo NID · Iker',
  title: 'Iker asume la inversión ',
}

export const productCta = {
  name: 'Raven Max RTK',
  detail: '· 2 cámaras · módulo RTK incluido',
  vendor: '3DMakerPro',
  priceUsd: '$2,624 USD',
  priceCrc: '₡1,193,920',
  note: '(precio en oferta, junio 2026)',
  url: 'https://store.3dmakerpro.com/products/raven?variant=44701133013061',
}

export const footerNote = 'Precios Raven: store.3dmakerpro.com (junio 2026, en periodo de oferta). Tiendamia: carrito activo junio 2026. Precios SL9 y Cygnus Lite: cotizaciones SAT CR (94-2026-01/02-JBP) y Geotecnologias (284-26-01-VMT), ambas con IVA. TC ₡455/USD (Banco General, 18 jun. 2026). Costos de importación directa son estimativos; verificar con agente aduanero.'
