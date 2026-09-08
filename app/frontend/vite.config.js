import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { contenidoEs } from './src/content/es.js';

const escaparHtml = (valor) =>
  valor
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const metadataDesdeContenido = {
  name: 'metadata-desde-contenido',
  enforce: 'pre',
  transformIndexHtml(html) {
    const { metadata } = contenidoEs;
    return html
      .replaceAll('__PORTFOLIO_TITLE__', escaparHtml(metadata.title))
      .replaceAll('__PORTFOLIO_DESCRIPTION__', escaparHtml(metadata.description))
      .replaceAll('__PORTFOLIO_AUTHOR__', escaparHtml(metadata.author))
      .replaceAll('__PORTFOLIO_URL__', escaparHtml(metadata.url));
  },
};

export default defineConfig({
  plugins: [metadataDesdeContenido, react()],
});
