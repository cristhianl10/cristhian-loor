import test from 'node:test';
import assert from 'node:assert/strict';
import { contenidoEs } from '../src/content/es.js';
import { contenidoEn } from '../src/content/en.js';
import { obtenerContenido, idiomasDisponibles } from '../src/content/index.js';

for (const [locale, content] of [['es', contenidoEs], ['en', contenidoEn]]) {
  test(`${locale}: supported projects`, () => {
    assert.deepEqual(content.proyectos.map(({ id }) => id), ['ibatch', 'banco-horizonte', 'pos-api']);
    assert.equal(content.locale, locale);
  });

  test(`${locale}: hero CV`, () => {
    assert.equal(content.persona.cv, '/cv-cristhian-loor.pdf');
    assert.ok(content.presentacion.acciones.cv);
    assert.ok(content.presentacion.acciones.proyectos);
    assert.ok(content.presentacion.acciones.github);
    assert.ok(content.presentacion.acciones.linkedin);
  });

  test(`${locale}: four methodology steps`, () => assert.equal(content.metodologia.pasos.length, 4));

  test(`${locale}: metadata exists`, () => {
    assert.ok(content.metadata.title);
    assert.ok(content.metadata.description);
    assert.ok(content.metadata.url);
    assert.match(content.metadata.image, /social-card\.png$/);
  });

  test(`${locale}: section order nav`, () => {
    const destinos = content.navegacion.map(({ destino }) => destino);
    assert.ok(destinos.includes('#proyectos'));
    assert.ok(destinos.includes('#tecnologias'));
    assert.ok(destinos.includes('#metodologia'));
    assert.ok(destinos.includes('#trayectoria'));
  });

  test(`${locale}: projects support demo and repo links with null fallback`, () => {
    for (const proyecto of content.proyectos) {
      assert.ok(proyecto.enlaces);
      assert.ok('repositorio' in proyecto.enlaces);
      assert.ok('demo' in proyecto.enlaces);
      assert.ok('documentacion' in proyecto.enlaces);
      assert.ok(proyecto.media);
      assert.ok('portada' in proyecto.media);
      assert.ok(Array.isArray(proyecto.media.capturas));
      assert.equal(typeof proyecto.media.alt, 'string');
      assert.ok(proyecto.media.alt.length > 0);
    }
  });

  test(`${locale}: iBatch has public repository`, () => {
    const ibatch = content.proyectos.find(({ id }) => id === 'ibatch');
    assert.match(ibatch.enlaces.repositorio, /^https:\/\//);
  });

  test(`${locale}: no arbitrary metric bars`, () => {
    assert.ok(!content.sistema, 'Sistema block must be removed');
  });

  test(`${locale}: stack includes 6 categories`, () => {
    const categorias = content.tecnologias.categorias;
    assert.equal(categorias.length, 6);
    const ids = categorias.map(({ id }) => id);
    assert.deepEqual(ids, ['backend', 'frontend', 'datos', 'arquitectura', 'testing', 'herramientas']);
    assert.ok(!categorias.some((c) => c.id === 'testing' && c.items.includes('Postman')), 'Postman is not a unit-testing framework');
  });

  test(`${locale}: trayectoria exists`, () => {
    assert.ok(content.trayectoria);
    assert.ok(content.trayectoria.formacion);
    assert.ok(content.trayectoria.formacion.institucion);
    assert.ok(Array.isArray(content.trayectoria.hitos));
    assert.ok(content.trayectoria.idiomas.lista.length >= 2);
  });

  test(`${locale}: about does not repeat full stack`, () => {
    const texto = content.sobreMi.parrafos.join(' ');
    assert.ok(!texto.includes('Spring Boot'), 'About should not enumerate the whole stack');
    assert.ok(!texto.includes('Angular'), 'About should not enumerate the whole stack');
  });
}

test('obtenerContenido returns content for available locales', () => {
  assert.deepEqual(idiomasDisponibles, ['es', 'en']);
  assert.equal(obtenerContenido('es').locale, 'es');
  assert.equal(obtenerContenido('en').locale, 'en');
  assert.equal(obtenerContenido('xx').locale, 'es');
});

test('es uses "es_ES/2.º" conventions; en uses "en_US/2nd"', () => {
  assert.equal(contenidoEs.metadata.url, 'https://cristhian-loor.vercel.app/');
  const ibatchEs = contenidoEs.proyectos.find(({ id }) => id === 'ibatch');
  assert.match(ibatchEs.reconocimiento, /Segundo lugar/);
  const ibatchEn = contenidoEn.proyectos.find(({ id }) => id === 'ibatch');
  assert.match(ibatchEn.reconocimiento, /2nd/);
  assert.ok(!/2\.º/.test(ibatchEn.reconocimiento), 'English recognition must not use Spanish "2.º"');
});