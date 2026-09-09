# Cristhian Loor — Portfolio

Portafolio bilingüe de Cristhian Loor, estudiante de Ingeniería de Software en la Universidad de Guayaquil, orientado al desarrollo backend y full stack con Java/Spring Boot y C#/.NET.

Producción: https://cristhian-loor.vercel.app/

Presenta tres casos técnicos: iBatch Financial Operations, Banco Horizonte — Gestión de Reclamos y POS API. Incluye contexto, decisiones de arquitectura, lógica de negocio, tecnologías y evidencia disponible.

Incluye `/es` y `/en`, modo claro y oscuro, navegación responsive, menú móvil accesible, teclado, `prefers-reduced-motion`, SEO por idioma, JSON-LD, `robots.txt`, sitemap e imagen social PNG de 1200×630.

## Estructura y proyectos

La página se compone como navegación, hero, proyectos destacados, stack aplicado, metodología, trayectoria/formación, perfil, contacto y footer. Los casos viven en `app/frontend/src/content/es.js` y `en.js`; cada uno expone `enlaces.demo`, `enlaces.repositorio` y `enlaces.documentacion`, además de `media` para capturas reales.

- iBatch: [código](https://github.com/cristhianl10/iBatch), [demo](https://i-batch.vercel.app) y README técnico.
- Banco Horizonte: [código](https://github.com/cristhianl10/banco-horizonte-reclamos), [demo](https://banco-horizonte-reclamos.vercel.app) y documentación en `docs`.
- POS API: estructura lista; sus URLs permanecen `null` hasta confirmar un repositorio público y una demo real.

Las demos pendientes muestran un estado accesible y no generan enlaces rotos. Las capturas se incorporarán como WebP/AVIF cuando existan demos verificables.

## Stack

React 18, Vite, JavaScript, CSS con design tokens y Lucide React. El contenido está en `app/frontend/src/content` y los componentes en `app/frontend/src/components`.

## Desarrollo

```bash
cd app/frontend
npm ci
npm run dev
```

Scripts: `npm run dev`, `npm run build`, `npm run preview`, `npm run lint` y `npm test`.

Pruebas de diseño e interacción: `npm run test:browser` (requiere Chromium instalado mediante `npx playwright install chromium`). Comprueban contraste con axe, teclado, menú móvil, temas, idiomas, retícula y desbordamientos de 320 a 1920 px. Las capturas de cada sección se guardan en `app/frontend/test-results/`, excluido de Git.

## Despliegue y estado

Vercel construye `app/frontend` y publica `app/frontend/dist`. La calidad se valida con ESLint para React, tests de contenido y build en local y en GitHub Actions (`push` y `pull_request`).
