---
name: Portfolio profesional de Cristhian Loor
description: Paneles de vidrio oscuro que hacen visible la estructura técnica de proyectos reales.
colors:
  background: "#060914"
  surface: "rgba(18, 24, 45, 0.58)"
  surface-strong: "rgba(24, 31, 56, 0.78)"
  line: "rgba(214, 225, 255, 0.16)"
  text: "#f7f8ff"
  text-soft: "#c5cee8"
  text-muted: "#9da9c9"
  mint: "#84f5ce"
  violet: "#a994ff"
  blue: "#69a7ff"
  amber: "#ffc66d"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3.25rem, 6.7vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.038em"
  heading:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.45rem, 5vw, 4.7rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.038em"
  body:
    fontFamily: "Spline Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  chip: "8px"
  control: "12px"
  surface: "16px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "34px"
components:
  button-primary:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.background}"
    rounded: "{rounded.control}"
    padding: "0 17px"
    height: "46px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "0 17px"
    height: "46px"
  glass-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.surface}"
    padding: "34px"
---

# Design System: Portfolio profesional de Cristhian Loor

## Overview

**Creative North Star: "Arquitectura tras el vidrio"**

El sistema traduce la separación de capas del software a paneles oscuros y translúcidos. Cada superficie contiene una unidad de información clara; las líneas finas hacen visible la estructura y los acentos iluminan únicamente jerarquía, estado o reconocimiento.

La experiencia es técnica sin recurrir a una estética de terminal. El contenido mantiene la autoridad: los proyectos ocupan superficies amplias, las relaciones se explican con diagramas geométricos y el vidrio aporta profundidad funcional.

**Características clave:**

- Fondo azul casi negro con luz ambiental azul, verde y violeta.
- Paneles translúcidos de 16px de radio y divisiones internas de un píxel.
- Menta para acciones y énfasis técnico; ámbar reservado al reconocimiento.
- Tipografía Manrope para títulos y Spline Sans para lectura prolongada.

## Colors

La paleta combina una base nocturna fría con acentos luminosos de uso restringido.

- **Fondo profundo** (`#060914`): lienzo general y contraste principal.
- **Vidrio** (`rgba(18, 24, 45, 0.58)`): navegación, tarjetas y grupos de contenido.
- **Texto principal** (`#f7f8ff`), **suave** (`#c5cee8`) y **tenue** (`#9da9c9`): tres niveles legibles de jerarquía.
- **Menta de señal** (`#84f5ce`): acciones, foco, verificación y especialidad principal.
- **Violeta** (`#a994ff`) y **azul** (`#69a7ff`): relaciones de arquitectura y variación ambiental.
- **Ámbar de logro** (`#ffc66d`): exclusivo para el segundo lugar en la Hackathon.

**Regla de señal:** el color indica función o significado; no se distribuye como adorno uniforme.

## Typography

**Display Font:** Manrope, con `sans-serif` como respaldo.  
**Body Font:** Spline Sans, con `system-ui` como respaldo.

Manrope da presencia compacta a la presentación y a los nombres de proyecto. Spline Sans aporta una voz técnica y distintiva mientras mantiene claras las descripciones extensas.

- **Presentación:** `clamp(3.25rem, 6.7vw, 6rem)`, peso visual fuerte, interlineado `0.96`.
- **Encabezados de sección:** `clamp(2.45rem, 5vw, 4.7rem)`, interlineado `1.02`.
- **Cuerpo:** `1rem`, interlineado aproximado de `1.7–1.8`, medida máxima de 65–69 caracteres.
- **Etiquetas:** `0.68–0.85rem`; se mantiene la capitalización natural del español.

## Layout

El contenedor principal mide hasta `1180px` con 24px de margen mínimo en escritorio y 14px en móvil. La presentación usa dos columnas y pasa a una columna bajo `960px`. Los casos de proyecto alternan información y diagrama en dos columnas, pero se apilan completamente en pantallas estrechas.

Los puntos de adaptación principales son `960px`, `760px` y `480px`. En móvil, la navegación se convierte en menú desplegable, las matrices pasan a una columna y los flujos técnicos se reorganizan sin producir desplazamiento horizontal.

## Elevation & Depth

La profundidad surge de transparencia, desenfoque y contraste tonal, no de sombras generales. Las superficies usan `backdrop-filter` en escritorio; navegación y menú móvil emplean fondo sólido para evitar artefactos de composición. Los orbes difusos están detrás del contenido y nunca compiten con el texto.

## Shapes

Las superficies principales usan radio de `16px`, los controles `12px`, las etiquetas `8px` y las cápsulas solo se reservan para estados breves. Los bordes de un píxel delimitan capas; las divisiones internas mantienen el mismo grosor. Los diagramas usan geometría recta dentro de contenedores redondeados.

## Components

### Buttons

- El botón principal usa fondo menta, texto oscuro, 46px de altura y radio de 12px.
- Los secundarios usan vidrio oscuro y borde tenue.
- Hover desplaza 2px hacia arriba; foco muestra un anillo menta de 3px con separación de 4px.

### Chips

Las etiquetas tecnológicas tienen radio de 8px, relleno tenue y borde translúcido. No representan dominio ni nivel; solo clasifican tecnologías reales.

### Cards / Containers

Los casos de proyecto son paneles de ancho completo con divisiones internas. La jerarquía nace del tamaño de cada zona, no de una retícula de tarjetas iguales. El panel de reconocimiento cambia a una superficie ámbar contenida.

### Navigation

La navegación es una barra de vidrio redondeada y fija al desplazarse. En móvil se convierte en un panel sólido desplegable; Escape lo cierra y devuelve el foco al botón.

## Do's and Don'ts

### Do:

- **Do** mantener los proyectos como superficies dominantes y explicar la arquitectura dentro de ellos.
- **Do** reservar menta para acciones, foco y señales técnicas verificables.
- **Do** respetar `prefers-reduced-motion` y conservar el contenido visible sin animación.
- **Do** usar identificadores de contenido neutrales para permitir una futura versión independiente en inglés.

### Don't:

- **Don't** usar gradientes en texto, barras de progreso, porcentajes o métricas personales.
- **Don't** convertir cada fragmento en una tarjeta independiente o anidar tarjetas sin función.
- **Don't** añadir copy promocional, funcionalidades, experiencia o reconocimientos no confirmados.
- **Don't** aplicar desenfoque decorativo cuando no exista una superficie real detrás que deba percibirse.
