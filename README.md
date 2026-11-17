# Cristhian Loor — Portfolio

Portafolio bilingüe de Cristhian Loor, desarrollador backend con experiencia en Global Hitss Ecuador. Enfocado en Java/Spring Boot y C#/.NET, con APIs REST, bases de datos y CI/CD. Complementa el backend con UX Research.

Producción: https://cristhian-loor.vercel.app/

Presenta cuatro proyectos: PayFlow, iBatch Financial Operations, Banco Horizonte — Gestión de Reclamos y Noche Cero. Incluye contexto, decisiones de arquitectura, lógica de negocio, tecnologías y evidencia disponible. Además incluye experiencia profesional, un grupo de proyectos backend, un perfil fusionado con Sobre mí, UX Research y Formación, y contacto.

Incluye `/es` y `/en`, modo claro y oscuro, navegación responsive, menú móvil accesible, teclado, `prefers-reduced-motion`, SEO por idioma, JSON-LD, `robots.txt`, sitemap e imagen social PNG de 1200×630.

## Estructura y proyectos

La página se compone como navegación con tres anclas —Proyectos, Experiencia y Perfil— más Contacto, hero, proyectos backend, experiencia, perfil fusionado y contacto. Los proyectos usan una retícula 2x2 con tarjetas expandibles; la tarjeta abierta ocupa el ancho completo. Los casos viven en `app/frontend/src/content/es.js` y `en.js`; cada uno expone `enlaces.demo`, `enlaces.api`, `enlaces.repositorio` y `enlaces.documentacion`, además de `media` para capturas reales.

- PayFlow: [código](https://github.com/cristhianl10/payflow), [demo](https://payflow-alpha-brown.vercel.app) y [API](https://payflow-backend-p76b.onrender.com).
- iBatch: [código](https://github.com/cristhianl10/iBatch), [demo](https://i-batch.vercel.app) y README técnico.
- Banco Horizonte: [código](https://github.com/cristhianl10/banco-horizonte-reclamos), [demo](https://banco-horizonte-reclamos.vercel.app) y documentación en `docs`.
- Noche Cero: [código](https://github.com/Freddys21333/proxyendpoint-Noche-Cero); su demo permanece `null` hasta confirmar una URL pública.

Las demos pendientes muestran un estado accesible y no generan enlaces rotos. Las capturas se incorporarán como WebP/AVIF cuando existan demos verificables.

## Stack del sitio

El sitio se implementa con React 18, Vite, JavaScript, CSS con design tokens, Motion para animaciones, Hugeicons para iconos y un haz aurora CSS de fondo. El contenido está en `app/frontend/src/content` y los componentes en `app/frontend/src/components`.

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
