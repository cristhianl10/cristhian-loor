# Contracts - Cristhian Loor Portfolio

## Estado actual

### Frontend
- SPA bilingüe (es/en) con React 18, Vite, CSS con design tokens y Lucide React.
- Secciones: Hero, Proyectos, Experiencia, Tecnologías, Metodología, UX Research, Formación, Perfil, Contacto y Footer.
- Modo claro/oscuro persistente, navegación responsive, teclado, `prefers-reduced-motion`, SEO por idioma y JSON-LD.

### Contenido centralizado
Archivos: `app/frontend/src/content/es.js` y `app/frontend/src/content/en.js`.

```javascript
{
  persona: { nombreCompleto, nombreProfesional, rol, ubicacion, correo, github, linkedin, cv, idiomas },
  proyectos: [{ id, indice, nombre, tipo, descripcion, tecnologias[], destacados[], visual, enlaces, media }],
  experiencia: { puestos: [{ empresa, rol, periodo, resumen, puntos[], tecnologias[] }] },
  ux: { casos: [{ nombre, tipo, puntos[], tecnologias[] }] },
  tecnologias: { categorias[], porProyecto[] },
  formacion: { programa, institucion, periodo, estado, hitos[] },
  contacto: { etiqueta, titulo, descripcion }
}
```

### Proyectos
PayFlow, iBatch Financial Operations, Banco Horizonte — Gestión de Reclamos y Noche Cero.

### Validación
`npm run lint`, `npm test` (contenido) y `npm run build`. `npm run test:browser` cubre contraste con axe, teclado, menú móvil, temas, idiomas, retícula y desbordamientos de 320 a 1920 px.
