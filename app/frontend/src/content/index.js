import { contenidoEs } from './es';

const contenidos = {
  es: contenidoEs,
};

export function obtenerContenido(idioma = 'es') {
  return contenidos[idioma] ?? contenidos.es;
}

export const idiomasDisponibles = Object.keys(contenidos);
