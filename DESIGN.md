---
name: Portfolio profesional de Cristhian Loor
description: Cápsula obsidiana flotante con vidrio translúcido y un haz aurora que ordena evidencia técnica en modo oscuro y claro.
colors:
  background: "#000000"
  shell: "#0c0c0c"
  surface: "rgba(255, 255, 255, 0.03)"
  surface-strong: "rgba(255, 255, 255, 0.07)"
  line: "rgba(255, 255, 255, 0.1)"
  text: "#ebebeb"
  text-soft: "rgba(235, 235, 235, 0.6)"
  text-muted: "#7d8698"
  mint: "#84f5ce"
  blue: "#7db4ff"
  violet: "#b4a2ff"
  amber: "#ffc66d"
  light-page: "#0a0d16"
  light-shell: "#ffffff"
  light-surface: "rgba(255, 255, 255, 0.7)"
  light-text: "#101828"
  light-text-soft: "rgba(23, 37, 63, 0.84)"
  light-mint: "#08735a"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 8vw, 7rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.06em"
  heading:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.3rem + 2vw, 2.9rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.045em"
  body:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  xs: "16px"
  sm: "24px"
  surface: "32px"
  capsule: "40px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.background}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  glass-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.surface}"
    padding: "24px"
  navigation:
    backgroundColor: "rgba(12, 12, 12, 0.9)"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "6px 8px"
    height: "56px"
---

# Design System: Portfolio profesional de Cristhian Loor

## Overview

**Creative North Star: "Arquitectura tras el vidrio"**

El sistema presenta la estructura técnica de los proyectos como capas que se perciben detrás de superficies translúcidas. La implementación actual monta una cápsula flotante de 40px de radio sobre un lienzo negro; dentro, las tarjetas de vidrio, los bordes de un píxel y las etiquetas mono separan contexto, decisiones y enlaces.

Space Grotesk sostiene títulos y lectura; JetBrains Mono marca etiquetas, índices y metadatos. La paleta es obsidiana con menta como señal funcional, mientras azul y violeta aparecen en diagramas y en el haz aurora del fondo. El movimiento se concentra en abrir casos y confirmar acciones, no en una animación continua.

**Características clave:**

- Cápsula flotante negra en modo oscuro y blanca en modo claro, con 40px de radio.
- Haz aurora de gradientes cónicos detrás del contenido, con parallax de puntero.
- Superficies de vidrio de 32px, controles en píldora y etiquetas mono.
- Dos grupos de proyectos: aplicaciones fullstack y landings/frontend.
- Perfil fusionado: Sobre mí, UX Research y Formación en una sola sección.

## Colors

La interfaz usa un lienzo negro y una cápsula obsidiana (`#0c0c0c`) en modo oscuro; en modo claro invierte la cápsula a blanco sobre el mismo exterior oscuro. Las superficies translúcidas y las líneas de un píxel construyen profundidad sin depender de sombras generales.

- **Lienzo** (`#000000`): fondo exterior de la página y base del haz aurora.
- **Cápsula** (`#0c0c0c` / `#ffffff`): contenedor principal de la lectura.
- **Vidrio** (`rgba(255, 255, 255, 0.03)`) y **vidrio intenso** (`rgba(255, 255, 255, 0.07)`): tarjetas, navegación y controles.
- **Línea** (`rgba(255, 255, 255, 0.1)`): bordes, divisiones y límites de capas.
- **Texto principal** (`#ebebeb`), **suave** (`rgba(235, 235, 235, 0.6)`) y **tenue** (`#7d8698`): tres niveles de lectura.
- **Menta de señal** (`#84f5ce`): acciones, foco, verificación y énfasis técnico.
- **Azul** (`#7db4ff`) y **violeta** (`#b4a2ff`): diagramas de flujo, capas y variación ambiental del haz.
- **Ámbar** (`#ffc66d`): token reservado; no tiene superficie destacada en la interfaz actual.
- **Modo claro**: cápsula `#ffffff`, texto `#101828`, texto suave `rgba(23, 37, 63, 0.84)` y menta funcional `#08735a`.

**Regla de señal:** el color indica función o significado; no se distribuye como adorno uniforme.

## Typography

**Display Font:** Space Grotesk, con `system-ui` como respaldo.
**Body Font:** Space Grotesk, con `system-ui` como respaldo.
**Label/Mono Font:** JetBrains Mono, con `ui-monospace` como respaldo.

**Character:** Space Grotesk aporta una presencia geométrica y compacta; JetBrains Mono introduce una voz de sistema para etiquetas, índices y metadatos breves.

### Hierarchy

- **Display** (700, `clamp(3.4rem, 8vw, 7rem)`, `0.98`): nombre en la presentación; el apellido usa menta y un resplandor contenido.
- **Encabezado de sección** (700, `clamp(1.9rem, 1.3rem + 2vw, 2.9rem)`, `1.08`): títulos `h2` de Proyectos, Experiencia y Perfil.
- **Contacto** (700, `clamp(2.6rem, 5.2vw, 4.4rem)`, `0.92`): título de la sección de contacto.
- **Título de tarjeta** (700, `clamp(1.25rem, 1.05rem + 0.7vw, 1.5rem)`, `1.15`): nombres de proyecto, por debajo del encabezado de grupo para no competir con él.
- **Cuerpo** (400, `1rem`, `1.7`): descripciones y contenido explicativo, con medidas de 56–68 caracteres.
- **Etiquetas** (500, `10px`, `0.2em`): mayúsculas mono para categorías, índices y estados.

## Layout

La página vive dentro de una cápsula de hasta `1600px` con 24px de margen mínimo en escritorio; el `main` interior limita a `1240px` con 32px de margen mínimo. La presentación usa una retícula de 12 columnas con reparto 7/5 y pasa a una columna en `900px`; la maqueta se centra al apilarse.

Los proyectos se agrupan en aplicaciones fullstack y landings/frontend. Cada grupo usa una retícula de dos columnas con 12px de separación; al abrir una tarjeta, esta ocupa ambas columnas y muestra el caso completo. En `900px` la retícula pasa a una columna. El perfil combina tres bloques en escritorio, dos en `1180px` y uno en `760px`.

La navegación se compone de tres anclas —Proyectos, Experiencia y Perfil— más Contacto. Los puntos de adaptación principales son `900px`, `760px` y `480px`; en móvil el menú se convierte en panel sólido y los flujos se reorganizan sin desplazamiento horizontal.

## Elevation & Depth

La profundidad nace de la cápsula negra, el vidrio translúcido, los bordes de un píxel y el desenfoque de fondo. Las sombras son ambientales y suaves: la cápsula usa `0 30px 120px`, la navegación `0 12px 48px` y una tarjeta abierta `0 24px 80px`.

El haz aurora vive detrás del contenido en `z-index: -1`: un halo radial, tres haces cónicos con desenfoque y una capa de ruido. El parallax del puntero se actualiza con `requestAnimationFrame` y se desactiva con movimiento reducido. La luz nunca se coloca delante del texto.

## Shapes

La cápsula usa `40px`, las tarjetas `32px`, las superficies pequeñas `24px` y los fragmentos internos `16px`. Botones, chips, navegación, índices y estados usan la píldora `999px`. Los bordes de un píxel delimitan capas y los diagramas mantienen geometría recta dentro de contenedores redondeados.

## Components

### Buttons

- El botón principal es una píldora menta de 48px mínimo, texto oscuro y `padding: 16px 32px`; hover desplaza 2px hacia arriba y active reduce a `0.98`.
- Los secundarios usan vidrio translúcido y borde tenue; los botones de icono son círculos de 48px.
- El foco visible usa un anillo menta de 3px con separación de 4px.
- El pie es compacto: navegación, redes, correo y copyright; no repite el CTA de contacto.

### Chips

Las etiquetas tecnológicas son píldoras con fondo tenue, borde translúcido y tipografía mono de 10px. Clasifican tecnologías reales; no expresan dominio ni nivel.

### Project Cards

Cada proyecto es una tarjeta de vidrio de 32px con resumen, tipo, etiquetas y un botón de expansión. La retícula muestra dos tarjetas por fila y las iguala a la misma altura; las etiquetas y el CTA forman un pie anclado abajo para que “Ver proyecto” quede alineado entre ambas. Al abrir, la tarjeta ocupa el ancho completo y revela el caso con su arquitectura, destacados, roles y enlaces. El chevron rota 180° y el botón cambia a estado activo con menta.

### Navigation

La navegación es una píldora fija de 56px con logo, tres anclas, Contacto, cambio de idioma y cambio de tema. En móvil se convierte en un panel sólido; Escape lo cierra y devuelve el foco al botón.

### Profile

La sección Perfil fusiona tres bloques: Sobre mí, UX Research y Formación. Los casos UX y los hitos de formación usan `details/summary` con chevron rotado y foco visible.

### Aurora Background

El fondo combina un halo radial y tres haces cónicos con menta, azul y violeta, más una capa de ruido. Es puramente ambiental, no interactivo y se desactiva bajo `prefers-reduced-motion`.

### Icons

Los iconos provienen de Hugeicons y se renderizan con `strokeWidth` de 1.7. No se usan como decoración: acompañan acciones, estados y metadatos.

## Accessibility

- Objetivo WCAG 2.2 AA; axe sin violaciones en ES/EN, claro/oscuro y 390/768/1440 px, incluidos menú móvil y proyecto abierto.
- Controles táctiles de al menos 44 px; enlaces del pie con 44 px de alto y copyright de 11 px como mínimo.
- Navegación por teclado con skip link, foco visible, Escape en el menú móvil y `details/summary` nativos.
- Sin scroll horizontal entre 320 y 1920 px; el contenido se refluye a 640 px de ancho equivalente a 200 % de zoom.
- Movimiento reducido elimina parallax y animaciones; el contenido permanece visible.

## Do's and Don'ts

### Do:

- **Do** mantener los proyectos como evidencia dominante y explicar la arquitectura dentro de cada caso.
- **Do** conservar los dos grupos de proyectos y la retícula 2x2 con expansión a ancho completo.
- **Do** reservar menta para acciones, foco y señales técnicas verificables.
- **Do** respetar `prefers-reduced-motion` y conservar el contenido visible sin animación.
- **Do** usar píldoras para controles y etiquetas, y `32px` para superficies de contenido.

### Don't:

- **Don't** reintroducir el carrusel ni secciones separadas de Tecnologías, Metodología o Trayectoria.
- **Don't** duplicar el perfil: Sobre mí, UX y Formación comparten una sola sección.
- **Don't** usar gradientes en texto, barras de progreso, porcentajes o métricas personales.
- **Don't** convertir cada fragmento en una tarjeta independiente o anidar tarjetas sin función.
- **Don't** añadir copy promocional, funcionalidades, experiencia o reconocimientos no confirmados.
