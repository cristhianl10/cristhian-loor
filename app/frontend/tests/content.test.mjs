import test from 'node:test';
import assert from 'node:assert/strict';
import { contenidoEs } from '../src/content/es.js';
import { contenidoEn } from '../src/content/en.js';

for (const [locale, content] of [['es', contenidoEs], ['en', contenidoEn]]) {
  test(`${locale}: supported projects`, () => {
    assert.deepEqual(content.proyectos.map(({ id }) => id), ['payflow', 'ibatch', 'banco-horizonte', 'noche-cero']);
    assert.equal(content.locale, locale);
  });
  test(`${locale}: hero CV`, () => {
    assert.equal(content.persona.cv, '/cv-cristhian-loor.pdf');
    assert.ok(content.presentacion.acciones.cv);
  });
  test(`${locale}: contact email matches CV`, () => assert.equal(content.persona.correo, 'cristhian.loor05@outlook.com'));
  test(`${locale}: backend positioning and progressive disclosure data`, () => {
    assert.ok(content.seccionProyectos.grupos.backend.titulo);
    assert.equal(content.seccionProyectos.grupos.frontend, undefined);
    assert.match(content.persona.rol, /Backend/);
    assert.ok(!/junior|full ?stack/i.test(content.persona.rol));
    assert.ok(!/Angular|React|JavaScript|TypeScript/i.test(content.presentacion.descripcion));
    assert.ok(content.proyectos.every(({ resumen, tecnologias }) => resumen && tecnologias.length));
  });
  test(`${locale}: profile merges UX and education`, () => {
    assert.equal(content.ux.casos.length, 2);
    assert.ok(content.formacion.programa);
    assert.ok(content.formacion.hitosTitulo);
    assert.ok(content.navegacion.some(({ destino }) => destino === '#perfil'));
  });
  test(`${locale}: redundant sections are gone`, () => {
    assert.equal(content.tecnologias, undefined);
    assert.equal(content.metodologia, undefined);
    assert.ok(!content.navegacion.some(({ destino }) => destino === '#tecnologias' || destino === '#formacion'));
  });
}
