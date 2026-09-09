import test from 'node:test';
import assert from 'node:assert/strict';
import { contenidoEs } from '../src/content/es.js';
import { contenidoEn } from '../src/content/en.js';
for (const [locale, content] of [['es', contenidoEs], ['en', contenidoEn]]) {
  test(`${locale}: supported projects`, () => { assert.deepEqual(content.proyectos.map(({ id }) => id), ['ibatch', 'banco-horizonte', 'pos-api']); assert.equal(content.locale, locale); });
  test(`${locale}: hero CV`, () => { assert.equal(content.persona.cv, '/cv-cristhian-loor.pdf'); assert.ok(content.presentacion.acciones.cv); });
  test(`${locale}: four methodology steps`, () => assert.equal(content.metodologia.pasos.length, 4));
}
