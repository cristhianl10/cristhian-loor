import { test, expect } from '@playwright/test';

test.describe('Portfolio', () => {
  test('hero renders with name and CTA buttons', async ({ page }) => {
    await page.goto('/es');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Cristhian');
    await expect(page.getByRole('link', { name: 'Descargar CV' })).toHaveAttribute('href', '/cv-cristhian-loor.pdf');
    await expect(page.getByRole('link', { name: /GitHub/ }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /LinkedIn/ }).first()).toBeVisible();
  });

  test('CV downloads from /cv-cristhian-loor.pdf', async ({ request }) => {
    const respuesta = await request.get('/cv-cristhian-loor.pdf');
    expect(respuesta.ok()).toBeTruthy();
    expect(respuesta.headers()['content-type']).toContain('pdf');
  });

  test('projects appear right after hero', async ({ page }) => {
    await page.goto('/es');
    const proyectos = await page.locator('section#proyectos').count();
    expect(proyectos).toBe(1);
    const hero = await page.locator('section.hero').count();
    expect(hero).toBe(1);
  });

  test('project selection updates content', async ({ page }) => {
    await page.goto('/es');
    await expect(page.locator('#panel-proyecto')).toContainText('iBatch Financial Operations');
    await page.locator('.carrusel-proyectos').getByRole('tab', { name: /Banco Horizonte/ }).click();
    await expect(page.locator('#panel-proyecto')).toContainText('Banco Horizonte');
    await expect(page.locator('#panel-proyecto')).toContainText(/roles/i);
  });

  test('pending demos show accessible disabled state, no broken links', async ({ page }) => {
    await page.goto('/es');
    await page.locator('.carrusel-proyectos').getByRole('tab', { name: /POS API/ }).click();
    const deshabilitado = page.locator('#panel-proyecto [aria-disabled="true"]');
    await expect(deshabilitado.first()).toBeVisible();
    const enlaces = await page.locator('#panel-proyecto a[target="_blank"]').all();
    for (const enlace of enlaces) {
      const href = await enlace.getAttribute('href');
      expect(href).toBeTruthy();
      expect(await page.request.get(href).then((r) => r.ok())).not.toBeNull();
    }
  });

  test('route /es and /en render correct language', async ({ page }) => {
    await page.goto('/es');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Cristhian');
    await expect(page.getByRole('link', { name: 'Descargar CV' }).first()).toBeVisible();

    await page.goto('/en');
    await expect(page.getByRole('link', { name: 'Download CV' }).first()).toBeVisible();
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('language switch works without mixing content', async ({ page }) => {
    await page.goto('/es');
    const cambiarIdioma = page.getByRole('button', { name: /Cambiar el sitio a inglés/ });
    await cambiarIdioma.click();
    await expect(page).toHaveURL(/\/en/);
    await expect(page.getByRole('link', { name: 'Download CV' }).first()).toBeVisible();
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    const esTexto = await page.locator('body').innerText();
    expect(esTexto).not.toContain('Descargar CV');
  });

  test('theme toggle switches data-theme', async ({ page }) => {
    await page.goto('/es');
    const temaInicial = await page.locator('html').getAttribute('data-theme');
    const botonTema = page.getByRole('button', { name: /Activar modo/ });
    await botonTema.click();
    const temaFinal = await page.locator('html').getAttribute('data-theme');
    expect(temaFinal).not.toBe(temaInicial);
  });

  test('keyboard navigation between projects', async ({ page }) => {
    await page.goto('/es');
    const primerTab = page.locator('.carrusel-proyectos').getByRole('tab', { name: /iBatch Financial Operations/ });
    await primerTab.focus();
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('#panel-proyecto')).toContainText('Banco Horizonte');
  });

  test('mobile menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 420, height: 800 });
    await page.goto('/es');
    const botonMenu = page.getByRole('button', { name: 'Abrir menú' });
    await botonMenu.click();
    const cerrarMenu = page.getByRole('button', { name: 'Cerrar menú' });
    await expect(cerrarMenu).toBeVisible();
    await cerrarMenu.click();
    await expect(page.getByRole('button', { name: 'Abrir menú' })).toBeVisible();
  });

  test('no mixed languages in english view', async ({ page }) => {
    await page.goto('/en');
    const texto = await page.locator('body').innerText();
    const terminosEspanol = ['Descargar CV', 'Ver proyectos', 'Ver código', 'Ver demo', 'Cómo construyo', 'Sobre mí', 'Trayectoria'];
    for (const termino of terminosEspanol) {
      expect(texto).not.toContain(termino);
    }
  });

  test('footer links and contact section present', async ({ page }) => {
    await page.goto('/es');
    await expect(page.locator('section#contacto')).toContainText('Contacto profesional');
    await expect(page.locator('footer')).toBeVisible();
  });
});