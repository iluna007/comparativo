# Comparativo LiDAR · Natural Instinct Designs

Single-page scroll app con **Vite + React** que presenta el análisis comparativo de escáneres 3D LiDAR para digitalización as-built en proyectos de interiorismo.

Evalúa **Raven Standard**, **Raven Max RTK**, **SatLab SL9 SLAM RTK** y **Cygnus Lite**, con precios en USD/CRC, opciones de importación a Costa Rica, flujo de trabajo y modelos de negocio.

## Stack

- [Vite](https://vite.dev/) 8
- [React](https://react.dev/) 19 (JavaScript)
- CSS vanilla (sin framework UI)

## Requisitos

- Node.js 18+
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Producción

```bash
npm run build
npm run preview
```

El build queda en `dist/`. Listo para desplegar en Netlify, Vercel, GitHub Pages (con base path configurado si aplica), etc.

## Estructura del proyecto

```
src/
├── App.jsx                 # Layout y secciones
├── data/
│   ├── content.js          # Textos, precios, tablas, casos de uso
│   └── links.js            # URLs externas (Rhino, SketchUp, fabricantes…)
├── components/             # Una sección por componente
├── hooks/useScrollReveal.js
└── styles/index.css
```

## Editar contenido

La mayor parte del copy y los datos viven en **`src/data/content.js`**:

| Sección | Export |
|---------|--------|
| Metadatos (título, TC) | `meta` |
| Navegación lateral | `navSections` |
| Casos de uso oficina / personal | `officeUseCases`, `personalUseCases` |
| Productos y comparativa Raven | `products`, `ravenCompare`, `compareTable` |
| Precios | `priceCards` |
| Importación | `importOptions` |
| ROI, riesgos, negocio | `feeItems`, `risks`, `businessModels` |

Enlaces externos: **`src/data/links.js`**.

## Características de UI

- Navegación lateral (desktop) y menú sticky (móvil)
- Barra de progreso de scroll
- Animaciones de entrada/salida al hacer scroll
- Diseño responsive

## Licencia

Proyecto privado · Natural Instinct Designs.
