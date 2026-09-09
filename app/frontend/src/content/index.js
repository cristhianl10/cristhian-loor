import { contenidoEs } from './es.js';
import { contenidoEn } from './en.js';

const contenidos = {
  es: contenidoEs,
  en: contenidoEn,
};

export function obtenerContenido(idioma = 'es') {
  return contenidos[idioma] ?? contenidos.es;
}

export const idiomasDisponibles = Object.keys(contenidos);
