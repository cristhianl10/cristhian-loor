import { contenidoEs } from './es';
import { contenidoEn } from './en';

const contenidos = {
  es: contenidoEs,
  en: contenidoEn,
};

export function obtenerContenido(idioma = 'es') {
  return contenidos[idioma] ?? contenidos.es;
}

export const idiomasDisponibles = Object.keys(contenidos);
